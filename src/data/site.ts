/**
 * Single source of truth for every company-specific value on the site.
 *
 * Everything marked TODO still needs to be filled in. Nothing else on the site
 * hardcodes company data, so filling this file in completes the site.
 *
 * Values marked "after registration" only become available once the company is
 * entered into the KRS. Until then the imprint renders them as "in registration",
 * which is the legally correct wording for a company that has been formed but
 * not yet registered (spółka z o.o. w organizacji).
 */

export const site = {
  // ---------------------------------------------------------------- identity
  name: 'Loomwise',
  legalName: 'LOOMWISE spółka z ograniczoną odpowiedzialnością',
  shortLegalName: 'Loomwise sp. z o.o.',
  domain: 'loomwise.eu',
  url: 'https://loomwise.eu',
  locale: 'en',

  tagline: 'Automate the paperwork. Keep the craft.',
  description:
    'Loomwise builds AI-driven process automation for European SMEs and skilled trades. Quoting, scheduling, documentation and compliance — automated, EU-hosted, live in weeks.',

  // ---------------------------------------------------------------- contact
  email: 'hello@loomwise.eu',

  phone: '',

  bookingUrl: '',

  linkedin: '',

  // ---------------------------------------------------------------- address
  address: {
    street: 'ul. Wita Stwosza 48 lokal 105',
    postalCode: '02-661',
    city: 'Warszawa',
    country: 'Poland',
  },

  // ------------------------------------------------------------ registry data
  registry: {
    krs: '0001261976',
    nip: '5214177431',
    regon: '54556438000000',
    court:
      'District Court for the Capital City of Warsaw in Warsaw, 13th Commercial Division of the National Court Register',
    shareCapital: 'PLN 5,000',
  },

  // ------------------------------------------------------------- management
  management: {
    name: 'Monika Dydko',
    role: 'Prezes Zarządu (Managing Director)',
  },

  // ------------------------------------------------------------------ people
  // Keep bios factual — no invented credentials, buyers do check.
  people: [
    {
      name: 'Monika Dydko',
      role: 'Managing Director',
      bio: 'IT leadership background turned into practical AI execution for European SMEs. Monika leads Loomwise with a focus on streamlining back-office operations for trades and growing businesses.',
    },
  ],

  // ----------------------------------------------------------------- privacy
  privacy: {
    // add the provider here so the privacy policy stays accurate.
    formProvider: null as string | null,
    hostingProvider: 'GitHub Pages (GitHub, Inc., USA)',
    lastUpdated: '2026-09-03',
  },
} as const;

export type Site = typeof site;

/** True when a value still needs to be filled in. */
export function isTodo(value: unknown): boolean {
  return typeof value === 'string' && value.trimStart().startsWith('TODO');
}

/** Renders a registry value, or the correct wording while registration is pending. */
export function registryValue(value: string | null): string {
  return value ?? 'in registration';
}
