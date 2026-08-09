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
  // TODO: create the mailbox before publishing. A domain-based address is
  // expected by business buyers; a gmail address costs you deals.
  email: 'hello@loomwise.eu',

  // TODO (optional): leave as empty string to hide the phone number everywhere.
  phone: '',

  // TODO (optional): a booking link renders a prominent "Book a call" button.
  // Cal.com is the usual EU-friendly choice; leave empty to fall back to email.
  bookingUrl: '',

  // TODO (optional): leave empty to hide.
  linkedin: '',

  // ---------------------------------------------------------------- address
  // TODO: the virtual office address, exactly as it will appear in the KRS.
  address: {
    street: 'TODO — street and number',
    postalCode: 'TODO — e.g. 00-001',
    city: 'TODO — e.g. Warszawa',
    country: 'Poland',
  },

  // ------------------------------------------------------------ registry data
  // TODO: available after KRS registration. Leave as null until then — the
  // imprint automatically shows "in registration" for any null value.
  registry: {
    krs: null as string | null,
    nip: null as string | null,
    regon: null as string | null,
    // TODO: the registry court, e.g.
    // "District Court for the Capital City of Warsaw, XII Commercial Division"
    court: null as string | null,
    shareCapital: 'PLN 100,000 (fully paid up)',
  },

  // ------------------------------------------------------------- management
  // TODO: full name of the sole board member, as it will appear in the KRS.
  management: {
    name: 'TODO — full name',
    role: 'Prezes Zarządu (Managing Director)',
  },

  // ------------------------------------------------------------------ people
  // TODO: shown on /about. Delete an entry to hide that person entirely.
  // Keep bios factual — no invented credentials, buyers do check.
  people: [
    {
      name: 'TODO — full name',
      role: 'Managing Director',
      bio: 'TODO — two or three sentences. What you did before, and why you started this.',
    },
    {
      name: 'TODO — full name (or delete this entry)',
      role: 'TODO — role',
      bio: 'TODO — two or three sentences.',
    },
  ],

  // ----------------------------------------------------------------- privacy
  privacy: {
    // TODO: confirm before publishing. If you later add a contact form,
    // add the provider here so the privacy policy stays accurate.
    formProvider: null as string | null,
    hostingProvider: 'GitHub Pages (GitHub, Inc., USA)',
    // TODO: date you publish the site, format YYYY-MM-DD.
    lastUpdated: 'TODO — YYYY-MM-DD',
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
