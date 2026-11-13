import type { PageEntry } from '@/lib/types';

export interface CorePage extends PageEntry {
  lead?: string;
  related?: string[];
}

/** SEO metadata for every hand-built page (programs and blog posts register themselves). */
export const corePages: CorePage[] = [
  {
    path: '/',
    title: 'Live Online Coding Bootcamp for the UK & US | Atlas Code',
    description:
      'Learn web development, data analytics or UI/UX design live online with Atlas Code. Full-time and part-time cohorts for the UK, US and Canada, with career support.',
    h1: 'The live online coding bootcamp that gets you job-ready',
    crumb: 'Home',
    priority: 1,
    changeFrequency: 'weekly',
    section: 'main',
  },
  {
    path: '/programs/',
    title: 'Online Coding Bootcamp Programs | Atlas Code',
    description:
      'Compare Atlas Code online programs: full-stack web development (full-time or part-time), data analytics, UI/UX design and a beginner intro workshop.',
    h1: 'Online bootcamp programs',
    lead: 'Five intensive, project-based programs, built for today’s tech job market and taught live online in UK or US Eastern time. Pick the path that fits your goals and your schedule.',
    crumb: 'Programs',
    priority: 0.95,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/admissions/', '/tuition-financing/', '/blog/coding-bootcamp-vs-university-degree/'],
  },
  {
    path: '/admissions/',
    title: 'Admissions: How to Join Our Online Bootcamp | Atlas Code',
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
      'Atlas Code tuition explained: online bootcamp prices in USD, interest-free payment plans, early-bird discounts, scholarships and employer sponsorship.',
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
    title: 'Upcoming Online Bootcamp Start Dates | Atlas Code',
    description:
      'See the next start dates for Atlas Code online bootcamps in UK and US Eastern time: full-stack, part-time web development, data analytics and UI/UX design.',
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
    related: ['/hiring-partners/', '/blog/remote-developer-jobs-guide/', '/blog/junior-tech-jobs-uk-us-canada/'],
  },
  {
    path: '/hiring-partners/',
    title: 'Hire Junior Developers & Data Analysts | Atlas Code',
    description:
      'Hire job-ready junior web developers, data analysts and UI/UX designers in the UK, US and Canada. Free for employers: post roles, attend demo day, interview grads.',
    h1: 'Hire Atlas Code graduates',
    lead: 'Hiring juniors shouldn’t mean sifting through hundreds of CVs with no portfolio behind them. Meet developers, analysts and designers trained on real projects, remote-ready from day one.',
    crumb: 'Hiring Partners',
    priority: 0.7,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/corporate-training/', '/career-services/', '/contact/'],
  },
  {
    path: '/corporate-training/',
    title: 'Live Online Corporate Tech Training | Atlas Code',
    description:
      'Upskill your team with Atlas Code live online training: web development, data analysis with Excel, SQL and Power BI, Python automation and UX design.',
    h1: 'Corporate training',
    lead: 'Practical, hands-on live online training for teams in the UK, the US and Canada. Your people learn on your data and your use cases, and go back to work with skills they use the next day.',
    crumb: 'Corporate Training',
    priority: 0.7,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/hiring-partners/', '/programs/data-analytics/', '/contact/'],
  },
  {
    path: '/online-learning/',
    title: 'How Our Live Online Bootcamp Works | Atlas Code',
    description:
      'How Atlas Code’s live online bootcamp works: real-time classes, remote pair programming, UK and US Eastern time cohorts, the setup you need and online community.',
    h1: 'How live online learning works',
    lead: 'Real instructors, real classmates, real-time feedback. Everything that makes an in-person bootcamp work, delivered live to your laptop in UK or US Eastern time.',
    crumb: 'How It Works',
    priority: 0.85,
    changeFrequency: 'monthly',
    section: 'main',
    related: ['/blog/online-coding-bootcamp-guide/', '/upcoming-cohorts/', '/contact/'],
  },
  {
    path: '/about/',
    title: 'About Atlas Code | Live Online Coding Bootcamp',
    description:
      'Atlas Code is a remote-first, live online coding bootcamp on a mission to train job-ready tech talent wherever they live. Our story, method and values.',
    h1: 'About Atlas Code',
    lead: 'We believe talent is everywhere, but access to great tech training isn’t. Atlas Code exists to close that gap, live and online.',
    crumb: 'About',
    priority: 0.7,
    changeFrequency: 'yearly',
    section: 'main',
    related: ['/online-learning/', '/career-services/', '/programs/'],
  },
  {
    path: '/faq/',
    title: 'Coding Bootcamp FAQ: Admissions, Tuition & Jobs | Atlas Code',
    description:
      'Answers to common questions about Atlas Code: prerequisites, live online classes, time zones, tuition, payment plans, certificates and job support.',
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
    title: 'Contact Atlas Code: Talk to an Admissions Advisor',
    description:
      'Contact Atlas Code by email, WhatsApp or phone, or book a free video call with an admissions advisor in UK or US time and get your questions answered.',
    h1: 'Contact us',
    lead: 'Questions about a program, financing or your career change? Talk to an advisor. No pressure, just honest answers.',
    crumb: 'Contact',
    priority: 0.8,
    changeFrequency: 'yearly',
    section: 'main',
    related: ['/apply/', '/faq/', '/online-learning/'],
  },
  {
    path: '/apply/',
    title: 'Apply to Atlas Code: Start Your Application',
    description:
      'Apply to an Atlas Code live online bootcamp. The form takes five minutes, it’s free and non-binding, and an advisor contacts you within two working days.',
    h1: 'Apply to Atlas Code',
    lead: 'Five minutes, free and non-binding. Tell us who you are and what you want to build. An advisor will get back to you within two working days.',
    crumb: 'Apply',
    priority: 0.9,
    changeFrequency: 'yearly',
    section: 'main',
  },
  {
    path: '/blog/',
    title: 'Blog: Learn to Code & Start a Tech Career | Atlas Code',
    description:
      'Practical guides on learning to code, choosing a bootcamp, junior tech jobs in the UK, US and Canada, and remote developer careers, by the Atlas Code team.',
    h1: 'The Atlas Code blog',
    lead: 'Honest, practical guides for anyone in the UK, the US or Canada thinking about a career in tech: learning paths, job market insights and how to get started.',
    crumb: 'Blog',
    priority: 0.8,
    changeFrequency: 'weekly',
    section: 'blog',
  },
  {
    path: '/sitemap/',
    title: 'Sitemap: All Pages | Atlas Code',
    description:
      'A complete list of pages on the Atlas Code website: online bootcamp programs, admissions, tuition, career services, blog articles and legal information.',
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
      'How Atlas Code collects, uses and protects your personal data, in line with UK GDPR, the EU GDPR and applicable US, Canadian and Moroccan privacy laws.',
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
