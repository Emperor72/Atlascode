import type { MetadataRoute } from 'next';
import { allPages } from '@/lib/registry';
import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

/** /sitemap.xml: generated from the page registry, so new pages are included automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10);
  return allPages()
    .sort((a, b) => b.priority - a.priority)
    .map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: p.lastModified ?? today,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    }));
}
