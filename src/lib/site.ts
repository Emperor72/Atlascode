/**
 * Atlas Code: central site settings.
 * Every value marked TODO is a placeholder. Replace it with real business data before going live.
 */
export const site = {
  name: 'Atlas Code',
  url: 'https://www.atlascode.ma', // TODO: real domain, no trailing slash
  tagline: 'Coding Bootcamp in Agadir',
  description:
    'Atlas Code is a coding bootcamp in Agadir, Morocco, offering full-time and part-time programs in full-stack web development, data analytics and UI/UX design.',
  locale: 'en_MA',
  lang: 'en',

  phone: '+212 6 00 00 00 00', // TODO
  phoneHref: '+212600000000', // TODO
  whatsapp: '212600000000', // TODO: digits only
  email: 'hello@atlascode.ma', // TODO

  address: {
    street: 'Avenue Hassan II', // TODO: exact street address
    city: 'Agadir',
    region: 'Souss-Massa',
    postalCode: '80000',
    country: 'MA',
  },
  geo: { lat: 30.4202, lng: -9.5982 }, // TODO: exact campus coordinates
  mapQuery: 'Agadir, Morocco', // TODO: campus address for the map embed
  hoursText: 'Mon–Fri 9:00–19:00 · Sat 9:00–13:00',

  /** Tuition and next start dates (TODO: confirm before launch). */
  programs: {
    fullstack: { price: 29000, priceLabel: '29,000 MAD', nextStart: '11 January 2027' },
    parttime: { price: 29000, priceLabel: '29,000 MAD', nextStart: '2 February 2027' },
    data: { price: 25000, priceLabel: '25,000 MAD', nextStart: '8 March 2027' },
    uxui: { price: 19000, priceLabel: '19,000 MAD', nextStart: '5 April 2027' },
    intro: { price: 990, priceLabel: '990 MAD', nextStart: 'the first two weekends of every month' },
  },
  deposit: '3,000 MAD',

  /** Form endpoint (e.g. Formspree). TODO */
  formEndpoint: 'https://formspree.io/f/your-form-id',

  social: {
    facebook: 'https://www.facebook.com/atlascode', // TODO
    instagram: 'https://www.instagram.com/atlascode', // TODO
    linkedin: 'https://www.linkedin.com/company/atlascode', // TODO
    youtube: '',
  },

  /** Optional: Google Search Console verification token and GA4 measurement ID. */
  googleSiteVerification: '',
  ga4Id: '',
} as const;

export type ProgramKey = keyof typeof site.programs;
export const whatsappLink = (text = 'Hello Atlas Code, I would like information about your bootcamps.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
