// Cascarup – the opening on the page: scrolling through the pinned hero drives the 3D cherry (hero3d.js) and
// brings its words in and out; the anatomy labels follow the layers they name.
import { createHero } from './hero3d.js';

(() => {
  // ?debug: errors and the progress shown on the page itself (for testing on phones without an inspector)
  const debug = /[?&]debug=ui\b/.test(location.search);
  const out = debug ? Object.assign(document.createElement('pre'), { style: 'position:fixed;left:8px;top:60px;z-index:99;margin:0;padding:6px 8px;font:11px/1.3 monospace;background:#fffd;color:#300;max-width:90vw;white-space:pre-wrap' }) : null;
  if (out) { document.body.append(out); addEventListener('error', (e) => { out.textContent += `\nERR ${e.message} @${e.lineno}:${e.colno}`; }); }
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;
  const stage = hero.querySelector('[data-hero-stage]');
  const canvas = hero.querySelector('[data-hero-canvas]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  // in, hold, out – a word's life on the stage
  const span = (inA, inB, outA, outB, v) => smooth(inA, inB, v) * (1 - smooth(outA, outB, v));

  // The words that come and go, each with the stretch of the story it belongs to.
  const parts = [...hero.querySelectorAll('[data-part]')];
  const beats = [...hero.querySelectorAll('[data-beat]')].map((el) => ({ el, win: el.dataset.beat.split(',').map(Number) }));

  // The colour the stage shows, for the bar over it and for Safari above it (main.js reads hero.edge).
  const paper = [230, 211, 183];
  hero.edge = { top: paper, floor: paper, fadeFrom: Infinity, fadeH: 0 };
  hero.dispatchEvent(new Event('tone'));            // main.js ran before this module: repaint the bar now

  let three = null;
  try {
    three = createHero(canvas, { onFrame });
  } catch {
    three = null;
  }
  if (!three) { hero.classList.add('is-flat'); if (out) out.textContent = 'kein WebGL'; return; }
  if (out) setInterval(() => {
    out.textContent = JSON.stringify(three.state()) + ` reduce=${reduce} y=${Math.round(scrollY)} cls=${hero.className}`;
  }, 400);   // no WebGL: the page shows the words over the paper
  hero.classList.add('is-3d');
  three.background = getComputedStyle(document.documentElement).getPropertyValue('--paper').trim() || '#E6D3B7';
  if (/[?&]debug\b/.test(location.search)) window.__hero = three;   // test shots jump straight to a moment

  // the stage ends a little before the hero, so it leaves as ordinary content (styles.css: --release)
  const release = () => parseFloat(getComputedStyle(hero).getPropertyValue('--release')) || 0;
  let pinTop = 0;
  function progress() {
    const r = hero.getBoundingClientRect();
    const run = r.height - pinTop - stage.offsetHeight - release();
    return run > 0 ? clamp(-r.top / run) : 0;
  }
  function onScroll() {
    if (!hero.classList.contains('is-released')) pinTop = parseFloat(getComputedStyle(stage).top) || 0;
    hero.classList.toggle('is-released', !reduce && hero.getBoundingClientRect().bottom <= pinTop + stage.offsetHeight + release() + .5);
    three.progress = reduce ? 0 : progress();
  }

  // Words follow the 3D scene's own (softly following) progress, so they never run ahead of the picture.
  // Only what changes is written, and only on these few elements.
  function onFrame(p, labels) {
    for (const b of beats) {
      const [a, bb, c, d] = b.win;
      const o = Math.round((d >= 1 ? smooth(a, bb, p) : span(a, bb, c, d, p)) * 500) / 500;
      if (o === b.o) continue;                       // unchanged: nothing to write
      b.o = o;
      b.el.style.opacity = o;
      b.el.style.visibility = o === 0 ? 'hidden' : 'visible';
      b.el.style.setProperty('--in', o);
    }
    const show = span(.19, .24, .37, .4, p);
    if (show > .002) {
      const L = labels();
      for (const el of parts) {
        const a = L[el.dataset.part];
        el.style.transform = `translate3d(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px, 0)`;
        el.style.opacity = show.toFixed(3);
        el.style.visibility = 'visible';
      }
    } else if (parts.shown !== false) {
      parts.shown = false;
      for (const el of parts) { el.style.opacity = '0'; el.style.visibility = 'hidden'; }
    }
    if (show > .002) parts.shown = true;
  }

  // size and pause: render only while the hero is on screen
  const size = () => { const r = stage.getBoundingClientRect(); three.resize(Math.round(r.width), Math.round(r.height)); };
  new ResizeObserver(size).observe(stage);
  size();
  let visible = true;
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (reduce) return;                               // still picture: nothing runs
    if (visible) three.start(); else three.stop();
  }, { rootMargin: '120px 0px' }).observe(hero);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  if (reduce) { three.jump(0); three.stop(); onFrame(0, three.labels); }
  else three.begin();
  // the cherry fades in once the page is ready, together with the words
  requestAnimationFrame(() => hero.classList.add('is-ready'));
})();
