# wayne.dev - Complete Project Documentation

**Last Updated:** January 2026
**Developer:** Wayne de Villiers
**Brand:** wayne.dev (wordplay: "dev" = developer + "de V" from de Villiers surname)
**Repository:** https://github.com/waynedevilliers/wayne-dev-portfolio

---

## Project Overview

### What It Is
A professional, bilingual (EN/DE) portfolio website for Wayne de Villiers showcasing web development services. The site promotes WordPress development, landing pages, SEO, email campaigns, and web integrations.

### Primary Goal
Create a production-ready portfolio website that:
- Showcases Wayne's real projects (ELLU Studios, Culture Academy, Musikleben, VeMo)
- Promotes web development services (WordPress, landing pages, SEO, forms/chatbots)
- Works perfectly on mobile and desktop
- Supports English and German with real-time language switching
- Requires zero backend/database (static site)
- Is deployment-ready for Vercel

### Key Design Decisions
1. **No emojis** - Professional SVG icons only
2. **wayne.dev branding** - Consistent throughout (`.dev` in accent color)
3. **Mobile-first** - Hamburger menu, responsive typography
4. **Single source of truth** - All content in `content.ts`
5. **Type-safe** - TypeScript strict mode
6. **Performance-focused** - CSS-only animations, optimized fonts, static export capable

---

## Tech Stack

### Core Technologies
```
Framework:     Next.js 14 (App Router)
Language:      TypeScript 5.5 (strict mode)
Styling:       Tailwind CSS 3.4
UI Library:    React 18
State:         React Context API (language switching)
Fonts:         Google Fonts (Crimson Pro + DM Sans)
```

### Development Tools
```
Code Formatting:  Prettier (with Tailwind plugin)
Linting:          ESLint (Next.js + TypeScript rules)
Version Control:  Git + GitHub
Deployment:       Vercel (recommended)
```

### Why These Choices?
- **Next.js 14**: Modern React framework with App Router, great SEO, easy deployment
- **TypeScript**: Type safety prevents bugs, better IDE support
- **Tailwind CSS**: Fast styling, mobile-first, no CSS file bloat
- **Context API**: Lightweight state management (no Redux needed for simple language switching)
- **No backend**: Faster, more secure, cheaper hosting, easier maintenance

---

## Project Structure

```
wayne-dev-portfolio/
├── app/
│   ├── globals.css          # Tailwind imports + custom styles
│   ├── layout.tsx           # Root layout, fonts, metadata (SEO)
│   └── page.tsx             # Main page (combines all sections)
│
├── components/
│   ├── Navigation.tsx       # Header, hamburger menu, language switcher
│   ├── Hero.tsx            # Main headline, wayne.dev branding
│   ├── Services.tsx        # 4 services with SVG icons
│   ├── Work.tsx            # Project showcase (4 projects)
│   ├── Process.tsx         # 4-step workflow
│   └── Contact.tsx         # Email + calendar link
│
├── contexts/
│   └── LanguageContext.tsx  # React Context for EN/DE switching
│
├── docs/
│   ├── ARCHITECTURE.md      # Technical architecture (311 lines)
│   ├── CONTRIBUTING.md      # Contribution guidelines (422 lines)
│   ├── DEPLOYMENT.md        # Deployment instructions (496 lines)
│   └── PROJECT_SUMMARY.md   # Project overview (363 lines)
│
├── public/
│   └── waynedevilliersResumeNov2025.pdf  # Resume (source of truth)
│
├── content.ts               # ALL website content (EN + DE)
├── tailwind.config.ts       # Design tokens, colors, fonts
├── .prettierrc              # Code formatting rules
├── .eslintrc.json          # Linting rules
├── .gitignore              # Git exclusions
├── README.md               # Setup guide
├── CLAUDE.md               # AI assistant development guide
└── wayne-dev.md            # THIS FILE (complete documentation)
```

---

## Architecture & Logic

### Content Management System

**Single Source of Truth:** `content.ts`

All website content lives in ONE file with two versions:
```typescript
// Structure
export const contentEn: Content = { ... }  // English
export const contentDe: Content = { ... }  // German

// Exported for language switcher
export const allContent = {
  en: contentEn,
  de: contentDe,
}
```

**Why This Approach?**
- Easy to update (one file, not scattered across components)
- Type-safe (TypeScript ensures EN and DE have same structure)
- No database needed
- Simple to translate (just copy contentEn → contentDe and translate strings)

### Language Switching Logic

