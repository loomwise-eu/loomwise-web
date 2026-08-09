// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Apex domain served by GitHub Pages via the CNAME file in public/.
// No `base` is set because the site is served from the domain root.
export default defineConfig({
  site: 'https://loomwise.eu',
  compressHTML: true,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // 404 is noindex; keeping it out of the sitemap avoids a Search Console warning.
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    // Inline small stylesheets so the page renders in a single round trip.
    inlineStylesheets: 'auto',
  },
});
