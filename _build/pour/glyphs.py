# The words the syrup pours into, as DynaPuff draws them at weight 600: every letter's outline (SVG path, font units,
# y down from the baseline), where it sits in its word, and, for the first letter, where a drop can hang (drips) and
# where the falling stream lands. Then a proof: the paths drawn from the JSON, and the same words set by Chrome with
# the real font, our outline on top, and how far the two are apart.
#   _dev/venv/bin/python -I _build/pour/glyphs.py   → _build/pour/glyphs.json, _build/pour/glyphs-proof.png
#   (needs fonttools + brotli in the venv, the site served at http://localhost:5191/ and Playwright from onyx-site)
import json, pathlib, subprocess, tempfile, unicodedata
import cv2, numpy as np
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.basePen import BasePen
from scipy.signal import find_peaks

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
FONT = ROOT / 'assets' / 'fonts' / 'dynapuff-latin.woff2'
SITE = 'http://localhost:5191'
PLAYWRIGHT_FROM = '/Users/justinmeissner/ClaudeC/onyx-site/package.json'
WORDS = ['Was', 'Name', 'Geschmack', 'Koffein', 'Quoi', 'Nom', 'Goût', 'Caféine', 'What', 'Taste', 'Caffeine']
WGHT, WDTH = 600, 100
PX, LH = 120, 1.12                       # the proof's type: font: 600 120px/1.12 DynaPuff
BROWN, BEIGE = '#3A1F12', '#EADBC4'
PROMINENCE = 30                          # font units a foot (or a top) must stand out from its neighbours to count

font = instancer.instantiateVariableFont(TTFont(FONT), {'wght': WGHT, 'wdth': WDTH})
UPM = font['head'].unitsPerEm
glyphs = font.getGlyphSet()
# Chrome advances by the unrounded widths (the HVAR deltas are fractional); the instance rounds them to whole units,
# which drifts by up to 2 units over a word. Its outlines are rounded too, but by half a unit at most: nothing to see.
widths = TTFont(FONT).getGlyphSet(location={'wght': WGHT, 'wdth': WDTH})
cmap = font.getBestCmap()
hhea, os2 = font['hhea'], font['OS/2']
USE_TYPO = bool(os2.fsSelection & (1 << 7))
# hhea and typo agree (and USE_TYPO_METRICS keeps Windows off the win values), so every browser gets one line box
ASC, DESC = hhea.ascent, -hhea.descent


# --- shaping: only what HarfBuzz would do to these words (GSUB ccmp/liga/calt, GPOS kern); the rest stops us loudly
def lookups(table, tags):
    t = font[table].table
    script = next(s.Script for s in t.ScriptList.ScriptRecord if s.ScriptTag == 'latn')
    idx = set()
    for k in script.DefaultLangSys.FeatureIndex:
        fr = t.FeatureList.FeatureRecord[k]
        if fr.FeatureTag in tags: idx.update(fr.Feature.LookupListIndex)
    return [(i, t.LookupList.Lookup[i]) for i in sorted(idx)]


def gsub_one(lk, buf, i):
    """Apply one GSUB lookup at buf[i]; returns how many glyphs it consumed (0 = no match)."""
    for st in lk.SubTable:
        if lk.LookupType == 1:
            if buf[i][0] in st.mapping: buf[i] = (st.mapping[buf[i][0]], buf[i][1]); return 1
        elif lk.LookupType == 4:
            for lig in st.ligatures.get(buf[i][0], []):
                n = len(lig.Component)
                if [g for g, _ in buf[i + 1:i + 1 + n]] == lig.Component:
                    buf[i:i + 1 + n] = [(lig.LigGlyph, ''.join(c for _, c in buf[i:i + 1 + n]))]
                    return 1
        elif lk.LookupType == 6 and st.Format == 3:
            back, inp, ahead = st.BacktrackCoverage, st.InputCoverage, st.LookAheadCoverage
            if i < len(back) or i + len(inp) + len(ahead) > len(buf): continue
            ok = all(buf[i - 1 - k][0] in c.glyphs for k, c in enumerate(back)) \
                and all(buf[i + k][0] in c.glyphs for k, c in enumerate(inp)) \
                and all(buf[i + len(inp) + k][0] in c.glyphs for k, c in enumerate(ahead))
            if ok:
                for r in st.SubstLookupRecord or []:
                    gsub_one(font['GSUB'].table.LookupList.Lookup[r.LookupListIndex], buf, i + r.SequenceIndex)
                return len(inp)
        else:
            raise NotImplementedError(f'GSUB lookup type {lk.LookupType} format {getattr(st, "Format", "?")}')
    return 0


