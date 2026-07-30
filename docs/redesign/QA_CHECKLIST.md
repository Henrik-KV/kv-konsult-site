# QA checklist

Status legend: `[ ]` pending, `[x]` passed, `[!]` issue documented.

## Safety and release

- [x] Clean source baseline confirmed in GitHub and Desktop checkout.
- [x] Isolated branch `redesign/kv-premium-vercel-preview` created from `master`.
- [ ] Branch pushed without force.
- [ ] Preview deployment confirmed as Preview, not Production.
- [ ] Production branch/domain/DNS unchanged.
- [ ] Public URL verified without a Vercel login.

## Code quality

- [ ] ESLint.
- [ ] TypeScript `tsc --noEmit`.
- [ ] Production build.
- [ ] Playwright smoke/navigation/form tests.
- [ ] No browser console errors or failed same-origin assets.
- [ ] No hydration warnings.
- [ ] No broken internal links.

## Accessibility

- [ ] One clear `h1` per page and logical heading order.
- [ ] Skip link reaches `main`.
- [ ] Desktop and mobile navigation work by keyboard; Escape closes mobile dialog.
- [ ] Visible focus styles and minimum 44 px primary targets.
- [ ] Form labels, required state, `aria-invalid`, error associations, and live status.
- [ ] Colour contrast reviewed against WCAG 2.2 AA targets.
- [ ] Reduced-motion mode removes sticky transitions and non-essential animation.
- [ ] 200% zoom/text scaling checked on key routes.
- [ ] Meaningful alt text; decorative graphics hidden from assistive technology.

## Responsive visual QA

- [ ] 320×568
- [ ] 375×812
- [ ] 390×844
- [ ] 430×932
- [ ] 768×1024
- [ ] 1024×768
- [ ] 1280×720
- [ ] 1440×900
- [ ] 1920×1080
- [ ] 2560×1440
- [ ] No horizontal overflow, clipped Swedish words, unstable sticky content, or footer collisions.

## Content and SEO

- [ ] Every major route answers audience/problem/delivery/output/preparation/next step.
- [ ] All demos labelled; no demo represented as client work.
- [ ] No anonymous testimonials, empty counters, or unsupported metrics.
- [ ] Unique title, description, canonical, Open Graph, sitemap entry, and appropriate structured data.
- [ ] Preview receives `noindex`; canonicals remain on `https://kvkonsult.com`.
- [ ] `robots.txt`, `sitemap.xml`, 404, loading, and error behavior verified.

## Contact conversion

- [ ] Form content is present in server-rendered/no-JS HTML.
- [ ] Query package preselection works.
- [ ] Client validation, duplicate-submit prevention, loading, success, and error states work.
- [ ] Honeypot, payload limits, rate limiting, and secrets remain server-only.
- [ ] Preview API behavior verified without sending personal test content.
