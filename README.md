# Walsh Painting

Marketing site for Walsh Painting (Nashville, TN). Next.js 16 (App Router), Tailwind v4, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Contact form — FormSubmit.co

The form POSTs to `https://formsubmit.co/ajax/<nick-email>` (the email in `lib/site.ts`). No account or API key required.

**First-time setup (one-time per email):**

1. Deploy the site (or run it locally and submit a test through the form).
2. FormSubmit emails Nick a confirmation link — he clicks it.
3. FormSubmit then emails Nick a *hashed* alias URL (looks like `https://formsubmit.co/ajax/abc123hash`). Use this so the raw email isn't visible in the page source.
4. Drop that hash URL into `.env.local` (untracked) and into Vercel (Production + Preview):

```
NEXT_PUBLIC_FORMSUBMIT_ENDPOINT=https://formsubmit.co/ajax/abc123hash
```

Until step 4, submissions still work — the endpoint just exposes Nick's email in HTML.

## Project structure

```
app/
  layout.tsx                  Root layout, fonts, header, footer, global JSON-LD
  page.tsx                    Home
  sitemap.ts                  Auto-generated sitemap.xml
  robots.ts                   Auto-generated robots.txt
  not-found.tsx               404 page
  services/
    page.tsx                  /services
    [slug]/page.tsx           Interior / Exterior / Cabinets / Commercial
  service-area/
    page.tsx                  /service-area
    [slug]/page.tsx           Belle Meade, Franklin, Brentwood, etc.
  gallery/page.tsx            Project gallery (placeholders until photos land)
  contact/page.tsx            Contact form + info
components/                   Header, Footer, Hero, sections, JSON-LD, Icons
lib/
  site.ts                     Single source of truth for phone/email/services/areas
  structured-data.ts          LocalBusiness/Service/Breadcrumb JSON-LD builders
public/                       Logos and og-image
```

To add a new service area, just add an entry to `serviceAreas` in `lib/site.ts` — the city page, sitemap entry, JSON-LD, and footer link all build from that array. Same pattern for services in `services`.

## Domains

`walshpainting.com` is the canonical domain. `bellemeadepainters.com` should be added to the Vercel project and configured to 301 → walshpainting.com (handled at the Vercel domain level, not in the app).

## SEO checklist

Done in the code:

- [x] Per-page `<title>` and `<meta description>` via `generateMetadata`
- [x] OpenGraph + Twitter card on every page
- [x] LocalBusiness / Painter JSON-LD on every page (via root layout)
- [x] Service JSON-LD on `/services/[slug]`
- [x] City Service JSON-LD on `/service-area/[slug]`
- [x] Service × city Service JSON-LD on `/service-area/[city]/[service]` (28 combos)
- [x] BreadcrumbList JSON-LD on service, area, and cross-route pages
- [x] FAQPage JSON-LD on home, each service, each city, each service × city
- [x] sitemap.xml at `/sitemap.xml` (auto-generated, includes all 48 routes)
- [x] robots.txt at `/robots.txt`
- [x] Canonical URLs set on every page

Still to do after deploy:

- [ ] Submit `https://walshpainting.com/sitemap.xml` in Google Search Console
- [ ] Claim and verify Google Business Profile — see next section
- [ ] Compress logos in `/public/` (walshlogo.png is ~1.6 MB; should be < 200 KB)
- [x] Real project photos wired into gallery + home + service pages (28 interior shots from downtown loft project)
- [ ] After site has been live 30+ days, request a few customers to leave Google reviews

## Google Business Profile (GBP) setup

GBP is the single biggest local SEO lever for a service business — most of Nick's leads will come from the map pack, not from organic web results.

**Setup steps (Nick does this, not in code):**

1. Go to https://business.google.com and claim "Walsh Painting" (or create new).
2. Choose **Service-area business** — Nick doesn't need a public address.
3. Set the service area to: Nashville, Belle Meade, Franklin, Brentwood, East Nashville, Antioch, Bellevue, Bordeaux.
4. Set the primary category to **Painter** (add **Commercial painting service** as a secondary category).
5. Verify the listing — Google may send a postcard or do a video call verification.
6. Fill out **every** field: services list, hours, phone, website, photos, attributes ("woman-owned", "veteran-owned", etc. if applicable).

**NAP consistency (critical):** The Name, Address, Phone in GBP must match the JSON-LD on this site exactly. Right now the site uses:

- Name: `Walsh Painting`
- Phone: `(615) 403-5516` / `+16154035516`
- City/region: `Nashville, TN`
- Owner: `Nicholas Walsh`

If any of those change in GBP, also update `lib/site.ts` so the schema stays in lockstep.

**After GBP is live:** add the `sameAs` link to the GBP profile and a Google Maps URL to `localBusinessSchema()` in `lib/structured-data.ts` — this strengthens the entity link between the site and GBP.

## Photo gallery

Project photos live in `/public/walsh-painting-photos/` with descriptive filenames (e.g., `living-room-brick-wall-01.jpg`). The gallery, home page "Featured Projects" section, and per-service photo grids all pull from a single source — the `galleryPhotos` array in `lib/site.ts`. To add a new photo:

1. Drop it in `/public/walsh-painting-photos/` with a descriptive lowercase-hyphenated name.
2. Add an entry to `galleryPhotos` in `lib/site.ts` with `alt`, `caption`, `category`, `serviceSlugs` (which service pages it appears on), `orientation`, and optionally `featured: true` (shows on home page).

**What we have:** 28 interior shots from a downtown Nashville loft (living rooms with exposed brick, kitchens, bedrooms, bathrooms, details).

**What we're missing:** exterior house painting, commercial spaces, before/after pairs. Once Nick provides those, drop them in and append entries — every page that lists photos updates automatically.

## Image compression

The PNGs in `/public/` are unoptimized. Run them through a compressor before launch:

- https://squoosh.app (free, drag-and-drop)
- Target: `walshlogo.png` from 1.6 MB → under 200 KB, OG image under 400 KB

The project photos in `/walsh-painting-photos/` (~125 KB to 720 KB each at 2048px) are fine as-is — Next.js automatically generates responsive WebP versions at request time.
