// Requires: npm i puppeteer gifencoder png-js
// Run after starting the Next.js app (npm run dev) or after building and serving the site locally.
const puppeteer = require('puppeteer');
const GIFEncoder = require('gifencoder');
const PNG = require('png-js');
const fs = require('fs');
const path = require('path');

;(async () => {
  const url = 'http://localhost:3000';
  const width = 900, height = 220;
  const fps = 20;
  const seconds = 3;
  const totalFrames = fps * seconds;

  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(url, { waitUntil: 'networkidle2' });

  // wait for initial animation
  await page.waitForTimeout(300);

  const outDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'hero.gif');

  const encoder = new GIFEncoder(width, height);
  encoder.createReadStream().pipe(fs.createWriteStream(outPath));
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(1000 / fps);
  encoder.setQuality(10);

  for (let i = 0; i < totalFrames; i++) {
    const buffer = await page.screenshot({ type: 'png' });
    const png = PNG.sync.read(buffer);
    encoder.addFrame(png.data);
    await page.waitForTimeout(1000 / fps);
  }

  encoder.finish();
  await browser.close();
  console.log('Saved to', outPath);
})();
