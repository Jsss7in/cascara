# The site in German, French and English. The pages are written in German (content.py, legal.py); the French and
# English ones are made from them: every text and every readable attribute is looked up in _build/i18n/<lang>.json
# (German → translation) and written into a copy in /fr/ or /en/, whose links to the shared files lead one folder up.
#   python3 _build/i18n.py extract     → _build/i18n/strings.json, every German text on the pages (to translate)
import html as H, json, pathlib, re

HERE = pathlib.Path(__file__).resolve().parent
LANGS = {'de': dict(html='de-CH', folder='', label='DE', name='Deutsch', locale='de_CH'),
         'fr': dict(html='fr-CH', folder='fr/', label='FR', name='Français', locale='fr_CH'),
         'en': dict(html='en', folder='en/', label='EN', name='English', locale='en_GB')}
PAGES = ['index.html', 'partizipation.html', 'impressum.html', 'datenschutz.html', 'bestellbedingungen.html']
ATTRS = ('alt', 'aria-label', 'title', 'placeholder')
META = re.compile(r'<meta\s+(?:name|property)="(?:description|og:title|og:description)"')
# words that read the same in every language (names, units, addresses) – not sent for translation
SAME = {'Cascarup', 'Original', 'Cozy Spice', 'TWINT', 'Instagram', 'TikTok', 'X', 'info@cascarup.ch', '@cascarup',
        'Fribourg', 'CHF', 'Coffea arabica', 'Gifferstee', 'Estavayer-le-Lac', 'Avenches', 'Cascara', 'YES Company Programme',
        'Deutsch', 'Français', 'English', 'DE', 'FR', 'EN'}
TOKEN = re.compile(r'(<!--.*?-->|<[^>]+>)', re.S)
JS_STRINGS = HERE / 'i18n' / 'js.json'          # the texts the page scripts write themselves


def _key(s):
    return re.sub(r'\s+', ' ', H.unescape(s)).strip()


def _wanted(k):
    return k and len(k) > 1 and re.search(r'[A-Za-zÄÖÜäöüÉé]', k) and k not in SAME and not re.fullmatch(r'[\d\s.,:·–—+−/%CHFml]+', k)


def walk(page, on_text, on_attr):
    """Calls on_text(raw) for every text node and on_attr(name, raw) for every readable attribute; both return the
    replacement (or None to keep it). Script, style and drawing (svg) contents are left alone."""
    out, skip = [], None
    for part in TOKEN.split(page):
        if not part:
            continue
        if part.startswith('<!--'):
            out.append(part); continue
        if part.startswith('<'):
            tag = re.match(r'</?\s*([a-zA-Z0-9]+)', part)
            name = tag.group(1).lower() if tag else ''
            if skip:
                if part.startswith('</') and name == skip: skip = None
                out.append(part); continue
            if not part.startswith('</') and name in ('script', 'style', 'svg') and not part.endswith('/>'):
                skip = name
            def attr(m):
                n, v = m.group(1), m.group(2)
                readable = n in ATTRS or (n == 'content' and META.match(part))
                r = on_attr(n, v) if readable else None
                return m.group(0) if r is None else f'{n}="{r}"'
            out.append(re.sub(r'([a-zA-Z-:]+)="([^"]*)"', attr, part) if not part.startswith('</') else part)
            continue
        if skip:
            out.append(part); continue
        r = on_text(part)
        out.append(part if r is None else r)
    return ''.join(out)


def extract(pages):
    seen = {}
    def text(raw):
        k = _key(raw)
        if _wanted(k): seen.setdefault(k, None)
    def attr(n, v):
        k = _key(v)
        if _wanted(k): seen.setdefault(k, None)
    for p in pages:
        walk(p, lambda r: text(r), lambda n, v: attr(n, v))
    return list(seen)


def table(lang):
    f = HERE / 'i18n' / f'{lang}.json'
    return json.loads(f.read_text()) if f.exists() else {}


def translate(page, lang, missing):
    T = table(lang)
    def text(raw):
        k = _key(raw)
        if not _wanted(k): return None
        if k not in T: missing.add(k); return None
        lead = raw[:len(raw) - len(raw.lstrip())]; trail = raw[len(raw.rstrip()):]
        return lead + H.escape(T[k], quote=False) + trail
    def attr(n, v):
        k = _key(v)
        if not _wanted(k): return None
        if k not in T: missing.add(k); return None
        return H.escape(T[k], quote=True)
    return walk(page, text, attr)