**Implementation:** React Context API

**File:** `contexts/LanguageContext.tsx`

**How It Works:**
1. `LanguageProvider` wraps entire app in `app/page.tsx`
2. Provider stores current language in state (`'en'` or `'de'`)
3. Components use `useLanguage()` hook to access:
   - `language` - current language code
   - `setLanguage(lang)` - function to switch language
   - `content` - content object for current language

**Example Usage in Component:**
```typescript
'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { content } = useLanguage();

  return <h1>{content.hero.title}</h1>; // Auto switches with language
}
```

**Benefits:**
- Real-time switching (no page reload)
- No prop drilling
- Consistent across all components

### Mobile Responsiveness Strategy

**Approach:** Mobile-first with Tailwind breakpoints

**Breakpoints:**
```
Base (mobile):  0-639px   (default styles)
sm:            640px+     (small tablets)
md:            768px+     (tablets)
lg:            1024px+    (desktop)
```

**Key Responsive Patterns:**

1. **Navigation:**
   - Mobile: Hamburger menu (hidden desktop nav)
   - Desktop: Full horizontal nav
   ```tsx
   // Mobile hamburger
   <button className="md:hidden" onClick={toggleMenu}>☰</button>

   // Desktop nav
   <nav className="hidden md:flex space-x-8">
   ```

2. **Typography Scaling:**
   ```tsx
   // H1: mobile 32px → tablet 48px → desktop 64px
   className="text-5xl sm:text-6xl md:text-8xl"
   ```

3. **Layout Grids:**
   ```tsx
   // Mobile: stack vertical | Desktop: 2 columns
   className="grid md:grid-cols-2 gap-8"
   ```

4. **Spacing:**
   ```tsx
   // Mobile: 40px padding | Desktop: 80px padding
   className="py-10 md:py-20"
   ```

### Component Architecture

**Pattern:** Functional components with hooks

**All components are client components:**
```typescript
'use client';  // Required for hooks and interactivity
```

**Naming Convention:**
- PascalCase for components: `Navigation.tsx`, `Hero.tsx`
- camelCase for functions: `scrollToSection()`, `handleClick()`

**Component Responsibilities:**
```
Navigation    → Header, mobile menu, language buttons
Hero          → Main headline, CTA button
Services      → 4 service cards with SVG icons
Work          → 4 project cards with tech tags
Process       → 4-step workflow timeline
Contact       → Email (click-to-copy), calendar link
```

### SVG Icon System

**Why SVG over icon libraries?**
- No external dependencies (faster load)
- Fully customizable colors/sizes
- Clean, professional look
- No emoji "cheesiness"

**Implementation in `Services.tsx`:**
```typescript
function ServiceIcon({ icon }: { icon: string }) {
  const iconClasses = "w-12 h-12 text-accent";

  switch (icon) {
    case 'wordpress':
      return <svg className={iconClasses}>...</svg>;
    case 'code':
      return <svg className={iconClasses}>...</svg>;
    // etc.
  }
}
```

**Icons Used:**
- `wordpress` - WordPress development
- `code` - Landing pages/web design
- `chart` - SEO & analytics
- `tools` - Forms/integrations

---

## Design System

### Color Palette

**CSS Variables in `globals.css`:**
```css
:root {
  --color-ink: #1a1a1a;           /* Main text */
  --color-ink-light: #2d2d2d;
  --color-ink-lighter: #4a4a4a;

  --color-paper: #fafaf9;         /* Background */

  --color-accent: #2563eb;        /* Brand blue (wayne.dev) */
  --color-accent-light: #3b82f6;
  --color-accent-dark: #1e40af;

  --color-sage: #4a5d54;          /* Secondary */
}
```

**Tailwind Config:**
```typescript
colors: {
  ink: {
    DEFAULT: '#1a1a1a',
    light: '#2d2d2d',
    lighter: '#4a4a4a',
  },
  accent: {
    DEFAULT: '#2563eb',  // Blue - wayne.dev brand
    light: '#3b82f6',
    dark: '#1e40af',
  },
  paper: '#fafaf9',
  sage: '#4a5d54',
}
```

**Usage:**
- `text-ink` - Headlines, body text
- `text-accent` - Links, buttons, `.dev` in logo
- `bg-paper` - Page background
- `bg-accent` - CTA buttons

### Typography System

**Fonts:**
```typescript
// app/layout.tsx
import { Crimson_Pro, DM_Sans } from 'next/font/google';

const displayFont = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-display',  // Headings
  weight: ['400', '600', '700'],
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',     // Body text
  weight: ['400', '500', '700'],
});
```

