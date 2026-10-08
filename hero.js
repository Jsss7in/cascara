// Cascara – the "Coming soon" cherry.
// While the hero is pinned, scrolling tells the story of the fruit: the beans leave for the
// roaster, the pulp fades, the skin stays – cascara – and grows until the photograph inside it
// fills the screen.
(() => {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;
  const stage = hero.querySelector('[data-hero-stage]');
  const fruit = hero.querySelector('[data-fruit]');
  const photo = hero.querySelector('[data-hero-photo]');
  const after = hero.querySelector('.hero__after');
  const copy = hero.querySelector('.hero__copy');
  const nav = document.querySelector('[data-nav]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Fruit geometry in the SVG's 500 × 500 viewBox (see the markup): skin ellipse and its stroke.
  const CX = 250, CY = 274, RX = 178, RY = 194, SKIN = 22;

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const window_ = (inA, inB, outA, outB, v) => smooth(inA, inB, v) * (1 - smooth(outA, outB, v));

  // The story runs while the stage is pinned, which ends --release before the hero does (styles.css).
  let pinTop = 0;
  const release = () => parseFloat(getComputedStyle(hero).getPropertyValue('--release')) || 0;
  function progress() {
    const r = hero.getBoundingClientRect();
    const run = r.height - pinTop - stage.offsetHeight - release();
    return run > 0 ? clamp(-r.top / run, 0, 1) : 0;
  }

  function update() {
    // Past the end of the pin the stage scrolls on as ordinary content, exactly where it was pinned.
    // (The sticky offset is read only while pinned, as releasing resets it.)
    if (!hero.classList.contains('is-released')) pinTop = parseFloat(getComputedStyle(stage).top) || 0;
    // (with reduced motion the hero is no taller than the stage, so there is nothing to release – it would collapse)
    hero.classList.toggle('is-released', !reduceMotion && hero.getBoundingClientRect().bottom <= pinTop + stage.offsetHeight + release() + 0.5);
    const p = reduceMotion ? 0 : progress();
    const set = (k, v) => hero.style.setProperty(k, v.toFixed(4));

    set('--copy-out', smooth(0.02, 0.14, p));
    if (copy) copy.inert = p > 0.14;    // faded out: no longer reachable by Tab or click
    set('--labels-out', smooth(0.03, 0.12, p));
    set('--beans', smooth(0.12, 0.4, p));
    set('--beat1', window_(0.14, 0.22, 0.36, 0.44, p));
    set('--pulp', smooth(0.38, 0.56, p));
    set('--beat2', window_(0.44, 0.52, 0.66, 0.74, p));
    set('--photo', smooth(0.46, 0.62, p));
    set('--after', smooth(0.86, 0.96, p));
    set('--open', smooth(0.56, 0.97, p));      // the photo settles from a slight zoom

    // Where the fruit sits on screen, so the photo opens exactly inside its skin.
    const s = stage.getBoundingClientRect();
    const f = fruit.getBoundingClientRect();
    const k = f.width / 500;
    const cx = f.left - s.left + CX * k;
    const cy = f.top - s.top + CY * k;
    // the skin grows (ease-in) until its inner edge clears the farthest corner of the photo
    const far = Math.hypot(Math.max(cx, s.width - cx), Math.max(cy, photo.offsetHeight - cy));
    const innerR = (RX - SKIN / 2) * k;
    const grow = 1 + Math.pow(smooth(0.56, 0.97, p), 2.2) * Math.max(0, far / innerR * 1.08 - 1);
    set('--grow', grow);
    set('--gone', smooth(0.9, 0.99, p));
    // Once the stage scrolls on, the closing words fade before they reach the bar, so they never run beneath
    // its links (the bar stays pinned only with a mouse; styles.css applies the fade there).
    if (after) {
      const past = Math.max(0, pinTop + stage.offsetHeight + release() - hero.getBoundingClientRect().bottom);
      const reach = Math.max(1, pinTop + after.offsetTop - (nav ? nav.firstElementChild.offsetHeight : 0));
      set('--leave', smooth(reach * 0.2, reach, past));
    }
    const rx = (RX - SKIN / 2) * k * grow;
    const ry = (RY - SKIN / 2) * k * grow;
    photo.style.setProperty('--clip', `ellipse(${rx.toFixed(1)}px ${ry.toFixed(1)}px at ${cx.toFixed(1)}px ${cy.toFixed(1)}px)`);
    // Edge colours. At the bottom the photograph dissolves into the floor colour, which turns from
    // terracotta to the paper of the next section once the photograph covers the whole bottom edge (both
    // lower corners inside the ellipse). At the top it is simply the colour of what is there: the stage's
    // top row, averaged over terracotta, the skin and the darkened top of the photograph by how much of the
    // row each covers. Above the stage on phones Safari can only show a flat colour, so that colour is
    // made to be exactly what the stage's top edge shows, and the edge dissolves into it.
    const shown = smooth(0.46, 0.62, p);
    const mixTo = (from, to, t) => from.map((v, i) => Math.round(v + (to[i] - v) * t));
    const cornerBottom = Math.hypot(Math.max(cx, s.width - cx) / rx, (s.height - cy) / ry);
    const floor = mixTo([180, 89, 42], [246, 239, 230], smooth(1, 0.92, cornerBottom));
    const span = (y, a, b) => {        // how much of row y lies inside an ellipse around the fruit
      const d = cy - y;
      if (d >= b) return 0;
      const half = a * Math.sqrt(1 - (d / b) ** 2);
      return Math.max(0, Math.min(s.width, cx + half) - Math.max(0, cx - half)) / s.width;
    };
    const kg = k * grow;
    const terra = [180, 89, 42];
    const photoTop = mixTo(terra, [28, 19, 13], shown);
    const skin = mixTo(terra, [217, 191, 156], 1 - smooth(0.9, 0.99, p));
    // averaged over the rows the top fade covers, nearest first, so the colour turns as the skin comes up
    // rather than at the moment it reaches the edge
    const top = [0, 0, 0];
    let weights = 0;
    for (let y = 0; y <= 44; y += 11) {
      const w = 1 - y / 55;
      const inside = span(y, rx, ry);
      const ring = Math.max(0, span(y, (RX + SKIN / 2) * kg, (RY + SKIN / 2) * kg) - inside);
      terra.forEach((v, i) => { top[i] += w * (v * (1 - inside - ring) + photoTop[i] * inside + skin[i] * ring); });
      weights += w;
    }
    top.forEach((v, i) => { top[i] = Math.round(v / weights); });
    hero.style.setProperty('--floor', floor.join(', '));
    hero.style.setProperty('--top', top.join(', '));
    // what main.js needs to colour the bar over the hero: the top colour, turning into the floor colour
    // over the dissolve at the bottom of the stage
    const fadeH = parseFloat(getComputedStyle(stage, '::after').height) || 0;
    hero.edge = { top, floor, fadeFrom: s.bottom - fadeH, fadeH };
    // The hero's own background shows around the stage (on touch screens above and below it, and below it
    // once released): the top colour above the stage's middle, the floor below.
    const split = s.top - hero.getBoundingClientRect().top + s.height / 2;
    hero.style.backgroundImage = `linear-gradient(rgb(${top}) ${split.toFixed(0)}px, rgb(${floor}) ${split.toFixed(0)}px)`;
    hero.dispatchEvent(new Event('tone'));
  }

  // On phones the words sit above the fruit; when the screen is short, the fruit gives way so the
  // two never touch (it is placed from the bottom, so a smaller width lowers its top by as much).
  const phone = window.matchMedia('(max-width: 900px) and (min-height: 501px)');   // stacked layout only
  function fit() {
    fruit.style.removeProperty('--fw');
    if (phone.matches && copy) {
      const overlap = copy.offsetTop + copy.offsetHeight + 20 - fruit.offsetTop;
      if (overlap > 0) fruit.style.setProperty('--fw', `${Math.max(fruit.offsetWidth - overlap, 180)}px`);
    }
    update();
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  fit();
})();
