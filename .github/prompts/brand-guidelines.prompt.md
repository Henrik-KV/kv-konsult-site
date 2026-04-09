---
description: Apply brand identity and visual guidelines consistently across the project. Use when styling components, ensuring brand consistency, or creating branded content.
---

# Brand Guidelines Skill

## How to Use This Skill

This is a template for your brand guidelines. Update the values below to match your company's brand identity. Once configured, reference this file when building or styling components to ensure consistency.

## Color System

### Primary Colors
Define your brand's main colors as CSS variables:
```css
:root {
  --brand-primary: #YOUR_COLOR;      /* Main brand color */
  --brand-secondary: #YOUR_COLOR;    /* Secondary brand color */
  --brand-accent: #YOUR_COLOR;       /* Accent/CTA color */
  --brand-dark: #YOUR_COLOR;         /* Dark backgrounds/text */
  --brand-light: #YOUR_COLOR;        /* Light backgrounds */
}
```

### Usage Rules
- Primary: Headers, primary CTAs, key branding elements
- Secondary: Supporting elements, secondary buttons
- Accent: Highlights, notifications, important callouts
- Maintain sufficient contrast ratios (WCAG AA minimum: 4.5:1 for text)

## Typography

### Font Stack
```css
:root {
  --font-heading: 'Your Heading Font', sans-serif;
  --font-body: 'Your Body Font', sans-serif;
  --font-mono: 'Your Mono Font', monospace;
}
```

### Scale
- H1: 2.5rem/3rem (40px/48px)
- H2: 2rem/2.5rem (32px/40px)
- H3: 1.5rem/2rem (24px/32px)
- Body: 1rem/1.5rem (16px/24px)
- Small: 0.875rem/1.25rem (14px/20px)

## Tone of Voice

### Writing Style
- Professional yet approachable
- Clear and concise
- Solution-oriented
- Confident but not arrogant

### Language
- Active voice preferred
- Short paragraphs (2-3 sentences)
- Use "vi" (we) when referring to the company
- Address the reader directly with "du" or "ni"

## Visual Elements

### Spacing System
Follow an 8px grid system:
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px

### Border Radius
- Small elements (buttons, inputs): 4-8px
- Cards and containers: 8-12px
- Round elements: 50%

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.07);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
```

## Logo Usage
- Minimum clear space: Equal to logo height on all sides
- Minimum size: 32px height for digital
- Never stretch, rotate, or alter colors outside approved variants
- Use SVG format for web
