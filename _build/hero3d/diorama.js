// Cascarup – the opening as a paper diorama at dusk, round the real cherry. A low sun of paper discs sinks behind
// hazy mountains; mist of tracing paper drifts between the ridges; a coffee plantation climbs its terraces – rows of
// shrubs, shade trees, a farmhouse with a lit window and raised beds where the cherries dry (that is where cascara
// comes from); the red soil in front lies in the dusk. Close to the eye a coffee branch, its veins glowing against
// the light, bears the real cherry. Birds cross the evening sky, fireflies hover over the plantation.
// Each layer casts its shadow on the one behind. The layers rise into place as the page opens, lean with the pointer
// and fly apart on the first scroll while the cherry stays and opens (page.js: layout at rest, update every frame).
// Only transforms and opacity move, and every moving thing is its own small element, so phones keep up.
const NS = 'http://www.w3.org/2000/svg';

// the colours: the brand's cream, terracotta and brown, warmed by the evening; the plants in warm olive
const C = {
  ink: '58, 33, 22',
  glow: ['#F7DDAE', '#F1C28C', '#E9AA79'],
  sun: ['#F8E5BC', '#F3D09A', '#EDB57B', '#E49862', '#D87A47'],
  cloudTop: '#F4E4C8', cloudLow: '#E8AE86',
  ridge: ['#E2AE86', '#D49670', '#BE8059', '#9A7448', '#77653B', '#55492B'],
  cut: ['#EDC09C', '#E1AA84', '#CF9670', '#AE8A5D', '#8B7A4E', '#6A5C3A'],
  row: ['#8A6C43', '#665A34', '#4B4127'],
  tree: ['#A57250', '#7E623E', '#5C4E30'],
  berry: '#B3262A', berryDark: '#8E2B1E',
  roof: '#B4592A', wall: '#E9C9A0', window: '#F8D88E', door: '#5A3A26',
  soil: '#3A2116', soilCut: '#9C4B23',
  leaf: ['#2F3B24', '#3B4A2B', '#485A31', '#34432A'], vein: '#E0A86B',
  twig: '#3A2116',
  close: ['#2E2617', '#2A2215'],
  mist: '#F6E3C8',
  bird: '#3A2116',
};

function seeded(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296);
}
const f1 = (v) => (Math.round(v * 10) / 10).toString();

// a smooth line through points (Catmull–Rom as cubic curves); closed or open
function curve(pts, closed = false) {
  const n = pts.length;
  if (n < 2) return '';
  let d = `M${f1(pts[0][0])} ${f1(pts[0][1])}`;
  const last = closed ? n : n - 1;
  for (let i = 0; i < last; i++) {
    const p0 = pts[closed ? (i - 1 + n) % n : Math.max(0, i - 1)], p1 = pts[i];
    const p2 = pts[(i + 1) % n], p3 = pts[closed ? (i + 2) % n : Math.min(n - 1, i + 2)];
    d += `C${f1(p1[0] + (p2[0] - p0[0]) / 6)} ${f1(p1[1] + (p2[1] - p0[1]) / 6)} ${f1(p2[0] - (p3[0] - p1[0]) / 6)} ${f1(p2[1] - (p3[1] - p1[1]) / 6)} ${f1(p2[0])} ${f1(p2[1])}`;
  }
  return closed ? `${d}Z` : d;
}
const disc = (cx, cy, r) => `M${f1(cx + r)} ${f1(cy)}a${f1(r)} ${f1(r)} 0 1 0 ${f1(-2 * r)} 0a${f1(r)} ${f1(r)} 0 1 0 ${f1(2 * r)} 0Z`;
const oval = (cx, cy, rx, ry) => `M${f1(cx + rx)} ${f1(cy)}a${f1(rx)} ${f1(ry)} 0 1 0 ${f1(-2 * rx)} 0a${f1(rx)} ${f1(ry)} 0 1 0 ${f1(2 * rx)} 0Z`;

// a coffee leaf from its stalk at (x, y) along the angle a: elliptic, with the drawn-out tip coffee leaves have and
// an edge that waves a little; with its veins (midrib and side veins), cut into the paper
function leaf(x, y, len, wid, a, rnd) {
  const n = 28, top = [], bot = [], wave = .025 + rnd() * .03, ph = rnd() * 6;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    let h = Math.sin(Math.PI * Math.pow(t, .78)) * (1 - .18 * t);
    if (t > .78) h *= 1 - Math.pow((t - .78) / .22, 1.3) * .6;
    h *= wid * (1 + wave * Math.sin(t * 20 + ph));
    top.push([t * len, -h]); bot.push([t * len, h * (.92 + .08 * Math.sin(t * 9 + ph))]);
  }
  const c = Math.cos(a), s = Math.sin(a);
  const at = ([u, v]) => [x + u * c - v * s, y + u * s + v * c];
  const shape = curve([...top, ...bot.reverse()].map(at), true);
  const bend = (rnd() - .5) * wid * .25;
  const mid = (t) => [t * len, Math.sin(Math.PI * t) * bend];
  let veins = curve([.04, .3, .55, .8, .93].map((t) => at(mid(t))));
  for (let k = 1; k <= 6; k++) {
    const t = .1 + k * .115, [u, v] = mid(t), half = Math.sin(Math.PI * Math.pow(t, .78)) * wid * (1 - .18 * t) * .78;
    for (const side of [-1, 1]) veins += curve([[u, v], [u + half * .45, v + side * half * .55], [u + half * .95, v + side * half * .86]].map(at));
  }
  return { shape, veins };
}

const crestAt = (crest, x) => {
  for (let i = 1; i < crest.length; i++) if (crest[i][0] >= x) {
    const [x0, y0] = crest[i - 1], [x1, y1] = crest[i];
    return y0 + (y1 - y0) * (x - x0) / (x1 - x0);
  }
  return crest[crest.length - 1][1];
};
const shifted = (crest, dy) => crest.map(([x, y]) => [x, y + dy + Math.sin(x * .013 + dy) * Math.abs(dy) * .08]);