**Type Scale:**
```
H1 (Hero):      text-5xl sm:text-6xl md:text-8xl    (32px → 48px → 64px)
H2 (Sections):  text-4xl md:text-5xl                (36px → 48px)
H3 (Cards):     text-3xl                            (30px)
Body:           text-xl md:text-2xl                 (20px → 24px)
Small:          text-sm                             (14px)
```

**Font Usage:**
- `font-display` - All headings, navigation, buttons
- `font-body` - Paragraphs, descriptions

### Spacing System

**Section Padding:**
```css
.section-padding {
  padding-top: 4rem;     /* 64px */
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 6rem;   /* 96px */
    padding-bottom: 6rem;
  }
}
```

**Container Max-Width:**
```
max-w-4xl  → 896px  (CTA sections)
max-w-6xl  → 1152px (main content)
max-w-7xl  → 1280px (full-width sections)
```

---

## Content Structure

### All Content Sections

1. **Navigation** (`nav`)
   - Services, Work, Process, Contact links
   - Language switcher (EN/DE)

2. **Hero** (`hero`)
   - Name: "Wayne de Villiers"
   - Title: "Web Developer & Designer"
   - wayne.dev branding
   - Value proposition
   - CTA button

3. **Services** (`services`)
   - WordPress Development
   - Landing Pages & Web Design
   - SEO & Email Campaigns
   - Forms, Chatbots & Integrations

4. **Work** (`work`)
   - **ELLU Studios** (Current) - WordPress education platform
   - **Culture Academy** (Ongoing) - Nonprofit sports/education
   - **Musikleben** (2024-2025) - Music organization web app
   - **VeMo** (New) - Coming soon (placeholder)

5. **Process** (`process`)
   - 01: Discovery
   - 02: Plan & Design
   - 03: Build & Test
   - 04: Launch & Support

6. **Contact** (`contact`)
   - Email: wrdevilliers@gmail.com (click-to-copy)
   - Calendar: Calendly link (schedule call)

7. **Footer** (`footer`)
   - Location: Halle (Saale), Germany
   - Availability: "Available for projects"

### Content Interface (TypeScript)

```typescript
interface Content {
  nav: {
    services: string;
    work: string;
    process: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    description: string;
    cta: string;
  };
  services: {
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;  // 'wordpress' | 'code' | 'chart' | 'tools'
    }>;
  };
  work: {
    heading: string;
    subheading: string;
    projects: Array<{
      title: string;
      description: string;
      tech: string[];
      link: string;    // URL or '' for placeholder
      year: string;
    }>;
    linkText: string;
    comingSoonText: string;  // For projects without links
  };
  process: {
    heading: string;
    subheading: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    heading: string;
    description: string;
    email: string;
    calendarText: string;
    calendarLink: string;
    copyButton: string;
    copiedButton: string;
  };
  footer: {
    location: string;
    availability: string;
  };
}
```

---

## Key Features Implemented

### 1. Bilingual Support (EN/DE)

**Implementation:**
- React Context API in `contexts/LanguageContext.tsx`
- Language switcher in `Navigation.tsx`
- All content in `content.ts` (English + German versions)

**How to Switch Languages:**
- User clicks "EN" or "DE" button in navigation
- `setLanguage('en')` or `setLanguage('de')` called
- Context updates and all components re-render with new content
- **No page reload required**

**Tech Stack Used:**
```typescript
const [language, setLanguage] = useState<Language>('en');
const content = allContent[language];  // Auto-switches content
```

### 2. Mobile Hamburger Menu

**Implementation:** `Navigation.tsx`

**Desktop:** Horizontal navigation visible
**Mobile:** Hamburger icon (☰) reveals slide-down menu

**Code Pattern:**
```typescript
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Hamburger button (mobile only)
<button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
  {mobileMenuOpen ? '✕' : '☰'}
</button>

// Mobile menu (slides down when open)
{mobileMenuOpen && (
  <div className="md:hidden absolute top-full left-0 right-0 bg-paper">
    {/* Navigation links */}
  </div>
)}

// Desktop nav (always visible)
<nav className="hidden md:flex">
  {/* Navigation links */}
</nav>
```

### 3. Smooth Scrolling Navigation

**Implementation:**
```typescript
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
  setMobileMenuOpen(false);  // Close mobile menu after click
};

<button onClick={() => scrollToSection('services')}>
  {content.nav.services}
</button>
```

