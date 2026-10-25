// The participation page's share picture: its opening, without the bar
const { chromium } = require('/Users/justinmeissner/ClaudeC/onyx-site/node_modules/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await p.goto('http://localhost:5191/partizipation.html?' + Date.now(), { waitUntil: 'networkidle' });
  await p.addStyleTag({ content: '.nav, .ps-why, .ps-hero .hero__actions, .ps-hero__lede { display: none !important; } .ps .ps-hero { min-height: 630px; padding-top: 0; padding-bottom: 0; } [data-reveal] { opacity: 1 !important; transform: none !important; } .cert__rosette { animation: none !important; }' });
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(1500);
  await p.screenshot({ path: process.argv[2], type: 'jpeg', quality: 88 }); await b.close();
})();
