import { posts } from '@/content/blog';
import { site } from '@/lib/site';
import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** /blog/feed.xml: RSS 2.0 feed of all blog posts. */
export function GET() {
  const items = posts
    .map(({ meta }) => {
      const url = absoluteUrl(`/blog/${meta.slug}/`);
      return `<item><title>${esc(meta.h1)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(`${meta.date}T08:00:00Z`).toUTCString()}</pubDate><category>${esc(meta.category)}</category><description>${esc(meta.description)}</description></item>`;
    })
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${esc(site.name)} Blog</title><link>${absoluteUrl('/blog/')}</link><description>Guides on learning to code, online bootcamps and junior tech careers in the UK, the US and Canada.</description><language>en</language><atom:link href="${absoluteUrl('/blog/feed.xml')}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