// a row of coffee shrubs along a terrace: little domes side by side, here and there a red cherry
function shrubRow(crest, dy, from, to, bw, bh, rnd, berries) {
  let d = '', b = '';
  for (let x = from; x < to; x += bw * (1.55 + rnd() * .35)) {
    const y = crestAt(crest, x) + dy + Math.sin(x * .013 + dy) * Math.abs(dy) * .08, w = bw * (.85 + rnd() * .3), h = bh * (.8 + rnd() * .4);
    d += `M${f1(x - w)} ${f1(y)}A${f1(w)} ${f1(h)} 0 0 1 ${f1(x + w)} ${f1(y)}Z`;
    if (berries && rnd() < .45) b += disc(x + (rnd() - .5) * w, y - h * (.3 + rnd() * .4), Math.max(.8, bw * .13));
  }
  return { d, b };
}
// a shade tree, as coffee is grown under them: a slim trunk and a wide, flat crown
function shadeTree(x, y, s) {
  const trunk = `M${f1(x - s * .09)} ${f1(y)}L${f1(x - s * .04)} ${f1(y - s * 2.5)}L${f1(x + s * .04)} ${f1(y - s * 2.5)}L${f1(x + s * .09)} ${f1(y)}Z`;
  const crown = oval(x, y - s * 2.65, s * 1.35, s * .42) + oval(x - s * .7, y - s * 2.4, s * .78, s * .32) + oval(x + s * .72, y - s * 2.45, s * .85, s * .34) + oval(x + s * .1, y - s * 2.95, s * .7, s * .3);
  return trunk + crown;
}
// the farmhouse with its lit window, and beside it the raised beds where the cherries dry in the sun
function farm(x, y, s) {
  const w = s * 1.7, h = s;
  const wall = `M${f1(x - w / 2)} ${f1(y)}V${f1(y - h)}H${f1(x + w / 2)}V${f1(y)}Z`;
  const roof = `M${f1(x - w / 2 - s * .2)} ${f1(y - h + s * .04)}L${f1(x)} ${f1(y - h - s * .62)}L${f1(x + w / 2 + s * .2)} ${f1(y - h + s * .04)}Z`;
  const win = `M${f1(x - s * .52)} ${f1(y - h * .7)}h${f1(s * .34)}v${f1(s * .3)}h${f1(-s * .34)}Z`;
  const door = `M${f1(x + s * .12)} ${f1(y)}v${f1(-s * .55)}h${f1(s * .3)}v${f1(s * .55)}Z`;
  let beds = '', cherries = '';
  for (let k = 0; k < 2; k++) {
    const bx = x + w / 2 + s * (.55 + k * 1.55), by = y - s * .36, bw = s * 1.3;
    beds += `M${f1(bx)} ${f1(by)}h${f1(bw)}v${f1(s * .1)}h${f1(-bw)}Z`;
    for (const lx of [.08, .92]) beds += `M${f1(bx + bw * lx - s * .03)} ${f1(by + s * .1)}h${f1(s * .06)}V${f1(y)}h${f1(-s * .06)}Z`;
    for (let i = 0; i < 9; i++) cherries += disc(bx + bw * (.08 + i * .105), by - s * .045, s * .055);
  }
  return { wall, roof, win, door, beds, cherries, glow: [x - s * .35, y - h * .55, s * .8] };
}
// a heap of cherries, thrown away once the beans are out (the skins we make our syrup from): a mound of dark red
// paper, and on it the round shapes of single cherries
function heap(x, y, w, rnd) {
  const h = w * .42, top = [];
  for (let i = 0; i <= 20; i++) {
    const t = -1 + 2 * i / 20;
    top.push([x + t * w / 2, y - h * Math.pow(Math.max(0, 1 - t * t), .7) - (i % 2 ? h * .05 : 0) * (1 - Math.abs(t))]);
  }
  const mound = `${curve(top)}L${f1(x + w / 2)} ${f1(y)}L${f1(x - w / 2)} ${f1(y)}Z`;
  const tones = ['#B3262A', '#C9452B', '#8E2B1E', '#A8321F', '#6E2A1A'];
  const cherries = tones.map(() => '');
  for (let i = 0; i < 46; i++) {
    const t = rnd() * 2 - 1, up = rnd() * Math.pow(Math.max(0, 1 - t * t), .7) * .92;
    const k = Math.floor(rnd() * tones.length);
    cherries[k] += disc(x + t * w * .46, y - h * up - w * .02, w * (.035 + rnd() * .018));
  }
  return { mound, cherries: cherries.map((d, k) => `<path fill="${tones[k]}" d="${d}"/>`).join('') };
}
// a coffee shrub close by, drawn in its own small frame (base at the bottom middle) so it can sway in the wind
function shrubPiece(s, rnd) {
  const w = s * 2.6, h = s * 2.3, bx = w / 2, by = h;
  let leaves = '', stems = '', berries = '';
  // a lower tier spreading wide, an upper tier reaching up, each leaf from a short branch off the stem
  const tiers = [[11, .55, .95, 1.05, .32], [7, .95, .78, .7, .3]];
  tiers.forEach(([n, up, spread, len0, wid], k) => {
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (i - (n - 1) / 2) * (spread * 2.6 / n) + (rnd() - .5) * .2;
      const ox = bx + Math.cos(a) * s * .18, oy = by - s * up * .45 + Math.sin(a) * s * .12, len = s * len0 * (.7 + rnd() * .35);
      stems += `M${f1(bx)} ${f1(by - s * up * .3)}L${f1(ox)} ${f1(oy)}`;
      leaves += `<path fill="${C.leaf[(i + k) % 4]}" d="${leaf(ox, oy, len, len * wid, a + (rnd() - .5) * .25, rnd).shape}"/>`;
      if ((i + k) % 3 === 1) berries += disc(ox + Math.cos(a) * s * .2, oy + Math.sin(a) * s * .2 + s * .06, s * .06) + disc(ox + Math.cos(a) * s * .26 + s * .05, oy + Math.sin(a) * s * .2 + s * .13, s * .055);
    }
  });
  stems = `M${f1(bx)} ${f1(by)}L${f1(bx)} ${f1(by - s * .5)}` + stems;
  return { w, h, svg: `<path fill="none" stroke="${C.twig}" stroke-width="${f1(s * .06)}" stroke-linecap="round" d="${stems}"/>${leaves}<path fill="${C.berry}" d="${berries}"/>` };
}
function tuft(s, rnd) {
  const w = s * 1.6, h = s * 1.4;
  let d = '';
  for (let i = 0; i < 7; i++) {
    const x = w * (.2 + i * .1), lean = (rnd() - .5) * s * .9, top = h * (.15 + rnd() * .4), bw = s * .045;
    d += `M${f1(x - bw)} ${f1(h)}Q${f1(x + lean * .3)} ${f1((h + top) / 2)} ${f1(x + lean)} ${f1(top)}Q${f1(x + lean * .3 + bw)} ${f1((h + top) / 2)} ${f1(x + bw)} ${f1(h)}Z`;
  }
  return { w, h, svg: `<path fill="${C.leaf[1]}" d="${d}"/>` };
}
// a coffee farmer, cut from paper: straw hat, terracotta shirt, a basket on the back; arms and legs are their own
// shapes so they can swing as she walks (styles.css), the whole figure is moved along the terrace (update)
function farmer(s) {
  const w = s * 1.1, h = s * 2.05, cx = w / 2;
  const leg = (dx, cls) => `<path class="${cls}" fill="#4A3424" d="M${f1(cx + dx - s * .07)} ${f1(h * .6)}h${f1(s * .14)}l${f1(s * .02)} ${f1(h * .38)}h${f1(-s * .18)}z"/>`;
  const arm = (dx, cls) => `<path class="${cls}" fill="#9C4B23" d="M${f1(cx + dx - s * .05)} ${f1(h * .3)}h${f1(s * .1)}l${f1(s * .02)} ${f1(h * .27)}h${f1(-s * .13)}z"/>`;
  return {
    w, h,
    svg: leg(-s * .09, 'dio__leg dio__leg--b') + arm(s * .16, 'dio__arm dio__arm--b')
      + `<path fill="#A8743E" d="M${f1(cx - s * .52)} ${f1(h * .27)}h${f1(s * .34)}l${f1(-s * .04)} ${f1(h * .3)}h${f1(-s * .26)}z"/>`
      + `<path fill="none" stroke="#7A5128" stroke-width="${f1(s * .03)}" d="M${f1(cx - s * .5)} ${f1(h * .36)}h${f1(s * .3)}M${f1(cx - s * .48)} ${f1(h * .45)}h${f1(s * .28)}"/>`
      + `<path fill="#B4592A" d="M${f1(cx - s * .2)} ${f1(h * .28)}h${f1(s * .4)}l${f1(s * .03)} ${f1(h * .34)}h${f1(-s * .46)}z"/>`
      + leg(s * .09, 'dio__leg dio__leg--f')
      + `<circle fill="#8A5A3C" cx="${f1(cx + s * .02)}" cy="${f1(h * .2)}" r="${f1(s * .14)}"/>`
      + `<ellipse fill="#D9B27A" cx="${f1(cx + s * .02)}" cy="${f1(h * .13)}" rx="${f1(s * .34)}" ry="${f1(s * .07)}"/>`
      + `<path fill="#C99E62" d="M${f1(cx - s * .12)} ${f1(h * .13)}q${f1(s * .14)} ${f1(-s * .26)} ${f1(s * .28)} 0z"/>`
      + arm(-s * .16, 'dio__arm dio__arm--f'),
  };
}
// a paper cloud at dusk: a long rounded base with puffs, lit warm from below
function cloud(x, y, w) {
  const h = w * .16, rr = h / 2;
  return `M${f1(x - w / 2 + rr)} ${f1(y)}H${f1(x + w / 2 - rr)}A${f1(rr)} ${f1(rr)} 0 0 0 ${f1(x + w / 2 - rr)} ${f1(y - h)}H${f1(x - w / 2 + rr)}A${f1(rr)} ${f1(rr)} 0 0 0 ${f1(x - w / 2 + rr)} ${f1(y)}Z`
    + disc(x - w * .18, y - h - w * .03, w * .13) + disc(x + w * .06, y - h - w * .07, w * .17) + disc(x + w * .27, y - h - w * .01, w * .1);
}

