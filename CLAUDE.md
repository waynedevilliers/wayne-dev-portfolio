# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**wayne.dev** is a modern, bilingual (EN/DE) portfolio website for Wayne de Villiers, a web developer specializing in WordPress development, landing pages, SEO, and web applications. Built as a high-performance single-page application with real-time language switching.

**Brand Name:** wayne.dev (clever wordplay: "dev" for developer + surname "de Villiers")

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript 5.5
- Tailwind CSS 3.4
- React 18
- React Context API (language switching)

## Git Workflow (GitFlow Lite)

**CRITICAL: Never work directly on main branch. Always create feature branches from dev.**

### Branch Structure
```
main (production) ← waynedev.dev
  ↑
dev (staging) ← wayneswebsites-git-dev.vercel.app
  ↑
feature/* branches ← Vercel preview URLs
```

### Workflow
1. **Create feature branch from dev:**
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature/your-feature-name
   ```

2. **Work and commit (Conventional Commits):**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve bug"
   ```

3. **Push and create PR to dev:**
   ```bash
   git push origin feature/your-feature-name
   # Create PR on GitHub (goes to dev, gets preview URL)
   ```

4. **Test on staging:**
   - CI workflow runs automatically (lint, build, type-check)
   - Vercel creates preview URL
   - Review PR, test changes
   - Merge to dev when approved

5. **Test on staging environment:**
   - Visit: https://wayneswebsites-git-dev.vercel.app
   - Verify changes work as expected

6. **Release to production:**
   - Create PR from dev → main
   - Require passing CI checks
   - Merge to main
   - Automatically deploys to: https://waynedev.dev

### Branch Naming Conventions
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - UI/styling changes
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### Commit Message Format (Conventional Commits)
```
<type>(<scope>): <subject>

<body>

<footer>
```

Examples:
```bash
git commit -m "feat: add dark mode support"
git commit -m "fix: resolve language switcher bug"
git commit -m "docs: update README"
git commit -m "refactor: extract button component"
```

### Branch Protection
- **main**: Fully protected
  - Requires PR review
  - Requires CI checks to pass
  - No direct pushes allowed
  - No force pushes

- **dev**: Protected with CI checks
  - Requires CI workflow to pass
  - Allows admins to bypass for hotfixes
  - Delete feature branches after merge

### Hotfix Process (Critical bugs on production)
```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug

# Fix and commit
git commit -m "fix: resolve critical issue"
git push origin hotfix/critical-bug

# Create PR directly to main
# After merge, sync dev:
git checkout dev
git merge main
git push origin dev
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture & Key Patterns

### Content Management Pattern
All content (both English and German) is centralized in **`content.ts`** at the root level. This is the SINGLE source of truth for all text content.

- Content is typed via the `Content` interface
- Two language objects: `contentEn` and `contentDe`
- Export `content` determines which language displays (manual switch)
- Export `allContent` provides both languages for potential language switcher

**To add/modify content:** Always update `content.ts`, never hardcode strings in components.

### Component Structure
The app follows a section-based component architecture:

```
app/page.tsx → Orchestrates all sections in order
├── Navigation.tsx (header with language switcher placeholder)
├── Hero.tsx (above-fold section)
├── Services.tsx (services grid)
├── Work.tsx (project showcase)
├── Process.tsx (workflow steps)
└── Contact.tsx (email + calendar link)
```

All components are in `/components` and consume content via import from `content.ts`.

### Design System (Tailwind Config)

**Color Palette:**
- `ink` - Text colors (#1a1a1a and variants)
- `paper` - Background colors (#fafaf9 and variants)
- `accent` - Primary accent color (#2563eb blue - CHANGE THIS to match brand)
- `sage` - Secondary muted green (#4a5d54)

**Typography:**
- `font-display` - Used for headings (Crimson Pro serif via CSS variable)
- `font-body` - Used for body text (DM Sans via CSS variable)
- Font imports configured in `app/layout.tsx`

**Animations:**
- `animate-fade-in` - Fade in effect (0.6s)
- `animate-slide-up` - Slide up with fade (0.6s)
- All animations are CSS-only, no JS animation libraries

### Language Implementation (Current State)

**Current:** Simple manual switch in `content.ts` (line 308)
```typescript
export const content = contentEn; // Change to contentDe for German
```

**Limitation:** Requires code change + rebuild to switch languages

**Production Recommendation:** Implement proper i18n using `next-intl` with separate routes (`/en` and `/de`) for better SEO and UX.

## Important Files & Their Purposes

| File | Purpose |
|------|---------|
| `content.ts` | ALL website content (EN + DE). Update this to change any text. |
| `tailwind.config.ts` | Design tokens (colors, fonts, animations). Change accent color here. |
| `app/layout.tsx` | Root layout, metadata/SEO, font imports. Update site metadata here. |
| `app/page.tsx` | Main page orchestration. Add/remove/reorder sections here. |
| `next.config.js` | Next.js configuration (image optimization, build settings). |

## Customization Guide

### Changing Brand Color
Edit `tailwind.config.ts` → `theme.extend.colors.accent`:
```typescript
accent: {
  DEFAULT: '#yourcolor',  // Main accent color
  light: '#lighter',      // Hover states
  dark: '#darker',        // Active states
}
```

### Adding a New Section
1. Create component in `/components/YourSection.tsx`
2. Import and use content from `content.ts`
3. Add section content to `Content` interface in `content.ts`
4. Update both `contentEn` and `contentDe` objects
5. Import and add to `app/page.tsx`

### Switching Fonts
1. Choose fonts from Google Fonts
2. Update imports in `app/layout.tsx`
3. Font variables (`--font-display`, `--font-body`) automatically apply via Tailwind config

### Adding Project Images
Replace placeholder divs in `components/Work.tsx` with Next.js `<Image>` components:
```typescript
import Image from 'next/image';

