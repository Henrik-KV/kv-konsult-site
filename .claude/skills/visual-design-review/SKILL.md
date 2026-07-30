---
name: visual-design-review
description: Critique rendered website work after every significant visual implementation and before any section, gate, preview, or client-readiness approval. Use for desktop and mobile screenshots, hero/navigation work, major homepage sections, service pages, and motion states. Separate technical correctness from visual quality and try to reject weak work rather than rationalise it.
---

# Visual Design Review

Review the rendered result, not the intent, code quality, component architecture, or test score. A technical pass cannot raise the visual verdict.

## Required workflow

1. Render the relevant section at one desktop and one mobile viewport during the same task.
2. Capture screenshots of both versions. For motion, also capture the important still states.
3. Compare desktop and mobile hierarchy, rhythm, text wrapping, image scale, content order, and perceived quality.
4. Write a rejection-oriented critique for each screenshot.
5. Revise both versions if either one fails.
6. Render and critique again before assigning a verdict.

## Critique every screenshot

State all of the following without flattering language:

- Strongest element
- Weakest element
- Generic-template signals
- Hierarchy problems
- Spacing and rhythm problems
- Copy problems
- Mobile-specific problems, or why none were found
- Whether the work is safe to show the client

Call out dead space, weak wrapping, decorative UI language, repeated modules, generic imagery, unfinished edges, and any composition that only works at one viewport.

## Verdicts

Always report these separately:

- `TECHNICAL VERDICT`: PASS, PARTIAL, or FAIL
- `VISUAL VERDICT`: APPROVED, PARTIAL, or REJECTED
- `SAFE TO SHOW CLIENT`: YES or NO

Approve only when the rendered design survives the critique. Screenshots alone are not evidence of quality.

## Stop conditions

Do not approve or continue to the next implementation gate when:

- only desktop or only mobile has been reviewed;
- the screenshot review has no written criticism;
- the design depends on explanation to appear intentional;
- visual quality is being inferred from Lighthouse, Axe, lint, build, or tests;
- a known weak section is being deferred merely to claim completion.
