import type { PageEntry } from '@/lib/types';

export interface CorePage extends PageEntry {
  lead?: string;
  related?: string[];
}

/** SEO metadata for every hand-built page (programs and blog posts register themselves). */
export const corePages: CorePage[] = [
  {
    path: '/',
    title: 'Coding Bootcamp in Agadir, Morocco | Atlas Code',
    description:
      'Learn web development, data analytics or UI/UX design at Atlas Code, the coding bootcamp in Agadir. Full-time and part-time programs with career support.',
    h1: 'The coding bootcamp in Agadir that gets you job-ready',
    crumb: 'Home',
    priority: 1,
    changeFrequency: 'weekly',
    section: 'main',
  },
  {
    path: '/programs/',
    title: 'Coding Bootcamp Programs in Agadir | Atlas Code',
    description:
      'Compare Atlas Code programs in Agadir: full-stack web development (full-time or part-time), data analytics, UI/UX design and a beginner intro workshop.',
    h1: 'Bootcamp programs in Agadir',
    lead: 'Five intensive, project-based programs, built for the Moroccan job market and taught in person on our Agadir campus. Pick the path that fits your goals and your schedule.',
    crumb: 'Programs',
    priority: 0.95,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/admissions/', '/tuition-financing/', '/blog/coding-bootcamp-vs-university-morocco/'],
  },
  {
    path: '/admissions/',
    title: 'Admissions: How to Join Our Agadir Bootcamp | Atlas Code',
    description:
      'How admissions work at Atlas Code: apply online, meet an advisor, complete a short logic challenge and secure your seat. No degree or coding experience required.',
    h1: 'Admissions: how to join Atlas Code',
    lead: 'We don’t select on diplomas. We select on motivation, curiosity and the ability to keep going when the code doesn’t work yet. Here’s exactly what happens after you apply.',
    crumb: 'Admissions',
    priority: 0.9,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/apply/', '/tuition-financing/', '/blog/how-to-prepare-for-coding-bootcamp/'],
  },
  {
    path: '/tuition-financing/',
    title: 'Tuition, Payment Plans & Scholarships | Atlas Code',
    description:
      'Atlas Code tuition in Agadir explained: program prices in MAD, interest-free payment plans, early-bird discounts, scholarships and company sponsorship.',
    h1: 'Tuition & financing',
    lead: 'Clear prices, no hidden fees, and several ways to spread the cost. A bootcamp is an investment in your career, so we want you to make it with full information.',
    crumb: 'Tuition & Financing',
    priority: 0.9,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/admissions/', '/upcoming-cohorts/', '/blog/career-change-to-tech-after-30/'],
  },
  {
    path: '/upcoming-cohorts/',
    title: 'Upcoming Bootcamp Start Dates in Agadir | Atlas Code',
    description:
      'See the next start dates for Atlas Code bootcamps in Agadir: full-stack web development, part-time, data analytics, UI/UX design and intro workshops.',
    h1: 'Upcoming cohorts & start dates',
    lead: 'Our cohorts are deliberately small, so seats go to the applicants who complete admissions first. Choose your start date and reserve your place.',
    crumb: 'Upcoming Cohorts',
    priority: 0.85,
    changeFrequency: 'weekly',
    section: 'main',
    related: ['/apply/', '/admissions/', '/programs/'],
  },
  {
    path: '/career-services/',
    title: 'Career Services for Bootcamp Graduates | Atlas Code',
    description:
      'Atlas Code career services: CV and LinkedIn reviews, GitHub portfolio coaching, mock technical interviews, job search strategy and employer introductions.',
    h1: 'Career services',
    lead: 'Learning to code is half the journey. The other half is getting hired. Career coaching is built into every Atlas Code program, from week one to well after graduation.',
    crumb: 'Career Services',
    priority: 0.85,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/hiring-partners/', '/blog/remote-developer-jobs-from-morocco/', '/blog/tech-jobs-agadir-souss-massa/'],
  },
  {
    path: '/hiring-partners/',
    title: 'Hire Junior Developers & Data Analysts | Atlas Code',
    description:
      'Hire job-ready junior web developers, data analysts and UI/UX designers trained in Agadir. Free for employers: post roles, attend demo day, interview graduates.',
    h1: 'Hire Atlas Code graduates',
    lead: 'Recruiting tech talent in Souss-Massa shouldn’t mean waiting months or poaching from Casablanca. Meet junior developers, analysts and designers trained on real projects, right here in Agadir.',
    crumb: 'Hiring Partners',
    priority: 0.7,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/corporate-training/', '/career-services/', '/contact/'],
  },
  {
    path: '/corporate-training/',
    title: 'Corporate Tech Training in Agadir & Morocco | Atlas Code',
    description:
      'Upskill your team with Atlas Code corporate training: web development, data analysis with Excel, SQL and Power BI, Python automation and UX, onsite or in Agadir.',
    h1: 'Corporate training',
    lead: 'Practical, hands-on training for teams in Agadir and across Morocco. Your people learn on your data and your use cases, and go back to work with skills they use the next day.',
    crumb: 'Corporate Training',
    priority: 0.7,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/hiring-partners/', '/programs/data-analytics/', '/contact/'],
  },
  {
    path: '/campus/',
    title: 'Our Agadir Campus & Student Life | Atlas Code',
    description:
      'Visit the Atlas Code campus in Agadir: modern classrooms, fast internet, coworking space and an active tech community. Plus practical tips for living in Agadir.',
    h1: 'Our campus in Agadir',
    lead: 'Learn to code in one of Morocco’s most liveable cities: 300 days of sunshine, the Atlantic on your doorstep, and a growing community of builders.',
    crumb: 'Campus',
    priority: 0.8,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/blog/learn-to-code-agadir-guide/', '/upcoming-cohorts/', '/contact/'],
  },
  {
    path: '/about/',
    title: 'About Atlas Code | Coding Bootcamp in Agadir',
    description:
      'Atlas Code is an Agadir-based coding bootcamp on a mission to make Souss-Massa a home for tech talent. Discover our story, teaching method and values.',
    h1: 'About Atlas Code',
    lead: 'We believe talent is everywhere in Morocco, but opportunity isn’t yet. Atlas Code exists to close that gap, starting in Agadir.',
    crumb: 'About',
    priority: 0.7,
    changeFrequency: 'yearly',
    section: 'main',
    related: ['/campus/', '/career-services/', '/programs/'],
  },
  {
    path: '/faq/',
    title: 'Coding Bootcamp FAQ: Admissions, Tuition & Jobs | Atlas Code',
    description:
      'Answers to common questions about Atlas Code: prerequisites, schedules, language of instruction, tuition, payment plans, certificates and job support.',
    h1: 'Frequently asked questions',
    lead: 'Everything people ask us before joining. If your question isn’t here, message us. A real person answers, usually within the day.',
    crumb: 'FAQ',
    priority: 0.8,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/admissions/', '/tuition-financing/', '/contact/'],
  },
  {
    path: '/contact/',
    title: 'Contact Atlas Code: Coding Bootcamp in Agadir',
    description:
      'Contact Atlas Code in Agadir by phone, WhatsApp or email, or visit our campus. Book a free call with an admissions advisor and get your questions answered.',
    h1: 'Contact us',
    lead: 'Questions about a program, financing or your career change? Talk to an advisor. No pressure, just honest answers.',
    crumb: 'Contact',
    priority: 0.8,
    changeFrequency: 'yearly',
    section: 'main',
    related: ['/apply/', '/faq/', '/campus/'],
  },
  {
    path: '/apply/',
    title: 'Apply to Atlas Code: Start Your Application',
    description:
      'Apply to an Atlas Code bootcamp in Agadir. The form takes five minutes, it’s free and non-binding, and an admissions advisor contacts you within two working days.',
    h1: 'Apply to Atlas Code',
    lead: 'Five minutes, free and non-binding. Tell us who you are and what you want to build. An advisor will get back to you within two working days.',
    crumb: 'Apply',
    priority: 0.9,
    changeFrequency: 'yearly',
    section: 'main',
  },
  {
    path: '/blog/',
    title: 'Blog: Learn to Code & Tech Careers in Morocco | Atlas Code',
    description:
      'Practical guides on learning to code, choosing a bootcamp, tech jobs in Agadir and remote developer careers from Morocco, written by the Atlas Code team.',
    h1: 'The Atlas Code blog',
    lead: 'Honest, practical guides for anyone in Morocco thinking about a career in tech: learning paths, job market insights and how to get started.',
    crumb: 'Blog',
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'blog',
  },
  {
    path: '/sitemap/',
    title: 'Sitemap: All Pages | Atlas Code',
    description:
      'A complete list of pages on the Atlas Code website: bootcamp programs, admissions, tuition, campus, career services, blog articles and legal information.',
    h1: 'Sitemap',
    crumb: 'Sitemap',
    priority: 0.3,
    changeFrequency: 'monthly',
    section: 'legal',
  },
  {
    path: '/privacy-policy/',
    title: 'Privacy Policy | Atlas Code',
    description:
      'How Atlas Code collects, uses and protects your personal data, in line with Moroccan Law 09-08 on personal data protection, and how to exercise your rights.',
    h1: 'Privacy policy',
    crumb: 'Privacy Policy',
    priority: 0.2,
    changeFrequency: 'yearly',
    section: 'legal',
  },
  {
    path: '/terms/',
    title: 'Terms & Conditions | Atlas Code',
    description:
      'Terms and conditions for Atlas Code programs and website: enrollment, payments, refunds and cancellations, student conduct and intellectual property.',
    h1: 'Terms & conditions',
    crumb: 'Terms',
    priority: 0.2,
    changeFrequency: 'yearly',
    section: 'legal',
  },
];

export function getCorePage(path: string): CorePage {
  const page = corePages.find((p) => p.path === path);
  if (!page) throw new Error(`Core page not registered: ${path}`);
  return page;
}