**All sections have IDs:**
```tsx
<section id="services">...</section>
<section id="work">...</section>
<section id="process">...</section>
<section id="contact">...</section>
```

### 4. Click-to-Copy Email

**Implementation:** `Contact.tsx`

```typescript
const [copied, setCopied] = useState(false);

const copyEmail = () => {
  navigator.clipboard.writeText(content.contact.email);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

<button onClick={copyEmail}>
  {copied ? content.contact.copiedButton : content.contact.copyButton}
</button>
```

### 5. Conditional Project Links

**Problem:** VeMo project has no URL yet (placeholder: `link: ''`)

**Solution:** Conditional rendering in `Work.tsx`

```typescript
{project.link && project.link !== '#' ? (
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    {content.work.linkText}
  </a>
) : (
  <span className="text-ink/40">
    {content.work.comingSoonText}
  </span>
)}
```

**Result:**
- Projects with valid URLs → Clickable link
- VeMo (no URL) → Grayed out "Coming soon" text

### 6. SEO Optimization

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "wayne.dev | Web Developer | WordPress | Landing Pages | SEO",
  description: "wayne.dev - Professional web development services by Wayne de Villiers...",
  keywords: [
    "wayne.dev",
    "web developer",
    "wordpress developer",
    "landing page design",
    "seo optimization",
    "email campaigns",
    "web development germany",
  ],
  authors: [{ name: "Wayne de Villiers" }],
  openGraph: {
    title: "wayne.dev - Web Developer & Designer",
    description: "Professional web development services...",
    url: "https://wayne.dev",
    siteName: "wayne.dev",
    locale: "en_US",
    type: "website",
  },
};
```

**SEO Features:**
- Semantic HTML (proper heading hierarchy)
- Meta descriptions
- OpenGraph tags (social media)
- Keywords
- Alt text on images (when added)

---

## Development Workflow

### Git Workflow Used

**Branching Strategy:**
```
main                          → Production-ready code
  ↳ feature/branch-name       → Feature development
