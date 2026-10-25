// The share picture's backdrop: the opening's last scene (two bottles, their still life) without words or bar.
const { chromium } = require('/Users/justinmeissner/ClaudeC/onyx-site/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await (await b.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 })).newPage(); p.setDefaultTimeout(90000);
  await p.goto('http://localhost:5191/?debug&' + Date.now(), { waitUntil: 'networkidle' });
  await p.waitForFunction(() => window.__hero); await p.waitForTimeout(2000);
  await p.addStyleTag({ content: '.nav, .hero__end, .hero__beat, .hero__scroll, .menu-btn { visibility: hidden !important; opacity: 0 !important; }' });
  await p.evaluate(() => { const hero = document.querySelector('[data-hero]'), stage = hero.querySelector('[data-hero-stage]');
    const rel = parseFloat(getComputedStyle(hero).getPropertyValue('--release')) || 0, pin = parseFloat(getComputedStyle(stage).top) || 0;
    document.documentElement.style.scrollBehavior = 'auto'; scrollTo(0, hero.offsetTop + (hero.offsetHeight - pin - stage.offsetHeight - rel)); window.__hero.jump(1); });
  await p.waitForTimeout(1200);
  await p.screenshot({ path: process.argv[2] }); await b.close();
})();
