// Cascarup – the opening's backdrop since the redesign of 2026-11: a real photograph of a coffee plantation at
// sunrise (wide for screens in landscape, tall for phones) in place of the paper diorama. Same interface as
// createDiorama (layout, update, lean, ready, whenDrawn), so page.js runs it unchanged: it leans a little with the
// pointer, eases forward and fades as the story begins. Only transform and opacity move.
import { createDiorama as createPaper } from './diorama.js';

export function createDiorama(root) {
  root.innerHTML = '';
  root.classList.add('dio--photo');
  const pic = document.createElement('picture');
  pic.className = 'dio__photo';
  const base = root.dataset.photo || 'assets/hero/feld';
  pic.innerHTML = `<source media="(max-aspect-ratio: 4/5)" srcset="${base}-hoch-900.webp 900w, ${base}-hoch-1500.webp 1500w" sizes="100vw">`
    + `<img src="${base}-quer-2400.webp" srcset="${base}-quer-1400.webp 1400w, ${base}-quer-2400.webp 2400w" sizes="100vw" alt="" decoding="async" fetchpriority="high">`;
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
    if (isGone !== gone) { gone = isGone; root.classList.toggle('is-gone', isGone); }
  }
  const lean = (x, y) => { tpx = x; tpy = y; branch.lean(x, y); };
  return { layout, update, lean, layers: [], ready: () => laid, whenDrawn: () => drawn };
}
