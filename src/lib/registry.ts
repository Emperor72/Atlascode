import { corePages } from '@/content/pages';
import { programs } from '@/content/programs';
import { posts } from '@/content/blog';
import type { PageEntry } from './types';
import type { Crumb } from './seo';

/** Every indexable URL on the site: the single source for sitemaps, breadcrumbs and related cards. */
export function allPages(): PageEntry[] {
  const core: PageEntry[] = corePages.map((p) => ({
    path: p.path,
    title: p.title,
    description: p.description,
    h1: p.h1,
    crumb: p.crumb,
    priority: p.priority,
    changeFrequency: p.changeFrequency,
    section: p.section,
    lastModified: p.lastModified,
  }));
  const progs: PageEntry[] = programs.map(({ meta }) => ({
    path: `/programs/${meta.slug}/`,
    title: meta.title,
    description: meta.description,
    h1: meta.h1,
    crumb: meta.crumb,
    priority: meta.slug === 'intro-to-coding' ? 0.8 : 0.9,
    changeFrequency: 'monthly',
    section: 'programs',
  }));
  const blog: PageEntry[] = posts.map(({ meta }) => ({
    path: `/blog/${meta.slug}/`,
    title: meta.title,
    description: meta.description,
    h1: meta.h1,
    crumb: meta.crumb,
    priority: 0.7,
    changeFrequency: 'yearly',
    section: 'blog',
    lastModified: meta.modified ?? meta.date,
  }));
  return [...core, ...progs, ...blog];
}

export function findPage(path: string): PageEntry | undefined {
  return allPages().find((p) => p.path === path);
}

/** Home › Section › Page, built from the URL hierarchy. */
export function breadcrumbsFor(path: string): Crumb[] {
  const crumbs: Crumb[] = [{ name: 'Home', path: '/' }];
  const segments = path.split('/').filter(Boolean);
  let acc = '/';
  for (const seg of segments) {
    acc += `${seg}/`;
    const page = findPage(acc);
    if (page) crumbs.push({ name: page.crumb, path: acc });
  }
  return crumbs;
}
