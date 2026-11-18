// Quality gate for the built site (run `npm run build` first).
// Checks every page at phone, tablet and desktop widths:
//   - no console errors or failed requests
//   - no horizontal scrolling
//   - axe-core accessibility scan (WCAG 2.2 AA) with zero violations
//   - every image has alt text, every link has a name, one h1
// Saves screenshots to tests/out/ for visual review.
import { createRequire } from 'node:module';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import handler from 'serve-handler';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

const root = path.resolve('dist');
const out = path.resolve('tests/out');
fs.mkdirSync(out, { recursive: true });

const server = http.createServer((req, res) => handler(req, res, { public: root, cleanUrls: true }));
await new Promise((r) => server.listen(4321, r));
const base = 'http://localhost:4321';

const pages = ['/', '/es/', '/404'];
const viewports = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'desktop', width: 1440, height: 900 },
];
const failures = [];
const fail = (msg) => { failures.push(msg); console.log('  ✗ ' + msg); };

const browser = await chromium.launch();
for (const motion of ['no-preference', 'reduce']) {
  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, reducedMotion: motion });
    for (const p of pages) {
      const page = await ctx.newPage();
      const tag = `${p} @${vp.name}${motion === 'reduce' ? ' (reduced motion)' : ''}`;
      page.on('console', (m) => { if (m.type() === 'error') fail(`${tag}: console error: ${m.text()}`); });
      page.on('pageerror', (e) => fail(`${tag}: page error: ${e.message}`));
      page.on('requestfailed', (r) => fail(`${tag}: request failed: ${r.url()}`));
      page.on('response', (r) => { if (r.status() >= 400 && !r.url().endsWith('/404')) fail(`${tag}: ${r.status()} ${r.url()}`); });
      await page.goto(base + p, { waitUntil: 'networkidle' });

      // scroll through so lazy images and reveals run
      await page.evaluate(async () => {
        document.querySelectorAll('img[loading="lazy"]').forEach((i) => i.setAttribute('loading', 'eager'));
        for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(1600);
      await page.evaluate(() => Promise.all([...document.images].map((i) => i.decode().catch(() => {}))));

      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) fail(`${tag}: horizontal overflow of ${overflow}px`);

      const basics = await page.evaluate(() => ({
        h1: document.querySelectorAll('h1').length,
        noAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).length,
        unnamedLinks: [...document.querySelectorAll('a')].filter((a) => !(a.textContent.trim() || a.getAttribute('aria-label'))).length,
        hidden: [...document.querySelectorAll('[data-reveal]')].filter((e) => getComputedStyle(e).opacity === '0').length,
      }));
      if (basics.h1 !== 1) fail(`${tag}: expected 1 h1, found ${basics.h1}`);
      if (basics.noAlt) fail(`${tag}: ${basics.noAlt} images without alt`);
      if (basics.unnamedLinks) fail(`${tag}: ${basics.unnamedLinks} links without a name`);

      await page.addScriptTag({ content: axeSource });
      const axe = await page.evaluate(async () => {
        document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-in'));
        await new Promise((r) => setTimeout(r, 1400));
        // @ts-ignore
        const r = await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] });
        return r.violations.map((v) => `${v.id} (${v.impact}): ${v.help} → ${v.nodes.slice(0, 3).map((n) => n.target.join(' ')).join(' | ')}`);
      });
      axe.forEach((v) => fail(`${tag}: axe ${v}`));

      if (motion === 'no-preference') {
        const file = `${p.replace(/\W+/g, '_') || 'home'}-${vp.name}`;
        await page.screenshot({ path: path.join(out, `${file}.png`) });
        if (p !== '/404') await page.screenshot({ path: path.join(out, `${file}-full.png`), fullPage: true });
      }
      console.log(`  ✓ ${tag} checked`);
      await page.close();
    }
    await ctx.close();
  }
}
await browser.close();
server.close();

if (failures.length) { console.log(`\n${failures.length} problem(s) found.`); process.exit(1); }
console.log('\nAll checks passed.');
