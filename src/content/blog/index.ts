import type { ComponentType } from 'react';
import type { PostMeta } from '@/lib/types';
import * as becomeDev from './how-to-become-web-developer-morocco';
import * as bootcampVsUni from './coding-bootcamp-vs-university-morocco';
import * as techJobs from './tech-jobs-agadir-souss-massa';
import * as learnAgadir from './learn-to-code-agadir-guide';
import * as jsVsPython from './javascript-vs-python-beginners';
import * as remote from './remote-developer-jobs-from-morocco';
import * as prepare from './how-to-prepare-for-coding-bootcamp';
import * as after30 from './career-change-to-tech-after-30';

export interface PostModule {
  meta: PostMeta;
  Content: ComponentType;
}

/** Newest first. */
export const posts: PostModule[] = [becomeDev, bootcampVsUni, techJobs, learnAgadir, jsVsPython, remote, prepare, after30]
  .map((m) => ({ meta: m.meta, Content: m.default }))
  .sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export const getPost = (slug: string) => posts.find((p) => p.meta.slug === slug);
