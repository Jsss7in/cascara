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
  // reports how far the dark photograph has reached the top (hero.topMix).
  const RGB = { terra: [180, 89, 42], paper: [246, 239, 230], night: [43, 24, 16], photo: [28, 19, 13] };
  const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const toned = [...document.querySelectorAll('main [data-tone], footer[data-tone]')];
  const colourOf = (el) => (el === hero ? mix(RGB.terra, RGB.photo, hero.topMix || 0) : RGB[el.dataset.tone]);
  const sectionAt = (y) => {
    let found = toned[0];
    for (const el of toned) if (el.getBoundingClientRect().top <= y) found = el;
    return found;
  };
  const light = (c) => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255 > 0.6;

  function paintNav() {
    const h = nav.offsetHeight;
    const above = sectionAt(0), below = sectionAt(h);
    const top = colourOf(above);
    let under = top, split = h;
    if (below !== above) {
      under = colourOf(below);
      split = Math.max(0, below.getBoundingClientRect().top);
    }
    // Safari colours its status bar from the bar's background colour (not the picture drawn over it), so
    // that colour is whichever section fills most of the bar; a sliver at the top never decides it.
    const main = split <= h * 0.5 ? under : top;
    nav.style.setProperty('--nav-c', `rgb(${top})`);
    nav.style.setProperty('--nav-c2', `rgb(${under})`);
    nav.style.setProperty('--nav-main', `rgb(${main})`);
    nav.style.setProperty('--nav-split', `${split.toFixed(1)}px`);
    nav.dataset.ink = light(main) ? 'dark' : 'light';
  }

  let canvas = '';
  function update() {
    const vh = window.innerHeight;
    if (nav && toned.length) paintNav();
    if (toned.length) {
      const c = `rgb(${colourOf(sectionAt(vh - 1))})`;
      if (c !== canvas) { canvas = c; root.style.backgroundColor = c; }
    }
    for (const el of reveals) {
      if (!el.classList.contains('is-in') && el.getBoundingClientRect().top < vh * 0.88) el.classList.add('is-in');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  if (hero) hero.addEventListener('tone', () => nav && paintNav());
  update();

  // Arrival plays once the type is in, so headlines never swap fonts mid-animation.
  const start = () => {
    if (root.classList.contains('is-loaded')) return;
    // A link straight to a section (…/#warteliste) lands there once the type has settled;
    // smooth scrolling only switches on afterwards, because it swallows that first jump.
    const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
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
    tabs.forEach((tab, i) => tab.addEventListener('click', () => {
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      menu.scrollTo({ left: cards[i].offsetLeft - cards[0].offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
      mark(i);
    }));
    menu.addEventListener('scroll', () => {
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
      status.textContent = 'Danke. Du hörst von uns, sobald Cascara erhältlich ist.';
    } catch {
      status.textContent = 'Die Anmeldung ist nicht angekommen. Bitte versuch es in einem Moment noch einmal.';
      button.disabled = false;
    }
  });
})();
