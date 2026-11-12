import type { ComponentType } from 'react';
import type { ProgramMeta } from '@/lib/types';
import { site, type ProgramKey } from '@/lib/site';
import * as fullstack from './full-stack-web-development';
import * as parttime from './part-time-web-development';
import * as data from './data-analytics';
import * as uxui from './ui-ux-design';
import * as intro from './intro-to-coding';

export interface ProgramModule {
  meta: ProgramMeta;
  Content: ComponentType;
}

/** Display order on listings. */
export const programs: ProgramModule[] = [fullstack, parttime, data, uxui, intro].map((m) => ({
  meta: m.meta,
  Content: m.default,
}));

export const getProgram = (slug: string) => programs.find((p) => p.meta.slug === slug);

const keyBySlug: Record<string, ProgramKey> = {
  'full-stack-web-development': 'fullstack',
  'part-time-web-development': 'parttime',
  'data-analytics': 'data',
  'ui-ux-design': 'uxui',
  'intro-to-coding': 'intro',
};

/** Price label and next start for a program slug (from site.ts). */
export function programInfo(slug: string) {
  return site.programs[keyBySlug[slug]];
}
