# KV Konsult redesign rules

## Stable priorities

- Visual quality comes before completion speed.
- Report technical quality and visual quality separately.
- Never invent customers, results, roles, history, partnerships, metrics, testimonials, credentials, or project evidence.
- Prioritise verified work over abstract graphics.
- Reject generic AI, SaaS, agency, and component-library page patterns.
- Screenshots require written criticism; capture alone is not visual QA.
- Never modify production, the production branch, `kvkonsult.com`, DNS, or Vercel Production Branch.
- Preview deployments must remain public, noindex, and separate from production.

## Rejected directions

- The deployed white/electric-blue pseudo-interface direction is visually rejected and not safe to show a client.
- Beige, brown, burgundy, orange, or warm editorial palettes are also explicitly rejected by the owner.
- Future directions must stay within white, living light blue/cyan, deep KV blue, and dark blue text unless the owner changes this rule.
- Pseudo-technical captions, numbered navigation, arrow-heavy links, generic workflow diagrams, slogan chains, and equal service cards are rejected.

## DESKTOP AND MOBILE ARE ONE TASK

Every visual component must be designed, implemented, rendered and reviewed for desktop and mobile during the same task.

A component is not complete when only the desktop version looks good. A component is not complete when only overflow tests pass.

Responsive quality includes composition, hierarchy, rhythm, typography, animation, interaction, content order and visual impact. Passing automated tests does not prove that mobile design is strong. Mobile requires its own composition, not merely stacked desktop content.

For every major section:

1. Render desktop.
2. Render mobile.
3. Capture screenshots.
4. Compare hierarchy.
5. Inspect awkward text wrapping.
6. Inspect dead space.
7. Inspect content order.
8. Inspect touch interaction.
9. Inspect animation.
10. Revise both versions before continuing.

## Gate discipline

Do not implement the full site before a direction is explicitly selected.

- Gate 1: references and four materially different directions.
- Gate 2: selected hero and navigation only.
- Gate 3: capability model.
- Gate 4: proof and real work.
- Gate 5: remaining homepage.
- Gate 6: secondary pages.
- Gate 7: full responsive QA.
- Gate 8: public Vercel Preview only.

Each gate needs desktop and mobile screenshots, written criticism, visual verdicts, updated documentation, and a focused commit.