<Image
  src="/images/project-name.jpg"
  alt={project.title}
  fill
  className="object-cover"
/>
```

Place images in `/public/images/` directory.

## SEO & Metadata

All metadata is in `app/layout.tsx`. Before deployment:
- Update title and description
- Add keywords relevant to your services
- Configure OpenGraph and Twitter card metadata
- Consider adding sitemap.ts for better indexing

## Recent Updates & Features

###  Implemented (2025)

1. **Real-time Language Switching**
   - React Context API implementation
   - No page reload needed
   - EN/DE buttons in navigation

2. **Mobile Responsiveness**
   - Hamburger menu for mobile navigation
   - Responsive spacing (`px-4 sm:px-6`)
   - Mobile-optimized typography
   - All navigation links accessible on mobile

3. **Brand Identity**
   - wayne.dev branding throughout
   - Logo in navigation, hero, footer
   - Consistent accent color on `.dev`

4. **Current Projects Updated**
   - ELLU Studios (current freelance)
   - Culture Academy (ongoing)
   - Musikleben (2024-2025)
   - VeMo (new project)

5. **Documentation**
   - `/docs` folder created
   - ARCHITECTURE.md (technical details)
   - CONTRIBUTING.md (guidelines)
   - DEPLOYMENT.md (hosting guide)

6. **Code Standards**
   - `.prettierrc` (formatting)
   - `.eslintrc.json` (linting)
   - `.gitignore` (proper exclusions)

## Known Limitations & Future Enhancements

1. **Language switching:**  IMPLEMENTED - Context API with real-time switching

2. **Project images:** Using placeholders. Replace with real project screenshots using Next.js Image component.

3. **Contact form:** Currently only email + calendar link. Consider adding actual form (Netlify Forms, Formspree, or custom API route).

4. **Analytics:** No analytics configured. Add Google Analytics, Plausible, or Fathom before launch.

## Design Philosophy & Constraints

- **Minimal, clean, modern:** Avoid clutter, generous whitespace
- **Professional but warm:** Not cold/corporate, approachable
- **Typography-driven:** Content is king, let it breathe
- **Subtle animations only:** Use sparingly, only where they add value
- **Mobile-first:** Always test responsive behavior
- **No backend required:** Static export friendly

## Common Tasks

**Update contact information:**
→ Edit `content.ts` → `contact.email` and `contact.calendarLink`

**Change hero message:**
→ Edit `content.ts` → `hero.description`

**Add/remove services:**
→ Edit `content.ts` → `services.items` array

**Modify project showcase:**
→ Edit `content.ts` → `work.projects` array

**Update metadata/SEO:**
→ Edit `app/layout.tsx` → `metadata` export

**Change color scheme:**
→ Edit `tailwind.config.ts` → `theme.extend.colors`
