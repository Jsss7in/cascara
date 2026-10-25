// node _build/label/render.mjs   – both labels as pictures: _build/label/out/<kind>.png (2014 × 2624, for the bottle
// photographs) and assets/label/<kind>.webp (1024 wide, the texture on the 3D bottles). Needs the dev server on :5191.
import { chromium } from '/Users/justinmeissner/ClaudeC/onyx-site/node_modules/playwright/index.mjs';
import fs from 'fs';
import { execFileSync } from 'child_process';
const here = new URL('.', import.meta.url).pathname, root = new URL('../../', import.meta.url).pathname;
fs.mkdirSync(`${here}out`, { recursive: true }); fs.mkdirSync(`${root}assets/label`, { recursive: true });
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:5191/_build/label/label.html?' + Date.now()); await p.waitForFunction(() => document.body.dataset.ready);
for (const kind of ['original', 'cozy']) {
  for (const [scale, file] of [[2, `${here}out/${kind}.png`], [1024 / 1007, `${here}out/${kind}-1024.png`]]) {
    const { url, report } = await p.evaluate(([k, s]) => window.label(k, s), [kind, scale]);
    fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64'));
    if (scale === 2) console.log(kind, JSON.stringify(report, (k, v) => typeof v === 'number' ? +v.toFixed(1) : v));
  }
  execFileSync('cwebp', ['-quiet', '-q', '90', `${here}out/${kind}-1024.png`, '-o', `${root}assets/label/${kind}.webp`]);
}
await b.close();
