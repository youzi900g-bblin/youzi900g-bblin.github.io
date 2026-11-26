// 網站預覽圖（分享連結時顯示）與圖示：node tools/make-og.cjs
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const root = path.resolve(__dirname, '..');
const pub = (f) => 'file://' + path.join(root, 'public', f);
const og = `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Noto+Sans+TC:wght@400;500&family=Noto+Serif+TC:wght@900&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;background:#081328;position:relative;color:#f3f7fc;font-family:'Noto Sans TC',sans-serif}
.dots{position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px, rgba(243,247,252,.09) 1.2px, transparent 1.6px);background-size:28px 28px}
.photo{position:absolute;right:0;top:0;bottom:0;width:640px;background:url(${pub('works/portrait-duo.jpg')}) 30% 40%/cover;-webkit-mask-image:linear-gradient(to right,transparent 0,#081328 38%)}
.sig{position:absolute;right:70px;bottom:46px;width:230px;transform:rotate(-6deg)}
h1{position:absolute;left:72px;top:118px;font-family:Gloock,serif;font-weight:400;font-size:150px;line-height:.92;letter-spacing:-.01em}
h1 .chip{background:#ff9150;color:#1b2740;padding:0 .06em}
h1 .cjk{font-family:'Noto Serif TC',serif;font-weight:900;font-size:.5em;margin-left:.2em}
.tag{position:absolute;left:76px;bottom:92px;font-size:30px;font-weight:500}
.sub{position:absolute;left:76px;bottom:48px;font-size:22px;color:#c6d2e1}
.spark{position:absolute;left:560px;top:48px;width:44px;color:#c6d2e1}
.bar{position:absolute;left:0;right:0;bottom:0;height:10px;background:#ff9150}
</style></head><body>
<div class="dots"></div><div class="photo"></div><img class="sig" src="${pub('works/signature.png')}">
<svg class="spark" viewBox="0 0 9 9" shape-rendering="crispEdges"><path fill="currentColor" d="M4 0h1v1h-1zM3 1h3v1h-3zM3 2h3v1h-3zM0 3h9v1h-9zM1 4h7v1h-7zM2 5h5v1h-5zM2 6h5v1h-5zM1 7h3v1h-3zM5 7h3v1h-3zM1 8h2v1h-2zM6 8h2v1h-2z"/></svg>
<h1><span style="display:block">Lin <span class="chip">X</span>iang</span><span style="display:block">Yi<span class="cjk">林湘儀</span></span></h1>
<div class="tag">視覺設計｜影音剪輯｜內容企劃｜AI 製作</div>
<div class="sub">youzi900g-bblin.github.io</div><div class="bar"></div></body></html>`;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  fs.writeFileSync('/tmp/og.html', og);
  await p.goto('file:///tmp/og.html', { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: path.join(root, 'public/og.jpg'), type: 'jpeg', quality: 86 });
  for (const [size, name] of [[48, 'favicon-48.png'], [180, 'apple-touch-icon.png']]) {
    const q = await b.newPage({ viewport: { width: size, height: size } });
    await q.setContent(`<body style="margin:0"><img src="${pub('favicon.svg')}" width="${size}" height="${size}"></body>`);
    await q.waitForTimeout(200);
    await q.screenshot({ path: path.join(root, 'public', name), omitBackground: true });
  }
  await b.close(); console.log('og + icons done');
})();
