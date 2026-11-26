// 重新輸出履歷 PDF：node tools/resume/build.cjs
// 需要 Playwright（雲端環境已內建；本機請先 npm i -D playwright）與 npm ci（取得內嵌字型）。
// 改文案請直接編輯 resume.html，輸出到 public/Lin-Xiang-Yi-Resume.pdf。
const path = require('path');
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + path.join(__dirname, 'resume.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(800);
  await p.pdf({ path: path.join(__dirname, '../../public/Lin-Xiang-Yi-Resume.pdf'), width: '8.2633in', height: '11.6933in', printBackground: true, preferCSSPageSize: true });
  await b.close();
})();
