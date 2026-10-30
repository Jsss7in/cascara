// Cascarup – Cascara, poured (the section on dried cascara). A glass pot of our syrup with a stick of cinnamon and a
// star anise in it, drawn flat like the rest of the page, tips as the section comes up the screen. The syrup inside
// stays level (its area kept, the surface worked out for every tilt), rises to the spout and runs over it; the stream
// falls into the first word's first letter, which fills from where it lands, then the other letters one by one from
// the top. From the letter's foot a drop forms, falls and runs into the next word, and from the last word into a
// bottle of Cozy Spice, which fills; then the stream thins and breaks, and threads that are done break into drops. Everything is a function of the scroll, so it plays back as well as on; it is worked out only
// while the section is on screen, and only when the scroll has moved.
(() => {
  const pour = document.querySelector('[data-pour]');
  if (!pour) return;
  const NS = 'http://www.w3.org/2000/svg';
  const svg = pour.querySelector('.pour__flow');
  const facts = [...pour.querySelectorAll('.pour__fact')];
  // every word as its letters (the first fills from where the stream lands, each of the others from the top down,
  // a little after the one before, as the syrup runs along the word)
  for (const w of pour.querySelectorAll('.pour__ghost, .pour__ink')) {
    w.replaceChildren(...[...w.textContent].map((ch, k) => {
      const s = document.createElement('span'); s.className = k ? 'pour__ch' : 'pour__first'; s.textContent = ch; return s;
    }));
  }
  const rests = facts.map((f) => [...f.querySelectorAll('.pour__ink .pour__ch')]);
  const texts = facts.map((f) => f.querySelector('dd'));
  const ghosts = facts.map((f) => f.querySelector('.pour__ghost .pour__first'));
  const catcher = pour.querySelector('.pour__catch');
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SYRUP = '#51301D', SURFACE = '#7A4426';
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const ease = (t) => t * t * (3 - 2 * t);
  const f1 = (v) => v.toFixed(1);
  const el = (tag, attrs, parent = svg) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    parent.append(e);
    return e;
  };

  // ---- the pot, in its own coordinates: the spout's tip at 0,0 (the pot turns about it, so the stream always
  // leaves from the same place), the body to the right of it, the handle on the far side ----------------------------
  const BW = 132, BH = 84, T = 5, R = 15;
  const L = 9, Rt = L + BW, TOP = 5, BOT = TOP + BH;          // its outer walls, rim and floor
  const outer = `M0 0C4 .5 7 2 ${L} ${TOP + 7}V${BOT - R}Q${L} ${BOT} ${L + R} ${BOT}H${Rt - R}Q${Rt} ${BOT} ${Rt} ${BOT - R}V${TOP}H${Rt + 3}`
    + `V${TOP - 3}H${L + 3}C${L - 1} ${TOP - 3} 3 -2.4 0 0Z`;
  // the inside, as a polygon (the syrup is what of it lies below the surface)
  const cavity = (() => {
    const pts = [], x0 = L + T, x1 = Rt - T, y0 = TOP + 2, y1 = BOT - T, r = R - T;
    pts.push([x0, y0], [x1, y0]);
    for (let i = 0; i <= 6; i++) { const a = i / 6 * Math.PI / 2; pts.push([x1 - r + r * Math.cos(a), y1 - r + r * Math.sin(a)]); }
    for (let i = 0; i <= 6; i++) { const a = Math.PI / 2 + i / 6 * Math.PI / 2; pts.push([x0 + r + r * Math.cos(a), y1 - r + r * Math.sin(a)]); }
    return pts;
  })();
  const LIP = [L + T, TOP + 2];                                  // where it spills: the inner corner at the spout
  const potBack = el('g', {});
  el('path', { d: outer, fill: 'rgba(255, 250, 240, .42)' }, potBack);
  const liquid = el('path', { fill: SYRUP });
  const surf = el('path', { fill: 'none', stroke: SURFACE, 'stroke-width': 2.4, 'stroke-linecap': 'round' });
  // what floats in it: a stick of cinnamon (a rolled quill) and a star anise
  const cin = el('g', {});
  el('rect', { x: -19, y: -3.6, width: 38, height: 7.2, rx: 3.4, fill: '#8C4A22' }, cin);
  el('path', { d: 'M-17 -1.2H15M-16 1.6H13', stroke: '#6E3517', 'stroke-width': 1, 'stroke-linecap': 'round' }, cin);
  el('ellipse', { cx: 17.5, cy: 0, rx: 2.2, ry: 3.4, fill: '#5E2C12' }, cin);
  const star = el('g', {});
  let starD = '';
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2, c = Math.cos(a), s = Math.sin(a), w = .42;
    starD += `M0 0L${f1(8.5 * Math.cos(a - w) * .55)} ${f1(8.5 * Math.sin(a - w) * .55)}Q${f1(c * 10)} ${f1(s * 10)} ${f1(8.5 * Math.cos(a + w) * .55)} ${f1(8.5 * Math.sin(a + w) * .55)}Z`;
  }
  el('path', { d: starD, fill: '#6A2C14' }, star);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; el('ellipse', { cx: f1(Math.cos(a) * 5), cy: f1(Math.sin(a) * 5), rx: 1.5, ry: 1.1, transform: `rotate(${f1(a * 180 / Math.PI)} ${f1(Math.cos(a) * 5)} ${f1(Math.sin(a) * 5)})`, fill: '#A65A2C' }, star); }
  el('circle', { cx: 0, cy: 0, r: 1.8, fill: '#4A1E0C' }, star);
  const potFront = el('g', {});
  el('path', { d: outer, fill: 'none', stroke: 'rgba(58, 33, 22, .5)', 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, potFront);
  el('path', { d: `M${Rt} ${TOP + 14}C${Rt + 20} ${TOP + 14} ${Rt + 22} ${TOP + 44} ${Rt} ${TOP + 44}`, fill: 'none', stroke: 'rgba(58, 33, 22, .5)', 'stroke-width': 1.6 }, potFront);
  el('path', { d: `M${Rt} ${TOP + 18}C${Rt + 15} ${TOP + 18} ${Rt + 16} ${TOP + 40} ${Rt} ${TOP + 40}`, fill: 'none', stroke: 'rgba(255, 250, 240, .7)', 'stroke-width': 3 }, potFront);
  // its glints: a strip down the far wall, a short one low on the near side
  el('path', { d: `M${Rt - 12} ${TOP + 12}V${BOT - 22}`, stroke: 'rgba(255, 255, 255, .62)', 'stroke-width': 4, 'stroke-linecap': 'round' }, potFront);
  el('path', { d: `M${L + 12} ${BOT - 30}V${BOT - 18}`, stroke: 'rgba(255, 255, 255, .5)', 'stroke-width': 3, 'stroke-linecap': 'round' }, potFront);

  // ---- the bottle that catches the rest: our Cozy Spice flask, flat, its cap off -----------------------------------
  const bottle = el('g', {});
  const BOW = 60, BOH = 92, NK = 17, NH = 15;                   // body, neck (the mouth is at 0,0)
  const bOuter = `M${-NK / 2} 0V${NH}C${-NK / 2} ${NH + 6} ${-BOW / 2} ${NH + 6} ${-BOW / 2} ${NH + 18}V${NH + BOH - 9}Q${-BOW / 2} ${NH + BOH} ${-BOW / 2 + 9} ${NH + BOH}`
    + `H${BOW / 2 - 9}Q${BOW / 2} ${NH + BOH} ${BOW / 2} ${NH + BOH - 9}V${NH + 18}C${BOW / 2} ${NH + 6} ${NK / 2} ${NH + 6} ${NK / 2} ${NH}V0Z`;
  el('path', { d: bOuter, fill: 'rgba(255, 250, 240, .42)' }, bottle);
  const clip = el('clipPath', { id: 'pour-bottle' }, el('defs', {}, bottle));
  el('path', { d: bOuter }, clip);
  const bFill = el('rect', { x: -BOW / 2 - 2, width: BOW + 4, y: NH + BOH, height: 0, fill: SYRUP, 'clip-path': 'url(#pour-bottle)' }, bottle);
  const bSurf = el('path', { fill: 'none', stroke: SURFACE, 'stroke-width': 2, 'clip-path': 'url(#pour-bottle)' }, bottle);
  // the label, as on our flask: a red band, a cream wave, the green with the name
  const lab = el('g', { 'clip-path': 'url(#pour-bottle)' }, bottle);
  const ly = NH + 36, lh = 44;
  el('rect', { x: -BOW / 2, y: ly, width: BOW, height: lh, fill: '#2B5E31' }, lab);
  el('rect', { x: -BOW / 2, y: ly, width: BOW, height: 13, fill: '#93342C' }, lab);
  el('path', { d: `M${-BOW / 2} ${ly + 13}q5 4 10 0t10 0 10 0 10 0 10 0 10 0V${ly + 17}q-5 4 -10 0t-10 0 -10 0 -10 0 -10 0 -10 0Z`, fill: '#D6C08A' }, lab);
  const name = el('text', { x: 0, y: ly + 31, 'text-anchor': 'middle', 'font-family': 'DynaPuff, system-ui, sans-serif', 'font-weight': 600, 'font-size': 9.5, fill: '#F3E6CC' }, lab);
  name.textContent = 'Cozy Spice';
  el('path', { d: bOuter, fill: 'none', stroke: 'rgba(58, 33, 22, .5)', 'stroke-width': 1.5, 'stroke-linejoin': 'round' }, bottle);
  el('path', { d: `M${BOW / 2 - 8} ${NH + 24}V${NH + BOH - 14}`, stroke: 'rgba(255, 255, 255, .6)', 'stroke-width': 3.4, 'stroke-linecap': 'round' }, bottle);
  el('path', { d: `M${-NK / 2 - 1.5} 0H${NK / 2 + 1.5}`, stroke: 'rgba(58, 33, 22, .5)', 'stroke-width': 2.4, 'stroke-linecap': 'round' }, bottle);

  // everything the syrup does outside the pot, one flat shape
  const flow = el('path', { fill: SYRUP });

  // ---- geometry ------------------------------------------------------------------------------------------------
  const rot = (p, a, o) => { const c = Math.cos(a), s = Math.sin(a); return [o[0] + p[0] * c - p[1] * s, o[1] + p[0] * s + p[1] * c]; };
  const area = (P) => { let s = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; s += a[0] * b[1] - b[0] * a[1]; } return Math.abs(s) / 2; };
  // the part of a polygon below a level (y grows downwards)
  const below = (P, y) => {
    const out = [];
    for (let i = 0; i < P.length; i++) {
      const a = P[i], b = P[(i + 1) % P.length], ia = a[1] >= y, ib = b[1] >= y;
      if (ia) out.push(a);
      if (ia !== ib) { const t = (y - a[1]) / (b[1] - a[1]); out.push([a[0] + (b[0] - a[0]) * t, y]); }
    }
    return out;
  };
  const levelFor = (P, V) => {                                 // the surface that leaves V of syrup in the pot
    let lo = Infinity, hi = -Infinity;
    for (const p of P) { lo = Math.min(lo, p[1]); hi = Math.max(hi, p[1]); }
    for (let i = 0; i < 30; i++) { const m = (lo + hi) / 2; if (area(below(P, m)) > V) lo = m; else hi = m; }
    return (lo + hi) / 2;
  };
  const V0 = area(cavity) * .58;
  // at a tilt, how much the pot can still hold (up to the spout), and so how much is left in it
  const held = (a) => { const P = cavity.map((p) => rot(p, a, [0, 0])); return area(below(P, rot(LIP, a, [0, 0])[1])); };
  const tiltFor = (V) => { let lo = 0, hi = -1.45; for (let i = 0; i < 30; i++) { const m = (lo + hi) / 2; if (held(m) > V) lo = m; else hi = m; } return (lo + hi) / 2; };
  const A_SPILL = tiltFor(V0), A_END = tiltFor(V0 * .16);

  // a line of syrup: sampled points with a width each, drawn up to a length as one outline, with a drop at its tip
  const run = (pts, width) => {
    const out = []; let len = 0;
    for (let i = 0; i < pts.length; i++) {
      if (i) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
      out.push({ x: pts[i][0], y: pts[i][1], w: width(i / (pts.length - 1)), at: len });
    }
    return { pts: out, len };
  };
  // (every piece is wound the same way round – clockwise on the screen – so where pieces overlap they add up instead
  // of cutting holes in one another)
  const drop = (x, y, r) => `M${f1(x - r)} ${f1(y)}a${f1(r)} ${f1(r * 1.08)} 0 1 1 ${f1(2 * r)} 0a${f1(r)} ${f1(r * 1.08)} 0 1 1 ${f1(-2 * r)} 0Z`;
  // a drop hanging: pointed at the top, round below (x, y: the middle of its round)
  const tear = (x, y, r) => `M${f1(x)} ${f1(y - r * 1.7)}C${f1(x + r * .35)} ${f1(y - r * 1.15)} ${f1(x + r)} ${f1(y - r * .6)} ${f1(x + r)} ${f1(y)}`
    + `A${f1(r)} ${f1(r)} 0 0 1 ${f1(x - r)} ${f1(y)}C${f1(x - r)} ${f1(y - r * .6)} ${f1(x - r * .35)} ${f1(y - r * 1.15)} ${f1(x)} ${f1(y - r * 1.7)}Z`;
  // the outline of a line of syrup up to a length (its width times k), with round ends; while it runs, its head is a
  // drop of the given size
  const shape = (ln, upto, head = 0, k = 1) => {
    const P = ln.pts.filter((q) => q.at <= upto);
    if (!P.length) return '';
    if (P.length < 2) return head ? drop(P[0].x, P[0].y, head) : '';
    const A = [], B = [];
    for (let i = 0; i < P.length; i++) {
      const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)];
      let nx = -(b.y - a.y), ny = b.x - a.x; const l = Math.hypot(nx, ny) || 1; nx /= l; ny /= l;
      const h = P[i].w * k / 2;
      A.push([P[i].x + nx * h, P[i].y + ny * h]); B.push([P[i].x - nx * h, P[i].y - ny * h]);
    }
    let ring = A.concat(B.reverse()), area2 = 0;
    for (let i = 0; i < ring.length; i++) { const p = ring[i], q = ring[(i + 1) % ring.length]; area2 += p[0] * q[1] - q[0] * p[1]; }
    if (area2 < 0) ring = ring.reverse();
    const s = P[0], e = P[P.length - 1];
    return `M${ring.map(([x, y]) => `${f1(x)} ${f1(y)}`).join('L')}Z` + drop(s.x, s.y, s.w * k / 2) + (head ? drop(e.x, e.y + head * .25, head) : drop(e.x, e.y, e.w * k / 2));
  };
  // a soft rise of width towards the end of a line (where it runs into a letter): no sudden bump
  const fillet = (t, from, to, at = .8) => from + (to - from) * ease(clamp((t - at) / (1 - at)));
  // a thread from one point to another, falling: a neck where it leaves, thin and a little uneven, widening smoothly
  // where it runs into the next letter
  const thread = (a, b, w0, w1, k) => {
    const n = 12 + Math.round(Math.abs(b[1] - a[1]) / 3), pts = [];
    for (let j = 0; j <= n; j++) {
      const t = j / n;
      pts.push([a[0] + (b[0] - a[0]) * ease(t) + Math.sin(t * 7 + k) * 1.1 * Math.sin(t * Math.PI), a[1] + (b[1] - a[1]) * t]);
    }
    return run(pts, (t) => fillet(t, 2.5 + (w0 - 2.5) * Math.pow(1 - clamp(t / .2), 2) + .3 * Math.sin(t * 17 + k), w1, .8));
  };

  // ---- the first letters, in syrup: their outlines in DynaPuff (from the page, see content.py), laid exactly where the
  // browser sets the words. Each is drawn as a shape of its own, filled from the top as the syrup runs down over it,
  // the stream and the drips joining it in the same colour; the letter in the type underneath stays hidden. --------
  const GLYPHS = JSON.parse(pour.dataset.glyphs || '{}');
  const defs = el('defs', {});
  const letterAt = (span, ox, oy) => {
    const g = GLYPHS[span.textContent];
    if (!g) return null;
    const host = span.parentElement, cs = getComputedStyle(host), fs = parseFloat(cs.fontSize);
    const lh = parseFloat(cs.lineHeight) || fs * 1.12, A = Math.round(.965 * fs), D = Math.round(.235 * fs);
    const range = document.createRange(); range.selectNodeContents(span);
    const left = range.getBoundingClientRect().left - ox;
    // where the browser puts the baseline of a line of DynaPuff (verified against Chrome: _build/pour/glyphs.py)
    const base = Math.round(host.getBoundingClientRect().top - oy + Math.floor((lh - (A + D)) / 2) + A);
    const s = fs / 1000, at = ([x, y]) => [left + x * s, base + y * s];
    return {
      g, fs, s, left, base, stroke: fs * .16,
      land: at(g.land), feet: g.drips.map(at).sort((a, b) => a[0] - b[0]),
      top: base + g.box[1] * s, bottom: base + g.box[3] * s, x0: left + g.box[0] * s, x1: left + g.box[2] * s,
    };
  };
  const inks = [];

  let G = null, last = NaN, pending = 0;
  const measure = () => {
    const r = pour.getBoundingClientRect(), ox = r.left, oy = r.top;
    const letters = ghosts.map((g) => letterAt(g, ox, oy));
    if (letters.some((l) => !l)) return false;
    // the letters as shapes, each clipped to what the syrup has reached of it
    for (const k of inks) { k.g.remove(); k.clip.remove(); }
    inks.length = 0;
    letters.forEach((l, i) => {
      const clip = el('clipPath', { id: `pour-ink-${i}`, clipPathUnits: 'userSpaceOnUse' }, defs);
      const front = el('ellipse', { cx: 0, cy: 0, rx: 0, ry: 0 }, clip);
      const g = el('g', { 'clip-path': `url(#pour-ink-${i})` });
      el('path', { d: l.g.d, transform: `translate(${f1(l.left)} ${l.base}) scale(${l.s.toFixed(5)})`, fill: SYRUP }, g);
      svg.insertBefore(g, flow);
      // the syrup spreads from where it lands, faster downwards: as far as the letter's farthest corner
      const cx = l.land[0], cy = l.land[1];
      const far = Math.max(...[[l.x0, l.top], [l.x1, l.top], [l.x0, l.bottom], [l.x1, l.bottom]].map(([x, y]) => Math.hypot((x - cx), (y - cy) / 1.3)));
      inks.push({ g, clip, front, far, shown: -1 });
    });
    pour.classList.add('has-glyphs');
    svg.setAttribute('viewBox', `0 0 ${Math.round(r.width)} ${Math.round(pour.offsetHeight)}`);
    const L0 = letters[0];
    // the pot hangs well above the first word, its spout just right of where the stream lands
    const lip = [L0.land[0] + 8, L0.land[1] - Math.max(80, L0.fs * 2.2)];
    // the drips: from a foot of each first letter (from inside its stroke) into the next word's first letter (into
    // its stroke), the last into the bottle; the other feet of each letter grow short drips once the word is full
    const bRect = catcher.getBoundingClientRect();
    const drips = [], deco = [];
    let mouth = null;
    letters.forEach((l, i) => {
      const next = letters[i + 1], aim = next ? next.land[0] : Math.max(l.feet[0][0], BOW / 2 + 8);
      const foot = l.feet.reduce((a, f) => (Math.abs(f[0] - aim) < Math.abs(a[0] - aim) ? f : a), l.feet[0]);
      const from = [foot[0], foot[1] - l.stroke * .55];
      if (next) drips.push(thread(from, [next.land[0], next.land[1] + next.stroke * .5], l.stroke * .95, next.stroke * .9, i + 1));
      else {
        mouth = [Math.max(foot[0], BOW / 2 + 8), bRect.top - oy + 22];
        drips.push(thread(from, [mouth[0], mouth[1] + 8], l.stroke * .95, 3.6, i + 1));
      }
      l.feet.filter((f) => f !== foot).slice(0, 2).forEach((f, k) => {
        const len = l.fs * (.2 + .09 * ((i + k) % 3)), pts = [];
        for (let j = 0; j <= 8; j++) pts.push([f[0] + Math.sin(j * .7 + k) * .4, f[1] - l.stroke * .5 + (len + l.stroke * .5) * j / 8]);
        deco.push({ i, ln: run(pts, (t) => l.stroke * (.66 - .26 * t)), r: l.stroke * .38 });
      });
    });
    // the timeline, in steps: tipping, the stream falling, each word filling and dripping on, the bottle filling
    const segs = [];
    let at = 0;
    const add = (kind, len, extra = {}) => { segs.push({ kind, start: at, len, ...extra }); at += len; };
    add('tip', 170);
    add('fall', 80);
    letters.forEach((l, i) => {
      add('first', 52, { i });
      add('rest', 26 * rests[i].length + 30, { i });
      add('form', 26, { i });
      add('drip', drips[i].len * .8, { i });
    });
    add('fill', 170);
    G = { top: r.top + window.scrollY, h: pour.offsetHeight, lip, drips, deco, letters, segs, total: at, mouth, chars: rests.map((cs) => cs.map(() => -1)), text: texts.map(() => -1) };
    bottle.setAttribute('transform', `translate(${f1(mouth[0])} ${f1(mouth[1])})`);
    last = NaN;
    return true;
  };

  // the stream as the pot stands now: from inside the syrup at the spout, over the spout's tip, out a little and down
  // into the first letter's stroke; a sheet over the spout, thinning as it falls, widening into the letter
  const streamNow = (a) => {
    const L0 = G.letters[0], P = (p) => rot(p, a, G.lip);
    const inner = P([LIP[0] - 1, LIP[1] + 1.5]), mid = P([5, 3]), tip = P([0, .8]);
    const out = P([-5, .6]), end = [L0.land[0], L0.land[1] + L0.stroke * .5];
    const pts = [inner, mid, tip];
    const c1 = [out[0] - 1, out[1] + 8], c2 = [end[0] - 2, out[1] + (end[1] - out[1]) * .55];
    for (let j = 1; j <= 26; j++) pts.push(bez(tip, c1, c2, end, j / 26));
    return run(pts, (t) => (t < .1 ? 6 : fillet(t, 6 - 2.8 * Math.pow((t - .1) / .9, .55), L0.stroke * .9, .84)));
  };
  const bez = (p0, p1, p2, p3, t) => { const u = 1 - t; return [u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0], u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]]; };

  const draw = () => {
    pending = 0;
    if (!G && !measure()) return;
    // the whole of it plays while the section passes: it begins as the section's top comes up past 66 % of the screen
    // and is done – the bottle full – when the section's foot stands at 88 %. The screen's height is the layout's (on
    // iOS it does not jump as the toolbar comes and goes)
    const vh = document.documentElement.clientHeight, from = G.top - vh * .66, to = G.top + G.h - vh * .88;
    const u = still ? G.total : Math.round(clamp((window.scrollY - from) / Math.max(1, to - from)) * G.total);
    if (u === last) return;
    last = u;
    const seg = (kind, i) => G.segs.find((s) => s.kind === kind && (i === undefined || s.i === i));
    const prog = (s) => clamp((u - s.start) / s.len);
    const fb = prog(seg('fill'));

    // the pot: it tips to the spill, on as it pours, and once the bottle is nearly full it rights itself a little
    const tip = prog(seg('tip')), after = clamp((u - seg('fall').start) / (seg('fill').start - seg('fall').start));
    const back = ease(clamp((fb - .55) / .45));
    const a = (tip < 1 ? A_SPILL * ease(tip) : A_SPILL + (A_END - A_SPILL) * after) * (1 - back) + A_SPILL * .82 * back;
    const tf = `translate(${f1(G.lip[0])} ${f1(G.lip[1])}) rotate(${(a * 180 / Math.PI).toFixed(2)})`;
    potBack.setAttribute('transform', tf); potFront.setAttribute('transform', tf);
    const P = cavity.map((p) => rot(p, a, G.lip));
    const V = Math.min(V0, held(a));
    const pouring = tip >= 1 && back < .5;
    const y = pouring ? Math.max(rot(LIP, a, G.lip)[1], levelFor(P, V)) : levelFor(P, V);
    const S = below(P, y);
    liquid.setAttribute('d', S.length > 2 ? `M${S.map(([x, yy]) => `${f1(x)} ${f1(yy)}`).join('L')}Z` : '');
    const xs = S.filter((p) => Math.abs(p[1] - y) < .01).map((p) => p[0]);
    const xa = Math.min(...xs), xb = Math.max(...xs);
    if (xs.length > 1) surf.setAttribute('d', `M${f1(xa + 1.5)} ${f1(y + 1.2)}H${f1(xb - 1.5)}`);
    const drift = clamp(-a / 1.1);
    cin.setAttribute('transform', `translate(${f1(xa + (xb - xa) * (.62 - .2 * drift))} ${f1(y - 1)}) rotate(${f1(-6 + a * 8)})`);
    star.setAttribute('transform', `translate(${f1(xa + (xb - xa) * (.3 - .12 * drift))} ${f1(y - 1.5)}) rotate(${f1(a * 40)})`);

    // the syrup outside the pot
    let d = '';
    const fall = seg('fall'), fp = prog(fall);
    if (u > fall.start) {
      const st = streamNow(a);
      if (fb < .78) {
        // over the spout first, then down, the head falling faster and faster; thinner as the pot empties
        const reach = st.len * Math.min(1, fp * fp * .8 + fp * .2);
        d += shape(st, reach, fp < 1 ? 5.2 : 0, 1 - .45 * clamp(fb / .78));
      } else {
        // it breaks: a drop hangs from the spout, the rest has run down
        const tipP = st.pts[2];
        d += tear(tipP.x - 1, tipP.y + 4, 2.8 * (1 - clamp((fb - .78) / .22) * .5));
      }
    }
    G.letters.forEach((l, i) => {
      const f = prog(seg('first', i)), g = prog(seg('rest', i));
      // the first letter: the syrup spreads from where the stream lands
      const ink = inks[i], R = f >= 1 ? ink.far * 1.2 : ink.far * ease(f) * 1.05, Rr = Math.round(R * 10) / 10;
      if (Rr !== ink.shown) {
        ink.shown = Rr;
        ink.front.setAttribute('cx', f1(l.land[0])); ink.front.setAttribute('cy', f1(l.land[1] + Rr * .3));
        ink.front.setAttribute('rx', f1(Rr)); ink.front.setAttribute('ry', f1(Rr * 1.3));
      }
      // the other letters, one after the other from the top, each starting a little after the one before
      const n = rests[i].length, total = (n - 1) * .55 + 1.4, tt = g * total;
      rests[i].forEach((ch, k) => {
        const fk = Math.round(ease(clamp((tt - k * .55) / 1.4)) * 100) / 100;
        if (fk !== G.chars[i][k]) { G.chars[i][k] = fk; ch.style.setProperty('--y', `${(fk * 140 - 15).toFixed(1)}%`); }
      });
      // its line comes in with the word, step by step with the scroll
      const o = Math.round(clamp((g - .45) / .55) * 100) / 100;
      if (o !== G.text[i]) { G.text[i] = o; texts[i].style.opacity = o; texts[i].style.transform = `translate3d(0, ${f1((1 - o) * 8)}px, 0)`; }
      facts[i].classList.toggle('is-full', g >= 1);
      // a drop forms at the foot, falls and runs on; once the next word is full (or the bottle nearly), the thread
      // thins and breaks, and a drop stays hanging from the foot
      const form = prog(seg('form', i)), dp = prog(seg('drip', i)), dr = G.drips[i];
      const done = i < G.letters.length - 1 ? prog(seg('rest', i + 1)) : clamp(fb / .8);
      const r0 = 2 + form * 2.8, foot = dr.pts[0];
      if (form > 0 && dp <= 0) d += tear(foot.x, foot.y + l.stroke * .55 + form * 6, r0);
      else if (dp > 0 && done < 1) d += shape(dr, dr.len * Math.min(1, dp * dp * .7 + dp * .3), dp < 1 ? r0 : 0, 1 - .5 * done);
      else if (done >= 1) d += tear(foot.x, foot.y + l.stroke * .55 + 4, 3.2);
      // and once its word is full, the letter's other feet grow short drips, tapering to a drop
      if (g > 0) for (const k of G.deco) if (k.i === i) {
        const len = k.ln.len * ease(clamp(g * 1.3));
        if (len > 1) d += shape(k.ln, len, 0) + tear(k.ln.pts.filter((q) => q.at <= len).pop().x, k.ln.pts.filter((q) => q.at <= len).pop().y, k.r * (.6 + .4 * ease(clamp(g * 1.3))));
      }
    });
    flow.setAttribute('d', d);
    // the bottle fills
    const top = NH + BOH - 3 - (BOH - 10) * ease(fb) * .9;
    bFill.setAttribute('y', f1(top)); bFill.setAttribute('height', f1(NH + BOH - top + 2));
    bSurf.setAttribute('d', fb > .02 ? `M${-BOW / 2} ${f1(top + 1)}H${BOW / 2}` : '');
  };

  const ask = () => { if (!pending) pending = requestAnimationFrame(draw); };
  pour.classList.add('is-live');
  const anew = () => { G = null; ask(); };
  window.addEventListener('resize', anew);
  if ('ResizeObserver' in window) new ResizeObserver(anew).observe(document.body);
  document.fonts?.ready.then(anew);
  // only while it is near the screen
  let near = false;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting === near) return;
    near = e.isIntersecting;
    if (near) { window.addEventListener('scroll', ask, { passive: true }); ask(); } else window.removeEventListener('scroll', ask);
  }, { rootMargin: '200px 0px' }).observe(pour);
})();
