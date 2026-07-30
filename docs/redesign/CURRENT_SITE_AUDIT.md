# Current site audit

Audit date: 2026-07-30  
Production: https://kvkonsult.com  
Source baseline: `master` at `a57cdf6`

## Repository and delivery

- GitHub: `Henrik-KV/kv-konsult-site`; default/production branch is `master`.
- Working tree was clean. Desktop checkout and GitHub clone both pointed to `a57cdf6`; no user changes needed reconciliation.
- Framework: Next.js 16.0.7 App Router, React 19.2, TypeScript 5, Tailwind CSS 4.
- Runtime integrations: Resend contact email, Vercel Analytics. No committed `.env` files or Vercel link/config.
- Animation: Framer Motion, CSS keyframes, and multiple autoplay MP4 backgrounds.
- Fonts: Geist and Geist Mono through `next/font/google`; baseline production build in the restricted environment failed only because Google Fonts could not be fetched.
- `npm run lint` and `npx tsc --noEmit` passed at baseline. `npm audit` reported 40 dependency findings (4 low, 13 moderate, 19 high, 4 critical); no automatic breaking update was applied.

## Routes and implementation

Existing public routes: `/`, `/tjanster`, `/utbildning-ai`, `/webbsidor`, `/sociala-medier`, `/losningsarkitekter`, `/kommuner`, `/foretag`, `/om-oss`, `/kontakt`, `/demo-appar`, `/integritetspolicy`, `/villkor`, `/robots.txt`, `/sitemap.xml`.

- App Router layouts provide per-route titles and descriptions.
- There is no custom `not-found`, `error`, or `loading` route.
- Homepage, most service pages, and audience pages are unnecessarily client-rendered.
- `/utbildning-ai` renders repeated package content for different layouts, creating an oversized DOM.
- `/kontakt` wraps its critical form in Suspense with “Laddar formulär…” as fallback; server/no-JS output is therefore weaker than the functional form.
- Navigation closes on route changes and handles click-outside, but the desktop dropdown is click-only and the mobile header hides during downward scrolling.
- Form labels exist and duplicate submits are blocked. Inline validation is visual but errors are not consistently tied to fields with `aria-describedby`, and status messages lack a reliable live region.
- API protection: server validation, field length caps, honeypot, payload limit, in-memory IP rate limit, sanitized output, Resend. Personal content is not logged.
- Query-string package preselection is supported.

## Visual and content findings

- The live homepage is a dark cyan/neon composition with video particles, glows, pill labels, gradient buttons, rounded cards, and stock-office photography. It reads as a polished consultancy template rather than KV Konsult’s own point of view.
- Four service categories are presented as parallel businesses. Education, AI implementation, websites, social media, and application work lack one governing delivery model.
- The current “team” hero asset is a generated bridge illustration, not a team photograph.
- Most people/workshop/process images are generic stock images (many 4,000–6,700 px wide and 1–3 MB each).
- Authentic product assets exist for Lägesbild and MÄSSY and should carry more of the visual proof.
- Homepage counters have headings but no verified values. Anonymous testimonials contain strong outcome claims without source names and should not be published as primary evidence.
- Existing `om-oss` journey copy implies history and breadth that is not independently supported in the repository.

## Verified and unverified content

Safe from repository/live records:

- Company name: KV Konsult AB.
- Contact people and details: Henrik Karlström, Eric Vidmark, Ulrika Andersson; their listed email addresses and phone numbers.
- Services and delivery formats already described in the repository.
- Lägesbild is a released iPhone app from KV konsult AB; Apple’s listing identifies the developer and describes the product.
- MÄSSY assets exist as a demonstration/prototype and must be labelled as such.

Needs owner confirmation before stronger publication:

- Current status and exact wording of the NearYou education partnership. It appears in current repository content but was not found on NearYou’s public site.
- Individual roles, biographies, qualifications, and areas of expertise for Henrik, Eric, and Ulrika.
- Anonymous testimonial provenance and every quantified outcome claim.
- Named customers, municipal assignments, delivery counts, repeat-customer figures, and case results.
- Whether MÄSSY is a client assignment, internal product, or only a concept demo. Redesign labels it as a demo.

## Baseline evidence

Full-page production screenshots and machine reports:

- `docs/redesign/screenshots/baseline/390x844.png`
- `docs/redesign/screenshots/baseline/768x1024.png`
- `docs/redesign/screenshots/baseline/1440x900.png`
- `docs/redesign/screenshots/baseline/1920x1080.png`
- `docs/redesign/screenshots/baseline/capture-report.json`

All four production captures returned HTTP 200 with no detected horizontal overflow, console errors, or failed requests.