// at rest the cherry is this much smaller than in the story (page: data-box); the camera grows it as the story starts
const FRUIT_AT_REST = .74;

// the layers, back to front: depth (lean with the pointer), and where each flies on the first scroll (share of the
// width, of the height, growth) – on phones the camera flies into the scene instead (flyNarrow)
const LAYERS = [
  { id: 'sky', depth: .06, fly: [0, -.05, .12], flyNarrow: [0, -.02, .1] },
  { id: 'far', depth: .16, fly: [0, .16, -.03], flyNarrow: [0, .04, .16] },
  { id: 'mid', depth: .3, fly: [0, .28, -.01], flyNarrow: [0, .08, .3] },
  { id: 'near', depth: .46, fly: [0, .42, .02], flyNarrow: [0, .12, .45] },
  { id: 'soil', depth: .62, fly: [0, .6, .04], flyNarrow: [0, .16, .6] },
  { id: 'branch', depth: .82, fly: [.55, -.06, .3], flyNarrow: [.5, -.08, .3] },
  { id: 'close', depth: 1, fly: [.8, .15, .7], flyNarrow: [.8, .15, .7] },
];

// The grain of paper, laid onto every layer once as it is painted (light and dark specks, only where there is paper)
let grainTile = null;
function grainOn(ctx, w, h) {
  if (!grainTile) {
    grainTile = document.createElement('canvas'); grainTile.width = grainTile.height = 128;
    const g = grainTile.getContext('2d'), im = g.createImageData(128, 128), rnd = seeded(99);
    for (let i = 0; i < im.data.length; i += 4) {
      const v = rnd(), light = v > .5, a = Math.abs(v - .5) * 2;
      im.data[i] = light ? 255 : 58; im.data[i + 1] = light ? 246 : 33; im.data[i + 2] = light ? 232 : 22; im.data[i + 3] = Math.round(a * a * 30);
    }
    g.putImageData(im, 0, 0);
  }
  ctx.save(); ctx.globalCompositeOperation = 'source-atop'; ctx.fillStyle = ctx.createPattern(grainTile, 'repeat'); ctx.fillRect(0, 0, w, h); ctx.restore();
}
// how sharp each layer is painted (device pixels per CSS pixel, at most): the far, soft ones need less. On phones
// (three device pixels to the point) every layer twice over: at once the paper's grain was blown up into dots and the
// shapes went soft; the grain is drawn in the canvas's own pixels, so it stays fine only if those are small.
const SHARP = { sky: 1, far: 1, mid: 1.5, near: 1.5, soil: 1.5, branch: 2, close: 1 };
const sharp = (id, dpr) => Math.min(dpr, dpr > 2 ? 2 : SHARP[id] || 1);

