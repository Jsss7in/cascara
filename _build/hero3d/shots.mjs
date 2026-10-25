// Renders every studio shot in a browser and writes it next to the page (called by shots.sh).
import { chromium } from '/Users/justinmeissner/ClaudeC/onyx-site/node_modules/playwright/index.mjs';
import fs from 'fs';
const [out, url = 'http://localhost:5191/_build/hero3d/shots.html'] = process.argv.slice(2);
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1200, height: 960 } });
p.setDefaultTimeout(180000);
const errs = []; p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(url + '?' + Date.now(), { waitUntil: 'networkidle' });
await p.waitForFunction(() => window.shots);
await p.evaluate(async () => { window.render = await window.shots(document.getElementById('c')); });
for (const id of ['cascara', 'gifferstee']) for (const ml of [200, 500]) {
  const data = await p.evaluate(([id, ml]) => window.render(id, ml), [id, ml]);
  fs.writeFileSync(`${out}/${id}-${ml}.png`, Buffer.from(data.split(',')[1], 'base64'));
  console.log(id, ml);
}
if (errs.length) console.log('ERRORS', errs.join(' | '));
await b.close();
