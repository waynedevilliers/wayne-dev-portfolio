# Architecture Documentation

## Overview

**wayne.dev** is a modern, bilingual portfolio website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The architecture prioritizes performance, maintainability, and SEO optimization.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Crimson Pro, DM Sans)
- **State Management:** React Context API (Language switching)
- **Deployment:** Vercel (recommended)

## Project Structure

```
waynes_websites/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with metadata/SEO
│   └── page.tsx             # Main page with LanguageProvider
├── components/              # React components
│   ├── Navigation.tsx       # Header with mobile menu & language switcher
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid with SVG icons
│   ├── Work.tsx            # Projects/portfolio showcase
│   ├── Process.tsx         # Work process steps
│   └── Contact.tsx         # Contact form with footer
├── contexts/               # React Context providers
│   └── LanguageContext.tsx # Language switching state management
├── public/                 # Static assets
│   └── waynedevilliersResumeNov2025.pdf
├── docs/                   # Documentation
├── content.ts              # ALL website content (EN/DE)
├── tailwind.config.ts      # Design system tokens
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## Key Architectural Decisions

### 1. **Content Management Pattern**

All content is centralized in `content.ts` as a single source of truth.

**Benefits:**
- Easy to update content without touching components
- Type-safe content with TypeScript interfaces
- Bilingual support (EN/DE) in one file
- No CMS overhead for a simple portfolio

**Structure:**
```typescript
export interface Content {
  nav: { services: string; work: string; ... }
  hero: { name: string; title: string; ... }
  services: { heading: string; items: Array<...>; }
  // ...
}

const contentEn: Content = { /* English content */ };
const contentDe: Content = { /* German content */ };

export const allContent = { en: contentEn, de: contentDe };
```

### 2. **Language Switching (Context API)**

Uses React Context to manage language state across all components.

**Implementation:**
- `LanguageContext` provides `language`, `setLanguage`, and dynamic `content`
- All components use `useLanguage()` hook
- Language switcher in navigation triggers re-render of all components
- No page reload needed

**Why Context over URL-based i18n:**
- Simpler for single-page portfolio
- Faster switching (no routing)
- Can upgrade to next-intl later if needed

### 3. **Component Architecture**

**Client Components Only:**
- All components use `'use client'` directive
- Needed for interactivity (hamburger menu, language switching, smooth scroll)
- Next.js App Router optimization still applies

**Component Hierarchy:**
```
app/page.tsx (LanguageProvider wrapper)
  ├── Navigation (mobile menu state)
  ├── Hero
  ├── Services (icon rendering logic)
  ├── Work (project cards)
  ├── Process (steps + tech stack)
  └── Contact (email copy state + footer)
```

### 4. **Styling Strategy (Tailwind CSS)**

**Design Tokens** (`tailwind.config.ts`):
```typescript
colors: {
  ink: '#1a1a1a',         // Primary text
  paper: '#fafaf9',       // Background
  accent: '#2563eb',      // Brand color (blue)
  sage: '#4a5d54',        // Secondary accent
}

