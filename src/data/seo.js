import { business, WHATSAPP_NUMBER } from './business.js';
import { services } from './services.js';

export const SITE_URL = 'https://bafethuevents.co.zw';

export const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=630&fit=crop';

export const DEFAULT_KEYWORDS = [
  'event hire Gweru',
  'events Gweru',
  'event equipment hire Gweru',
  'chair hire Gweru',
  'chairs for hire Gweru',
  'table hire Gweru',
  'tables for hire Gweru',
  'tent hire Gweru',
  'tents for hire Gweru',
  'marquee hire Gweru',
  'PA system hire Gweru',
  'sound system hire Gweru',
  'stage hire Gweru',
  'event lighting hire Gweru',
  'wedding equipment hire Gweru',
  'corporate event hire Gweru',
  'graduation equipment hire Gweru',
  'event logistics Gweru',
  'event rentals Zimbabwe',
  'Bafethu Events',
  'Bafethu Events Gweru',
  'Mkoba event hire',
  'Midlands event hire',
  'Bulawayo event hire',
  'VIP furniture hire Gweru',
  'event decorations Gweru',
  'party equipment hire Gweru'
].join(', ');

export const HOME_FAQS = [
  {
    question: 'Where can I hire chairs in Gweru?',
    answer:
      'Bafethu Events & Logistics provides chair hire in Gweru and surrounding areas, including Tiffany chairs, Phoenix chairs, plastic chairs, and conference seating for weddings, corporate events, and church gatherings.'
  },
  {
    question: 'Do you offer table and tent hire in Gweru?',
    answer:
      'Yes. We hire round tables, trestle tables, cocktail tables, peg and pole tents, frame tents, stretch tents, and gazebos across Gweru, Midlands Province, and Bulawayo with delivery and setup.'
  },
  {
    question: 'What event equipment can I hire from Bafethu in Zimbabwe?',
    answer:
      'Our catalog includes chairs, tables, tents, PA systems, stages, lighting, decorations, and VIP lounge furniture for weddings, graduations, memorials, birthdays, and corporate functions.'
  },
  {
    question: 'Does Bafethu deliver and set up equipment in Gweru?',
    answer:
      'Yes. We deliver, assemble, and collect hired equipment. Our team serves Gweru, Mkoba, Midlands Province, Bulawayo, and nearby districts with reliable on-time logistics.'
  },
  {
    question: 'How do I get a quotation for event hire in Gweru?',
    answer:
      `Contact us via WhatsApp at ${business.phones[0]}, call ${business.phones.join(' or ')}, email ${business.email}, or use the contact form on our website for a custom quote.`
  }
];

export const pageSeo = {
  home: {
    path: '/',
    title: 'Chair, Table & Tent Hire Gweru Zimbabwe | Bafethu Events & Logistics',
    description:
      'Bafethu Events & Logistics is Gweru\'s trusted event equipment hire company. Rent chairs, tables, tents, PA systems, stages, lighting and décor for weddings, corporate events and graduations in Gweru, Midlands and Bulawayo.',
    keywords:
      'chair hire Gweru, table hire Gweru, tent hire Gweru, events Gweru, event equipment hire Gweru Zimbabwe, wedding chairs Gweru, PA system hire Gweru'
  },
  about: {
    path: '/about',
    title: 'About Bafethu Events | Gweru Event Hire & Logistics Company',
    description:
      'Meet Gweru\'s leading event hire team. Bafethu Events & Logistics supplies chairs, tables, tents, PA systems and staging across Gweru, Midlands Province and Bulawayo.',
    keywords:
      'about Bafethu Events, event company Gweru, event logistics Gweru, equipment rental company Zimbabwe'
  },
  services: {
    path: '/services',
    title: 'Event Equipment Hire Gweru | Chairs, Tables, Tents & PA Systems',
    description:
      'Hire chairs, tables, tents, PA systems, stages, lighting, decorations and VIP furniture in Gweru, Zimbabwe. Delivery, setup and collection across Midlands and Bulawayo.',
    keywords:
      'chair hire Gweru, table hire Gweru, tent hire Gweru, PA hire Gweru, stage hire Gweru, event decorations Gweru, VIP furniture hire Gweru'
  },
  projects: {
    path: '/projects',
    title: 'Event Projects & Gallery Gweru Zimbabwe | Bafethu Events Portfolio',
    description:
      'Browse weddings, corporate events, graduations, church gatherings and memorial setups staged by Bafethu Events & Logistics in Gweru and across Zimbabwe.',
    keywords:
      'event projects Gweru, wedding setups Gweru, corporate event staging Zimbabwe, Bafethu portfolio'
  },
  contact: {
    path: '/contact',
    title: 'Contact Bafethu Events Gweru | Chair & Tent Hire Quotes',
    description:
      'Request a free quote for chair, table, tent, PA and stage hire in Gweru. Call, WhatsApp or email Bafethu Events & Logistics for fast event equipment quotations.',
    keywords:
      'contact event hire Gweru, chair hire quote Gweru, tent hire quote Gweru, Bafethu Events contact'
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy | Bafethu Events & Logistics Gweru',
    description:
      'Privacy policy for Bafethu Events & Logistics. Learn how we handle enquiries and booking information for event equipment hire in Gweru, Zimbabwe.',
    keywords: 'Bafethu privacy policy, event hire privacy Gweru'
  },
  terms: {
    path: '/terms',
    title: 'Terms & Conditions | Bafethu Events & Logistics Gweru',
    description:
      'Terms and conditions for hiring event equipment from Bafethu Events & Logistics in Gweru, Midlands Province and Bulawayo, Zimbabwe.',
    keywords: 'Bafethu terms, event hire terms Gweru, equipment rental terms Zimbabwe'
  }
};

export function getCanonical(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (normalizedPath === '/') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${normalizedPath}`;
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: business.name,
    description: business.tagline,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    telephone: business.phones.map((phone) => `+263${phone.replace(/^0/, '')}`),
    email: business.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mkoba 3',
      addressLocality: 'Gweru',
      addressRegion: 'Midlands Province',
      addressCountry: 'ZW'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng
    },
    areaServed: business.coverage.map((area) => ({
      '@type': 'City',
      name: area
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    sameAs: [
      'https://facebook.com',
      'https://instagram.com',
      `https://wa.me/${WHATSAPP_NUMBER}`
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Event Equipment Hire',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: `${service.title} in Gweru`,
          description: service.description,
          areaServed: 'Gweru, Zimbabwe'
        }
      }))
    }
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: business.name,
    description: pageSeo.home.description,
    inLanguage: 'en-ZW',
    publisher: {
      '@id': `${SITE_URL}/#organization`
    }
  };
}

export function buildFaqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function buildServiceListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Event Equipment Hire Services in Gweru',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${SITE_URL}/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
    }))
  };
}
