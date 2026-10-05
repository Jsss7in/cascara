// Cascara – page behaviour: arrival, nav, reveals, waitlist form.
// The cherry lives in hero.js.
(() => {
  const root = document.documentElement;
  const nav = document.querySelector('[data-nav]');
  const edge = document.querySelector('[data-edge]');
  const hero = document.querySelector('[data-hero]');
  const reveals = [...document.querySelectorAll('[data-reveal]')];

  // Safari tints its toolbars from the page: the top one from the fixed bar, the bottom one from the
  // canvas. Both follow the section actually beneath them, so the page runs edge to edge without bands.
  const TONES = { terra: '#B4592A', paper: '#F6EFE6', night: '#2B1810', photo: '#1C130D' };
  const toned = [...document.querySelectorAll('main [data-tone], footer[data-tone]')];
  const toneAt = (y) => {
    let tone = 'terra';
    for (const el of toned) if (el.getBoundingClientRect().top <= y) tone = el.dataset.tone;
    return tone;
  };
  let canvas = '';

  function update() {
    const vh = window.innerHeight;
    // The bar turns solid once the pinned hero has scrolled away.
    if (nav && hero) nav.classList.toggle('is-solid', hero.getBoundingClientRect().bottom <= nav.offsetHeight + 1);
    // the bar takes the colour of what meets its lower edge, so that edge never shows
    if (nav) nav.dataset.tone = toneAt(nav.offsetHeight + 2);
    const bottom = toneAt(vh - 1);
    if (bottom !== canvas) {
      canvas = bottom;
      root.style.backgroundColor = TONES[bottom];
      if (edge) edge.style.setProperty('--edge', TONES[bottom]);
    }
    for (const el of reveals) {
      if (!el.classList.contains('is-in') && el.getBoundingClientRect().top < vh * 0.88) el.classList.add('is-in');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  if (hero) hero.addEventListener('tone', update);
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