```

**Commit Convention:**
```
feat:    New features
fix:     Bug fixes
docs:    Documentation changes
style:   Code formatting (no logic change)
refactor: Code restructuring
chore:   Build/config changes
```

**Example:**
```bash
git checkout -b feature/add-voice-input
git add .
git commit -m "feat: add voice input with Whisper"
git push origin feature/add-voice-input
gh pr create --base main --head feature/add-voice-input
```

### Pull Request Created

**PR #2:** https://github.com/waynedevilliers/wayne-dev-portfolio/pull/2

**Commits:**
1. `feat: complete wayne.dev portfolio with comprehensive documentation`
2. `fix: handle placeholder links and standardize tech stack`
3. `docs: remove all emojis from documentation`

**Changes:**
- 19 files changed
- 4,024+ lines added
- Complete portfolio implementation
- All documentation created
- Code quality configs added

**Status:** Merged to main ✓

### Files Modified in Development

**New Files Created:**
```
components/Navigation.tsx
components/Hero.tsx
components/Services.tsx
components/Work.tsx
components/Process.tsx
components/Contact.tsx
contexts/LanguageContext.tsx
docs/ARCHITECTURE.md
docs/CONTRIBUTING.md
docs/DEPLOYMENT.md
docs/PROJECT_SUMMARY.md
content.ts
.prettierrc
.eslintrc.json
CLAUDE.md
wayne-dev.md  (this file)
```

**Modified Files:**
```
app/page.tsx       (added LanguageProvider)
app/layout.tsx     (updated metadata)
app/globals.css    (fixed border-border → border-ink/10)
README.md          (comprehensive setup guide)
.gitignore         (proper Next.js exclusions)
```

---

## Common Tasks

### How to Update Content

**Edit:** `content.ts`

**Example - Change Hero Text:**
```typescript
const contentEn: Content = {
  hero: {
    name: 'Wayne de Villiers',
    title: 'Web Developer & Designer',  // ← Change this
    description: 'Your new description...',  // ← Or this
    cta: "Let's work together",
  },
  // ...
}
```

**After editing:**
- Save file
- Development server auto-reloads
- Changes appear instantly

### How to Add a New Project

**Edit:** `content.ts` → `work.projects` array

```typescript
work: {
  projects: [
    // Existing projects...
    {
      title: 'New Project Name',
      description: 'Brief project description highlighting key features and tech used.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://project-url.com',  // Or '' if not ready
      year: '2026',
    },
  ],
}
```

**Don't forget German version:**
```typescript
const contentDe: Content = {
  work: {
    projects: [
      // Add same project with German description
      {
        title: 'New Project Name',  // Same title
        description: 'Deutsche Projektbeschreibung...',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: 'https://project-url.com',
        year: '2026',
      },
    ],
  },
}
```

### How to Change Colors

**Edit:** `tailwind.config.ts`

```typescript
colors: {
  accent: {
    DEFAULT: '#2563eb',  // ← Change to your brand color
    light: '#3b82f6',
    dark: '#1e40af',
  },
}
```

**Common places accent color appears:**
- Navigation links
- `.dev` in wayne.dev logo
- CTA buttons
- Service icons
- Section headings (some)

### How to Add Project Images

**Currently:** Placeholder numbers (1, 2, 3, 4)

**To add real images:**

1. **Add images to `/public/images/`**
   ```
   public/
     images/
       ellu-studios.jpg
       culture-academy.jpg
       musikleben.jpg
       vemo.jpg
   ```

2. **Update `Work.tsx`:**
   ```tsx
   import Image from 'next/image';

   // Replace placeholder div with:
   <div className="relative aspect-[4/3]">
     <Image
       src={`/images/${project.title.toLowerCase().replace(' ', '-')}.jpg`}
       alt={project.title}
       fill
       className="object-cover rounded-2xl"
     />
   </div>
   ```

### How to Deploy

**Recommended:** Vercel (automatic deployments)

**Steps:**
1. Push code to GitHub (already done)
2. Go to vercel.com
3. Import GitHub repository
4. Deploy (auto-detects Next.js)
5. Configure custom domain: wayne.dev

**Alternative:** Static export
```bash
npm run build
# Upload /out folder to any static host
```

**Full guide:** See `docs/DEPLOYMENT.md`

---

## Current State & Next Steps

### Current State (January 2026)

**Status:** Production-ready, awaiting deployment

**What's Complete:**
- ✓ All components built and styled
- ✓ Bilingual support (EN/DE) working
- ✓ Mobile responsive with hamburger menu
- ✓ Real project content from resume
- ✓ Professional SVG icons (no emojis)
- ✓ SEO metadata configured
- ✓ Code quality tools (Prettier, ESLint)
- ✓ Comprehensive documentation
- ✓ Git repository with clean history
- ✓ Pull request merged to main

**What's Missing:**
- ⚠️ Real project images (using placeholders)
- ⚠️ Real Calendly link (placeholder URL)
- ⚠️ VeMo project details (coming soon)
- ⚠️ Not deployed yet

### Immediate Next Steps

1. **Deploy to Vercel**
   ```bash
   # Push is already done, just:
   # 1. Go to vercel.com
   # 2. Import waynedevilliers/wayne-dev-portfolio
   # 3. Deploy
   ```

2. **Configure Custom Domain**
   - Purchase wayne.dev (if not owned)
   - Add to Vercel project settings
   - Update DNS records

3. **Add Real Content**
   - Replace project image placeholders
   - Add real Calendly link to `content.ts`
   - Complete VeMo project description

4. **Optional Enhancements**
   - Add Google Analytics
   - Add contact form (Netlify Forms or Formspree)
   - Add blog section (MDX)
   - Add testimonials
   - Dark mode toggle

### Known Issues

**None currently.** All bugs have been fixed:
- ✓ Language switcher working
- ✓ Mobile navigation functional
- ✓ Placeholder links handled correctly
- ✓ Tech stack consistent EN/DE
- ✓ All emojis removed
- ✓ CSS errors fixed

---

## Important Notes for AI Assistants

### Context for Future Sessions

**If continuing this project:**
1. Read this file first (`wayne-dev.md`)
2. Current branch: `main`
3. Working directory: `/home/johnblack/dev/work/waynes_freelance_software_developement_website/waynes_websites`
4. All content edits go in: `content.ts`
5. Components are in: `components/`
6. Language logic in: `contexts/LanguageContext.tsx`

### Critical Design Rules

**DO:**
- Use professional SVG icons
- Keep wayne.dev branding consistent
- Maintain bilingual parity (EN/DE same structure)
- Follow mobile-first responsive design
- Use Tailwind utility classes
- Keep all content in `content.ts`

**DON'T:**
- Add emojis (removed for professional look)
- Break TypeScript types
- Create separate content files
- Use inline styles (use Tailwind)
- Add dependencies without reason
- Modify `node_modules/`

### When User Asks to Update Content

**Always edit:** `content.ts`

**Example request:** "Change the hero headline"
**Action:**
```typescript
// content.ts
const contentEn: Content = {
  hero: {
    title: 'New Headline Here',  // ← Edit this
  }
}

