// Cascarup – Cascara, poured (the section on dried cascara). A glass pot of our syrup with a stick of cinnamon and a
// star anise in it, drawn flat like the rest of the page, tips as the section comes up the screen. The syrup inside
// stays level (its area kept, the surface worked out for every tilt), rises to the spout and runs over it, then falls
// in one straight stream past the four words – each comes in as the stream passes it – into a bottle of Cozy Spice,
// which slowly fills. Everything is a function of the scroll, so it plays back as well as on; it is worked out only
// while the section is near the screen, and only when the scroll has moved.
(() => {
  const pour = document.querySelector('[data-pour]');
  if (!pour) return;
  const NS = 'http://www.w3.org/2000/svg';
  const svg = pour.querySelector('.pour__flow');
  const facts = [...pour.querySelectorAll('.pour__fact')];
  const catcher = pour.querySelector('.pour__catch');
  const labelSrc = catcher.querySelector('img').src;
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
  const defs = el('defs', {});

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

  // ---- the bottle that catches the stream: our Cozy Spice flask, drawn – its mouth at 0,0, a short neck, round
  // shoulders, a flat body, our label on its face. Behind the glass the syrup rises as the stream runs in. ----------
  const FW = 38, NW = 11, NECK = 20, SH = 42, FB = 130, G2 = 2.6;            // half widths, neck foot, shoulder, floor, glass
  const flaskD = (w, n, top, floor) => `M${-n} ${top}V${NECK}C${-n} ${NECK + 7} ${-w} ${SH - 12} ${-w} ${SH}V${floor - 9}`
    + `Q${-w} ${floor} ${-w + 9} ${floor}H${w - 9}Q${w} ${floor} ${w} ${floor - 9}V${SH}C${w} ${SH - 12} ${n} ${NECK + 7} ${n} ${NECK}V${top}Z`;
  const INNER_FLOOR = FB - G2, FULL = SH - 8;                                 // the syrup's floor; how high it rises
  const LBL = { w: 48, h: 48 * 219 / 168, y: 52 };
  const bottle = el('g', {});
  el('ellipse', { cx: 0, cy: FB + 3, rx: FW - 2, ry: 4, fill: 'rgba(58, 33, 22, .13)' }, bottle);
  el('path', { d: flaskD(FW, NW, 6, FB), fill: 'rgba(255, 250, 240, .4)' }, bottle);
  const inside = el('clipPath', { id: 'pour-flask', clipPathUnits: 'userSpaceOnUse' }, defs);
  el('path', { d: flaskD(FW - G2, NW - G2, 6, INNER_FLOOR) }, inside);
  const filled = el('g', { 'clip-path': 'url(#pour-flask)' }, bottle);
  const fill = el('rect', { x: -FW, y: INNER_FLOOR, width: 2 * FW, height: 0, fill: SYRUP }, filled);
  const fillTop = el('path', { fill: 'none', stroke: SURFACE, 'stroke-width': 2.2, 'stroke-linecap': 'round' }, filled);
  // where the stream meets the syrup: a ring on the surface
  const ring = el('ellipse', { cx: 0, cy: 0, rx: 6.5, ry: 1.7, fill: 'none', stroke: 'rgba(255, 236, 214, .42)', 'stroke-width': 1, visibility: 'hidden' }, filled);

  // everything the syrup does outside the pot: one flat shape, with a thin light down it
  const flow = el('path', { fill: SYRUP });
  const shine = el('path', { fill: 'none', stroke: 'rgba(255, 236, 214, .32)', 'stroke-width': 1, 'stroke-linecap': 'round' });

  const front = el('g', {});
  const tag = el('clipPath', { id: 'pour-label', clipPathUnits: 'userSpaceOnUse' }, defs);
  el('rect', { x: -LBL.w / 2, y: LBL.y, width: LBL.w, height: f1(LBL.h), rx: 2.5 }, tag);
  el('image', { href: labelSrc, x: -LBL.w / 2, y: LBL.y, width: LBL.w, height: f1(LBL.h), 'clip-path': 'url(#pour-label)', preserveAspectRatio: 'none' }, front);
  el('path', { d: flaskD(FW, NW, 6, FB), fill: 'none', stroke: 'rgba(58, 33, 22, .5)', 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, front);
  el('rect', { x: -NW - 3, y: 0, width: 2 * NW + 6, height: 7, rx: 2.5, fill: 'rgba(255, 250, 240, .55)', stroke: 'rgba(58, 33, 22, .5)', 'stroke-width': 1.6 }, front);
  // its glints: a long strip down the left of the glass, a short one on the right, one on the shoulder
  el('path', { d: `M${-FW + 6} ${SH + 6}V${FB - 16}`, stroke: 'rgba(255, 255, 255, .6)', 'stroke-width': 3.2, 'stroke-linecap': 'round' }, front);
  el('path', { d: `M${FW - 6} ${SH + 10}V${SH + 26}`, stroke: 'rgba(255, 255, 255, .5)', 'stroke-width': 2.6, 'stroke-linecap': 'round' }, front);
  el('path', { d: `M${-NW - 4} ${NECK + 6}Q${-FW + 8} ${SH - 10} ${-FW + 5} ${SH - 1}`, fill: 'none', stroke: 'rgba(255, 255, 255, .55)', 'stroke-width': 2.4, 'stroke-linecap': 'round' }, front);

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
  const A_SPILL = tiltFor(V0), A_END = tiltFor(V0 * .36);

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
  const bez = (p0, p1, p2, p3, t) => { const u = 1 - t; return [u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0], u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]]; };
  const STREAM = 4.4;

  let G = null, last = '', pending = 0;
  const measure = () => {
    const r = pour.getBoundingClientRect(), c = catcher.getBoundingClientRect();
    if (!r.width || !c.width) return false;
    svg.setAttribute('viewBox', `0 0 ${Math.round(r.width)} ${Math.round(pour.offsetHeight)}`);
    // the stream falls straight down the middle of the bottle's room, left of the words
    const x = c.left - r.left + c.width / 2, flaskTop = c.top - r.top;
    bottle.setAttribute('transform', `translate(${f1(x)} ${f1(flaskTop)})`);
    front.setAttribute('transform', `translate(${f1(x)} ${f1(flaskTop)})`);
    const dts = facts.map((f) => f.querySelector('dt').getBoundingClientRect());
    // the pot hangs over the first word, its floor clear of it; its spout a little right of the stream, so the syrup
    // leaving it curves out and down into the line
    const lip = [x + 4, dts[0].top - r.top - BOT - 12];
    const vh = document.documentElement.clientHeight;
    G = {
      top: r.top + window.scrollY, x, lip, flaskTop, flaskH: c.height,
      words: dts.map((d) => d.top - r.top + d.height * .55), shown: facts.map(() => null),
      floor: flaskTop + INNER_FLOOR, tipLen: Math.min(240, vh * .3), fillLen: Math.max(220, vh * .34),
    };
    last = '';
    return true;
  };

  // the stream as the pot stands now, down to a depth: from inside the syrup at the spout over its tip, out a little
  // and down into the line; a sheet over the spout, narrowing as it falls, then even (swelling a touch here and there,
  // the swellings running down with the scroll)
  const streamTo = (a, depth, flowing, phase) => {
    const P = (p) => rot(p, a, G.lip), x = G.x;
    const inner = P([LIP[0] - 1, LIP[1] + 1.5]), mid = P([5, 3]), tip = P([0, .8]), out = P([-4, .6]);
    const bend = [x, G.lip[1] + 22];
    const pts = [inner, mid, tip];
    for (let j = 1; j <= 10; j++) pts.push(bez(tip, [out[0] - 1, out[1] + 4], [x, out[1] + 10], bend, j / 10));
    const n = Math.max(1, Math.ceil((depth - bend[1]) / 12));
    for (let j = 1; j <= n; j++) pts.push([x, bend[1] + (depth - bend[1]) * j / n]);
    const ln = run(pts, () => 0);
    for (const q of ln.pts) {
      const fallen = q.y - G.lip[1];
      q.w = STREAM + 1.6 * Math.exp(-Math.max(0, fallen) / 16) + (fallen > 30 ? .32 * Math.sin((q.y - phase) * .05) : 0);
    }
    return shape(ln, Infinity, flowing ? 3.3 : 0);
  };

  const draw = () => {
    pending = 0;
    if (!G && !measure()) return;
    // the line that plays it: 62 % down the layout's screen (on iOS it does not jump as the toolbar comes and goes),
    // in the section's own coordinates. The pot tips while that line comes down to its spout; from there the stream's
    // head follows it down past the words into the bottle, which then fills while the line goes on
    const vh = document.documentElement.clientHeight;
    const s = still ? 1e6 : window.scrollY + vh * .62 - G.top;
    const tip = clamp((s - (G.lip[1] - G.tipLen)) / G.tipLen);
    const f = clamp((s - G.floor) / G.fillLen);
    const key = `${Math.round(s)}|${vh}`;
    if (key === last) return;
    last = key;

    // the pot: it tips to the spill, then on, slowly, as it empties
    const going = clamp((s - G.lip[1]) / (G.floor + G.fillLen - G.lip[1]));
    const a = tip < 1 ? A_SPILL * ease(tip) : A_SPILL + (A_END - A_SPILL) * going;
    const tf = `translate(${f1(G.lip[0])} ${f1(G.lip[1])}) rotate(${(a * 180 / Math.PI).toFixed(2)})`;
    potBack.setAttribute('transform', tf); potFront.setAttribute('transform', tf);
    const P = cavity.map((p) => rot(p, a, G.lip));
    const V = Math.min(V0, held(a));
    const pouring = tip >= 1;
    const y = pouring ? Math.max(rot(LIP, a, G.lip)[1], levelFor(P, V)) : levelFor(P, V);
    const S = below(P, y);
    liquid.setAttribute('d', S.length > 2 ? `M${S.map(([x, yy]) => `${f1(x)} ${f1(yy)}`).join('L')}Z` : '');
    const xs = S.filter((p) => Math.abs(p[1] - y) < .01).map((p) => p[0]);
    const xa = Math.min(...xs), xb = Math.max(...xs);
    if (xs.length > 1) surf.setAttribute('d', `M${f1(xa + 1.5)} ${f1(y + 1.2)}H${f1(xb - 1.5)}`);
    const drift = clamp(-a / 1.1);
    cin.setAttribute('transform', `translate(${f1(xa + (xb - xa) * (.62 - .2 * drift))} ${f1(y - 1)}) rotate(${f1(-6 + a * 8)})`);
    star.setAttribute('transform', `translate(${f1(xa + (xb - xa) * (.3 - .12 * drift))} ${f1(y - 1.5)}) rotate(${f1(a * 40)})`);

    // the bottle: its syrup rises from the floor towards the shoulders
    const level = INNER_FLOOR - (INNER_FLOOR - FULL) * f;
    fill.setAttribute('y', f1(level)); fill.setAttribute('height', f1(INNER_FLOOR - level + 1));
    fillTop.setAttribute('d', f > .005 ? `M${-FW} ${f1(level + 1)}H${FW}` : '');
    ring.setAttribute('cy', f1(level + 1.2));
    ring.setAttribute('visibility', pouring && f > .02 ? 'visible' : 'hidden');
    // the stream: from the spout down to its head, which follows the line until it meets the syrup in the bottle
    const surface = G.flaskTop + level;
    if (pouring) {
      const depth = Math.min(s, surface), flowing = s < surface;
      flow.setAttribute('d', streamTo(a, depth, flowing, window.scrollY * .7));
      shine.setAttribute('d', depth - G.lip[1] > 40 ? `M${f1(G.x - 1)} ${f1(G.lip[1] + 30)}V${f1(depth - 6)}` : '');
    } else { flow.setAttribute('d', ''); shine.setAttribute('d', ''); }

    // each word, and its line, comes in as the stream passes it
    G.words.forEach((w, i) => {
      const on = pouring && s >= w;
      if (on !== G.shown[i]) { G.shown[i] = on; facts[i].classList.toggle('is-in', on); }
    });
    // the menu pill steps aside while the bottle passes under it at the foot of the screen
    const top = G.top + G.flaskTop - window.scrollY, low = top < vh && top + G.flaskH > vh - 96;
    if (low !== G.low) { G.low = low; document.documentElement.classList.toggle('is-pouring', low); }
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
    if (near) { window.addEventListener('scroll', ask, { passive: true }); ask(); }
    else { window.removeEventListener('scroll', ask); document.documentElement.classList.remove('is-pouring'); if (G) G.low = false; }
  }, { rootMargin: '200px 0px' }).observe(pour);
})();
