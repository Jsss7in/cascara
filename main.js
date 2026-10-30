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

  // What runs on by itself (the shop's clouds and farmer, the team) runs only while it is near the screen.
  if ('IntersectionObserver' in window) {
    const runs = new IntersectionObserver((seen) => { for (const e of seen) e.target.classList.toggle('is-near', e.isIntersecting); }, { rootMargin: '100px 0px' });
    document.querySelectorAll('[data-pause-away]').forEach((el) => runs.observe(el));
  } else document.querySelectorAll('[data-pause-away]').forEach((el) => el.classList.add('is-near'));

  // The team's ring: it turns slowly on its own; a swipe, a drag or a sideways scroll turns it by hand, and once let
  // go it glides on and settles back into its own pace. It is turned only while it is on screen.
  const ring = document.querySelector('.team__loop');
  if (ring && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const people = ring.querySelector('.team__people');
    const SPEED = window.matchMedia('(max-width: 900px)').matches ? 360 / 80 : 360 / 96;   // degrees a second
    let angle = 0, vel = SPEED, held = null, last = 0, raf = 0, near = false, hover = false, radius = 0;
    const deg = (px) => { if (!radius) radius = (people.offsetWidth + (parseFloat(getComputedStyle(ring).getPropertyValue('--gap')) || 30)) * 1.866; return px / radius * 180 / Math.PI; };
    const put = () => { people.style.transform = `translateZ(calc(-1 * var(--r))) rotateY(${angle.toFixed(3)}deg)`; };
    const tick = (now) => {
      raf = 0;
      if (!near) return;
      const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
      if (!held) {
        // after a push the ring glides and eases back to its own pace (stopped while a mouse rests on it)
        const aim = hover ? 0 : SPEED;
        vel += (aim - vel) * (1 - Math.pow(.12, dt));
        // come to rest under the mouse: nothing more to draw until it leaves
        if (hover && Math.abs(vel) < .02) { vel = 0; return; }
        angle += vel * dt;
        put();
      }
      raf = requestAnimationFrame(tick);
    };
    const go = () => { if (!raf && near) { last = 0; raf = requestAnimationFrame(tick); } };
    new IntersectionObserver(([e]) => { near = e.isIntersecting; if (near) go(); }, { rootMargin: '80px 0px' }).observe(ring);
    window.addEventListener('resize', () => { radius = 0; });
    ring.addEventListener('pointerdown', (e) => {
      held = { x: e.clientX, t: performance.now(), id: e.pointerId, moved: false }; vel = 0;
      ring.classList.add('is-held');
    });
    ring.addEventListener('pointermove', (e) => {
      if (!held || e.pointerId !== held.id) return;
      const dx = e.clientX - held.x, now = performance.now(), dt = Math.max(1, now - held.t);
      if (!held.moved && Math.abs(dx) > 4) { held.moved = true; try { ring.setPointerCapture(e.pointerId); } catch { /* fine */ } }
      if (!held.moved) return;
      const d = deg(dx);
      angle += d; put();
      vel = vel * .6 + (d / (dt / 1000)) * .4;          // its speed as it leaves the hand
      held.x = e.clientX; held.t = now;
    });
    const letGo = (e) => {
      if (!held || (e && e.pointerId !== held.id)) return;
      if (performance.now() - held.t > 90) vel = 0;     // held still before letting go: no throw
      vel = Math.max(-240, Math.min(240, vel));
      held = null; ring.classList.remove('is-held'); go();
    };
    ring.addEventListener('pointerup', letGo); ring.addEventListener('pointercancel', letGo);
    ring.addEventListener('lostpointercapture', letGo);
    ring.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hover = true; });
    ring.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { hover = false; go(); } });
    // a sideways scroll on a trackpad or a mouse wheel turns it too; an up-and-down one stays the page's
    ring.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      angle -= deg(e.deltaX); put();
      vel = SPEED * Math.sign(-e.deltaX || 1) * 2; go();
    }, { passive: false });
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