ROOTFILES = ('assets/', 'styles.css', 'main.js', 'shop.js', 'checkout.js', 'ps.js', 'pour.js')


def rebase(page):
    """A page one folder down: its links to the shared files (pictures, styles, scripts) lead one folder up."""
    def fix(url):
        return '../' + url if url.startswith(ROOTFILES) else url
    def attr(m):
        n, v = m.group(1), m.group(2)
        if n == 'srcset':
            v = ', '.join(' '.join([fix(p.split()[0])] + p.split()[1:]) for p in v.split(','))
        else:
            v = fix(v)
        return f'{n}="{v}"'
    return re.sub(r'\b(src|href|srcset|data-texture)="([^"]*)"', attr, page)


def switcher(page_name, lang, cls=''):
    """DE · FR · EN: the same page in the other languages (the current one marked)."""
    here = LANGS[lang]['folder']
    up = '../' if here else ''
    items = []
    for code, L in LANGS.items():
        href = up + L['folder'] + ('' if page_name == 'index.html' else page_name) or './'
        cur = ' aria-current="true"' if code == lang else ''
        items.append(f'<a href="{href}" hreflang="{L["html"]}" lang="{L["html"]}" data-lang-link{cur} '
                     f'aria-label="{L["name"]}">{L["label"]}</a>')
    return f'<nav class="lang {cls}" aria-label="Sprache">' + ''.join(items) + '</nav>'


def localise(page, page_name, lang, site, missing):
    """The German page made into lang: switchers, language attribute, alternates, texts, paths."""
    L = LANGS[lang]
    page = page.replace('<!--LANGS-->', switcher(page_name, lang, 'lang--bar'))
    page = page.replace('<!--LANGS-END-->', switcher(page_name, lang, 'lang--end'))
    page = page.replace('<!--LANGS-MENU-->', switcher(page_name, lang, 'lang--menu'))
    path = '' if page_name == 'index.html' else page_name
    alts = ''.join(f'\n  <link rel="alternate" hreflang="{X["html"]}" href="{site}{X["folder"]}{path}">' for X in LANGS.values())
    alts += f'\n  <link rel="alternate" hreflang="x-default" href="{site}{path}">'
    page = page.replace('<meta charset="utf-8">', '<meta charset="utf-8">' + alts, 1)
    js = json.loads(JS_STRINGS.read_text()) if JS_STRINGS.exists() else []
    T = table(lang) if lang != 'de' else {}
    words = {k: T[k] for k in js if k in T}
    for k in js:
        if lang != 'de' and k not in T: missing.add(k)
    script = ('<script>window.cascarupT=(function(d){return function(s){return d[s]||s}})('
              + json.dumps(words, ensure_ascii=False).replace('</', '<\\/') + ');</script>')
    page = page.replace('</title>', '</title>\n  ' + script, 1)
    if lang == 'de':
        return page
    page = re.sub(r'<html lang="[^"]*"', f'<html lang="{L["html"]}"', page, 1)
    page = page.replace('data-root=""', 'data-root="../"', 1)
    page = re.sub(r'(<link rel="canonical" href=")[^"]*', lambda m: m.group(1) + site + L['folder'] + path, page)
    page = re.sub(r'(<meta property="og:url" content=")[^"]*', lambda m: m.group(1) + site + L['folder'] + path, page)
    page = page.replace('<meta property="og:type"', f'<meta property="og:locale" content="{L["locale"]}">\n  <meta property="og:type"', 1)
    page = translate(page, lang, missing)
    # dates: «29. Oktober» is German; in French and English the day has no point (29 octobre, 29 October)
    page = re.sub(r'(<span class="stand__day">\d+)\.(</span>)', r'\1\2', page)
    return rebase(page)


if __name__ == '__main__':
    import sys
    if sys.argv[1:] == ['extract']:
        root = HERE.parent
        pages = [(root / p).read_text() for p in PAGES]
        strings = extract(pages)
        js = json.loads(JS_STRINGS.read_text()) if JS_STRINGS.exists() else []
        strings += [s for s in js if s not in strings]
        (HERE / 'i18n').mkdir(exist_ok=True)
        (HERE / 'i18n' / 'strings.json').write_text(json.dumps(strings, ensure_ascii=False, indent=1))
        print(len(strings), 'strings →', HERE / 'i18n' / 'strings.json')
