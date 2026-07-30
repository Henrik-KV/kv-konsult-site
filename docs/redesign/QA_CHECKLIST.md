# QA checklist

Status legend: `[ ]` pending, `[x]` passed.

## Safety and release

- [x] Clean source baseline confirmed in GitHub and Desktop checkout.
- [x] Isolated branch `redesign/kv-premium-vercel-preview` created from `master`.
- [ ] Branch pushed without force.
- [ ] Preview deployment confirmed as Preview, not Production.
- [ ] Production branch/domain/DNS unchanged.
- [ ] Public URL verified without a Vercel login.

## Code quality

- [x] ESLint.
- [x] TypeScript `tsc --noEmit`.
- [x] Production build.
- [x] Playwright smoke/navigation/form tests (21/21).
- [x] No browser console errors or failed same-origin assets in route and viewport captures.
- [x] No hydration warnings.
- [x] All retained public routes return the expected status.

## Accessibility

- [x] One clear `h1` per page; automated document checks pass.
- [x] Skip link reaches the focusable content wrapper.
- [x] Desktop and mobile navigation work by keyboard; Escape closes mobile dialog.
- [x] Visible focus styles and minimum primary target sizes.
- [x] Form labels, required state, `aria-invalid`, error associations, and live status.
- [x] Axe WCAG 2.2 AA suite passes on homepage, services, training, and contact.
- [x] Reduced-motion mode removes non-essential transitions and keeps all story text legible.
- [x] 200% text-only scaling browser check on homepage and contact; no overflow and responsive navigation remains usable.
- [x] Meaningful alt text; decorative workflow stage hidden from assistive technology.

## Responsive visual QA

- [x] 320×568
- [x] 375×812
- [x] 390×844
- [x] 430×932
- [x] 768×1024
- [x] 1024×768
- [x] 1280×720
- [x] 1440×900
- [x] 1920×1080
- [x] 2560×1440
- [x] No horizontal overflow or reported console/request failures at these viewports.

## Content and SEO

- [x] Every major service route answers audience/problem/delivery/output/preparation/next step.
- [x] All demos labelled; no demo represented as client work.
- [x] No anonymous testimonials, empty counters, or unsupported metrics.
- [x] Unique title, description, canonical, Open Graph, sitemap entry, and appropriate structured data.
- [ ] Preview receives `noindex`; canonicals remain on `https://kvkonsult.com` (verify on deployed Preview).
- [x] `robots.txt`, `sitemap.xml`, 404, and error behavior verified.

## Contact conversion

- [x] Form content is present in server-rendered/no-JS HTML.
- [x] Query package preselection works.
- [x] Client validation, duplicate-submit prevention, loading, success, and error states are implemented.
- [x] Honeypot, payload limits, rate limiting, and secrets remain server-only.
- [ ] Preview API route availability verified without sending personal test content.
