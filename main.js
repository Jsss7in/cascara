// Cascarup – page behaviour: arrival, nav, reveals, the drinks tabs and the stands. The shop lives in shop.js.
// The cherry lives in hero3d.js, the way to pay in checkout.js, the participation certificates in ps.js.
(() => {
  const root = document.documentElement;
  const T = window.cascarupT || ((s) => s);   // the page's language (i18n.py puts its words in the head)
  const nav = document.querySelector('[data-nav]');
  const hero = document.querySelector('[data-hero]');
  const reveals = [...document.querySelectorAll('[data-reveal]')];

  // The bar is a veil in the colour of what lies beneath it. When the edge between two sections passes
  // under it, the veil splits at exactly that line, so the edge simply slides under the bar instead of the
  // bar changing colour. Safari's status bar takes the colour of the veil's top. In the hero, hero.js
  // reports its colours (hero.edge): the top colour, dissolving into the floor colour at the bottom.
  const RGB = { terra: [180, 89, 42], paper: [230, 211, 183], night: [43, 24, 16], photo: [28, 19, 13] };
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  // the fade into the night passes a warm middle (as its CSS gradient does), never a grey
  const WARM = [156, 106, 74];
  const fadeMix = (own, t) => (own === RGB.night ? (t < .45 ? mix(RGB.paper, WARM, t / .45) : mix(WARM, own, (t - .45) / .55)) : mix(RGB.paper, own, t));
  const toned = [...document.querySelectorAll('main [data-tone], footer[data-tone]')];
  // Where the sections and the elements still to come in sit on the page: measured once, and again only when the
  // page's height or the window changes, so a scroll just compares numbers. Measuring them on every scroll (dozens of
  // elements, several times over) made the opening stutter.
  let geo = null;
  const spot = (el) => {
    if (!geo) {
      geo = new Map(); const y = window.scrollY;
      for (const e of [...toned, ...reveals]) { const r = e.getBoundingClientRect(); geo.set(e, { top: r.top + y, bottom: r.bottom + y }); }
    }
    const g = geo.get(el), y = window.scrollY;
    return g ? { top: g.top - y, bottom: g.bottom - y } : el.getBoundingClientRect();
  };
  if ('ResizeObserver' in window) new ResizeObserver(() => { geo = null; }).observe(document.body);
  window.addEventListener('resize', () => { geo = null; });
  // A section with data-fade blends into the paper over --fade px at the edges named (as its CSS gradient does).
  const fades = new Map();
  const fadeOf = (el) => {
    if (!fades.has(el)) fades.set(el, el.dataset.fade ? parseFloat(getComputedStyle(el).getPropertyValue('--fade')) || 0 : 0);
    return fades.get(el);
  };
  window.addEventListener('resize', () => fades.clear());
  const colourOf = (el, y) => {
    if (el !== hero) {
      const own = RGB[el.dataset.tone], f = fadeOf(el);
      if (!f) return own;
      const r = spot(el), edges = el.dataset.fade;
      if (edges.includes('top') && y - r.top < f) return fadeMix(own, Math.max(0, y - r.top) / f);
      if (edges.includes('bottom') && r.bottom - y < f) return fadeMix(own, Math.max(0, r.bottom - y) / f);
      return own;
    }
    const e = hero.edge;
    if (!e) return RGB[hero.dataset.tone] || RGB.paper;   // until the opening reports its colours
    const t = e.fadeH ? Math.min(1, Math.max(0, (y - e.fadeFrom) / e.fadeH)) : +(y > e.fadeFrom);
    return mix(e.top, e.floor, t * t);
  };
  const sectionAt = (y) => {
    let found = toned[0];
    for (const el of toned) if (spot(el).top <= y) found = el;
    return found;
  };
  const light = (c) => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255 > 0.6;
  // written only when it changes: the bar is repainted on every scroll, and an unchanged write still costs a frame
  const put = (k, v) => { if (nav.style.getPropertyValue(k) !== v) nav.style.setProperty(k, v); };
  const ink = (v) => { if (nav.dataset.ink !== v) nav.dataset.ink = v; };

  // the bar's height and where its links' line runs: they change only with the window or the bar's own size
  let bar = null;
  const barBox = () => {
    if (!bar) { const inner = nav.firstElementChild; bar = { h: nav.offsetHeight, mid: inner.offsetTop + inner.offsetHeight / 2 }; }
    return bar;
  };
  if (nav && 'ResizeObserver' in window) new ResizeObserver(() => { bar = null; }).observe(nav);
  window.addEventListener('resize', () => { bar = null; });
  function paintNav() {
    const { h, mid } = barBox();
    const above = sectionAt(0), below = sectionAt(h);
    // over a fade the bar is a gradient itself, from the colour at its top to the colour at its foot
    const fading = !!(above.dataset.fade || below.dataset.fade);
    nav.classList.toggle('is-fading', fading);
    if (fading) {
      const c0 = colourOf(above, 0), c1 = colourOf(below, h), c = (v) => `rgb(${v})`;
      put('--nav-c', c(c0)); put('--nav-c2', c(c1));
      put('--nav-main', c(colourOf(sectionAt(h * .25), h * .25)));
      ink(light(colourOf(sectionAt(mid), mid)) ? 'dark' : 'light');
      return;
    }
    // within one section the veil is a single colour, the one halfway down it
    const top = colourOf(above, below === above ? h / 2 : 0);
    let under = top, split = h;
    if (below !== above) {
      under = colourOf(below, h);
      split = Math.max(0, spot(below).top);
    }
    // Safari colours its status bar from the bar's background colour (not the picture drawn over it), so
    // that colour is whichever section fills most of the bar; a sliver at the top never decides it.
    const main = split <= h * 0.5 ? under : top;
    // The opening is paper like the bar, so the bar is simply the colour of what lies beneath, there too.
    const css = (c) => `rgb(${c})`;
    put('--nav-c', css(top));
    put('--nav-c2', css(under));
    put('--nav-main', css(main));
    put('--nav-split', `${split.toFixed(1)}px`);
    // the links take the contrast of what runs behind them, their own line
    const behindText = split <= mid ? below : above;
    const textColour = behindText === below ? under : top;
    ink(light(textColour) ? 'dark' : 'light');
  }

  // With a mouse the bar stays pinned. On touch screens it sits at the top of the page and scrolls away with
  // it, and stays away: a fixed bar makes iOS Safari freeze the strip behind the clock in the bar's colour,
  // which then shows as a stripe of the wrong colour once the page beneath has turned another colour.
  const touch = window.matchMedia('(pointer: coarse)');
  function placeNav() {
    const pin = !touch.matches;
    if (nav.classList.contains('is-pinned') !== pin) nav.classList.toggle('is-pinned', pin);
  }

  // With its toolbar out, Safari paints the strip behind the clock in the page colour; keep that the colour
  // of whatever is at the top of the screen.
  let canvas = '';
  function paintCanvas() {
    const c = `rgb(${colourOf(sectionAt(0), 0)})`;
    if (c !== canvas) { canvas = c; root.style.backgroundColor = c; }
  }
  // what comes in as it is reached: its top above 88 % of the screen
  function update() {
    if (nav) placeNav();
    if (nav && toned.length) paintNav();
    if (toned.length) paintCanvas();
    if (!window.ResizeObserver) geo = null;
    const line = window.innerHeight * 0.88;
    for (const el of reveals) if (!el.classList.contains('is-in') && spot(el).top < line) el.classList.add('is-in');
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  // Safari may run this script before it knows the window's height (a page opened from another app, or restored
  // from its cache): then nothing would show until the first scroll, so look again once the page is there
  window.addEventListener('load', update);
  window.addEventListener('pageshow', update);
  // hero.js reports its colours after this script has run for the same scroll, so repaint with them
  if (hero) hero.addEventListener('tone', () => { if (nav) paintNav(); if (toned.length) paintCanvas(); });
  update();

  // Once the page is shown and has a quiet moment, the pictures further down are fetched and decoded one by one, so
  // none is decoded only as it scrolls into view (that cost a stutter on reaching the shop and the team).
  const warmPictures = () => {
    const imgs = [...document.querySelectorAll('img[loading="lazy"]')];
    const idle = window.requestIdleCallback || ((f) => setTimeout(f, 200));
    const next = () => {
      const img = imgs.shift();
      if (!img) return;
      img.loading = 'eager';
      (img.decode ? img.decode() : Promise.resolve()).catch(() => {}).then(() => idle(next, { timeout: 1500 }));
    };
    idle(next, { timeout: 2000 });
  };
  if (hero) document.addEventListener('cascarup:shown', () => setTimeout(warmPictures, 2500), { once: true });
  else window.addEventListener('load', () => setTimeout(warmPictures, 1000), { once: true });

  // Cascara, poured (the section on dried cascara): as the pot comes up the page it tips – one frame of the sheet
  // at a time, moved on the GPU – and once it pours, its syrup runs over the rim and falls into the first word, which
  // fills; from the word's first letter it drips on into the next, and so down to the last. Each word's line comes in
  // as the word fills. Everything follows the scroll, both ways, and is worked out only while it is on screen.
  const pour = document.querySelector('[data-pour]');
  if (pour) {
    const pot = pour.querySelector('.pour__pot'), sheet = pot.querySelector('img'), svg = pour.querySelector('.pour__flow');
    const syrup = pour.querySelector('.pour__syrup'), shine = pour.querySelector('.pour__shine');
    const facts = [...pour.querySelectorAll('.pour__fact')];
    const N = +pour.dataset.frames, COLS = +pour.dataset.cols, FROM = +pour.dataset.pourAt;
    const lips = pour.dataset.lips.split(' ').map((p) => p.split(',').map(Number));
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
    const WORD = 70;                     // how much scroll a word takes to fill before the syrup drips on
    let G = null, frame = -1, shownFront = -1, full = -1, pending = 0;
    // where a word's first letter is: the syrup lands in it and drips on from it
    const letter = (f) => {
      const node = f.querySelector('.pour__word').firstChild, range = document.createRange();
      range.setStart(node, 0); range.setEnd(node, 1);
      const r = range.getBoundingClientRect(), fs = parseFloat(getComputedStyle(f.querySelector('dt')).fontSize);
      return { x: r.left + r.width * .5, top: r.top + fs * .2, bottom: r.bottom - fs * .2 };
    };
    // a line of syrup, sampled every few pixels: its centre (x, y), its width, and how far along it is
    const run = (pts, widths) => {
      const out = []; let len = 0;
      for (let i = 0; i < pts.length; i++) {
        if (i) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
        out.push({ x: pts[i][0], y: pts[i][1], w: widths(i / (pts.length - 1)), at: len });
      }
      return { pts: out, len };
    };
    const bez = (p0, p1, p2, p3, t) => { const u = 1 - t; return [u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0], u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]]; };
    const bump = (t, at, w) => Math.exp(-((t - at) * (t - at)) / (2 * w * w));
    const measure = () => {
      const r = pour.getBoundingClientRect(), ox = r.left, oy = r.top;
      const L = facts.map((f) => { const l = letter(f); return { x: l.x - ox, top: l.top - oy, bottom: l.bottom - oy }; });
      G = { top: r.top + window.scrollY, w: pot.offsetWidth, h: pot.offsetHeight, x: pot.offsetLeft, y: pot.offsetTop, L, segs: [] };
      svg.setAttribute('viewBox', `0 0 ${Math.round(r.width)} ${Math.round(pour.offsetHeight)}`);
      // the drips between the words: a thin thread, a little uneven, with beads of syrup along it and a neck where it
      // leaves the letter; each is its own, so none looks like the other
      let at = 0;
      G.segs.push({ kind: 'stream', start: 0, len: 0 });
      L.forEach((l, i) => {
        G.segs.push({ kind: 'word', i, start: 0, len: WORD });
        if (i < L.length - 1) {
          const n = L[i + 1], k = i + 1, n0 = 8 + Math.round((n.top - l.bottom) / 3), pts = [];
          for (let j = 0; j <= n0; j++) {
            const t = j / n0;
            pts.push([l.x + (n.x - l.x) * t * t * (3 - 2 * t) + Math.sin(t * 9 + k) * 1.2 * Math.sin(t * Math.PI), l.bottom - 2 + (n.top + 3 - l.bottom) * t]);
          }
          const seg = run(pts, (t) => 2 + 4 * bump(t, 0, .06) + .45 * Math.sin(t * 23 + k));
          // round beads of syrup hanging on the thread, a little longer than wide, each its own size
          seg.beads = [.24 + .07 * Math.sin(k * 2.1), .52 + .08 * Math.cos(k * 1.3), .8 + .05 * Math.sin(k * 3.7)]
            .map((t, b) => ({ ...seg.pts[Math.round(t * (seg.pts.length - 1))], r: 3.1 + ((k * 7 + b * 5) % 4) * .45 }));
          G.segs.push({ kind: 'drip', i, start: 0, ...seg });
        }
      });
      frame = -1; shownFront = NaN; full = -1;
    };
    // the stream from the lip of the current frame: over the rim, out a little, falling and thinning into the first word
    const stream = (f) => {
      const [lx0, ly0] = lips[f], lx = G.x + lx0 * G.w, ly = G.y + ly0 * G.h, T = G.L[0];
      const p0 = [lx + 7, ly - 4], p1 = [lx - 6, ly - 4.5], p2 = [lx - 10, ly + 14], p3 = [T.x, T.top + 4];
      const c0 = [lx - 9, ly + 6], c1 = [T.x - 2, (ly + T.top) / 2];
      const pts = [];
      for (let j = 0; j <= 10; j++) pts.push(bez(p0, p1, p2, [lx - 9, ly + 6], j / 10));
      for (let j = 1; j <= 24; j++) { const t = j / 24; const q = bez([lx - 9, ly + 6], c0, c1, p3, t); pts.push([q[0] + Math.sin(t * 7) * .8 * t, q[1]]); }
      return run(pts, (t) => (t < .2 ? 9.5 - 6 * (t / .2) * (t / .2) * .4 : 7.1 - 3.2 * Math.pow((t - .2) / .8, .6)) + .35 * Math.sin(t * 31));
    };
    // the outline of a line of syrup up to a length, and its gleam; at its tip, while it runs, a drop
    const shape = (line, upto, tip) => {
      const P = line.pts.filter((q) => q.at <= upto);
      if (P.length < 2) return ['', ''];
      const left = [], right = [];
      for (let i = 0; i < P.length; i++) {
        const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)];
        let nx = -(b.y - a.y), ny = b.x - a.x; const l = Math.hypot(nx, ny) || 1; nx /= l; ny /= l;
        left.push(`${(P[i].x + nx * P[i].w / 2).toFixed(1)} ${(P[i].y + ny * P[i].w / 2).toFixed(1)}`);
        right.push(`${(P[i].x - nx * P[i].w / 2).toFixed(1)} ${(P[i].y - ny * P[i].w / 2).toFixed(1)}`);
      }
      let d = `M${left.join('L')}L${right.reverse().join('L')}Z`;
      const e = P[P.length - 1];
      if (tip) { const r = Math.max(3.2, e.w * .62); d += `M${(e.x - r).toFixed(1)} ${(e.y + r * .2).toFixed(1)}a${r.toFixed(1)} ${(r * 1.12).toFixed(1)} 0 1 0 ${(2 * r).toFixed(1)} 0a${r.toFixed(1)} ${(r * 1.12).toFixed(1)} 0 1 0 ${(-2 * r).toFixed(1)} 0Z`; }
      const g = P.filter((q) => q.w > 3).map((q) => `${(q.x - q.w * .22).toFixed(1)} ${q.y.toFixed(1)}`);
      let gl = g.length > 1 ? `M${g.join('L')}` : '';
      for (const b of line.beads || []) {
        if (b.at > upto) break;
        const r = b.r, ry = r * 1.22;
        d += `M${(b.x - r).toFixed(1)} ${b.y.toFixed(1)}a${r.toFixed(1)} ${ry.toFixed(1)} 0 1 0 ${(2 * r).toFixed(1)} 0a${r.toFixed(1)} ${ry.toFixed(1)} 0 1 0 ${(-2 * r).toFixed(1)} 0Z`;
        gl += `M${(b.x - r * .5).toFixed(1)} ${(b.y - ry * .35).toFixed(1)}a${(r * .55).toFixed(1)} ${(ry * .55).toFixed(1)} 0 0 1 ${(r * .42).toFixed(1)} ${(-ry * .38).toFixed(1)}`;
      }
      return [d, gl];
    };
    let line = null;
    const draw = () => {
      pending = 0;
      if (!G) measure();
      // the reading line, a little below the middle of the screen, in the block's own coordinates
      const rel = still ? 1e5 : window.scrollY + window.innerHeight * .62 - G.top;
      const tilt = clamp((rel + G.h * .6) / (G.h * 1.5)), f = Math.round(tilt * (N - 1));
      if (f !== frame) {
        frame = f;
        sheet.style.transform = `translate3d(${-(f % COLS) * G.w}px, ${-Math.floor(f / COLS) * G.h}px, 0)`;
        line = f >= FROM ? stream(f) : null;
        if (line) { G.segs[0].len = line.len; let at = 0; for (const s of G.segs) { s.start = at; at += s.len; } }
        shownFront = NaN;              // drawn anew, whatever the syrup's reach
      }
      // how far the syrup has come along its way: from the lip as soon as the pot pours, a little faster than the page
      const pourRel = -G.h * .6 + (FROM / (N - 1)) * G.h * 1.5;
      const front = !line ? -1 : Math.round(Math.max(0, rel - pourRel) * 1.5);
      if (front !== shownFront) {
        shownFront = front;
        let d = '', g = '', n = 0;
        if (line) for (const s of G.segs) {
          const upto = front - s.start;
          if (upto <= 0) break;
          if (s.kind === 'word') { n = s.i + 1; continue; }
          const [sd, sg] = shape(s.kind === 'stream' ? line : s, upto, upto < s.len);
          d += sd; g += sg;
        }
        syrup.setAttribute('d', d); shine.setAttribute('d', g);
        if (n !== full) { full = n; facts.forEach((el, i) => el.classList.toggle('is-full', i < n)); }
      }
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
  }

  // Arrival plays once the type is in, so headlines never swap fonts mid-animation.
  const start = () => {
    if (root.classList.contains('is-loaded')) return;
    // A link straight to a section (…/#shop) lands there once the type has settled;
    // smooth scrolling only switches on afterwards, because it swallows that first jump.
    let id = location.hash.slice(1);
    try { id = decodeURIComponent(id); } catch { /* a malformed link (…/#%) simply lands at the top */ }
    const target = id && document.getElementById(id);
    if (target) target.scrollIntoView();
    root.classList.add('is-loaded');
    update();
  };
  const fallback = setTimeout(start, 1400);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { clearTimeout(fallback); setTimeout(start, 60); });
  }

  // Stands: the next one is marked, and once a stand's day has passed it says so.
  const stands = [...document.querySelectorAll('[data-stand]')];
  if (stands.length) {
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const next = stands.find((el) => el.dataset.stand >= today);
    for (const el of stands) {
      const past = el.dataset.stand < today;
      const badge = el.querySelector('[data-stand-badge]');
      const text = T(past ? 'Vorbei' : el === next ? (el.dataset.stand === today ? 'Heute' : 'Als Nächstes') : '') || '';
      el.classList.toggle('is-past', past);
      el.classList.toggle('is-next', el === next);
      if (badge) { badge.textContent = text; badge.hidden = !text; }
    }
  }

  // The menu on phones: a sheet with the page's chapters. A chosen chapter is reached once the sheet has closed
  // (while it is open the page beneath cannot scroll).
  const menuSheet = document.querySelector('[data-menu]');
  if (menuSheet && menuSheet.showModal) {
    const close = () => menuSheet.open && menuSheet.close();
    menuSheet.addEventListener('close', () => root.classList.remove('has-menu'));
    document.querySelectorAll('[data-menu-open]').forEach((b) => b.addEventListener('click', () => { menuSheet.showModal(); root.classList.add('has-menu'); }));
    // On touch screens the bar has scrolled away with the opening; past it, a small «Menü» floats at the bottom left
    // (clear of the edge, like the basket).
    // (On a page without the opening: once its top has scrolled away.)
    const pill = document.querySelector('.menu-btn');
    if (pill) {
      const past = () => (hero ? spot(hero).bottom <= window.innerHeight * .5 : window.scrollY > window.innerHeight * .6);
      const place = () => { const off = !touch.matches || !past(); if (pill.hidden !== off) pill.hidden = off; };
      window.addEventListener('scroll', place, { passive: true });
      window.addEventListener('resize', place);
      place();
      // while a field has the focus (the keyboard is up), the pill steps aside
      const typing = (e) => e.target.matches?.('input:not([type=checkbox]):not([type=radio]), textarea, select');
      document.addEventListener('focusin', (e) => { if (typing(e)) root.classList.add('is-typing'); });
      document.addEventListener('focusout', (e) => { if (typing(e)) root.classList.remove('is-typing'); });
    }
    menuSheet.querySelector('[data-menu-close]')?.addEventListener('click', close);
    menuSheet.addEventListener('click', (e) => { if (e.target === menuSheet) close(); });   // a tap beside the sheet
    menuSheet.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', (e) => {
      // a chapter of another page (the home page, from the participation page) is simply followed
      const target = a.pathname === location.pathname && document.getElementById(a.hash.slice(1));
      if (!target) return;
      e.preventDefault();
      // the page must be scrollable again before it can glide there ('close' arrives a moment later)
      root.classList.remove('has-menu');
      close();
      setTimeout(() => { target.scrollIntoView(); history.replaceState(null, '', a.hash); }, 30);
    }));
  }

  // Another language: the same page, at the same chapter (the section at the top of the screen)
  document.querySelectorAll('[data-lang-link]').forEach((a) => a.addEventListener('click', () => {
    if (a.hasAttribute('aria-current')) return;
    const here = [...document.querySelectorAll('main > section[id], main [id].shop, main section[id]')]
      .filter((el) => el.getBoundingClientRect().top <= innerHeight * .4).pop();
    if (here && here.id !== 'top') a.hash = here.id;
  }));

  // Drinks on phones: tabs jump the card row; swiping moves the active tab along.
  const menu = document.querySelector('[data-drinks-menu]');
  const tabs = [...document.querySelectorAll('[data-drinks-tab]')];
  if (menu && tabs.length) {
    const cards = [...menu.children];
    const step = () => (cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : 1) || 1;
    const mark = (i) => tabs.forEach((t, k) => t.setAttribute('aria-pressed', String(k === i)));
    let lock = 0;   // while a tap glides the row along, the tabs it passes don't light up one by one
    tabs.forEach((tab, i) => tab.addEventListener('click', () => {
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      lock = smooth ? performance.now() + 700 : 0;
      menu.scrollTo({ left: cards[i].offsetLeft - cards[0].offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
      mark(i);
    }));
    menu.addEventListener('scroll', () => {
      if (performance.now() < lock) return;
      // The last card can't snap to the left edge, so reaching the end counts as the last tab.
      const atEnd = menu.scrollLeft + menu.clientWidth >= menu.scrollWidth - 2;
      mark(atEnd ? cards.length - 1 : Math.round(menu.scrollLeft / step()));
    }, { passive: true });
  }

})();