// Every layer is drawn once as a picture (the SVG painted onto a canvas, while the loading screen still shows), so
// what moves afterwards are finished pictures: nothing is drawn again while the page runs, only moved and faded.
export function createDiorama(root) {
  root.innerHTML = '';
  // the paper under it all, with its grain: a layer of its own, so the diorama fades layer by layer (one opacity on
  // the whole would have the browser paint all of it again, off screen, in every frame of the fade)
  const ground = document.createElement('div');
  ground.className = 'dio__ground';
  root.append(ground);
  const layers = LAYERS.map((L, i) => {
    const wrap = document.createElement('div');
    wrap.className = `dio__layer dio__layer--${L.id}`;
    wrap.style.setProperty('--i', i);
    const rise = document.createElement('div');
    rise.className = 'dio__rise';
    const paint = document.createElement('canvas');
    paint.className = 'dio__paint';
    const svg = document.createElementNS(NS, 'svg');   // used only if painting into the canvas fails
    svg.setAttribute('aria-hidden', 'true'); svg.style.display = 'none';
    const fx = document.createElement('div');     // what moves on its own (clouds, mist, birds, the farmer)
    fx.className = 'dio__fx';
    const back = document.createElement('div');   // what moves behind the drawing (the sun's halo)
    back.className = 'dio__fx';
    rise.append(back, paint, svg, fx); wrap.append(rise); root.append(wrap);
    return { ...L, wrap, paint, svg, fx, back, tf: '' };
  });
  const byId = Object.fromEntries(layers.map((L) => [L.id, L]));
  let key = '', px = 0, py = 0, tpx = 0, tpy = 0;
  let heaps = [], walker = null, gen = 0, lastOpacity = -1, gone = null, fades = [];
  let markDrawn; const drawn = new Promise((res) => { markDrawn = res; });

  // a small drawing that moves on its own: an SVG in its own element (CSS animates the element, never the drawing)
  const piece = (layer, cls, x, y, w, h, inner, style = '', behind = false) => {
    const el = document.createElement('div');
    el.className = cls;
    el.style.cssText = `left:${f1(x)}px;top:${f1(y)}px;width:${f1(w)}px;height:${f1(h)}px;${style}`;
    el.innerHTML = inner ? `<svg viewBox="0 0 ${f1(w)} ${f1(h)}" width="${f1(w)}" height="${f1(h)}" aria-hidden="true">${inner}</svg>` : '';
    (behind ? layer.back : layer.fx).append(el);
    // what fades with the diorama: the piece itself, or for a bird (whose flight already sets its opacity) its wings
    fades.push(cls === 'dio__bird' ? el.firstElementChild : el);
    return el;
  };

  // ---- the composition, round the cherry (box: its centre and radii) and clear of the words (copy) ----------------
  function layout(box, W, H, narrow, copy) {
    const k = [box.x, box.y, box.rx, W, H, narrow, copy && copy.top].map((v) => Math.round(+v || 0)).join(',');
    if (k === key || !W || !H || !box.rx) return;
    key = k;
    for (const L of layers) { L.fx.innerHTML = ''; L.back.innerHTML = ''; }
    fades = []; lastOpacity = -1;
    heaps = []; walker = null;
    // the fruit (fr, fry) is smaller at rest than in the story; the scene is drawn at the story's size of it (r, ry)
    const { x: cx, y: cy } = box, fr = box.rx, fry = box.ry || box.rx * 1.27, r = fr / FRUIT_AT_REST, ry = fry / FRUIT_AT_REST;
    const rnd = seeded(1712);
    const shadow = (id, dy, blur, o) => `<filter id="${id}" x="-10%" y="-30%" width="120%" height="170%"><feDropShadow dx="0" dy="${dy}" stdDeviation="${blur}" flood-color="rgb(${C.ink})" flood-opacity="${o}"/></filter>`;
    const svgs = {};
    // the land runs to the foot of the page
    const floor = H + 20;
    const clear = copy ? copy.bottom + 34 : H * .7;           // on wide screens the land stays below the words
    const free = (x, y) => narrow || !copy || x > copy.right + 40 || y > clear + 8;   // clear of the words?
    const freeClip = (id) => `<clipPath id="${id}"><path d="M${f1(copy ? copy.right + 40 : 0)} -60H${f1(W + 60)}V${f1(H + 60)}H-60V${f1(clear + 8)}H${f1(copy ? copy.right + 40 : 0)}Z"/></clipPath>`;

    // the sky: the glow of the setting sun, the sun itself in discs of paper, low behind the cherry
    const sx = cx + r * (narrow ? .1 : .28), sy = cy + ry * (narrow ? .12 : .18), R = r * (narrow ? 2.2 : 2.6);
    {
      const G = Math.max(W, H) * (narrow ? .75 : .62);
      svgs.sky = `<defs>${shadow('dsky', 3, 6, .16)}<radialGradient id="glow" cx="${f1(sx)}" cy="${f1(sy)}" r="${f1(G)}" gradientUnits="userSpaceOnUse">`
        + `<stop offset="0" stop-color="${C.glow[0]}"/><stop offset=".22" stop-color="${C.glow[1]}" stop-opacity=".9"/>`
        + `<stop offset=".48" stop-color="${C.glow[2]}" stop-opacity=".42"/><stop offset="1" stop-color="${C.glow[2]}" stop-opacity="0"/></radialGradient></defs>`
        + `<radialGradient id="sund" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#FCEFD2"/><stop offset=".45" stop-color="#F6D7A2"/><stop offset="1" stop-color="#ECB077"/></radialGradient>`
        + `<linearGradient id="sky" x1="0" y1="0" x2="0" y2="${f1(cy + ry * 1.3)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E6D3B7" stop-opacity="0"/><stop offset=".55" stop-color="#EDCDA6" stop-opacity=".5"/><stop offset="1" stop-color="#EBBE8F" stop-opacity=".75"/></linearGradient>`
        + `<rect width="${W}" height="${H}" fill="url(#sky)"/><rect width="${W}" height="${H}" fill="url(#glow)"/>`
        + `<path filter="url(#dsky)" fill="url(#sund)" d="${disc(sx, sy, R)}"/>`;
      const H2 = R * 1.75;
      piece(byId.sky, 'dio__halo', sx - H2, sy - H2, H2 * 2, H2 * 2,
        `<defs><radialGradient id="halo"><stop offset=".5" stop-color="#FBE3B8" stop-opacity=".55"/><stop offset="1" stop-color="#FBE3B8" stop-opacity="0"/></radialGradient></defs>`
        + `<circle cx="${f1(H2)}" cy="${f1(H2)}" r="${f1(H2)}" fill="url(#halo)"/>`
        + `<circle cx="${f1(H2)}" cy="${f1(H2)}" r="${f1(R * 1.13)}" fill="none" stroke="#FBE8C4" stroke-opacity=".75" stroke-width="${f1(Math.max(1.5, R * .022))}"/>`
        + `<circle cx="${f1(H2)}" cy="${f1(H2)}" r="${f1(R * 1.3)}" fill="none" stroke="#FBE8C4" stroke-opacity=".4" stroke-width="${f1(Math.max(1, R * .014))}"/>`, '', true);
      // clouds, lit from below, drifting slowly
      const clouds = narrow
        ? [[W * .2, cy - ry * 1.05, r * 1.7], [W * .82, cy - ry * 1.5, r * 1.3]]
        : [[cx - r * 3.1, cy - ry * 1.2, r * 2], [cx + r * 2.75, Math.max(cy - ry * 1.4, 150), r * 1.35], [cx - r * 1.2, Math.max(cy - ry * 2.1, 130), r * 1.1]];
      clouds.forEach(([x, y, w], i) => {
        const hh = w * .5, id = `cg${i}`;
        piece(byId.sky, 'dio__cloud', x - w * .6, y - hh, w * 1.2, hh + 12,
          `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset=".35" stop-color="${C.cloudTop}"/><stop offset="1" stop-color="${C.cloudLow}"/></linearGradient>${shadow(`${id}s`, 3, 4, .14)}</defs>`
          + `<path filter="url(#${id}s)" fill="url(#${id})" d="${cloud(w * .6, hh, w)}"/>`, `--drift:${f1((i % 2 ? -1 : 1) * r * 1.5)}px;--dur:${22 + i * 6}s;--delay:${-i * 7}s`);
      });
      // birds crossing the evening sky, in a loose line
      const birds = narrow ? 3 : 5, top = narrow ? Math.max(96, cy - ry * 1.9) : Math.max(160, cy - ry * 1.9);
      for (let i = 0; i < birds; i++) {
        const s = r * (narrow ? .26 : .22) * (1 - i * .06);
        piece(byId.sky, 'dio__bird', W * 1.04, top + i * r * .22 + (i % 2) * r * .12, s * 2, s,
          `<path fill="none" stroke="${C.bird}" stroke-width="${f1(Math.max(1.2, s * .12))}" stroke-linecap="round" stroke-linejoin="round" d="M${f1(s * .05)} ${f1(s * .55)}Q${f1(s * .55)} ${f1(s * .05)} ${f1(s)} ${f1(s * .62)}Q${f1(s * 1.45)} ${f1(s * .05)} ${f1(s * 1.95)} ${f1(s * .55)}"/>`,
          `--fly:${f1(-W * 1.25)}px;--rise:${f1(-ry * (.3 + i * .05))}px;--dur:${26 + i * 1.6}s;--delay:${f1(i * .9 + 2.5)}s;--flap:${f1(.55 + i * .07)}s`);
      }
    }

    // the ridges: on wide screens they rise to the right, behind the cherry, and stay below the words on the left;
    // on phones they fill the room between the cherry and the words
    const ridge = (i, n) => {
      const u = i / (n - 1);
      const span = floor - (cy + ry * .2);
      const right = narrow ? cy + ry * .2 + span * (.02 + u * .62) : cy + ry * (.1 + u * 1.6);
      const left = narrow ? cy + ry * .2 + span * (.12 + u * .62) : Math.max(clear, cy + ry * .9) + u * (H - Math.max(clear, cy + ry * .9)) * .78;
      const amp = narrow ? span * (.1 - u * .055) : ry * (.62 - u * .38);
      const kk = [rnd() * 6.3, rnd() * 6.3, rnd() * 6.3], ff = [1.3 + rnd() * .8, 3.2 + rnd() * 1.4, 7 + rnd() * 3];
      const crest = [];
      for (let j = 0; j <= 64; j++) {
        const x = -60 + (W + 120) * j / 64, t = Math.min(1, Math.max(0, x / W));
        const base = left + (right - left) * t * t * (3 - 2 * t);
        let y = base - amp * (.55 * Math.sin(t * ff[0] * Math.PI + kk[0]) + .3 * Math.sin(t * ff[1] * Math.PI + kk[1]) + .15 * Math.sin(t * ff[2] * Math.PI + kk[2]));
        if (!narrow && copy) y += Math.min(1, Math.max(0, (copy.right + 220 - x) / 220)) * Math.max(0, clear + amp * 1.1 - base);
        crest.push([x, y]);
      }
      return { crest, d: `${curve(crest)}L${f1(W + 60)} ${f1(floor)}L-60 ${f1(floor)}Z`, u };
    };
    const R6 = Array.from({ length: 6 }, (_, i) => ridge(i, 6));
    const terr = (crest, gap, count, i) => `<path fill="none" stroke="${C.cut[i]}" stroke-width="${f1(1.1 + i * .25)}" stroke-linecap="round" stroke-opacity=".85" d="${Array.from({ length: count }, (_, j) => curve(shifted(crest, gap * (j + 1)))).join('')}"/>`;
    const ridgeSvg = (i, inner = '') => `<path filter="url(#dr${i})" fill="${C.ridge[i]}" d="${R6[i].d}"/>${inner}`;
    const shadows = (ids) => ids.map((i) => shadow(`dr${i}`, 2 + i, 4 + i, .14 + i * .03)).join('');
    const xFrom = -20, xTo = W + 20;
    const mist = (crest, dy, th, i) => {
      const top = shifted(crest, dy - th), bot = shifted(crest, dy + th).reverse();
      return `<defs><linearGradient id="mg${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${C.mist}" stop-opacity="0"/><stop offset=".5" stop-color="${C.mist}" stop-opacity=".55"/><stop offset="1" stop-color="${C.mist}" stop-opacity="0"/></linearGradient></defs>`
        + `<path fill="url(#mg${i})" d="${curve([...top, ...bot], true)}"/>`;
    };

    // far: the hazy mountains and the first terraces; tracing-paper mist drifting between them
    svgs.far = `<defs>${shadows([0, 1])}</defs>` + ridgeSvg(0) + ridgeSvg(1, terr(R6[1].crest, ry * .075, 4, 1));
    const strip = (layer, crest, dy, th, i, drift, dur) => {
      const ys = crest.map(([, y]) => y), top = Math.min(...ys) + dy - th * 1.3, bot = Math.max(...ys) + dy + th * 1.3;
      piece(layer, 'dio__mist', -W * .1, top, W * 1.2, bot - top, `<g transform="translate(${f1(W * .1)} ${f1(-top)})">${mist(crest, dy, th, i)}</g>`, `--drift:${f1(drift)}px;--dur:${dur}s`);
    };
    strip(byId.far, R6[1].crest, ry * .05, ry * (narrow ? .14 : .2), 0, r * .7, 28);

    // middle: the plantation proper – terraces, rows of shrubs, shade trees, the farm with its drying beds
    {
      const c2 = R6[2].crest, c3 = R6[3].crest;
      let inner = ridgeSvg(2, terr(c2, ry * .085, 5, 2));
      let trees = '';
      const spots = narrow ? [.1, .34, .7, .93] : [.52, .63, .78, .9, .97];
      for (const t of spots) {
        const x = W * t + (rnd() - .5) * r * .4, y = crestAt(c2, x) + ry * .12, s = r * (narrow ? .3 : .26) * (.8 + rnd() * .4);
        if (free(x, y - s * 3)) trees += shadeTree(x, y, s);
      }
      inner += `<path fill="${C.tree[0]}" d="${trees}"/>` + ridgeSvg(3);
      let rows = '', berries = '';
      for (let j = 0; j < 4; j++) {
        const dy = ry * (.12 + j * .13), bw = r * (narrow ? .085 : .075) * (1 + j * .12);
        const row = shrubRow(c3, dy, xFrom, xTo, bw, bw * .62, rnd, j > 1);
        rows += row.d; berries += row.b;
      }
      inner += `<g${narrow ? '' : ' clip-path="url(#free3)"'}><path fill="${C.row[0]}" d="${rows}"/><path fill="${C.berry}" d="${berries}"/></g>`;
      // the farm, right of the words (left on phones), and the glow of its window at dusk
      const fx0 = narrow ? W * .2 : Math.max(copy ? copy.right + r * 1.4 : W * .6, cx - r * 2.6), s = r * (narrow ? .3 : .28);
      const f = farm(fx0, crestAt(c3, fx0) + ry * .1, s);
      inner += `<path fill="${C.tree[1]}" d="${f.beds}"/><path fill="${C.berry}" d="${f.cherries}"/>`;
      // the farmer's walk: along this terrace, between the farm's beds and the far side of the scene
      // she walks the nearer terrace, where she can be seen (behind the shrubs that sway in front of her)
      const fs = r * (narrow ? .5 : .42), fm = farmer(fs);
      const from = narrow ? W * .08 : Math.max(copy ? copy.right + 60 : W * .45, fx0 - s * 1.5), to = narrow ? W * .7 : Math.min(W * .95, cx + r * 1.4);
      walker = { el: piece(byId.near, 'dio__farmer', 0, 0, fm.w, fm.h, `<g class="dio__farmer-body">${fm.svg}</g>`), crest: R6[4].crest, dy: ry * .12, from, to, w: fm.w, h: fm.h };
      for (const [hx, hw] of narrow ? [[fx0 + s * 5.2, s * 2.2], [fx0 - s * 2.4, s * 1.6]] : [[fx0 - s * 2.6, s * 2.1], [fx0 + s * 5.4, s * 2.6]]) {
        const hy = crestAt(c3, hx) + ry * .12;
        if (!free(hx - hw / 2, hy - hw * .4)) continue;
        const hp = heap(hx, hy, hw, rnd);
        heaps.push([hx, hy, hw]);
        inner += `<path filter="url(#dheap)" fill="#7A2418" d="${hp.mound}"/>${hp.cherries}`;
      }
      svgs.mid = `<defs>${shadows([2, 3])}${shadow('dheap', 3, 3, .3)}<radialGradient id="wglow"><stop offset="0" stop-color="${C.window}" stop-opacity=".45"/><stop offset="1" stop-color="${C.window}" stop-opacity="0"/></radialGradient>${narrow ? '' : freeClip('free3')}</defs>${inner}`;
      strip(byId.mid, c3, -ry * (narrow ? .12 : .3), ry * (narrow ? .1 : .13), 1, -r * .6, 36);
    }

    // near: the last two ridges with dense rows, and fireflies over them
    {
      let inner = '';
      for (const i of [4, 5]) {
        inner += ridgeSvg(i);
        let rows = '', berries = '';
        for (let j = 0; j < (i === 4 ? 3 : 2); j++) {
          const dy = ry * (.14 + j * .17), bw = r * (narrow ? .11 : .1) * (1 + j * .15) * (i === 5 ? 1.25 : 1);
          const row = shrubRow(R6[i].crest, dy, xFrom, xTo, bw, bw * .62, rnd, true);
          rows += row.d; berries += row.b;
        }
        inner += `<g${narrow ? '' : ` clip-path="url(#free${i})"`}><path fill="${C.row[i - 3]}" d="${rows}"/><path fill="${C.berryDark}" d="${berries}"/></g>`;
      }
      svgs.near = `<defs>${shadows([4, 5])}${narrow ? '' : freeClip('free4') + freeClip('free5')}</defs>${inner}`;
      // a big heap of cherries on the near terraces
      {
        const hx = narrow ? W * .78 : Math.max(copy ? copy.right + r * 2.2 : W * .55, cx - r * 1.6), hw = r * (narrow ? 1.25 : 1.15);
        const hy = crestAt(R6[4].crest, hx) + ry * .2;
        if (free(hx - hw / 2, hy - hw * .4)) {
          const hp = heap(hx, hy, hw, rnd);
          heaps.push([hx, hy, hw]);
          svgs.near += `<defs>${shadow('dheap2', 4, 4, .32)}</defs><path filter="url(#dheap2)" fill="#7A2418" d="${hp.mound}"/>${hp.cherries}`;
        }
      }
      // coffee shrubs close by, swaying in the evening wind
      const spots = narrow ? [.06, .34, .62] : [.56, .67, .8, .93];
      spots.forEach((t, i) => {
        const x = W * t + (rnd() - .5) * r * .3, y = crestAt(R6[5].crest, x) + ry * .2, sz = r * (narrow ? .5 : .46) * (.85 + rnd() * .3);
        if (!free(x, y - sz * 2)) return;
        const sp = shrubPiece(sz, rnd);
        piece(byId.near, 'dio__sway', x - sp.w / 2, y - sp.h, sp.w, sp.h, sp.svg, `--dur:${f1(4.2 + i * .7)}s;--delay:${f1(-i * 1.3)}s;--deg:${f1(1.6 + rnd())}deg`);
      });
    }

    // the soil in front, in the dusk: the darkest paper, rows dotted in terracotta (on phones the island's torn edge)
    {
      const top = H - Math.max(narrow ? 30 : 40, H * (narrow ? .05 : .075));
      const crest = [];
      for (let j = 0; j <= 48; j++) { const x = -60 + (W + 120) * j / 48; crest.push([x, top - Math.sin(x * .006 + 1) * ry * .09 - Math.sin(x * .019) * ry * .04]); }
      let d = `${curve(crest)}L${f1(W + 60)} ${f1(H + 50)}L-60 ${f1(H + 50)}Z`;
      const tufts = narrow ? [.12, .45, .7, .93] : [.5, .6, .71, .83, .95];
      tufts.forEach((t, i) => {
        const x = W * t + (rnd() - .5) * r * .4, y = crestAt(crest, x) + 3, sz = r * (narrow ? .42 : .38) * (.8 + rnd() * .4);
        if (!free(x, y - sz)) return;
        const tf = tuft(sz, rnd);
        piece(byId.soil, 'dio__sway', x - tf.w / 2, y - tf.h, tf.w, tf.h, tf.svg, `--dur:${f1(2.8 + i * .5)}s;--delay:${f1(-i * .9)}s;--deg:${f1(3 + rnd() * 2)}deg`);
      });
      svgs.soil = `<defs>${shadow('dsoil', 7, 10, .34)}</defs><path filter="url(#dsoil)" fill="${C.soil}" d="${d}"/>`
        + `<path fill="none" stroke="${C.soilCut}" stroke-width="1.8" stroke-linecap="round" stroke-dasharray=".5 10" d="${[1, 2, 3].slice(0, narrow ? 2 : 3).map((j) => curve(shifted(crest, ry * .09 * j))).join('')}"/>`;
    }

    // the branch, in coffee's own proportions: a strong twig in from the right edge, running just under the cherry
    // and on to a young tip; large leaves in pairs, a crown of them behind the fruit; and the cherries as they grow,
    // a cluster at the node – the real one, and beside it three of paper ripening from green to orange
    {
      const pts = [[W + r * .7, cy - ry * (narrow ? .05 : .2)], [cx + r * 1.7, cy + ry * .95], [cx + fr * .05, cy + fry * .97],
        [cx - r * .75, cy + ry * .86], [cx - r * 1.2, cy + ry * .64]];
      // the twig as a smooth line, sampled evenly so leaves can sit at given shares of its length
      const dense = [];
      const P = [pts[0], ...pts, pts[pts.length - 1]];
      for (let i = 1; i < P.length - 2; i++) for (let k = 0; k < 20; k++) {
        const t = k / 20, p0 = P[i - 1], p1 = P[i], p2 = P[i + 1], p3 = P[i + 2];
        dense.push([0, 1].map((j) => .5 * (2 * p1[j] + (-p0[j] + p2[j]) * t + (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * t * t + (-p0[j] + 3 * p1[j] - 3 * p2[j] + p3[j]) * t * t * t)));
      }
      dense.push(pts[pts.length - 1]);
      const len = [0];
      for (let i = 1; i < dense.length; i++) len.push(len[i - 1] + Math.hypot(dense[i][0] - dense[i - 1][0], dense[i][1] - dense[i - 1][1]));
      const total = len[len.length - 1];
      const along = (t) => {
        const target = t * total;
        let i = 1; while (i < len.length - 1 && len[i] < target) i++;
        const u = (target - len[i - 1]) / Math.max(1e-6, len[i] - len[i - 1]);
        return [dense[i - 1][0] + (dense[i][0] - dense[i - 1][0]) * u, dense[i - 1][1] + (dense[i][1] - dense[i - 1][1]) * u];
      };
      // where the node under the cherry lies on the twig
      let node = 0, best = Infinity;
      for (let i = 0; i <= 100; i++) { const [x, y] = along(i / 100), d = Math.hypot(x - pts[2][0], y - pts[2][1]); if (d < best) { best = d; node = i / 100; } }
      let back = '', front = '', fruit = '';
      const veins = [];
      const put = (t, l, wd, a, shade, behind = false) => {
        const [x, y] = along(t), lf = leaf(x, y, l * r, l * wd * r, a, rnd);
        const p = `<path fill="${C.leaf[shade]}" d="${lf.shape}"/>`;
        if (behind) back += p; else front += p;
        veins.push(lf.veins);
      };
      const k = narrow ? .74 : .76;
      // the crown behind the fruit, from the node – none to its upper left, where the cherry's name stands
      put(node, 3.3 * k, .31, -1.2, 0, true);
      put(node, 2.8 * k, .3, -.75, 1, true);
      put(node, 2.5 * k, .3, -3.05, 3, true);
      // pairs along the twig, towards the edge
      put(node * .62, 3.2 * k, .32, -1.45, 2);
      put(node * .6, 2.9 * k, .31, 1.2, 0);
      if (!narrow) {
        put(node * .25, 3 * k, .31, -1.15, 3);
        put(node * .22, 2.7 * k, .3, 1.5, 1);
      }
      // the young tip: two small, lighter leaves
      put(.97, 1.25 * k, .3, -2.55, 2);
      put(.97, 1.05 * k, .3, -1.85, 2);
      const L = [], Rt = [];
      for (let i = 0; i <= 40; i++) {
        const t = i / 40, [x, y] = along(t), [x2, y2] = along(Math.min(1, t + .01)), [x0, y0] = along(Math.max(0, t - .01));
        const nx = -(y2 - y0), ny = x2 - x0, nl = Math.hypot(nx, ny) || 1, wv = r * (.14 - .075 * t);
        L.push([x + nx / nl * wv, y + ny / nl * wv]); Rt.push([x - nx / nl * wv, y - ny / nl * wv]);
      }
      const twig = curve([...L, ...Rt.reverse()], true);
      // the cluster at the node: three paper cherries round the real one, nearly its size, on short stalks
      const [nx0, ny0] = along(node);
      for (const [dx, dy, c, rr] of [[-.66, .02, '#8FA041', .4], [.7, -.06, '#D8A23C', .44], [.36, .3, '#D2652F', .46]]) {
        const fx = nx0 + dx * fr, fy = ny0 + dy * fr, a = rr * fr, b = rr * fr * 1.16;
        fruit += `<path fill="none" stroke="${C.twig}" stroke-width="${f1(fr * .05)}" stroke-linecap="round" d="M${f1(nx0)} ${f1(ny0)}L${f1(fx)} ${f1(fy - b * .8)}"/>`
          + `<ellipse fill="${c}" cx="${f1(fx)}" cy="${f1(fy)}" rx="${f1(a)}" ry="${f1(b)}"/>`
          + `<ellipse fill="#FFF6E6" fill-opacity=".16" cx="${f1(fx - a * .32)}" cy="${f1(fy - b * .34)}" rx="${f1(a * .28)}" ry="${f1(b * .2)}" transform="rotate(-30 ${f1(fx - a * .32)} ${f1(fy - b * .34)})"/>`
          + `<circle fill="${C.twig}" fill-opacity=".5" cx="${f1(fx)}" cy="${f1(fy + b * .78)}" r="${f1(a * .13)}"/>`;
      }
      svgs.branch = `<defs>${shadow('dbr', 8, 10, .34)}</defs><g filter="url(#dbr)">${back}<path fill="${C.twig}" d="${twig}"/>${front}${fruit}</g>`
        + `<path fill="none" stroke="${C.vein}" stroke-opacity=".8" stroke-width="${f1(Math.max(1, r * .013))}" stroke-linecap="round" d="${veins.join('')}"/>`;
    }
    // close to the eye: big dark leaves at the edges, out of focus (wide screens)
    {
      const rr = seeded(77);
      const spots = [];
      let d = '';
      spots.forEach(([x, y, len, wid, a], i) => { d += `<path fill="${C.close[i % 2]}" d="${leaf(x, y, len * r, wid * r, a, rr).shape}"/>`; });
      svgs.close = d ? `<defs><filter id="dclose" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${f1(Math.max(2, r * .025))}"/><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="rgb(${C.ink})" flood-opacity=".35"/></filter></defs><g filter="url(#dclose)">${d}</g>` : '';
    }
    for (const L of layers) L.wrap.style.transformOrigin = narrow ? `${f1(cx)}px ${f1(cy)}px` : '';
    paintAll(svgs, W, H, ++gen).then(() => markDrawn(), () => markDrawn());
  }

  // each layer's drawing becomes a picture: the SVG through an image into the layer's canvas, with the grain
  // where a drawing has paint: looked for on a small copy, with a margin; the whole screen if the browser won't say
  function bounds(img, W, H, margin) {
    const q = 8, w = Math.ceil(W / q), h = Math.ceil(H / q);
    try {
      const probe = document.createElement('canvas'); probe.width = w; probe.height = h;
      const pc = probe.getContext('2d', { willReadFrequently: true });
      pc.drawImage(img, 0, 0, w, h);
      const a = pc.getImageData(0, 0, w, h).data;
      let x0 = w, y0 = h, x1 = -1, y1 = -1;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        if (a[(y * w + x) * 4 + 3] > 2) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      }
      if (x1 < 0) return { x: 0, y: 0, w: W, h: H };
      const x = Math.max(0, x0 * q - margin), y = Math.max(0, y0 * q - margin);
      return { x, y, w: Math.min(W, (x1 + 1) * q + margin) - x, h: Math.min(H, (y1 + 1) * q + margin) - y };
    } catch { return { x: 0, y: 0, w: W, h: H }; }
  }
  async function paintAll(svgs, W, H, g) {
    const dpr = window.devicePixelRatio || 1;
    await Promise.all(layers.map(async (L) => {
      const inner = svgs[L.id] || '', c = L.paint, k = sharp(L.id, dpr);
      if (!inner) { c.width = c.height = 0; return; }
      const doc = `<svg xmlns="${NS}" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${inner}</svg>`;
      const url = URL.createObjectURL(new Blob([doc], { type: 'image/svg+xml' }));
      try {
        const img = new Image();
        img.src = url;
        await img.decode();
        if (g !== gen) return;                                   // laid out anew meanwhile
        // only as large as what is drawn on it (the land lies low, the branch to one side): every layer is laid over
        // the screen in every frame, and empty canvas costs as much as painted
        const b = bounds(img, W, H, L.id === 'branch' ? 24 : 8);
        c.width = Math.round(b.w * k); c.height = Math.round(b.h * k);
        Object.assign(c.style, { left: `${b.x}px`, top: `${b.y}px`, width: `${b.w}px`, height: `${b.h}px` });
        // the branch sways about where it enters, at the right edge
        if (L.id === 'branch') c.style.transformOrigin = `${W - b.x}px ${H * .45 - b.y}px`;
        const ctx = c.getContext('2d');
        ctx.drawImage(img, -b.x * k, -b.y * k, W * k, H * k);
        grainOn(ctx, c.width, c.height);
        c.style.display = ''; L.svg.style.display = 'none';
      } catch {
        // this browser cannot paint the drawing into a canvas: it goes in as a drawing
        if (g !== gen) return;
        L.svg.setAttribute('viewBox', `0 0 ${W} ${H}`); L.svg.setAttribute('width', W); L.svg.setAttribute('height', H);
        L.svg.innerHTML = inner; L.svg.style.display = ''; c.style.display = 'none';
      } finally {
        URL.revokeObjectURL(url);
      }
    }));
  }

  // ---- every frame: the lean with the pointer, a breath of wind, and the flight on the first scroll ----------------
  function update(go, opacity, t, W, H, narrow = false, away = opacity <= 0) {
    px += (tpx - px) * .06; py += (tpy - py) * .06;
    if (Math.abs(tpx - px) < .001) px = tpx;
    if (Math.abs(tpy - py) < .001) py = tpy;
    const e = go * go * (3 - 2 * go);
    for (const L of layers) {
      const f = narrow ? L.flyNarrow : L.fly;
      const x = -px * L.depth * 26 + f[0] * e * W, y = -py * L.depth * 16 + f[1] * e * H, s = 1 + f[2] * e;
      const tf = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${s.toFixed(4)})`;
      if (tf !== L.tf) { L.tf = tf; L.wrap.style.transform = tf; }
    }
    if (opacity !== lastOpacity) {
      lastOpacity = opacity;
      const o = opacity.toFixed(3);
      // on each thing itself, never on a group (a group's opacity is painted again off screen, frame by frame)
      ground.style.opacity = o;
      for (const L of layers) { L.paint.style.opacity = o; L.svg.style.opacity = o; }
      for (const el of fades) el.style.opacity = o;
    }
    const isGone = away && opacity <= 0;
    if (isGone !== gone) { gone = isGone; root.classList.toggle('is-gone', isGone); }   // nothing moves unseen
    if (!isGone) walk(t);
  }
  // the farmer: there and back along the terrace in about forty seconds each way, facing the way she goes
  let lastFace = 0;
  function walk(t) {
    if (!walker) return;
    const span = walker.to - walker.from, period = Math.max(24, span / 9) * 2;
    const ph = (t % period) / period, u = ph < .5 ? ph * 2 : 2 - ph * 2, face = ph < .5 ? 1 : -1;
    const x = walker.from + span * u, y = crestAt(walker.crest, x) + walker.dy;
    walker.el.style.transform = `translate3d(${(x - walker.w / 2).toFixed(1)}px, ${(y - walker.h).toFixed(1)}px, 0)`;
    if (face !== lastFace) { lastFace = face; walker.el.style.setProperty('--face', face); }
  }
  const lean = (x, y) => { tpx = x; tpy = y; };
  return { layout, update, lean, layers, ready: () => key !== '', whenDrawn: () => drawn };
}