fonts: {
  display: 'Crimson Pro',  // Headings
  body: 'DM Sans',         // Body text
}
```

**Mobile-First Approach:**
- Base styles for mobile (< 768px)
- `sm:` for phones (≥640px)
- `md:` for tablets (≥768px)
- `lg:` for desktops (≥1024px)

**Utility-First:**
- No custom CSS classes (except global utilities)
- Responsive variants inline
- Maintains consistency

### 5. **SEO Optimization**

**Metadata** (`app/layout.tsx`):
- Dynamic `<title>` and `<meta>` tags
- OpenGraph for social sharing
- Twitter Card metadata
- Keywords for search engines

**Semantic HTML:**
- Proper heading hierarchy (h1 → h2 → h3)
- `<nav>`, `<main>`, `<section>`, `<article>` tags
- Accessible ARIA labels

**Performance:**
- Google Fonts optimized with `display: swap`
- CSS-only animations (no JS libraries)
- Next.js automatic image optimization
- Static export ready

### 6. **Mobile Responsiveness**

**Navigation:**
- Desktop: Horizontal nav with all links
- Mobile: Hamburger menu with slide-down overlay
- Language switcher always visible

**Layout:**
- Services grid: 2-col → 1-col on mobile
- Work projects: Side-by-side → stacked on mobile
- Process steps: 2-col → 1-col on mobile

**Typography:**
- Hero: `text-5xl sm:text-6xl md:text-8xl`
- Descriptions: `text-xl md:text-2xl`
- Responsive padding: `px-4 sm:px-6`

## Data Flow

1. **Page Load:**
   - `app/page.tsx` renders with `LanguageProvider`
   - Context initializes with default language ('en')
   - All components receive English content

2. **Language Switch:**
   - User clicks DE/EN button in Navigation
   - `setLanguage('de')` updates context state
   - Context re-renders with `allContent.de`
   - All components receive German content (instant)

3. **Navigation:**
   - User clicks nav link
   - `scrollToSection()` calculates section position
   - Smooth scroll to section with offset for fixed header
   - Mobile menu closes automatically

## Performance Considerations

**Optimizations:**
- ✅ CSS-only animations (no Framer Motion)
- ✅ No external icon libraries (inline SVG)
- ✅ Minimal JavaScript bundle
- ✅ Font loading optimized (`display: swap`)
- ✅ No runtime API calls
- ✅ Static export capable

**Metrics Goals:**
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Security

**No Backend:**
- Static site with no server-side logic
- No database connections
- No API keys in code

**Email Protection:**
- Email displayed but behind click-to-copy
- No mailto links that expose email to scrapers

## Future Enhancements

### Possible Additions:

1. **Full i18n Setup**
   - Use `next-intl` for URL-based routing (`/en`, `/de`)
   - Better for SEO (separate URLs per language)

2. **CMS Integration**
   - Sanity.io or Contentful for non-technical content updates
   - Keep Git-based content for developer control

3. **Analytics**
   - Google Analytics 4 or Plausible
   - Track page views, language preference, conversion events

4. **Contact Form**
   - Netlify Forms (easiest, free tier)
   - Or Formspree for more submissions
   - Or Next.js API route with email service

5. **Project Images**
   - Replace placeholder numbers with real screenshots
   - Use Next.js `<Image>` component for optimization

6. **Dark Mode**
   - Add theme toggle
   - Store preference in localStorage
   - CSS variables for colors

7. **Blog Section**
   - MDX for blog posts
   - Syntax highlighting for code snippets
   - RSS feed

## Deployment

**Vercel (Recommended):**
```bash
# Automatic deployment on git push
git push origin main
```

**Manual Build:**
```bash
npm run build  # Creates .next/ folder
npm start      # Runs production server
```

**Static Export (Optional):**
```javascript
// next.config.js
const nextConfig = {
  output: 'export',  // Generate static HTML
};
```

## Maintenance

**Updating Content:**
1. Edit `content.ts` (both `contentEn` and `contentDe`)
2. Commit and push
3. Vercel auto-deploys

**Adding Projects:**
1. Add project object to `content.work.projects` array
2. Include title, description, tech stack, link, year
3. Update both EN and DE versions

**Changing Colors:**
1. Edit `tailwind.config.ts` → `theme.extend.colors`
2. Update `accent`, `ink`, or `paper` values
3. Rebuild to see changes

## Testing Strategy

**Manual Testing:**
- Test on real devices (iPhone, Android)
- Check all breakpoints (375px, 768px, 1024px)
- Verify language switching works
- Test smooth scrolling

**Automated Testing (Future):**
- Jest + React Testing Library for components
- Cypress for E2E testing
- Lighthouse CI for performance regression

## Support

**Documentation:**
- This file: Architecture overview
- `CLAUDE.md`: Development guide for AI assistants
- `README.md`: Setup and customization
- `CONTRIBUTING.md`: Contribution guidelines

**Questions:**
- Review inline code comments
- Check Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
