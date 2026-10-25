// node bake.mjs <cfg.json> <out-dir>   – the plant as one picture, plus where its cherry sits in it (plant.json)
import { chromium } from '/Users/justinmeissner/ClaudeC/onyx-site/node_modules/playwright/index.mjs';
import fs from 'fs';
const [cfgFile, out] = process.argv.slice(2);
const cfg = JSON.parse(fs.readFileSync(cfgFile, 'utf8'));
// CROP: the branch fades out just before the cherries further along it (cherry C starts at 2269)
const S = .56, CROP = 2250, HERO = [883.11, 481.39], HRX = 457.7, TURN = -22.59943;
const b = await chromium.launch(); const p = await b.newPage(); p.setDefaultTimeout(180000);
await p.goto('http://localhost:5191/_build/plant/bake.html?' + Date.now()); await p.waitForFunction(() => document.body.dataset.ready);
const { url, meta } = await p.evaluate(([c, s, x]) => window.bake(c, s, x), [cfg, S, CROP]);
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(`${out}/zweig.png`, Buffer.from(url.split(',')[1], 'base64'));
// in the baked picture's pixels: the hero cherry's centre and half width, and the turn that stands it upright
const plant = { size: [meta.width, meta.height], cx: +((HERO[0] - meta.origin[0]) * S).toFixed(2), cy: +((HERO[1] - meta.origin[1]) * S).toFixed(2),
  rx: +(HRX * S).toFixed(2), turn: TURN };
fs.writeFileSync(`${out}/plant.json`, JSON.stringify(plant));
console.log(JSON.stringify(plant)); await b.close();
