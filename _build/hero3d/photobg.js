// Cascarup – the opening's backdrop since the redesign of 2026-11: a real photograph of a coffee plantation at
// sunrise (wide for screens in landscape, tall for phones) in place of the paper diorama. Same interface as
// createDiorama (layout, update, lean, ready, whenDrawn), so page.js runs it unchanged: it leans a little with the
// pointer, eases forward and fades as the story begins. Only transform and opacity move.
import { createDiorama as createPaper } from './diorama.js';

export function createDiorama(root) {
  root.innerHTML = '';
  root.classList.add('dio--photo');
  const pic = document.createElement('div');
  pic.className = 'dio__photo';
  // the French and English pages live one folder down: their pictures are found the way the cherry's photo is
  // (the page's own links are rewritten for them, this script's are not)
  const cherry = document.querySelector('[data-hero-cherry]');
  const up = cherry ? (cherry.getAttribute('src') || '').replace(/assets\/.*$/, '') : '';
  const base = root.dataset.photo || `${up}assets/hero/feld`;
  // with the film, phones show the wide picture too (cut to its middle, where the pickers walk), so it has to come in
  // its largest size there; without the film they keep the tall one, which is sharper on a phone
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches || (navigator.connection && navigator.connection.saveData);
  pic.classList.toggle('is-still', !!still);
  pic.innerHTML = '<picture>' + (still ? `<source media="(max-aspect-ratio: 4/5)" srcset="${base}-hoch-900.webp 900w, ${base}-hoch-1500.webp 1500w" sizes="100vw">` : '')
    + `<img src="${base}-quer-2400.webp" srcset="${base}-quer-1400.webp 1400w, ${base}-quer-2400.webp 2400w" sizes="(max-aspect-ratio: 4/5) 420vw, 106vw" alt="" decoding="async" fetchpriority="high"></picture>`;
  // The pickers walk (2026-11-12): only they move in Justin's film of this photograph, so the sharp photograph stays and
  // just their patch of it plays as a small looping video on top, its edges feathered into the picture. It joins
  // the wide picture only (the tall one is another shot), and stays away with reduced motion or Save-Data.
  const PATCH = [790 / 1920, 598 / 1072, 540 / 1920, 402 / 1072];   // where the patch lies in the picture (shares)
  const film = still ? null : document.createElement('video');
  if (film) {
    film.className = 'dio__pickers';
    Object.assign(film, { muted: true, loop: true, playsInline: true, autoplay: true, preload: 'auto', disablePictureInPicture: true });
    film.setAttribute('muted', ''); film.setAttribute('playsinline', ''); film.setAttribute('aria-hidden', 'true');
    film.innerHTML = `<source src="${up}assets/hero/pfluecker.webm" type="video/webm"><source src="${up}assets/hero/pfluecker.mp4" type="video/mp4">`;
    film.addEventListener('playing', () => film.classList.add('is-on'), { once: true });
    pic.append(film);
  }
  // the patch follows the picture as object-fit: cover lays it out (read from the picture's own computed position)
  function placeFilm() {
    if (!film) return;
    const wide = /-quer-/.test(img.currentSrc || img.src) && img.naturalWidth;
    film.hidden = !wide;
    if (!wide) { film.pause(); return; }
    const cw = pic.clientWidth, ch = pic.clientHeight, ar = img.naturalWidth / img.naturalHeight;
    const dw = cw / ch > ar ? cw : ch * ar, dh = dw / ar;
    const [opx, opy] = getComputedStyle(img).objectPosition.split(' ').map((v) => parseFloat(v) / 100);
    const ox = (cw - dw) * opx, oy = (ch - dh) * opy;
    Object.assign(film.style, { left: `${(ox + PATCH[0] * dw).toFixed(1)}px`, top: `${(oy + PATCH[1] * dh).toFixed(1)}px`,
      width: `${(PATCH[2] * dw).toFixed(1)}px`, height: `${(PATCH[3] * dh).toFixed(1)}px` });
    if (!gone && film.paused) film.play().catch(() => {});
  }
  pic.querySelector('img').addEventListener('load', () => placeFilm());   // runs later, once img is known
  // the branch in front stays the drawn one of the first opening (Justin, 2026-11-07): the old diorama, its branch only,
  // and its birds crossing the sky now and then
  const front = document.createElement('div');
  front.className = 'dio__front';
  root.append(pic, front);
  const branch = createPaper(front, { only: ['branch'], keep: ['dio__bird'] });
  const img = pic.querySelector('img');
  let laid = false, px = 0, py = 0, tpx = 0, tpy = 0, tf = '', last = -1, gone = null;
  const drawn = Promise.all([(img.decode ? img.decode() : Promise.resolve()).catch(() => {}), branch.whenDrawn()]);
  function layout(box, W, H, narrow, copy) {
    if (!box || !box.rx) return;
    laid = true;
    branch.layout(box, W, H, narrow, copy);
    placeFilm();
  }
  function update(go, opacity, t, W, H, narrow = false, away = opacity <= 0) {
    px += (tpx - px) * .06; py += (tpy - py) * .06;
    if (Math.abs(tpx - px) < .001) px = tpx;
    if (Math.abs(tpy - py) < .001) py = tpy;
    const e = go * go * (3 - 2 * go);
    // a slow push into the field as the story starts, a touch of depth with the pointer
    const s = 1.04 + e * .1, x = -px * 14, y = -py * 9 + e * H * .04;
    const next = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${s.toFixed(4)})`;
    if (next !== tf) { tf = next; pic.style.transform = next; }
    if (opacity !== last) { last = opacity; pic.style.opacity = opacity.toFixed(3); }
    branch.update(go, opacity, t, W, H, narrow, away);
    const isGone = away && opacity <= 0;
    if (isGone !== gone) {
      gone = isGone; root.classList.toggle('is-gone', isGone);
      // nothing plays unseen: the film rests while the story runs and goes on when the photograph is back
      if (film && !film.hidden) { if (isGone) film.pause(); else film.play().catch(() => {}); }
    }
  }
  const lean = (x, y) => { tpx = x; tpy = y; branch.lean(x, y); };
  return { layout, update, lean, layers: [], ready: () => laid, whenDrawn: () => drawn };
}