def pair_kern(lk, a, b):
    """XAdvance a GPOS pair lookup adds to glyph a before glyph b, or None if no subtable claims the pair."""
    for st in lk.SubTable:
        if lk.LookupType != 2 or st.ValueFormat2 or st.ValueFormat1 & ~4:
            raise NotImplementedError('only pair kerning by x-advance is handled')
        if a not in st.Coverage.glyphs: continue
        if st.Format == 1:
            ps = st.PairSet[st.Coverage.glyphs.index(a)]
            for r in ps.PairValueRecord:
                if r.SecondGlyph == b: return r.Value1.XAdvance or 0
        else:   # a class pair claims the pair even when its value is zero, as in HarfBuzz
            c1, c2 = st.ClassDef1.classDefs.get(a, 0), st.ClassDef2.classDefs.get(b, 0)
            return st.Class1Record[c1].Class2Record[c2].Value1.XAdvance or 0
    return None


def shape(word):
    buf = [(cmap[ord(c)], c) for c in word]
    for _, lk in lookups('GSUB', {'ccmp', 'locl', 'liga', 'calt'}):
        i = 0
        while i < len(buf): i += gsub_one(lk, buf, i) or 1
    kern = [0] * len(buf)
    for _, lk in lookups('GPOS', {'kern'}):
        for i in range(len(buf) - 1):
            v = pair_kern(lk, buf[i][0], buf[i + 1][0])
            if v: kern[i] += v
    return [(g, c, widths[g].width, k) for (g, c), k in zip(buf, kern)]


# --- outlines
def num(v):
    t = ('%.2f' % v).rstrip('0').rstrip('.')
    return '0' if t == '-0' else t


def svg_d(name):
    pen = SVGPathPen(glyphs, ntos=num)
    glyphs[name].draw(TransformPen(pen, (1, 0, 0, -1, 0, 0)))     # y down, baseline at 0
    return pen.getCommands()


def bbox(name):
    pen = BoundsPen(glyphs); glyphs[name].draw(pen)
    x0, y0, x1, y1 = pen.bounds
    return [x0, -y1, x1, -y0]


