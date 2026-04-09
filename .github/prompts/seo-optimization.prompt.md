---
description: SEO analysis and optimization guidelines for web pages. Use when optimizing pages for search engines, adding schema markup, improving Core Web Vitals, or optimizing for AI search (GEO).
---

# SEO Optimization Skill

Comprehensive SEO analysis and optimization guidelines covering technical SEO, on-page analysis, content quality (E-E-A-T), schema markup, and AI search optimization.

## Technical SEO Checklist

### Core Web Vitals (Current Metrics 2026)
- **LCP** (Largest Contentful Paint): Target < 2.5s
- **INP** (Interaction to Next Paint): Target < 200ms (replaced FID in March 2024)
- **CLS** (Cumulative Layout Shift): Target < 0.1

### On-Page Essentials
- Title tag: 50-60 chars, primary keyword near start
- Meta description: 150-160 chars, compelling with keyword
- H1: One per page, contains primary keyword
- URL structure: Short, descriptive, hyphenated
- Image alt text: Descriptive, includes keywords naturally
- Internal linking: Contextual links to related pages
- Mobile-first: Responsive, touch targets ≥ 48px
- Page speed: Optimize images (WebP/AVIF), minimize JS/CSS, lazy load

### Next.js Specific SEO
- Use `generateMetadata()` for dynamic meta tags
- Use `next/image` for automatic optimization
- Implement `sitemap.xml` via `app/sitemap.ts`
- Use `robots.txt` via `app/robots.ts`
- Add structured data via JSON-LD in page components
- Use `next/link` for client-side navigation (helps crawling)
- Implement proper canonical URLs
- Use `loading.tsx` to improve perceived performance

## E-E-A-T Analysis (Sept 2025 Quality Rater Guidelines)
- **Experience**: First-hand knowledge signals - show real expertise
- **Expertise**: Author credentials and depth of knowledge
- **Authoritativeness**: Industry recognition and citations
- **Trustworthiness**: Contact info, security (HTTPS), transparency, privacy policy

## Schema Markup (JSON-LD)

### Supported Types (2026)
Use JSON-LD format (Google preferred). Key types:
- Organization, LocalBusiness, WebSite, WebPage
- Article, BlogPosting, FAQPage (restricted to gov/health since Aug 2023)
- Product, Service, Offer, AggregateRating
- BreadcrumbList, SiteNavigationElement
- VideoObject, ImageObject

### Deprecated (Do NOT use)
- HowTo: Deprecated Sept 2023
- SpecialAnnouncement: Deprecated July 2025

### Example: Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+46-XX-XXXXXXX",
    "contactType": "customer service"
  },
  "sameAs": ["https://linkedin.com/company/...", "https://facebook.com/..."]
}
```

## AI Search Optimization (GEO) - 2026

Optimize for AI Overviews (Google), ChatGPT web search, Perplexity:
- Write clear, direct answers to common questions
- Use structured data extensively
- Provide authoritative, well-sourced content
- Include statistics and data points
- Use clear headings and list formatting
- Ensure content is easily extractable by LLMs
- Add author/expert attribution

## Content Optimization
- Use semantic HTML (article, section, aside, nav, header, footer, main)
- Structure content with proper heading hierarchy (H1 → H2 → H3)
- Add descriptive alt text to all images
- Include relevant internal and external links
- Optimize for featured snippets (tables, lists, direct answers)
- Target long-tail keywords in addition to primary keywords
