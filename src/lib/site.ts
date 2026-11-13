/**
 * Atlas Code: central site settings.
 * Every value marked TODO is a placeholder. Replace it with real business data before going live.
 */
export const site = {
  name: 'Atlas Code',
  url: 'https://www.atlascode.ma', // TODO: real domain, no trailing slash (consider a .com / .io for an international audience)
  tagline: 'Live Online Coding Bootcamp',
  description:
    'Atlas Code is a live online coding bootcamp for learners in the UK, the US and Canada, offering full-time and part-time programs in full-stack web development, data analytics and UI/UX design.',
  locale: 'en_GB',
  lang: 'en',

  /** Markets the site targets (used in copy and in the Organization schema). */
  markets: ['United Kingdom', 'United States', 'Canada'],
  marketsLabel: 'the UK, the US and Canada',

  /** Live class time zones. Each cohort runs on one of these (TODO: confirm). */
  timezones: {
    uk: 'UK time (GMT/BST)',
    na: 'US Eastern Time (ET)',
  },

  phone: '+212 6 00 00 00 00', // TODO (consider adding a UK/US number)
  phoneHref: '+212600000000', // TODO
  whatsapp: '212600000000', // TODO: digits only
  email: 'hello@atlascode.ma', // TODO

  /** Registered office / team HQ (students learn online; this is not a campus). */
  address: {
    street: 'Avenue Hassan II', // TODO: exact street address
    city: 'Agadir',
    region: 'Souss-Massa',
    postalCode: '80000',
    country: 'MA',
  },
  hoursText: 'Advisors available Mon–Fri 9:00–19:00 UK time',

  /** Tuition (USD) and next start dates (TODO: confirm before launch). */
  currency: 'USD',
  programs: {
    fullstack: { price: 6900, priceLabel: '$6,900', nextStart: '11 January 2027' },
    parttime: { price: 6900, priceLabel: '$6,900', nextStart: '2 February 2027' },
    data: { price: 5900, priceLabel: '$5,900', nextStart: '8 March 2027' },
    uxui: { price: 4900, priceLabel: '$4,900', nextStart: '5 April 2027' },
    intro: { price: 99, priceLabel: '$99', nextStart: 'the first two weekends of every month' },
  },
  deposit: '$500',

  /** Form endpoint (e.g. Formspree). TODO */
  formEndpoint: 'https://formspree.io/f/your-form-id',

  social: {
    facebook: 'https://www.facebook.com/atlascode', // TODO
    instagram: 'https://www.instagram.com/atlascode', // TODO
    linkedin: 'https://www.linkedin.com/company/atlascode', // TODO
    youtube: '',
  },

  /** Google Search Console verification token (content of the google-site-verification meta tag) and GA4 measurement ID. */
  googleSiteVerification: '_3M1iaLEW62j8xrU6OZu9w1AcIZ_6hMdEjgfpint9Lo',
  ga4Id: '',
} as const;

export type ProgramKey = keyof typeof site.programs;
export const whatsappLink = (text = 'Hello Atlas Code, I would like information about your online bootcamps.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
