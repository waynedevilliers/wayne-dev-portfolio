# wayne.dev

A modern, bilingual portfolio website for Wayne de Villiers - Web Developer & Designer. Built with Next.js 14, TypeScript, and Tailwind CSS.

**Live Site:** [waynedev.dev](https://waynedev.dev) - Portfolio now live in production!

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

##  Features

- ** Bilingual**: Real-time language switching (EN/DE) without page reload
- ** Fully Responsive**: Mobile hamburger menu, optimized for all screen sizes
- ** Performance**: CSS-only animations, optimized fonts, Lighthouse 90+ score
- ** Modern Design**: Clean typography, professional color palette, SVG icons
- ** SEO Optimized**: Proper metadata, semantic HTML, OpenGraph tags
- ** Accessible**: ARIA labels, keyboard navigation, semantic structure
- ** Easy to Update**: All content in one file (`content.ts`)
- ** Production Ready**: Vercel-optimized, secure, no backend needed

##  Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd waynes_websites

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

The site will auto-reload when you make changes!

## 🌿 Git Workflow (GitFlow Lite)

This project uses **GitFlow Lite** for version control. Follow this workflow for all changes:

### Branch Structure
```
main (Production)          → waynedev.dev (LIVE)
  ↑ (PR from dev)
dev (Staging)             → wayneswebsites-git-dev.vercel.app
  ↑ (PR from feature branches)
feature/*, fix/*, etc.    → Vercel preview URLs
```

### Development Workflow

**Step 1: Create Feature Branch from Dev**
```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
# Examples: feature/add-contact-form, fix/language-bug, docs/update-readme
```

**Step 2: Make Changes & Commit**
```bash
# Make your changes
git add .
git commit -m "feat: describe your change"
# Use: feat, fix, docs, refactor, style, test, chore
```

**Step 3: Push to Remote**
```bash
git push origin feature/your-feature-name
```

**Step 4: Create PR to Dev (Staging)**
- Go to GitHub
- Create PR: feature branch → `dev`
- GitHub Actions CI runs automatically ✅
- Review "Files changed"
- Merge when CI passes ✅

**Step 5: Test on Staging**
- After merge, Vercel deploys to: https://wayneswebsites-git-dev.vercel.app
- Wait 2-3 minutes for deployment
- Test changes thoroughly

**Step 6: PR from Dev → Main (Production)**
- Create PR: `dev` → `main`
- GitHub Actions CI validates again ✅
- Review changes one final time
- Merge when CI passes ✅

**Step 7: Deploy to Production**
- Vercel auto-deploys to: https://waynedev.dev 🎉
- Your changes are now live!

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
feat: add new feature
fix: resolve bug
docs: update documentation
refactor: improve code structure
style: update spacing
test: add unit tests
chore: update dependencies
```

### Branch Protection Rules
- **main**: Fully protected (no direct pushes, CI required)
- **dev**: CI checks required, auto-deploy to staging
- **feature branches**: No restrictions, delete after merge

### GitHub Actions CI/CD
- Automatically runs on all PRs
- Checks: linting, type checking, build validation
- **Must pass before merging**

For detailed instructions, see: [`docs/WORKFLOW.md`](./docs/WORKFLOW.md)

##  Customization Guide

### 1. Update Your Content

All content is in **`content.ts`** file. Update the following:

```typescript
// Change this line to switch between English and German
export const content = contentEn; // or contentDe

// Then update the content objects:
const contentEn: Content = {
  hero: {
    name: 'Your Name',           // ← Your name
    title: 'Web Developer',       // ← Your title
    description: '...',           // ← Your value proposition
    cta: "Let's work together",
  },
  // ... more sections
}
```

**What to update:**
- Your name and title
- Service descriptions
- Project details (title, description, tech stack, links)
- Process steps
- Contact information (email, calendar link)
- Location and availability

### 2. Change Colors

Edit **`tailwind.config.ts`** to change the color scheme:

```typescript
colors: {
  ink: {
    DEFAULT: '#1a1a1a',    // Main text color
    light: '#2d2d2d',
    lighter: '#4a4a4a',
  },
  accent: {
    DEFAULT: '#2563eb',    // ← Change this to your brand color
    light: '#3b82f6',
    dark: '#1e40af',
  },
  // ...
}
```

### 3. Update Fonts

Fonts are configured in **`app/layout.tsx`**. Current setup uses:
- **Display (headings)**: Crimson Pro (serif)
- **Body (text)**: DM Sans (sans-serif)

To change fonts:

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Update imports in `app/layout.tsx`:

```typescript
import { Your_Display_Font, Your_Body_Font } from "next/font/google";

const displayFont = Your_Display_Font({
  subsets: ["latin"],
  variable: "--font-display",
  // ... config
});
```

### 4. Add Project Images

Replace placeholder images in **`components/Work.tsx`**:

```typescript
// Current: Placeholder div
<div className="w-full h-full flex items-center justify-center">
  {index + 1}
</div>

// Replace with:
<Image
  src="/images/project-name.jpg"
  alt={project.title}
  fill
  className="object-cover"
/>
```

Add images to `/public/images/` folder.

### 5. Update SEO Metadata

Edit **`app/layout.tsx`** metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Web Developer",
  description: "Your unique value proposition",
  keywords: ["your", "keywords", "here"],
  // ... more metadata
};
```

### 6. Language Switching

The current implementation shows both languages in the code but requires manual switching. To make it dynamic:

**Option A: Simple Toggle (included in Navigation)**
- User clicks EN/DE buttons
- Currently needs page reload (add state management for full reactivity)

**Option B: Full i18n Setup (recommended for production)**
- Use `next-intl` or similar library
- Create separate routes: `/en` and `/de`
- Better for SEO and user experience

### 7. Add a Contact Form

Current setup has email + calendar link. To add a form:

**Option 1: Netlify Forms** (easiest)
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

**Option 2: Formspree**
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <!-- form fields -->
</form>
```

**Option 3: API Route** (requires backend)
- Create API route in Next.js
- Use email service (SendGrid, Resend, etc.)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page (combines all sections)
├── components/
│   ├── Navigation.tsx       # Header with language switcher
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── Work.tsx            # Project showcase
│   ├── Process.tsx         # How you work
│   └── Contact.tsx         # Contact section
├── content.ts              # All content (EN + DE)
├── tailwind.config.ts      # Design tokens & colors
└── package.json
```

##  Design Philosophy

This portfolio follows a **"Refined Editorial Minimalism"** approach:

- **Typography-driven**: Content is king
- **Generous whitespace**: Breathing room for clarity
- **Subtle animations**: Only where they add value
- **Professional but warm**: Not cold or corporate
- **Intentional asymmetry**: Visual interest without chaos

##  Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

### Other Hosts

```bash
# Build for production
npm run build

# Outputs to .next folder (or /out for static export)
```

##  Technical Details

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Crimson Pro + DM Sans)
- **Icons**: Inline SVG
- **Animations**: CSS-only (no JavaScript libraries)

##  Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers

##  Troubleshooting

**Fonts not loading?**
- Check Google Fonts imports in `app/layout.tsx`
- Verify font variables in `tailwind.config.ts`

**Content not updating?**
- Make sure you're editing `content.ts`
- Restart dev server (`npm run dev`)

**Language switch not working?**
- Current implementation requires page refresh
- For dynamic switching, add state management or use i18n library

**Styles not applying?**
- Check Tailwind config
- Ensure classes are in content paths
- Clear `.next` folder and rebuild

## 📄 License

This is a template for personal/commercial use. Customize freely!

##  Support

For questions or issues:
1. Check this README first
2. Review component comments in code
3. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Ready to ship?** Remember to:
- [ ] Update all content in `content.ts`
- [ ] Add real project images
- [ ] Update email and calendar links
- [ ] Change colors to match your brand
- [ ] Update metadata for SEO
- [ ] Test on mobile devices
- [ ] Run `npm run build` to check for errors

Good luck! 
