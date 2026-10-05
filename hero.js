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
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Fruit geometry in the SVG's 500 × 500 viewBox (see the markup): skin ellipse and its stroke.
  const CX = 250, CY = 274, RX = 178, RY = 194, SKIN = 22;

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  const window_ = (inA, inB, outA, outB, v) => smooth(inA, inB, v) * (1 - smooth(outA, outB, v));

  function progress() {
    const r = hero.getBoundingClientRect();
    const run = r.height - window.innerHeight;
    return run > 0 ? clamp(-r.top / run, 0, 1) : 0;
  }

  function update() {
    const p = reduceMotion ? 0 : progress();
    const set = (k, v) => hero.style.setProperty(k, v.toFixed(4));

    set('--copy-out', smooth(0.02, 0.14, p));
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
    // the skin grows (ease-in) until its inner edge clears the farthest corner of the screen
    const far = Math.hypot(Math.max(cx, s.width - cx), Math.max(cy, s.height - cy));
    const innerR = (RX - SKIN / 2) * k;
    const grow = 1 + Math.pow(smooth(0.56, 0.97, p), 2.2) * Math.max(0, far / innerR * 1.08 - 1);
    set('--grow', grow);
    set('--gone', smooth(0.9, 0.99, p));
    const rx = (RX - SKIN / 2) * k * grow;
    const ry = (RY - SKIN / 2) * k * grow;
    photo.style.setProperty('--clip', `ellipse(${rx.toFixed(1)}px ${ry.toFixed(1)}px at ${cx.toFixed(1)}px ${cy.toFixed(1)}px)`);
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
