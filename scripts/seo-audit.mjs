// SEO audit of the static export in /out. Run after `npm run build`:  npm run audit
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const OUT = 'out';
if (!existsSync(OUT)) {
  console.error('No /out folder. Run `npm run build` first.');
  process.exit(1);
}

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const htmlFiles = walk(OUT).filter((f) => f.endsWith('.html') && !f.endsWith('404.html') && !f.includes('_not-found') && !f.startsWith(join(OUT, '404')));
const toUrl = (f) => '/' + relative(OUT, f).split(sep).join('/').replace(/index\.html$/, '');
const pages = new Map(htmlFiles.map((f) => [toUrl(f), readFileSync(f, 'utf8')]));

const issues = [];
const warn = (url, msg) => issues.push(`${url}: ${msg}`);
const inbound = new Map([...pages.keys()].map((u) => [u, 0]));
const titles = new Map();
const descs = new Map();
let links = 0;

for (const [url, html] of pages) {
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1] ?? '';
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;

  if (!noindex) {
    if (!title) warn(url, 'missing <title>');
    else if (title.length > 65) warn(url, `title is ${title.length} chars (>65)`);
    if (!desc) warn(url, 'missing meta description');
    else if (desc.length < 110 || desc.length > 170) warn(url, `description is ${desc.length} chars`);
    if (titles.has(title)) warn(url, `duplicate title with ${titles.get(title)}`);
    titles.set(title, url);
    if (descs.has(desc)) warn(url, `duplicate description with ${descs.get(desc)}`);
    descs.set(desc, url);
    if (!/<link rel="canonical"/.test(html)) warn(url, 'missing canonical');
    if (!/application\/ld\+json/.test(html)) warn(url, 'missing JSON-LD');
    if (!/property="og:image"/.test(html)) warn(url, 'missing og:image');
  }
  if (h1s !== 1) warn(url, `${h1s} <h1> tags`);
  for (const m of html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/g)) warn(url, `img without alt: ${m[0].slice(0, 60)}`);

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const target = m[1];
    if (target.startsWith('/_next/')) continue;
    links++;
    if (pages.has(target)) {
      if (target !== url) inbound.set(target, inbound.get(target) + 1);
      continue;
    }
    if (!existsSync(join(OUT, target)) && !existsSync(join(OUT, target, 'index.html'))) warn(url, `broken link ${target}`);
    else if (!target.endsWith('/') && !/\.[a-z0-9]+$/i.test(target)) warn(url, `link without trailing slash ${target}`);
  }
}
for (const [url, n] of inbound) if (n === 0 && url !== '/') warn(url, 'orphan page (no inbound links)');

for (const f of ['sitemap.xml', 'robots.txt', 'manifest.webmanifest', 'blog/feed.xml', 'opengraph-image.png']) {
  if (!existsSync(join(OUT, f))) issues.push(`missing /${f}`);
}
const sitemapUrls = (readFileSync(join(OUT, 'sitemap.xml'), 'utf8').match(/<loc>/g) || []).length;

console.log(`Pages: ${pages.size} · internal links checked: ${links} · sitemap URLs: ${sitemapUrls}`);
const minInbound = [...inbound].sort((a, b) => a[1] - b[1]).slice(0, 5);
console.log('Least-linked pages:', minInbound.map(([u, n]) => `${u} (${n})`).join(', '));
if (issues.length) {
  console.log(`\n${issues.length} issue(s):`);
  issues.forEach((i) => console.log(' - ' + i));
  process.exit(1);
}
console.log('SEO audit passed: no issues.');
