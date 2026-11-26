// 預覽卡產生器：把每件作品印在統一的「打樣稿」版面上，輸出到 public/works/tiles/。
// 使用方式（需要 Playwright）：node tools/make-tiles.cjs
// 作品圖更新後重跑一次即可。作品資料取自 src/data/works.ts。
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'src/data/works.ts'), 'utf8');
const works = [...src.matchAll(/slug: '([^']+)'[\s\S]*?images: \[\{ src: '([^']+)'/g)].map((m) => ({ slug: m[1], img: m[2] }));

const BG = [
  { bg: '#081328', ink: '#e8eef7', mute: '#8da0bd', dot: 'rgba(232,238,247,.10)' },   // 深藍黑
  { bg: '#40546e', ink: '#f3f7fc', mute: '#c6d2e1', dot: 'rgba(243,247,252,.14)' },   // 中等藍灰
  { bg: '#d9e2ed', ink: '#27364c', mute: '#4f5f74', dot: 'rgba(39,54,76,.14)' },      // 淡藍
];
const ACCENT = '#ff9150';
const sparkPath = 'M12 0C12.9 7.2 16.8 11.1 24 12C16.8 12.9 12.9 16.8 12 24C11.1 16.8 7.2 12.9 0 12C7.2 11.1 11.1 7.2 12 0Z';
function rng(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; }

function html(w, i) {
  const t = BG[i % 3]; const r = rng(i * 97 + 13);
  const spots = [[8, 10], [88, 12], [6, 82], [90, 84], [48, 5], [52, 93], [95, 48], [3, 47]];
  const sparks = spots.map(([x, y], k) => {
    const size = 20 + Math.round(r() * 30); const col = k === 0 ? ACCENT : t.mute;
    return `<svg style="position:absolute;left:${x}%;top:${y}%;width:${size}px;height:${size}px;color:${col};opacity:${k === 0 ? 1 : 0.7}" viewBox="0 0 24 24"><path fill="currentColor" d="${sparkPath}"/></svg>`;
  }).join('');
  const tilt = ((i % 2 ? 1 : -1) * (0.8 + r() * 1.2)).toFixed(2);
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Gloock&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:900px;overflow:hidden;background:${t.bg};position:relative;font-family:Gloock,serif}
.dots{position:absolute;inset:0;background-image:radial-gradient(circle at 1px 1px, ${t.dot} 1.4px, transparent 1.8px);background-size:28px 28px}
.num{position:absolute;right:42px;bottom:10px;font-size:300px;line-height:1;color:transparent;-webkit-text-stroke:2px ${t.mute};opacity:.35}
.stage{position:absolute;inset:0;display:grid;place-items:center}
.sheet{position:relative;padding:14px;background:#f9fbfe;box-shadow:0 2px 0 rgba(8,19,40,.18),18px 30px 50px -18px rgba(8,19,40,.55);transform:rotate(${tilt}deg)}
.sheet img{display:block;max-width:800px;max-height:600px;width:auto;height:auto}
.sheet:before{content:"";position:absolute;inset:-22px;--m:${t.ink};--l:14px;--o:22px;
background:linear-gradient(var(--m),var(--m)) 0 var(--o)/var(--l) 2px no-repeat,linear-gradient(var(--m),var(--m)) var(--o) 0/2px var(--l) no-repeat,
linear-gradient(var(--m),var(--m)) 100% var(--o)/var(--l) 2px no-repeat,linear-gradient(var(--m),var(--m)) calc(100% - var(--o)) 0/2px var(--l) no-repeat,
linear-gradient(var(--m),var(--m)) 0 calc(100% - var(--o))/var(--l) 2px no-repeat,linear-gradient(var(--m),var(--m)) var(--o) 100%/2px var(--l) no-repeat,
linear-gradient(var(--m),var(--m)) 100% calc(100% - var(--o))/var(--l) 2px no-repeat,linear-gradient(var(--m),var(--m)) calc(100% - var(--o)) 100%/2px var(--l) no-repeat;opacity:.8}
.grain{position:absolute;inset:0;opacity:.22;mix-blend-mode:overlay;pointer-events:none}
</style></head><body>
<div class="dots"></div>
<div class="num">${String(i + 1).padStart(2, '0')}</div>
${sparks}
<div class="stage"><div class="sheet"><img src="file://${path.join(root, 'public', w.img)}"></div></div>
<svg class="grain" width="1200" height="900"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="${i + 3}"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 1.4 -.2"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>
</body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 1 });
  for (let i = 0; i < works.length; i++) {
    const w = works[i];
    const f = path.join('/tmp', `tile-${w.slug}.html`);
    fs.writeFileSync(f, html(w, i));
    await page.goto('file://' + f, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(root, 'public/works/tiles', `${w.slug}.jpg`), type: 'jpeg', quality: 84 });
    console.log('tile', i + 1, w.slug);
  }
  await browser.close();
})();
