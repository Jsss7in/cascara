// Cascarup – the opening on the page: scrolling through the pinned hero drives the 3D cherry (hero3d.js) and
// brings its words in and out; the anatomy labels follow the layers they name. At the start a photograph of a
// real cherry lies exactly over the model; it hands over as the fruit opens. Between the chapters of the story
// the page glides on by itself, so a little scroll draws the reader into the next one.
import { createHero, CHAPTERS } from './hero3d.js';

(() => {
  // ?debug=ui: errors and the 3D state shown on the page itself (for testing on phones without an inspector)
  const debug = /[?&]debug=ui\b/.test(location.search);
  const out = debug ? Object.assign(document.createElement('pre'), { style: 'position:fixed;left:8px;top:60px;z-index:99;margin:0;padding:6px 8px;font:11px/1.3 monospace;background:#fffd;color:#300;max-width:90vw;white-space:pre-wrap' }) : null;
  if (out) { document.body.append(out); addEventListener('error', (e) => { out.textContent += `\nERR ${e.message} @${e.lineno}:${e.colno}`; }); }
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;
  const stage = hero.querySelector('[data-hero-stage]');
  const canvas = hero.querySelector('[data-hero-canvas]');
  const photo = hero.querySelector('[data-hero-cherry]');
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

  // the photograph: where its fruit sits in the picture (fractions of the image), and the texture for the model
  const pic = photo && {
    texture: photo.dataset.texture, aspect: +photo.dataset.aspect,
    cx: +photo.dataset.cx, cy: +photo.dataset.cy, rx: +photo.dataset.rx, ry: +photo.dataset.ry,
  };

  let three = null;
  try {
    three = createHero(canvas, { onFrame, photo: pic });
  } catch {
    three = null;
  }
  if (!three) { hero.classList.add('is-flat'); if (out) out.textContent = 'kein WebGL'; return; }
  if (out) setInterval(() => {
    out.textContent = JSON.stringify(three.state()) + ` reduce=${reduce} y=${Math.round(scrollY)} cls=${hero.className}`;
  }, 400);
  hero.classList.add('is-3d');
  three.background = getComputedStyle(document.documentElement).getPropertyValue('--paper').trim() || '#E6D3B7';
  if (/[?&]debug\b/.test(location.search)) window.__hero = three;   // test shots jump straight to a moment

  // the stage ends a little before the hero, so it leaves as ordinary content (styles.css: --release)
  const release = () => parseFloat(getComputedStyle(hero).getPropertyValue('--release')) || 0;
  let pinTop = 0;
  const run = () => hero.offsetHeight - pinTop - stage.offsetHeight - release();
  const heroTop = () => hero.getBoundingClientRect().top + window.scrollY;
  function progress() {
    const r = run();
    return r > 0 ? clamp((window.scrollY - heroTop()) / r) : 0;
  }

  // ---- the glide between chapters ------------------------------------------------------------------------
  let lastY = window.scrollY, dir = 0, idle = 0, glide = 0;
  const stopGlide = () => {
    if (!glide) return;
    cancelAnimationFrame(glide); glide = 0;
    document.documentElement.style.scrollBehavior = '';
  };
  function glideTo(y) {
    stopGlide();
    const from = window.scrollY, dist = y - from;
    if (Math.abs(dist) < 2) return;
    const ms = clamp(Math.abs(dist) / Math.max(1, run()) * 3200, 520, 1250);
    const t0 = performance.now();
    document.documentElement.style.scrollBehavior = 'auto';        // the page's smooth scrolling would fight it
    const step = (now) => {
      const t = clamp((now - t0) / ms), e = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo(0, from + dist * e);
      glide = t < 1 ? requestAnimationFrame(step) : 0;
      if (!glide) document.documentElement.style.scrollBehavior = '';
    };
    glide = requestAnimationFrame(step);
  }
  // once the reader stops between two chapters, carry on to the next one in the direction they were going
  const noGlide = /[?&]debug\b/.test(location.search) && !/[?&]glide\b/.test(location.search);   // test shots stand still
  function settle() {
    if (reduce || glide || noGlide) return;
    const r = run(), top = heroTop(), y = window.scrollY;
    if (r <= 0 || y < top - 1 || y > top + r + 1) return;           // outside the story: the page is the reader's
    const p = clamp((y - top) / r);
    if (CHAPTERS.some((c) => Math.abs(c - p) < .006)) return;      // already resting on a chapter
    let to;
    if (dir > 0) to = CHAPTERS.find((c) => c > p);
    else if (dir < 0) to = [...CHAPTERS].reverse().find((c) => c < p);
    if (to === undefined) to = CHAPTERS.reduce((a, c) => (Math.abs(c - p) < Math.abs(a - p) ? c : a));
    glideTo(top + to * r);
  }
  for (const ev of ['wheel', 'touchstart', 'keydown', 'pointerdown']) window.addEventListener(ev, stopGlide, { passive: true });

  function onScroll() {
    if (!hero.classList.contains('is-released')) pinTop = parseFloat(getComputedStyle(stage).top) || 0;
    hero.classList.toggle('is-released', !reduce && hero.getBoundingClientRect().bottom <= pinTop + stage.offsetHeight + release() + .5);
    three.progress = reduce ? 0 : progress();
    const y = window.scrollY;
    if (!glide && y !== lastY) dir = Math.sign(y - lastY);
    lastY = y;
    clearTimeout(idle);
    if (!glide) idle = setTimeout(settle, 150);
  }

  // Words follow the 3D scene's own (softly following) progress, so they never run ahead of the picture.
  // Only what changes is written, and only on these few elements.
  let photoShown = -1;
  function onFrame(p, labels, fruitBox) {
    for (const b of beats) {
      const [a, bb, c, d] = b.win;
      const o = Math.round((d >= 1 ? smooth(a, bb, p) : span(a, bb, c, d, p)) * 500) / 500;
      if (o === b.o) continue;                       // unchanged: nothing to write
      b.o = o;
      b.el.style.opacity = o;
      b.el.style.visibility = o === 0 ? 'hidden' : 'visible';
      b.el.style.setProperty('--in', o);
    }
    const show = span(.17, .22, .33, .37, p);
    if (show > .002) {
      const L = labels();
      for (const el of parts) {
        const a = L[el.dataset.part];
        el.style.transform = `translate3d(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px, 0)`;
        el.style.opacity = show.toFixed(3);
        el.style.visibility = 'visible';
      }
      parts.shown = true;
    } else if (parts.shown !== false) {
      parts.shown = false;
      for (const el of parts) { el.style.opacity = '0'; el.style.visibility = 'hidden'; }
    }
    // the photograph lies exactly over the model and hands over as the halves begin to part
    if (pic) {
      const o = three && three.photoReady ? 1 - smooth(.095, .13, p) : (p < .12 ? 1 : 0);
      if (o > 0) {
        const b = fruitBox();
        const w = b.rx / pic.rx, h = w * photo.naturalHeight / Math.max(1, photo.naturalWidth);
        photo.style.width = `${w.toFixed(1)}px`;
        photo.style.transform = `translate3d(${(b.x - pic.cx * w).toFixed(1)}px, ${(b.y - pic.cy * h).toFixed(1)}px, 0)`;
      }
      if (o !== photoShown) {
        photoShown = o;
        photo.style.opacity = o;
        photo.style.visibility = o > 0 ? 'visible' : 'hidden';
      }
    }
  }

  // size and pause: render only while the hero is on screen
  const size = () => { const r = stage.getBoundingClientRect(); three.resize(Math.round(r.width), Math.round(r.height)); };
  new ResizeObserver(size).observe(stage);
  size();
  new IntersectionObserver(([e]) => {
    if (reduce) return;                               // still picture: nothing runs
    if (e.isIntersecting) three.start(); else three.stop();
  }, { rootMargin: '120px 0px' }).observe(hero);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
  clearTimeout(idle);                                 // a page that opens part way down is left where it is
  if (reduce) { three.jump(0); three.stop(); }
  else three.begin();
  if (photo && !photo.complete) photo.addEventListener('load', () => three.jump(three.progress), { once: true });
  // the cherry fades in once the page is ready, together with the words
  requestAnimationFrame(() => hero.classList.add('is-ready'));
})();
