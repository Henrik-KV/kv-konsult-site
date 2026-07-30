# Preview handoff

- Branch: `redesign/kv-premium-vercel-preview`
- Latest verified deployment commit: `62b746273800b749214e82b5bec5456be3933564`
- Stable Vercel Preview URL: `https://kv-konsult-site-git-redesign-k-1a3d30-henriks-projects-c5eb59d1.vercel.app`
- Vercel environment: **Preview**; deployment status **Ready**; custom domain assignment **Skipped**.
- Verified without login: **Yes**. The complete Playwright suite passed in a new browser context with no cookies or Vercel session.
- Routes completed: `/`, `/tjanster`, `/utbildning-ai`, `/webbsidor`, `/sociala-medier`, `/losningsarkitekter`, `/kommuner`, `/foretag`, `/om-oss`, `/kontakt`, `/demo-appar`, `/integritetspolicy`, `/villkor`, custom 404, `robots.txt`, `sitemap.xml`, and `/api/contact`.

## Tests and results

- ESLint: pass.
- TypeScript `tsc --noEmit`: pass.
- Next.js production build with Preview environment: pass; 20 pages generated.
- Playwright local production build: 21/21 pass.
- Playwright public Preview, cookie-free: 21/21 pass, including all retained routes, keyboard mobile navigation, reduced motion, four-state scroll story, 200% text scaling, server-rendered form preselection, validation, canonical metadata, and custom 404.
- Axe WCAG 2.2 AA automation: no violations on homepage, services, training, and contact.
- Viewport captures: 320×568, 375×812, 390×844, 430×932, 768×1024, 1024×768, 1280×720, 1440×900, 1920×1080, and 2560×1440; no horizontal overflow, console errors, or failed assets.
- Key route captures at 390×844 and 1440×900: all HTTP 200 with no reported errors.
- Preview metadata: `noindex, nofollow, noarchive`; canonical remains `https://kvkonsult.com`.
- Preview contact API: GET returns the expected 405 for the POST-only endpoint; no personal test content was submitted.

## Performance and accessibility

- Lighthouse mobile: Performance 97, Accessibility 100, Best Practices 100, SEO 100; LCP 2.6 s, CLS 0, TBT 50 ms.
- Lighthouse desktop: 100/100/100/100; LCP 0.6 s, CLS 0, TBT 0 ms.
- Keyboard focus, skip link, dialog focus management, labels, validation associations, live form status, reduced motion, and responsive text scaling are verified.

## Owner verification and missing assets

- Verify before publishing: current NearYou relationship; individual team roles and biographies; testimonial provenance; named customer/case results; quantified outcomes; MÄSSY status.
- Missing: authentic team portraits and real working-session photography. The requested shot list is in `DESIGN_DIRECTION.md`.
- Dependency audit reports inherited findings; no automatic breaking dependency upgrade was applied during the redesign.

## Production safety

- Production deployed: **No**.
- Production branch merged or modified: **No**.
- `kvkonsult.com`, DNS, and production domain assignment modified: **No**.
- Vercel Production Branch changed: **No**.