// Also update German:
const contentDe: Content = {
  hero: {
    title: 'Neue Überschrift Hier',  // ← And this
  }
}
```

### When User Asks About Deployment

**Guide them to:**
1. `docs/DEPLOYMENT.md` for full instructions
2. Vercel is recommended (easiest)
3. Need to add project images first
4. Need to update Calendly link

### Tech Stack Questions

**Quick Reference:**
```
Next.js 14        → Framework
TypeScript 5.5    → Language
Tailwind CSS 3.4  → Styling
React 18          → UI Library
Context API       → State Management
Google Fonts      → Typography
Vercel           → Hosting (recommended)
```

---

## File Reference Quick Guide

### Where to Find Things

**Content:**
- All text content → `content.ts`
- Images → `public/` (when added)
- Fonts → `app/layout.tsx` (Google Fonts config)

**Styling:**
- Colors → `tailwind.config.ts`
- Global CSS → `app/globals.css`
- Component styles → Inline Tailwind classes

**Components:**
- Navigation → `components/Navigation.tsx`
- Hero → `components/Hero.tsx`
- Services → `components/Services.tsx`
- Work → `components/Work.tsx`
- Process → `components/Process.tsx`
- Contact → `components/Contact.tsx`

**Logic:**
- Language switching → `contexts/LanguageContext.tsx`
- Main page → `app/page.tsx`
- Layout/SEO → `app/layout.tsx`

**Documentation:**
- Architecture → `docs/ARCHITECTURE.md`
- Contributing → `docs/CONTRIBUTING.md`
- Deployment → `docs/DEPLOYMENT.md`
- Project summary → `docs/PROJECT_SUMMARY.md`
- This file → `wayne-dev.md`

**Config:**
- TypeScript → `tsconfig.json`
- Tailwind → `tailwind.config.ts`
- Next.js → `next.config.js`
- Prettier → `.prettierrc`
- ESLint → `.eslintrc.json`
- Git → `.gitignore`

---

## Commands Reference

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm run lint         # Run ESLint
npm run start        # Start production server
```

### Git
```bash
git status                    # Check status
git add .                     # Stage changes
git commit -m "message"       # Commit
git push origin main          # Push to main
git checkout -b feature/name  # New branch
```

### Voice Input (Bonus Feature)
```bash
ask                  # Record voice and transcribe (alias)
~/voice.sh           # Same as above (full path)
```

---

## Resources & Links

### This Project
- **Repository:** https://github.com/waynedevilliers/wayne-dev-portfolio
- **Pull Request:** https://github.com/waynedevilliers/wayne-dev-portfolio/pull/2
- **Live Site:** (Not deployed yet)

### Documentation
- **Architecture:** `docs/ARCHITECTURE.md`
- **Contributing:** `docs/CONTRIBUTING.md`
- **Deployment:** `docs/DEPLOYMENT.md`
- **Project Summary:** `docs/PROJECT_SUMMARY.md`

### External
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Vercel Deployment:** https://vercel.com/docs

---

## Summary

### What This Project Is

A production-ready, bilingual portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features real-time English/German language switching, mobile-responsive design with hamburger menu, and professional SVG icons. All content managed in a single file (`content.ts`) for easy updates. Zero backend, static export capable, optimized for Vercel deployment.

### Key Achievements

- Implemented React Context API for seamless language switching
- Created mobile-first responsive design with hamburger menu
- Built 6 reusable components (Navigation, Hero, Services, Work, Process, Contact)
- Established comprehensive documentation (4 docs files, 1,500+ lines)
- Set up code quality tools (Prettier, ESLint, TypeScript strict mode)
- Showcased 4 real projects with conditional link handling
- Maintained professional design (no emojis, SVG icons only)
- Created type-safe content management system

### What Makes This Different

**Not a template** - This is Wayne's real portfolio with real projects, real services, and authentic content extracted from his actual resume. The branding (wayne.dev) is clever wordplay on his surname. The bilingual support reflects his German location. Every decision was intentional and production-focused.

---

**Document Version:** 1.0
**Last Updated:** January 7, 2026
**Created by:** Claude Sonnet 4.5 (in collaboration with Wayne de Villiers)