class Flat(BasePen):
    """The outline as polygons (y up): quadratic curves cut into short straight pieces."""
    def __init__(self, gs, n=24):
        super().__init__(gs); self.polys, self.n = [], n
    def _moveTo(self, p): self.polys.append([p])
    def _lineTo(self, p): self.polys[-1].append(p)
    def _qCurveToOne(self, c, p):
        p0 = np.array(self.polys[-1][-1], float); t = np.linspace(0, 1, self.n + 1)[1:, None]
        self.polys[-1].extend(map(tuple, (1 - t) ** 2 * p0 + 2 * (1 - t) * t * np.array(c) + t ** 2 * np.array(p)))
    def _curveToOne(self, c1, c2, p):
        p0 = np.array(self.polys[-1][-1], float); t = np.linspace(0, 1, self.n + 1)[1:, None]
        self.polys[-1].extend(map(tuple, (1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * np.array(c1)
                                  + 3 * (1 - t) * t ** 2 * np.array(c2) + t ** 3 * np.array(p)))
    def _closePath(self): pass


def silhouette(name):
    """For every font unit across the glyph: its lowest and highest outline crossing (y up), and the edge it lies on.
    The lowest crossing is always where the ink begins (below it the winding is zero), so overlapping contours are fine."""
    pen = Flat(glyphs); glyphs[name].draw(pen)
    e = np.concatenate([np.stack([np.array(p), np.roll(np.array(p), -1, 0)], 1) for p in pen.polys])   # (E, 2, 2)
    x0, x1 = e[:, :, 0].min(), e[:, :, 0].max()
    xs = np.arange(np.ceil(x0) + .5, x1, 1.0)
    ax, ay, bx, by = e[:, 0, 0], e[:, 0, 1], e[:, 1, 0], e[:, 1, 1]
    hit = (np.minimum(ax, bx)[None] <= xs[:, None]) & (xs[:, None] < np.maximum(ax, bx)[None])
    with np.errstate(divide='ignore', invalid='ignore'):
        y = ay[None] + (xs[:, None] - ax[None]) * (by - ay)[None] / (bx - ax)[None]
    lo, hi = np.where(hit, y, np.inf), np.where(hit, y, -np.inf)
    return xs, lo.min(1), hi.max(1), lo.argmin(1), hi.argmax(1), e


def tangent(edge, outward_down):
    """Unit tangent (pointing right) and outward normal at an edge, both in y-down coordinates."""
    d = edge[1] - edge[0]; d = d / np.hypot(*d)
    if d[0] < 0: d = -d
    t = np.array([d[0], -d[1]])                         # flip to y down
    n = np.array([-t[1], t[0]])                          # rotated a quarter turn: down for a rightward tangent
    if (n[1] > 0) != outward_down: n = -n
    return [round(float(t[0]), 4), round(float(t[1]), 4)], [round(float(n[0]), 4), round(float(n[1]), 4)]


def drips_and_landing(name):
    xs, lo, hi, ilo, ihi, e = silhouette(name)
    ok = np.isfinite(lo)
    xs, lo, hi, ilo, ihi = xs[ok], lo[ok], hi[ok], ilo[ok], ihi[ok]
    height = hi.max() - lo.min()
    # drips: the lowest points of the bottom outline seen from below (feet, bottom curves), lowest-standing first
    pk, pr = find_peaks(-lo, prominence=PROMINENCE, plateau_size=1)
    keep = [k for k in np.argsort(-pr['prominences']) if lo[pk[k]] <= lo.min() + .22 * height][:3]
    drips = []
    for k in sorted(keep, key=lambda k: pk[k]):
        j = pk[k]; t, n = tangent(e[ilo[j]], True)
        drips.append({'x': round(float(xs[j]), 1), 'y': round(float(-lo[j]), 1), 'tangent': t, 'normal': n,
                      'prominence': round(float(pr['prominences'][k]), 1)})
    if not drips:      # a single smooth bottom: hang it from the lowest point
        j = int(np.argmin(lo)); t, n = tangent(e[ilo[j]], True)
        drips.append({'x': round(float(xs[j]), 1), 'y': round(float(-lo[j]), 1), 'tangent': t, 'normal': n, 'prominence': None})
    # landing: the first top (from the left) of the upper outline, where the left stroke ends; the apex for round letters
    pk, _ = find_peaks(hi, prominence=PROMINENCE, plateau_size=1)
    left = [j for j in pk if xs[j] <= xs[0] + .6 * (xs[-1] - xs[0])]
    j = left[0] if left else int(np.argmax(hi))
    t, n = tangent(e[ihi[j]], False)
    landing = {'x': round(float(xs[j]), 1), 'y': round(float(-hi[j]), 1), 'tangent': t, 'normal': n}
    return drips, landing


# --- the words
words = {}
for w in WORDS:
    w = unicodedata.normalize('NFC', w)
    x, letters = 0, []
    for g, c, adv, kern in shape(w):
        letters.append({'char': c, 'glyph': g, 'x': round(x, 3), 'advance': round(adv, 3), 'kern': kern, 'd': svg_d(g), 'bbox': bbox(g)})
        x += adv + kern
    drips, landing = drips_and_landing(letters[0]['glyph'])
    letters[0]['drips'], letters[0]['landing'] = drips, landing
    words[w] = {'advance': round(x, 3), 'letters': letters}


def baseline(top, size, lh):
    """Where Chrome lays out the baseline of a single line (CSS px; top = the element's content-box top): Blink rounds
    ascent and descent to whole pixels and floors the half-leading to a whole pixel. On the Mac this is in CSS px at
    any devicePixelRatio (measured at 1 and 2, see the probes)."""
    a, d = np.floor(ASC * size / UPM + .5), np.floor(DESC * size / UPM + .5)     # Skia rounds halves up
    return top + np.floor((lh - (a + d)) / 2) + a


def painted(top, size, lh):
    """Where it then paints the glyphs: the baseline snapped to a whole CSS pixel."""
    return np.floor(baseline(top, size, lh) + .5)


meta = {
    'font': 'DynaPuff', 'file': 'assets/fonts/dynapuff-latin.woff2', 'axes': {'wght': WGHT, 'wdth': WDTH},
    'unitsPerEm': UPM,
    'hhea': {'ascender': hhea.ascent, 'descender': hhea.descent, 'lineGap': hhea.lineGap},
    'OS/2': {'sTypoAscender': os2.sTypoAscender, 'sTypoDescender': os2.sTypoDescender, 'sTypoLineGap': os2.sTypoLineGap,
             'usWinAscent': os2.usWinAscent, 'usWinDescent': os2.usWinDescent, 'USE_TYPO_METRICS': USE_TYPO},
    'coords': 'font units; x from the word origin (the element\'s left edge), y down from the baseline (ascenders '
              'negative). Each letter\'s d and bbox [x0, y0, x1, y1] are relative to its own origin: place it at '
              'translate(left + x*s, baseline) scale(s), s = fontSize/unitsPerEm.',
    'shaping': 'cmap, GSUB ccmp/liga/calt (ff becomes the f_f ligature: one letter with char "ff"), GPOS kern pairs '
               '(kern = extra advance after the letter, already in the next x). Chrome drops liga when letter-spacing '
               'is not 0: then ff is two f\'s and these x values no longer hold.',
    'baseline': 'baseline = top + floor((L - (A + D)) / 2) + A, A = round(965*s), D = round(235*s) (halves up), '
                's = fontSize/1000, L = used line-height, top = the element\'s content-box top, all in CSS px (also at '
                'devicePixelRatio 2). Chrome paints the glyphs at round(baseline), a whole CSS px, and they come out '
                'about 1/4 device px higher than the exact outline. 600 120px/1.12: baseline = top + 111.',
    'drips': 'first letter only: lowest points of its bottom outline (feet, bottom curves), tangent pointing right and '
             'outward normal, y down. landing: top of its first stroke from the left.',
    'words': words,
}
out = HERE / 'glyphs.json'
out.write_text(json.dumps(meta, ensure_ascii=False, indent=1))
print('wrote', out.relative_to(ROOT))

# --- proof: one page, two columns. Left: our paths from the JSON (drips red, landing green). Right: Chrome's own
# text with the real font, our outline over it. The same page, switched to black on white with only the text (mt) or
# only our paths filled (mp), is what we measure.
ROW = 170
wmax = max(v['advance'] for v in words.values()) * PX / UPM
CA = 30
CB = int(CA + wmax + 80)              # a whole pixel: the text's left and the paths' left must be the same number
W, H = int(CB + wmax + 40), ROW * len(words) + 40
MEASURE_CSS = ('body.mt{background:#fff}body.mt .t,body.mt .p{color:#000}body.mt svg{display:none}'
               'body.mp{background:#fff}body.mp .t,body.mp .p{visibility:hidden}body.mp .a,body.mp .marks,body.mp .base{display:none}'
               'body.mp .b path{fill:#000;stroke:none}')


def word_svg(v, left, base, size, fill, stroke):
    k = size / UPM
    return ''.join(f'<path transform="translate({left + l["x"] * k:.4f} {base:.4f}) scale({k})" d="{l["d"]}" '
                   f'fill="{fill}" stroke="{stroke}" stroke-width="{1 / k:.3f}"/>' for l in v['letters'])


def words_page():
    texts, paths, marks, lines = [], [], [], []
    s = PX / UPM
    for r, (w, v) in enumerate(words.items()):
        top = 20 + r * ROW
        base = baseline(top, PX, PX * LH)
        texts.append(f'<div class="t" style="top:{top}px;left:{CB}px">{w}</div>')
        lines.append(f'<line x1="{CB - 20}" x2="{W - 10}" y1="{base}" y2="{base}"/>')
        paths.append(f'<g class="a">{word_svg(v, CA, base, PX, BROWN, "none")}</g>'
                     f'<g class="b">{word_svg(v, CB, base, PX, "none", "#0A84FF")}</g>')
        f0 = v['letters'][0]
        for dp in f0['drips']:
            x, y = CA + dp['x'] * s, base + dp['y'] * s
            tx, ty = dp['tangent']
            marks.append(f'<line x1="{x - 14 * tx:.2f}" y1="{y - 14 * ty:.2f}" x2="{x + 14 * tx:.2f}" y2="{y + 14 * ty:.2f}" '
                         f'stroke="#D11" stroke-width="1.5"/><circle cx="{x:.2f}" cy="{y:.2f}" r="4.5" fill="#E22"/>')
        lp = f0['landing']
        marks.append(f'<circle cx="{CA + lp["x"] * s:.2f}" cy="{base + lp["y"] * s:.2f}" r="5" fill="#1B3"/>')
    return f"""<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="/assets/fonts.css">
<style>html,body{{margin:0;background:{BEIGE};width:{W}px;height:{H}px;overflow:hidden}}
.t{{position:absolute;margin:0;padding:0;white-space:nowrap;font:600 {PX}px/{LH} DynaPuff;color:{BROWN}}}
svg{{position:absolute;left:0;top:0;overflow:visible}}.base line{{stroke:#B49A7C;stroke-width:1}}{MEASURE_CSS}</style>
</head><body>{''.join(texts)}
<svg class="base" width="{W}" height="{H}">{''.join(lines)}</svg>
<svg width="{W}" height="{H}">{''.join(paths)}</svg>
<svg class="marks" width="{W}" height="{H}">{''.join(marks)}</svg></body></html>"""


# The rule at other sizes (the last three split rounding in CSS px from rounding in device px), at fractional tops
# and lefts and at both pixel ratios: Chrome's own line baseline (an empty inline-block sits on it) against the
# formula, and where it paints the glyphs (our "Nom" put on the formula's baseline, unsnapped).
PROBES = [(sz, f) for sz in (120, 64, 37, 150, 96.5, 16, 21, 12) for f in (0, .25, .5, .75)]
PROW = 200


def probe_page():
    rows = ''.join(f'<div class="p" style="top:{10 + f + PROW * k}px;left:{10 + f}px;font-size:{sz}px">Nom<i></i></div>'
                   for k, (sz, f) in enumerate(PROBES))
    paths = ''.join(f'<g class="b">{word_svg(words["Nom"], 10 + f, baseline(10 + f + PROW * k, sz, sz * LH), sz, "none", "none")}</g>'
                    for k, (sz, f) in enumerate(PROBES))
    return f"""<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="/assets/fonts.css">
<style>body{{margin:0;background:#fff}}.p{{position:absolute;margin:0;padding:0;white-space:nowrap;
font-family:DynaPuff;font-weight:600;line-height:{LH}}}i{{display:inline-block;width:0;height:0}}
svg{{position:absolute;left:0;top:0;overflow:visible}}{MEASURE_CSS}</style></head><body>{rows}
<svg width="400" height="{PROW * len(PROBES)}">{paths}</svg></body></html>"""


NODE = r"""
import { createRequire } from 'module';
import fs from 'fs';
const job = JSON.parse(fs.readFileSync(process.argv.at(-1), 'utf8'));
const { chromium } = createRequire(job.playwright)('playwright');
const b = await chromium.launch({ headless: true });
const out = {};
for (const pg of job.pages) {
  const ctx = await b.newContext({ viewport: { width: pg.w, height: pg.h }, deviceScaleFactor: pg.dpr });
  const p = await ctx.newPage();
  // served from the site's origin, so /assets/fonts.css and its fonts load as they do on the page
  await p.route(job.site + '/__glyphs/**', (r) => r.fulfill({ contentType: 'text/html; charset=utf-8', body: pg.html }));
  await p.goto(job.site + '/__glyphs/' + pg.name, { waitUntil: 'load' });
  await p.evaluate(() => document.fonts.load('600 120px DynaPuff', 'WasNameGeschmackKoffeinQuoiNomGoûtCaféineWhatTasteCaffeine'));
  await p.evaluate(() => document.fonts.ready);
  const r = { fontOk: await p.evaluate(() => [...document.fonts].some((f) => f.family.replace(/"/g, '') === 'DynaPuff' && f.status === 'loaded')) };
  // where Chrome starts every character (the left of its range), and each probe line's top and baseline
  r.chars = await p.evaluate(() => [...document.querySelectorAll('.t')].map((el) => {
    const t = el.firstChild, rg = document.createRange();
    return [...t.data].map((_, i) => { rg.setStart(t, i); rg.setEnd(t, i + 1); return rg.getBoundingClientRect().left; });
  }));
  r.probes = await p.evaluate(() => [...document.querySelectorAll('.p')].map((el) => (
    { top: el.getBoundingClientRect().top, baseline: el.querySelector('i').getBoundingClientRect().top })));
  for (const sh of pg.shots) {
    await p.evaluate((c) => { document.body.className = c; }, sh.cls);
    await p.screenshot({ path: sh.path, clip: sh.clip, animations: 'disabled' });
  }
  out[pg.name] = r;
  await ctx.close();
}
await b.close();
console.log(JSON.stringify(out));
"""


def ink(path):
    return 255.0 - cv2.imread(str(path), cv2.IMREAD_GRAYSCALE).astype(np.float64)


def offset(text, paths):
    """How far Chrome's glyphs sit from ours (device px, + = right/down), by phase correlation: unlike an ink centroid
    it is not pulled aside by Chrome drawing the same shape a hair bolder."""
    (dx, dy), _ = cv2.phaseCorrelate(paths, text)
    return dx, dy


with tempfile.TemporaryDirectory() as tmp:
    tmp = pathlib.Path(tmp)
    clipB = {'x': CB - 20, 'y': 0, 'width': W - CB + 20, 'height': H}
    clipP = {'x': 0, 'y': 0, 'width': 400, 'height': PROW * len(PROBES)}
    pages = []
    for dpr in (1, 2):
        shots = [{'cls': c, 'path': str(tmp / f'{c}{dpr}.png'), 'clip': clipB} for c in ('mt', 'mp')]
        if dpr == 1: shots.append({'cls': '', 'path': str(tmp / 'proof.png'), 'clip': {'x': 0, 'y': 0, 'width': W, 'height': H}})
        pages.append({'name': f'words{dpr}', 'html': words_page(), 'w': W, 'h': H, 'dpr': dpr, 'shots': shots})
        pages.append({'name': f'probe{dpr}', 'html': probe_page(), 'w': 400, 'h': PROW * len(PROBES), 'dpr': dpr,
                      'shots': [{'cls': c, 'path': str(tmp / f'p{c}{dpr}.png'), 'clip': clipP} for c in ('mt', 'mp')]})
    (tmp / 'job.json').write_text(json.dumps({'playwright': PLAYWRIGHT_FROM, 'site': SITE, 'pages': pages}))
    run = subprocess.run(['node', '--input-type=module', '-', str(tmp / 'job.json')], input=NODE, capture_output=True, text=True)
    if run.returncode: raise SystemExit(run.stderr)
    res = json.loads(run.stdout)

    check = {}
    for dpr in (1, 2):
        r = res[f'words{dpr}']
        assert r['fontOk'] and res[f'probe{dpr}']['fontOk'], 'DynaPuff did not load from ' + SITE
        mt, mp = ink(tmp / f'mt{dpr}.png'), ink(tmp / f'mp{dpr}.png')
        rows, chars = [], 0
        for k, (w, v) in enumerate(words.items()):
            band = slice(int((k * ROW - 10) * dpr) if k else 0, int((k * ROW + ROW + 10) * dpr))
            dx, dy = offset(mt[band], mp[band])
            rows.append({'word': w, 'dx': round(dx / dpr, 3), 'dy': round(dy / dpr, 3),
                         'inkDiff': round(float(np.abs(mt[band] - mp[band]).sum() / mt[band].sum()), 3)})
            i = 0
            for l in v['letters']:      # Chrome's letter starts against ours (a ligature starts at its first character)
                chars = max(chars, abs(r['chars'][k][i] - (CB + l['x'] * PX / UPM)))
                i += len(l['char'])
        pr, pmt, pmp = res[f'probe{dpr}']['probes'], ink(tmp / f'pmt{dpr}.png'), ink(tmp / f'pmp{dpr}.png')
        probes = []
        for k, (q, (sz, f)) in enumerate(zip(pr, PROBES)):
            band = slice(int(k * PROW * dpr), int((k + 1) * PROW * dpr))
            dx, dy = offset(pmt[band], pmp[band])
            b0, b1 = float(baseline(q['top'], sz, sz * LH)), float(painted(q['top'], sz, sz * LH))
            probes.append({'size': sz, 'top': q['top'], 'left': 10 + f, 'chrome': q['baseline'], 'formula': b0,
                           'paintDx': round(dx / dpr, 3), 'paintDy': round(dy / dpr, 3), 'paintDyAfterSnap': round(dy / dpr - (b1 - b0), 3)})
        snap = [q['paintDyAfterSnap'] for q in probes]
        check[f'dpr{dpr}'] = {
            'words': rows, 'letterStartMaxErr': round(chars, 3),
            'baselineMaxErr': max(abs(q['chrome'] - q['formula']) for q in probes),
            'paintMaxDx': max(abs(q['paintDx']) for q in probes),
            'paintDyAfterSnap': [min(snap), round(float(np.median(snap)), 3), max(snap)],      # min, median, max
            'probes': probes}

    meta['check'] = {'how': 'Chrome (Playwright) at dpr 1 and 2. words: Chrome text minus our paths at 600 120px/1.12, '
                            'px, phase correlation; inkDiff = share of ink that differs (antialiasing). probes: Chrome\'s '
                            'line baseline (an empty inline-block on it) vs the formula, and the painted offset of "Nom" '
                            'from the formula\'s baseline, before and after snapping that to a whole CSS px.',
                     **check}
    out.write_text(json.dumps(meta, ensure_ascii=False, indent=1))

    # the caption, set in the instance itself
    from PIL import Image, ImageDraw, ImageFont
    font.save(tmp / 'dynapuff-600.ttf')
    cap_font = ImageFont.truetype(str(tmp / 'dynapuff-600.ttf'), 17)
    c1, c2 = check['dpr1'], check['dpr2']
    mx = lambda c, key: max(abs(q[key]) for q in c['words'])
    lines = ['left: the paths from glyphs.json, drips red (with tangent), landing green',
             f'right: Chrome, font: 600 {PX}px/{LH} DynaPuff, the same paths stroked blue on top, at baseline = top + '
             f'{baseline(0, PX, PX * LH):g}',
             f'Chrome minus paths, dpr 1 | dpr 2:  x {mx(c1, "dx"):.2f} | {mx(c2, "dx"):.2f} px,  y {mx(c1, "dy"):.2f} | '
             f'{mx(c2, "dy"):.2f} px at most;  letter starts within {c1["letterStartMaxErr"]:.2f} px',
             f'baseline rule against Chrome over {len(PROBES)} probes (12 to 150 px, fractional tops and lefts): off by '
             f'{c1["baselineMaxErr"]:.3f} | {c2["baselineMaxErr"]:.3f} px',
             'Chrome paints the glyphs at round(baseline) (whole CSS px), then off by '
             f'{c1["paintDyAfterSnap"][1]:+.2f} | {c2["paintDyAfterSnap"][1]:+.2f} px (median), x within '
             f'{c1["paintMaxDx"]:.2f} | {c2["paintMaxDx"]:.2f} px']
    proof = Image.open(tmp / 'proof.png').convert('RGB')
    img = Image.new('RGB', (proof.width, proof.height + 30 * len(lines) + 20), BEIGE)
    img.paste(proof, (0, 0))
    d = ImageDraw.Draw(img)
    for i, line in enumerate(lines): d.text((CA, proof.height + 6 + 30 * i), line, font=cap_font, fill=BROWN)
    img.save(HERE / 'glyphs-proof.png')
    print('wrote', (HERE / 'glyphs-proof.png').relative_to(ROOT))
    print(json.dumps({k: {kk: vv for kk, vv in v.items() if kk != 'probes'} for k, v in check.items()}, indent=1))
