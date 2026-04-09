---
description: Build elaborate web components and pages using React, Tailwind CSS, and shadcn/ui. Use for complex components requiring state management, routing, or advanced UI patterns in Next.js.
---

# Web Artifacts Builder Skill

Build powerful frontend components and pages using modern web technologies.

**Stack**: React 18 + TypeScript + Next.js + Tailwind CSS + shadcn/ui

## Design & Style Guidelines

**VERY IMPORTANT**: To avoid "AI slop", avoid using:
- Excessive centered layouts
- Purple gradients
- Uniform rounded corners everywhere
- Inter font as default
- Generic hero sections with identical patterns

## Component Architecture

### shadcn/ui Integration
- Use shadcn/ui components as building blocks: Button, Card, Dialog, Sheet, Tabs, etc.
- Reference: https://ui.shadcn.com/docs/components
- All components are customizable via Tailwind classes
- Use CSS variables for theming consistency

### Best Practices
- Use `"use client"` directive only when needed (state, effects, event handlers)
- Keep server components as default in Next.js App Router
- Implement proper loading states with Suspense
- Use `next/image` for all images
- Use `next/link` for all internal navigation
- Implement proper error boundaries

## Layout Patterns

### Beyond Basic Grids
- Bento grids with varying cell sizes
- Magazine-style asymmetric layouts
- Overlapping elements with z-index layers
- Full-bleed sections breaking container width
- Sticky elements with scroll-based reveals
- CSS Grid with named areas for complex layouts

### Responsive Strategy
- Mobile-first approach
- Use Tailwind breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Consider touch targets (min 48px) for mobile
- Test content reflow at all breakpoints

## Animation Patterns

### CSS-Only (Preferred for Simple Effects)
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Framer Motion (For Complex Interactions)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
/>
```

### Intersection Observer (Scroll-Triggered)
Use for revealing elements on scroll without heavy animation libraries.

## Performance Checklist
- Lazy load below-fold content
- Use dynamic imports for heavy components
- Optimize images with next/image (WebP/AVIF)
- Minimize client-side JavaScript
- Use React Server Components where possible
- Implement proper caching headers
