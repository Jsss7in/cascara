const { chromium } = require('/Users/justinmeissner/ClaudeC/onyx-site/node_modules/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await p.goto('http://localhost:5191/_build/og/og.html?' + Date.now(), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  await p.screenshot({ path: process.argv[2], type: 'jpeg', quality: 88 });
  await b.close();
})();
