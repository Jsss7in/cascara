// Cascara – page behaviour: arrival, nav, reveals, waitlist form.
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
  const RGB = { terra: [180, 89, 42], paper: [246, 239, 230], night: [43, 24, 16], photo: [28, 19, 13] };
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const toned = [...document.querySelectorAll('main [data-tone], footer[data-tone]')];
  const colourOf = (el, y) => {
    if (el !== hero) return RGB[el.dataset.tone];
    const e = hero.edge;
    if (!e) return RGB.terra;
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
    // With a mouse there is no status bar to colour, so over the hero the bar is simply clear – also once the
    // stage scrolls on, where a painted bar would lie as a dark band across the photograph and vanish the
    // moment the stage pins again on the way back up.
    const released = hero && hero.classList.contains('is-released');
    const clear = !touch.matches && !!hero;
    const css = (c, el) => (clear && el === hero ? 'transparent' : `rgb(${c})`);
    nav.style.setProperty('--nav-c', css(top, above));
    nav.style.setProperty('--nav-c2', css(under, below));
    nav.style.setProperty('--nav-main', css(main, split <= h * 0.5 ? below : above));
    nav.style.setProperty('--nav-split', `${split.toFixed(1)}px`);
    // the links take the contrast of what runs behind them, their own line
    const inner = nav.firstElementChild;
    const behindText = split <= inner.offsetTop + inner.offsetHeight / 2 ? below : above;
    const textColour = behindText === below ? under : top;
    // (on the pinned stage the links stay light over the story; once it scrolls on, the colour beneath decides,
    // so they turn dark in time where the photograph dissolves into paper)
    nav.dataset.ink = light(textColour) && !(clear && behindText === hero && !released) ? 'dark' : 'light';
  }

  // On touch screens the bar sits at the top of the page and scrolls away with it. Scrolling back up slides it in, pinned;
  // reading on lets go of it right where it is, so it scrolls away with the page again. It is fixed only
  // while it is in view: once fixed, iOS Safari paints its status bar in the bar's colour and keeps that
  // until the page scrolls with nothing fixed at the top.
  let lastY = window.scrollY, state = 'rest';
  const restAt = (y) => {
    state = 'rest';
    nav.classList.remove('is-pinned', 'is-out');
    nav.style.top = `${y}px`;
  };
  // With a mouse there is no status bar to worry about, and the bar simply stays.
  const touch = window.matchMedia('(pointer: coarse)');
  function placeNav() {
    if (!touch.matches) {
      if (state !== 'in') { state = 'in'; nav.style.top = ''; nav.classList.add('is-pinned'); nav.classList.remove('is-out'); }
      return;
    }
    const y = window.scrollY, dy = y - lastY, h = nav.offsetHeight;
    if (state === 'rest' && y > h && parseFloat(nav.style.top || 0) && y > parseFloat(nav.style.top) + h) {
      nav.style.top = '0px';            // out of sight either way: back to the top of the page
    }
    if (y <= 0 && state !== 'rest') { restAt(0); lastY = y; return; }
    if (Math.abs(dy) < 6) return;
    lastY = y;
    // (the spring-back at the end of the page is no reason to bring it in)
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    if (dy < 0 && state === 'rest' && y > h && y < bottom - 4) {
      state = 'in';
      nav.style.top = '';
      nav.classList.add('is-pinned', 'is-out');
      void nav.offsetHeight;            // start from above the screen
      nav.classList.remove('is-out');
    } else if (dy > 0 && state === 'in') {
      restAt(y);
    }
  }
  if (nav) {
    nav.addEventListener('focusin', () => {
      if (state === 'rest' && window.scrollY > nav.offsetHeight) { state = 'in'; nav.style.top = ''; nav.classList.add('is-pinned'); }
    });
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
    // A link straight to a section (…/#warteliste) lands there once the type has settled;
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

  // Waitlist. Until data-endpoint points at a form service, nothing is stored.
  const form = document.querySelector('[data-notify]');
  if (!form) return;
  const status = form.querySelector('.notify__status');
  const email = form.querySelector('input[type="email"]');
  const consent = form.querySelector('input[type="checkbox"]');
  const button = form.querySelector('button');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!email.value.trim() || !email.checkValidity()) {
      status.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein, zum Beispiel name@beispiel.ch.';
      email.setAttribute('aria-invalid', 'true');
      email.focus();
      return;
    }
    email.removeAttribute('aria-invalid');
    if (!consent.checked) {
      status.textContent = 'Bitte bestätige noch, dass wir deine Adresse für die Benachrichtigung speichern dürfen.';
      consent.focus();
      return;
    }
    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      // No form service connected yet: say so plainly instead of pretending the address was saved.
      status.textContent = 'Die Warteliste öffnet in Kürze. Schau bald wieder vorbei.';
      return;
    }
    button.disabled = true;
    status.textContent = '';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      // FormSubmit answers 200 with success "false" when something is off, so read the body too.
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === 'false') throw new Error(data.message || `HTTP ${res.status}`);
      form.classList.add('is-done');
      status.textContent = 'Danke. Du hörst von uns, sobald die erste Flasche bereit ist.';
    } catch {
      status.textContent = 'Die Anmeldung ist nicht angekommen. Bitte versuch es in einem Moment noch einmal.';
      button.disabled = false;
    }
  });
})();
