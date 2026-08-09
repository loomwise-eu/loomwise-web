# loomwise-web

Marketing site for **Loomwise sp. z o.o.** — static, built with Astro, deployed to GitHub Pages.

No cookies, no analytics, no third-party requests. The site loads nothing from any
domain other than its own, which is what keeps it free of a consent banner.

---

## Data still needed

Everything company-specific lives in **`src/data/site.ts`**. Search that file for
`TODO` — nothing else in the codebase hardcodes company data.

### Needed before the site can go live

| Field in `site.ts` | What it is | Notes |
|---|---|---|
| `email` | Working mailbox on the domain | `hello@loomwise.eu`. Business buyers expect a domain address |
| `address.street` / `.postalCode` / `.city` | Virtual office address | Exactly as it will appear in the KRS |
| `management.name` | Full name of the sole board member | Required on the imprint |
| `people[]` | Name, role, bio for each founder | Delete the second entry if only one person should be shown |
| `privacy.lastUpdated` | Publication date | Format `YYYY-MM-DD` |

### Optional — omitted cleanly if left empty

| Field | Effect if left empty |
|---|---|
| `phone` | Phone number hidden everywhere |
| `bookingUrl` | "Book a call" buttons fall back to email |
| `linkedin` | LinkedIn links hidden |

### After KRS registration

Set these and the imprint switches automatically from "in registration" to the real values:

| Field | Source |
|---|---|
| `registry.krs` | KRS number from the registration decision |
| `registry.nip` | Assigned automatically on KRS entry |
| `registry.regon` | Assigned automatically on KRS entry |
| `registry.court` | e.g. *District Court for the Capital City of Warsaw, XII Commercial Division* |

Until then the imprint is legally correct for a **spółka z o.o. w organizacji** — a
company that has been formed but not yet registered.

---

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve the built site
```

Requires Node 20 or newer.

> On WSL, `npm install` against a `/mnt/c/...` path is very slow because of the
> Windows filesystem bridge. Moving the repo into the Linux filesystem
> (e.g. `~/loomwise-web`) makes installs and builds dramatically faster.

---

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

### One-time setup

1. Create the repository on GitHub and push this directory to `main`.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
   Do *not* pick "Deploy from a branch" — the workflow uses the Actions source.
3. **Settings → Pages → Custom domain:** enter `loomwise.eu` and save.
4. At your DNS provider, point the apex domain at GitHub Pages:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `<your-github-username>.github.io.` |

5. Once DNS has propagated, tick **Enforce HTTPS** in Settings → Pages.

`public/CNAME` is committed so the custom domain survives every redeploy — GitHub
otherwise clears the setting when Actions replaces the published output.

---

## Structure

```
src/
  data/site.ts          all company data — the only file you normally edit
  layouts/Base.astro    <head>, metadata, JSON-LD, skip link
  components/           Header, Footer, CTA
  styles/global.css     design system: colours, type, components
  pages/
    index.astro         home
    services.astro      the four services
    eu-ai-act.astro     AI Act timeline + compliance offer
    about.astro         Jacquard story, principles, people
    contact.astro       contact details, no form by design
    imprint.astro       legal disclosures
    privacy.astro       GDPR privacy notice
    404.astro
public/
  CNAME                 custom domain for GitHub Pages
  favicon.svg
  robots.txt
```

---

## Design notes

The palette comes from the Jacquard loom: indigo (dye), linen (cloth), copper
(thread). Headings use a system serif, body text a system sans — no web fonts,
so nothing is fetched from Google or any other CDN.

Every text colour in `global.css` is annotated with its contrast ratio against
its background. All body text meets WCAG AA (4.5:1). `--copper-bright` falls
below that threshold and is therefore restricted to decorative elements and
large text — do not use it for body copy.

Dark mode follows `prefers-color-scheme` and needs no JavaScript.

---

## Before publishing

- [ ] Fill in every `TODO` in `src/data/site.ts`
- [ ] Have a lawyer review `imprint.astro` and `privacy.astro` — these are solid
      drafts, not legal advice, and the imprint requirements differ slightly
      between the Polish *ustawa o świadczeniu usług drogą elektroniczną* and the
      German DDG that your German customers will expect
- [ ] Re-read the EU AI Act dates on `eu-ai-act.astro` against the current
      official text before making compliance claims in public
- [ ] Check that no page makes a client, revenue or track-record claim you
      cannot evidence — there are deliberately none in the current copy
