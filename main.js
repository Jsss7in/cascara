// Cascarup – page behaviour: arrival, nav, reveals, the drinks tabs and the stands. The shop lives in shop.js.
// The cherry lives in hero.js.
(() => {
  const root = document.documentElement;
  const nav = document.querySelector('[data-nav]');
  const hero = document.querySelector('[data-hero]');
  const reveals = [...document.querySelectorAll('[data-reveal]')];

  // The bar is a veil in the colour of what lies beneath it. When the edge between two sections passes
  // under it, the veil splits at exactly that line, so the edge simply slides under the bar instead of the
  // bar changing colour. Safari's status bar takes the colour of the veil's top. In the hero, hero.js
  // reports its colours (hero.edge): the top colour, dissolving into the floor colour at the bottom.
  const RGB = { terra: [180, 89, 42], paper: [230, 211, 183], night: [43, 24, 16], photo: [28, 19, 13] };
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const toned = [...document.querySelectorAll('main [data-tone], footer[data-tone]')];
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
      const r = el.getBoundingClientRect(), edges = el.dataset.fade;
      if (edges.includes('top') && y - r.top < f) return mix(RGB.paper, own, Math.max(0, y - r.top) / f);
      if (edges.includes('bottom') && r.bottom - y < f) return mix(RGB.paper, own, Math.max(0, r.bottom - y) / f);
      return own;
    }
    const e = hero.edge;
    if (!e) return RGB[hero.dataset.tone] || RGB.paper;   // until the opening reports its colours
    const t = e.fadeH ? Math.min(1, Math.max(0, (y - e.fadeFrom) / e.fadeH)) : +(y > e.fadeFrom);
    return mix(e.top, e.floor, t * t);
  };
  const sectionAt = (y) => {
    let found = toned[0];
    for (const el of toned) if (el.getBoundingClientRect().top <= y) found = el;
    return found;
  };
  const light = (c) => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255 > 0.6;

  function paintNav() {
    const h = nav.offsetHeight;
    const above = sectionAt(0), below = sectionAt(h);
    // within one section the veil is a single colour, the one halfway down it
    const top = colourOf(above, below === above ? h / 2 : 0);
    let under = top, split = h;
    if (below !== above) {
      under = colourOf(below, h);
      split = Math.max(0, below.getBoundingClientRect().top);
    }
    // Safari colours its status bar from the bar's background colour (not the picture drawn over it), so
    // that colour is whichever section fills most of the bar; a sliver at the top never decides it.
    const main = split <= h * 0.5 ? under : top;
    // The opening is paper like the bar, so the bar is simply the colour of what lies beneath, there too.
    const css = (c) => `rgb(${c})`;
    nav.style.setProperty('--nav-c', css(top));
    nav.style.setProperty('--nav-c2', css(under));
    nav.style.setProperty('--nav-main', css(main));
    nav.style.setProperty('--nav-split', `${split.toFixed(1)}px`);
    // the links take the contrast of what runs behind them, their own line
    const inner = nav.firstElementChild;
    const behindText = split <= inner.offsetTop + inner.offsetHeight / 2 ? below : above;
    const textColour = behindText === below ? under : top;
    nav.dataset.ink = light(textColour) ? 'dark' : 'light';
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
  function update() {
    const vh = window.innerHeight;
    if (nav) placeNav();
    if (nav && toned.length) paintNav();
    if (toned.length) paintCanvas();
    for (const el of reveals) {
      if (!el.classList.contains('is-in') && el.getBoundingClientRect().top < vh * 0.88) el.classList.add('is-in');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  // hero.js reports its colours after this script has run for the same scroll, so repaint with them
  if (hero) hero.addEventListener('tone', () => { if (nav) paintNav(); if (toned.length) paintCanvas(); });
  update();

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
      const text = past ? 'Vorbei' : el === next ? (el.dataset.stand === today ? 'Heute' : 'Als Nächstes') : '';
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
    const pill = document.querySelector('.menu-btn');
    if (pill && hero) {
      const place = () => { pill.hidden = !touch.matches || hero.getBoundingClientRect().bottom > window.innerHeight * .5; };
      window.addEventListener('scroll', place, { passive: true });
      window.addEventListener('resize', place);
      place();
    }
    menuSheet.querySelector('[data-menu-close]')?.addEventListener('click', close);
    menuSheet.addEventListener('click', (e) => { if (e.target === menuSheet) close(); });   // a tap beside the sheet
    menuSheet.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', (e) => {
      const target = document.getElementById(a.hash.slice(1));
      if (!target) return;
      e.preventDefault();
      // the page must be scrollable again before it can glide there ('close' arrives a moment later)
      root.classList.remove('has-menu');
      close();
      setTimeout(() => { target.scrollIntoView(); history.replaceState(null, '', a.hash); }, 30);
    }));
  }

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
