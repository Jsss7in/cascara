// The shop's picture (scene.html) as images: wide for laptops, near square for phones.
//   node _build/shopscene/render.mjs [port]   (a static server on the repo's root, :5191 unless given; Playwright from ClaudeC/onyx-site)
import { createRequire } from 'module';
import { execFileSync } from 'child_process';
import fs from 'fs';
const require = createRequire('/Users/justinmeissner/ClaudeC/onyx-site/package.json');
const { chromium } = require('playwright');
const out = new URL('../../assets/shop/', import.meta.url).pathname;
const port = +process.argv[2] || 5191;
const b = await chromium.launch({ headless: true, args: ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
for (const [W, H, K] of [[1360, 560, 2], [390, 340, 3]]) {
  const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: K });
  await p.goto(`http://localhost:${port}/_build/shopscene/scene.html?w=${W}&h=${H}&k=${K}`, { waitUntil: 'load' });
  await p.waitForFunction(() => window.__ready, null, { timeout: 30000 });
  // what the page lays over the picture (clouds, the farmer): beside the scene, for the build
  const over = await p.evaluate(() => window.__ready);
  fs.writeFileSync(new URL(`./overlay-${W}.json`, import.meta.url), JSON.stringify(over));
  const png = `${out}feld-${W}.png`;
  await p.locator('#scene').screenshot({ path: png });
  execFileSync('cwebp', ['-quiet', '-q', '84', '-sharp_yuv', '-m', '6', png, '-o', `${out}feld-${W}.webp`]);
  fs.unlinkSync(png);
  console.log(`feld-${W}.webp`, fs.statSync(`${out}feld-${W}.webp`).size);
  await p.close();
}
await b.close();
