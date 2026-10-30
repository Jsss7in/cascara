// Cascarup – the opening on the page: scrolling through the pinned hero drives the 3D cherry (hero3d.js) and
// brings its words in and out; the anatomy labels follow the layers they name. At the start a photograph of a
// real cherry lies exactly over the model; it hands over as the fruit opens. Between the chapters of the story
// the page glides on by itself, so a little scroll draws the reader into the next one.
import { createHero, STOPS, PLAY_MS } from './hero3d.js';
import { createDiorama } from './diorama.js';

(() => {
  // ?debug=ui: errors and the 3D state shown on the page itself (for testing on phones without an inspector)
  const debug = /[?&]debug=ui\b/.test(location.search);
  const out = debug ? Object.assign(document.createElement('pre'), { style: 'position:fixed;left:8px;top:60px;z-index:99;margin:0;padding:6px 8px;font:11px/1.3 monospace;background:#fffd;color:#300;max-width:90vw;white-space:pre-wrap' }) : null;
  if (out) {
    document.body.append(out);
    addEventListener('error', (e) => { out.textContent += `\nERR ${e.message} @${e.lineno}:${e.colno}`; });
    // which element each tap reaches (touch screens only show what they do, not why)
    for (const ev of ['pointerdown', 'click']) addEventListener(ev, (e) => { out.dataset.taps = `${out.dataset.taps || ''} ${ev}:${e.target.tagName}.${String(e.target.className).split(' ')[0]}`.slice(-220); }, true);
  }
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;
  const stage = hero.querySelector('[data-hero-stage]');
  const canvas = hero.querySelector('[data-hero-canvas]');
  const photo = hero.querySelector('[data-hero-cherry]');
  const cue = hero.querySelector('[data-hero-cue]');       // «Scroll für mehr», under the cherry
  const name = hero.querySelector('[data-hero-name]');     // the cherry's name, on its first screen
  const plant = hero.querySelector('[data-hero-plant]');   // its branch, with leaves and other cherries
  const dioEl = hero.querySelector('[data-hero-dio]');     // or, instead, the paper diorama round it
  const dioBox = dioEl && dioEl.dataset.box ? dioEl.dataset.box.split(',').map(Number) : null;
  const pl = plant && { cx: +plant.dataset.cx, cy: +plant.dataset.cy, rx: +plant.dataset.rx, turn: +plant.dataset.turn, box: plant.dataset.box.split(',').map(Number) };
  const copy = hero.querySelector('.hero__copy');
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
    three = createHero(canvas, { onFrame, photo: pic, plantBox: (pl && pl.box) || dioBox, gentle: matchMedia('(pointer: coarse)').matches });
  } catch {
    three = null;
  }
  const ready = () => document.dispatchEvent(new Event('cascarup:ready'));   // the loading screen may lift
  if (!three) { hero.classList.add('is-flat'); if (out) out.textContent = 'kein WebGL'; ready(); return; }
  // and the frame rate over the last second, the frames that took too long and the longest (jank shows here)
  const gaps = [];
  // and, for the last glide alone, its frames: how many, how many too slow, the longest
  if (out) {
    let last = 0, during = [], slowAt = [];
    const tick = (t) => {
      if (last) { gaps.push(t - last); if (glide) { during.push(t - last); if (t - last > 25) slowAt.push(`${three.progress.toFixed(3)}:${Math.round(t - last)}`); } }
      if (!glide && during.length) { out.dataset.g = `glide ${during.length}f slow=${during.filter((g) => g > 25).length} max=${Math.round(Math.max(...during))}ms @ ${slowAt.join(' ')}`; during = []; slowAt = []; }
      if (gaps.length > 240) gaps.shift(); last = t; requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  if (out) setInterval(() => {
    const sec = []; let sum = 0;
    for (let i = gaps.length - 1; i >= 0 && sum < 1000; i--) { sum += gaps[i]; sec.push(gaps[i]); }
    const fps = `fps=${sec.length} slow=${sec.filter((g) => g > 25).length} max=${Math.round(Math.max(0, ...sec))}ms`;
    const st = three.state();
    // the worst second while the story moved (a glide is over before anyone could read it)
    if (st.progress !== st.target || glide) out.dataset.low = Math.min(+(out.dataset.low || 99), sec.length);
    out.textContent = `${out.dataset.g || ''}\n${fps} low=${out.dataset.low || '-'} px=${st.ratio} cost=${st.cost}ms p=${st.progress}→${st.target}\n` + JSON.stringify(st) + ` reduce=${reduce} y=${Math.round(scrollY)} cls=${hero.className}\n${out.dataset.taps || ''}`;
  }, 400);
  hero.classList.add('is-3d');
  // the diorama: its layers rise as the loading screen lifts, and lean with the pointer on screens that have one
  const dio = dioEl ? createDiorama(dioEl) : null;
  if (dio) {
    const up = () => dioEl.classList.add('is-up');
    document.addEventListener('cascarup:shown', up, { once: true });
    if (/[?&]debug\b/.test(location.search)) window.__dio = dio;    // test shots can play the diorama on its own
    setTimeout(up, 12000);
    if (matchMedia('(pointer: fine)').matches && !reduce) {
      addEventListener('pointermove', (e) => dio.lean(e.clientX / innerWidth * 2 - 1, e.clientY / innerHeight * 2 - 1), { passive: true });
    }
  }
  three.background = getComputedStyle(document.documentElement).getPropertyValue('--paper').trim() || '#E6D3B7';
  if (/[?&]debug\b/.test(location.search)) window.__hero = three;   // test shots jump straight to a moment
  // ?debug&at=0.765: the page opens at that moment of the story (for checking a frame on a phone)
  const at = /[?&]debug\b/.test(location.search) ? parseFloat(new URLSearchParams(location.search).get('at')) : NaN;

  // Where the hero lies and how tall it and its stage are: measured once, and again only when something changes
  // size. Reading them (and the computed styles) on every scroll made the browser work out the styles of the whole
  // opening again, scroll after scroll. The stage ends a little before the hero, so it leaves as ordinary content
  // (styles.css: --release); pinTop is where it is pinned (read while it is pinned, the release moves it).
  let pinTop = 0, G = null;
  const geo = () => {
    if (!G) {
      if (!hero.classList.contains('is-released')) pinTop = parseFloat(getComputedStyle(stage).top) || 0;
      G = { top: hero.getBoundingClientRect().top + window.scrollY, h: hero.offsetHeight, stage: stage.offsetHeight,
        release: parseFloat(getComputedStyle(hero).getPropertyValue('--release')) || 0 };
    }
    return G;
  };
  const anew = () => { G = null; };
  window.addEventListener('resize', anew);
  if ('ResizeObserver' in window) { const ro = new ResizeObserver(anew); ro.observe(hero); ro.observe(stage); ro.observe(document.body); }
  document.fonts?.ready.then(anew);
  window.addEventListener('load', anew);
  const run = () => { const g = geo(); return g.h - pinTop - g.stage - g.release; };
  const heroTop = () => geo().top;
  function progress(y = window.scrollY) {
    const r = run();
    return r > 0 ? clamp((y - heroTop()) / r) : 0;
  }

  // ---- the glide between chapters ------------------------------------------------------------------------
  // moved: the reader has scrolled since the last glide (only then may the page carry on by itself)
  let lastY = window.scrollY, dir = 0, idle = 0, glide = 0, opening = false, touching = false, moved = false;
  const root = document.documentElement;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const loose = () => { root.style.scrollBehavior = ''; root.style.overflow = ''; opening = false; };
  const stopGlide = () => {
    if (!glide) return;
    cancelAnimationFrame(glide); glide = 0; loose();
  };
  function glideTo(y, ms0 = 0, hold = false) {
    stopGlide();
    moved = false;
    const from = window.scrollY, dist = y - from;
    if (Math.abs(dist) < 2) return;
    const ms = ms0 || clamp(Math.abs(dist) / Math.max(1, run()) * PLAY_MS, 500, 2600);   // each chapter at its own playing time
    const t0 = performance.now();
    root.style.scrollBehavior = 'auto';        // the page's smooth scrolling would fight it
    // a glide that starts as the finger lets go (the opening): on touch screens the swing of the finger would run on
    // under it and tug against it (the jolt, and the page drifting past the chapter afterwards), so the page is held
    // while it glides; a touch frees it at once
    if (hold && coarse) root.style.overflow = 'hidden';
    const step = (now) => {
      const t = clamp((now - t0) / ms), e = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo(0, from + dist * e);
      glide = t < 1 ? requestAnimationFrame(step) : 0;
      if (!glide) loose();
    };
    glide = requestAnimationFrame(step);
  }
  // once the reader stops between two chapters, carry on to the next one in the direction they were going
  const noGlide = /[?&]debug\b/.test(location.search) && !/[?&]glide\b/.test(location.search);   // test shots stand still
  // a jump to a section (a link, the menu) passes through the story without stopping in it
  let jumping = 0;
  document.addEventListener('click', (e) => { if (e.target.closest?.('a[href^="#"]')) jumping = performance.now() + 2500; }, true);
  function settle() {
    // only after the reader's own scroll: never because Safari's bars came or went, a glide's swing died down or
    // the browser put the page back where it was
    if (reduce || glide || noGlide || !moved || performance.now() < jumping) return;
    const r = run(), top = heroTop(), y = window.scrollY;
    if (r <= 0 || y < top - 1 || y > top + r + 1) return;           // outside the story: the page is the reader's
    const p = clamp((y - top) / r);
    if (STOPS.some((c) => Math.abs(c - p) < .006)) return;         // already resting on a chapter
    let to;
    if (dir > 0) to = STOPS.find((c) => c > p);
    else if (dir < 0) to = [...STOPS].reverse().find((c) => c < p);
    if (to === undefined) to = STOPS.reduce((a, c) => (Math.abs(c - p) < Math.abs(a - p) ? c : a));
    glideTo(top + to * r);
  }
  // a hand on the page stops a glide – except a wheel turning on the way the opening glide already goes
  for (const ev of ['touchstart', 'keydown', 'pointerdown']) window.addEventListener(ev, stopGlide, { passive: true });
  // the wheel: a turn against the opening glide stops it; one with it (a trackpad's swing runs on for a second or
  // more) is swallowed while the glide runs and until the swing has died down, so it cannot carry the page on past
  // the chapter by itself
  let swallow = false, lastWheel = 0, gesture = 0;
  addEventListener('wheel', (e) => {
    const now = performance.now(), quiet = now - lastWheel > 180;
    lastWheel = now; gesture = now;
    if (opening && glide && e.deltaY > 0) { swallow = true; e.preventDefault(); return; }
    if (swallow && !quiet && e.deltaY > 0) { e.preventDefault(); return; }
    swallow = false; moved = true;
    stopGlide();
  }, { passive: false });
  addEventListener('touchstart', () => { touching = true; gesture = performance.now(); }, { passive: true });
  addEventListener('touchmove', () => { gesture = performance.now(); moved = true; }, { passive: true });
  addEventListener('keydown', () => { gesture = performance.now(); moved = true; }, { passive: true });
  addEventListener('touchend', () => { touching = false; gesture = performance.now(); openingMove(); }, { passive: true });
  addEventListener('touchcancel', () => { touching = false; }, { passive: true });
  // the first scroll down from the start: the landscape flies, the cherries whirl in, and the page carries on by
  // itself to the opened fruit (the first chapter), however little was scrolled, with no stop on the way
  function openingMove(y = window.scrollY) {
    if (reduce || noGlide || glide || touching || performance.now() < jumping) return;
    // only the reader's own scroll starts it – not the page settling, Safari's bars or a restored position
    if (performance.now() - gesture > 900 || document.documentElement.classList.contains('is-loading')) return;
    const r = run(), top = heroTop();
    if (r <= 0) return;
    const p = (y - top) / r;
    if (dir > 0 && p > .003 && p < STOPS[1] - .01) { opening = true; glideTo(top + STOPS[1] * r, (STOPS[1] - p) * PLAY_MS, true); }
  }

  function onScroll() {
    // everything read first, then written: a read after the class changes would make the browser work out the
    // opening's styles there and then
    const y = window.scrollY, g = geo(), released = !reduce && g.top + g.h - y <= pinTop + g.stage + g.release + .5;
    if (released !== hero.classList.contains('is-released')) hero.classList.toggle('is-released', released);
    three.progress = reduce ? 0 : progress(y);
    if (!glide && y !== lastY) dir = Math.sign(y - lastY);
    lastY = y;
    clearTimeout(idle);
    if (!glide) { openingMove(y); if (!glide) idle = setTimeout(settle, 150); }
  }

  // Words follow the 3D scene's own (softly following) progress, so they never run ahead of the picture.
  // Only what changes is written, and only on these few elements.
  let photoShown = -1, introShown = -1, plantShown = -1, dioShown = true, dioAway = false, copyBox = null, stageW = 1, stageH = 1, covered = false, picW = 0;
  function onFrame(p, labels, fruitBox) {
    // the paper diorama: laid out round the cherry while the story rests at its start, flown apart by the first move
    if (dio) {
      const w = stageW, h = stageH, narrow = w / h <= 1.05;
      const end = narrow ? .05 : .072, o = Math.round((1 - smooth(narrow ? .012 : end - .028, end, p)) * 500) / 500;
      // put away (hidden, its life paused) only well past its fade, and so brought back well before it shows again:
      // bringing it back costs a frame, which then falls where nothing of it is on screen yet
      const away = p > end + .025;
      if (o > 0 || dioShown || away !== dioAway) {
        if (p < .003 || !dio.ready()) dio.layout(fruitBox(), w, h, narrow, copyBox);   // at rest, or late if no frame came at rest
        dio.update(smooth(.004, end, p), o, performance.now() / 1000, w, h, narrow, away);
      }
      dioShown = o > 0; dioAway = away;
      const cover = o >= 1 && !document.documentElement.classList.contains('is-loading');
      if (cover !== covered) { covered = cover; three.cover = cover; }
    }
    // the first screen: the cherry is named, and beneath it the invitation to scroll; both go with the first move
    const intro = Math.round((1 - smooth(.012, .05, p)) * 500) / 500;
    if (intro > 0 && (cue || name)) {
      const b = fruitBox(), w = stageW, h = stageH, narrow = w / h <= 1.05;
      if (cue) {
        // at the foot of the picture, below the cherry; on narrow screens below the words
        cue.style.setProperty('--x', `${(w / 2).toFixed(1)}px`);
        cue.style.setProperty('--y', `${(narrow ? h - 72 : h - 82).toFixed(1)}px`);
      }
      if (name) {
        // beside the cherry where there is room for the words; on a phone above it, under the buttons
        name.classList.toggle('is-up', narrow);
        name.style.setProperty('--x', `${(b.x - (narrow ? .3 : .5) * b.rx).toFixed(1)}px`);
        name.style.setProperty('--y', `${(b.y - (narrow ? .82 : .8) * b.ry).toFixed(1)}px`);
      }
    }
    // The branch: it holds the cherry until the first move, then springs back and away, down to the right, while
    // the cherry stays where it was picked.
    if (pl) {
      const w = stageW, h = stageH, narrow = w / h <= 1.05;
      const go = smooth(.006, narrow ? .055 : .07, p), o = Math.round((1 - smooth(narrow ? .03 : .048, narrow ? .052 : .07, p)) * 500) / 500;
      if (o > 0) {
        const b = fruitBox(), k = b.rx / pl.rx;
        const dx = go * go * w * (narrow ? .55 : .6), dy = go * go * h * (narrow ? -.32 : .75), turn = pl.turn + go * (narrow ? -9 : 9);
        plant.style.transform = `translate3d(${(b.x + dx).toFixed(1)}px, ${(b.y + dy).toFixed(1)}px, 0) rotate(${turn.toFixed(2)}deg) scale(${k.toFixed(4)}) translate(${-pl.cx}px, ${-pl.cy}px)`;
      }
      if (o !== plantShown) {
        plantShown = o;
        plant.style.opacity = o;
        plant.style.visibility = o > 0 ? 'visible' : 'hidden';
      }
    }
    if (intro !== introShown) {
      introShown = intro;
      for (const el of [cue, name]) if (el) { el.style.opacity = intro; el.style.visibility = intro > 0 ? 'visible' : 'hidden'; }
      // gone, the cue's little animations stop too: its wave and drop are drawn, and running on unseen they had the
      // whole page painted again in every frame, all the way down
      if (cue) cue.classList.toggle('is-off', intro === 0);
    }
    for (const b of beats) {
      const [a, bb, c, d] = b.win;
      const o = Math.round((d >= 1 ? smooth(a, bb, p) : span(a, bb, c, d, p)) * 500) / 500;
      if (o === b.o) continue;                       // unchanged: nothing to write
      b.o = o;
      b.el.style.opacity = o;
      b.el.style.visibility = o === 0 ? 'hidden' : 'visible';
      b.el.style.setProperty('--in', o);
    }
    const show = span(.17, .22, .287, .305, p);    // full at the rest (.28), gone before the beans leave
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
      // the photograph hands over to the model after the branch has gone and before the halves part
      const o = three && three.photoReady ? 1 - smooth(.068, .095, p) : (p < .1 ? 1 : 0);
      if (o > 0) {
        const b = fruitBox();
        const w = b.rx / pic.rx, h = w * photo.naturalHeight / Math.max(1, photo.naturalWidth);
        // laid out at a width only now and then, scaled in between: a new width in every frame had the browser lay
        // the photograph out and paint it again, shadow and all, frame by frame
        if (!picW || w > picW * 1.04 || w < picW * .5) { picW = Math.ceil(w * 1.2); photo.style.width = `${picW}px`; }
        photo.style.transform = `translate3d(${(b.x - pic.cx * w).toFixed(1)}px, ${(b.y - pic.cy * h).toFixed(1)}px, 0) scale(${(w / picW).toFixed(4)})`;
      }
      if (o !== photoShown) {
        photoShown = o;
        photo.style.opacity = o;
        photo.style.visibility = o > 0 ? 'visible' : 'hidden';
      }
    }
  }

  // The first picture (the cherry on its branch) is fitted into the room the words leave: beside them on wide
  // screens, above them on narrow ones, clear of the bar and of the cue to scroll.
  const shrink = (f, k) => {
    const mx = (f.l + f.r) / 2, my = (f.t + f.b) / 2, hw = (f.r - f.l) / 2 * k, hh = (f.b - f.t) / 2 * k;
    return { l: mx - hw, t: my - hh, r: mx + hw, b: my + hh };
  };
  function frameIt() {
    const s = stage.getBoundingClientRect(), w = s.width, h = s.height, narrow = w / h <= 1.05;
    const c = copy.getBoundingClientRect(), navH = (document.querySelector('[data-nav]')?.offsetHeight || 64) - 12;
    let right = 0;
    for (const el of copy.children) right = Math.max(right, el.getBoundingClientRect().right - s.left);
    three.frame = narrow
      ? shrink({ l: 14, t: c.bottom - s.top + 8, r: w - 14, b: h - 86 }, .9)
      : { l: right + 48, t: navH + 28, r: w - 32, b: h - 104 };
    // where the words are: the diorama keeps its land clear of them
    copyBox = { left: c.left - s.left, right, top: c.top - s.top, bottom: c.bottom - s.top };
  }
  // size and pause: render only while the hero is on screen
  const size = () => { const r = stage.getBoundingClientRect(); stageW = Math.round(r.width); stageH = Math.round(r.height); three.resize(stageW, stageH); frameIt(); };
  document.fonts?.ready.then(() => frameIt());
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
  // (only then: without it a page opened part way down, or at a #section, must stay where it is)
  if (Number.isFinite(at) && at >= 0 && at <= 1) setTimeout(() => { document.documentElement.style.scrollBehavior = 'auto'; scrollTo(0, heroTop() + run() * at); }, 600);
  if (photo && !photo.complete) photo.addEventListener('load', () => three.jump(three.progress), { once: true });
  // the cherry fades in once the page is ready, together with the words; the real cherry and its branch arrive
  // together, once the branch's picture is there (never the cherry alone, then the branch popping in)
  requestAnimationFrame(() => hero.classList.add('is-ready'));
  // The page is ready once the branch is painted, the scene has been drawn through once (three.warm) and a few
  // frames in a row have come smoothly – only then does the loading screen lift.
  // half a second of frames in a row each in time for the screen (under 20 ms), or at most 5 s of waiting
  const smoothFrames = () => new Promise((res) => {
    let ok = 0, last = performance.now(); const t0 = last;
    const tick = (now) => { ok = now - last < 20 ? ok + 1 : 0; last = now;
      if (ok >= 30 || now - t0 > 5000) res(); else requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
  let arrived = false;
  const arrive = () => {
    if (arrived) return; arrived = true;
    hero.classList.add('has-plant');
    (reduce ? Promise.resolve() : three.warm()).then(() => (dio ? dio.whenDrawn() : null)).then(() => reduce || three.tune()).then(smoothFrames).then(ready, ready);
    setTimeout(() => hero.classList.add('is-settled'), 1000);
  };
  // loaded is not enough: a large picture is painted only once it is decoded
  if (!plant) arrive();
  else (plant.decode ? plant.decode() : Promise.resolve()).then(arrive, () => plant.addEventListener('load', arrive, { once: true }));
  setTimeout(arrive, 5000);   // never keep the cherry hidden for long
})();
