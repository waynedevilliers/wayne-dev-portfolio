# Contributing to wayne.dev

Thank you for considering contributing to this project! This document outlines the guidelines and best practices.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

## Code of Conduct

This project follows standard open-source conduct guidelines:
- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a welcoming environment

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd waynes_websites

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch naming conventions:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - UI/styling changes
- `test/` - Adding tests

### 2. Make Changes

- Follow the coding standards below
- Test your changes thoroughly
- Update documentation if needed

### 3. Test Locally

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

**Test on multiple devices:**
- Mobile (375px, 390px)
- Tablet (768px)
- Desktop (1024px+)

### 4. Commit Changes

Follow the commit message guidelines below.

```bash
git add .
git commit -m "feat: add dark mode toggle"
git push origin feature/your-feature-name
```

## Coding Standards

### TypeScript

- **Use TypeScript for all new files**
- Define interfaces for component props
- Avoid `any` types
- Use proper type inference

```typescript
// Good
interface HeroProps {
  title: string;
  description: string;
}

export default function Hero({ title, description }: HeroProps) {
  // ...
}

// Bad
export default function Hero(props: any) {
  // ...
}
```

### React Components

- **Use functional components with hooks**
- Add `'use client'` directive when needed
- Keep components focused (single responsibility)
- Extract reusable logic into hooks

```typescript
// Good - Client component with clear directive
'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { content } = useLanguage();
  // ...
}
```

### Styling (Tailwind CSS)

- **Use Tailwind utility classes**
- Follow mobile-first approach
- Use design tokens from `tailwind.config.ts`
- Group related classes logically

```tsx
// Good - Mobile-first, organized
<div className="px-4 sm:px-6 py-8 md:py-12 bg-paper text-ink">

// Bad - Desktop-first, disorganized
<div className="lg:px-6 px-4 text-ink bg-paper md:py-12 py-8">
```

### File Organization

```
component/
├── ComponentName.tsx       # Component file
└── ComponentName.test.tsx  # Tests (future)
```

### Naming Conventions

- **Components:** PascalCase (`Navigation.tsx`)
- **Hooks:** camelCase with 'use' prefix (`useLanguage`)
- **Utils:** camelCase (`scrollToSection`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_WIDTH`)
- **Types/Interfaces:** PascalCase (`Content`, `LanguageContextType`)

### Content Management

**All content goes in `content.ts`:**

```typescript
// Update both English and German
const contentEn: Content = {
  hero: {
    name: 'Wayne de Villiers',
    title: 'Web Developer & Designer',
    // ...
  }
};

const contentDe: Content = {
  hero: {
    name: 'Wayne de Villiers',
    title: 'Web-Entwickler & Designer',
    // ...
  }
};
```

**Never hardcode strings in components!**

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/).

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, no logic change)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding tests
- `chore` - Maintenance tasks

### Examples

```bash
# Feature
git commit -m "feat: add mobile hamburger menu"

# Bug fix
git commit -m "fix: resolve language switcher not updating content"

# Documentation
git commit -m "docs: update README with new setup instructions"

# Refactor
git commit -m "refactor: extract icon logic into separate component"

# Style
git commit -m "style: improve mobile spacing on hero section"
```

### Multi-line Commits

```bash
git commit -m "feat: add project filtering

- Add filter buttons for tech stack
- Implement filter logic in Work component
- Update content structure to support tags

Closes #123"
```

## Pull Request Process

### 1. Update Your Branch

```bash
git checkout main
git pull origin main
git checkout your-branch
git rebase main
```

### 2. Create Pull Request

**PR Title:** Follow commit message format
```
feat: add dark mode support
```

**PR Description Template:**

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested on mobile (375px)
- [ ] Tested on tablet (768px)
- [ ] Tested on desktop (1024px+)
- [ ] Tested language switching
- [ ] Build passes (`npm run build`)
- [ ] Linter passes (`npm run lint`)

## Screenshots
[Add screenshots if UI changes]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Updated documentation if needed
- [ ] Tested thoroughly
- [ ] No console errors
```

### 3. Code Review

- Address reviewer feedback promptly
- Keep PR scope focused (one feature/fix per PR)
- Squash commits before merging if requested

### 4. Merge

Once approved:
- Squash and merge (preferred)
- Delete branch after merge

## Project Structure

```
waynes_websites/
├── app/              # Next.js App Router
├── components/       # React components
├── contexts/         # React Context providers
├── docs/            # Documentation
├── public/          # Static assets
├── content.ts       # All content (EN/DE)
├── tailwind.config.ts
└── package.json
```

**Key Files:**
- `content.ts` - ALL website text content
- `tailwind.config.ts` - Design tokens
- `contexts/LanguageContext.tsx` - Language switching
- `CLAUDE.md` - AI assistant guide

## Common Tasks

### Adding a New Section

1. **Update content.ts:**
```typescript
interface Content {
  // ... existing
  newSection: {
    heading: string;
    items: string[];
  };
}
```

2. **Create component:**
```typescript
// components/NewSection.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function NewSection() {
  const { content } = useLanguage();

  return (
    <section id="new-section" className="section-padding px-4 sm:px-6">
      <h2>{content.newSection.heading}</h2>
      {/* ... */}
    </section>
  );
}
```

3. **Add to page:**
```typescript
// app/page.tsx
import NewSection from '@/components/NewSection';

// Add to render
<NewSection />
```

### Updating Content

1. Edit `content.ts`
2. Update both `contentEn` AND `contentDe`
3. Test language switching works

### Changing Colors

1. Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    DEFAULT: '#your-new-color',
  }
}
```

2. Rebuild: `npm run dev` (auto-reloads)

### Adding Dependencies

```bash
# Add runtime dependency
npm install package-name

# Add dev dependency
npm install -D package-name
```

**Update documentation:**
- Add to relevant docs if architectural change
- Update README if setup process changes

## Questions?

- Check `docs/ARCHITECTURE.md` for technical details
- Review existing code for examples
- Open an issue for questions
- Contact: wrdevilliers@gmail.com

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
