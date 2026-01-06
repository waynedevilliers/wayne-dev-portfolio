# Deployment Guide

Complete guide for deploying **wayne.dev** to various platforms.

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [Static Export](#static-export)
- [Custom Server](#custom-server)
- [Domain Setup](#domain-setup)
- [Environment Variables](#environment-variables)
- [Post-Deployment](#post-deployment)

## Pre-Deployment Checklist

Before deploying, ensure:

### Content
- [ ] All content updated in `content.ts` (both EN/DE)
- [ ] Contact email updated (`content.contact.email`)
- [ ] Calendar link updated (if using Calendly)
- [ ] Real project descriptions (not placeholder text)
- [ ] LinkedIn link updated (if added)

### SEO & Metadata
- [ ] Update `app/layout.tsx` metadata:
  - Title
  - Description
  - Keywords
  - OpenGraph data
  - Twitter card

### Testing
- [ ] Test on multiple devices:
  - Mobile (iPhone, Android)
  - Tablet (iPad)
  - Desktop (various browsers)
- [ ] Test language switching (EN ↔ DE)
- [ ] Test mobile menu navigation
- [ ] Test all section links work
- [ ] No console errors
- [ ] Build succeeds: `npm run build`
- [ ] Lint passes: `npm run lint`

### Performance
- [ ] Images optimized (if using project images)
- [ ] No large dependencies
- [ ] Lighthouse score > 90

### Security
- [ ] No API keys in code
- [ ] No sensitive data exposed
- [ ] Email not directly visible to scrapers

---

## Vercel (Recommended)

**Best for:** Next.js projects (native support)

### 1. Connect Repository

```bash
# Push code to GitHub
git add .
git commit -m "chore: prepare for deployment"
git push origin main
```

### 2. Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (or project folder path)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Click "Deploy"

### 3. Automatic Deployments

- **Every push to `main`** → Automatic production deployment
- **Pull requests** → Preview deployments
- **No additional configuration needed!**

### 4. Custom Domain

```bash
# Via Vercel Dashboard
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., wayne.dev)
3. Follow DNS instructions
4. SSL certificate auto-generated
```

**DNS Records:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Environment Variables (if needed)

```bash
# Vercel Dashboard → Settings → Environment Variables
# Example:
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

---

## Netlify

**Best for:** Static sites, JAMstack

### 1. Build Settings

```bash
# netlify.toml (create in project root)
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### 3. Deploy via Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import existing project"
3. Connect GitHub repository
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Deploy

### 4. Custom Domain

```bash
# Netlify Dashboard → Domain settings
1. Add custom domain
2. Update DNS records
3. Enable HTTPS (automatic)
```

---

## Static Export

**Best for:** Hosting on any static server (S3, GitHub Pages, etc.)

### 1. Configure Static Export

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',  // Enable static export

  // Optional: Trailing slashes
  trailingSlash: true,

  // Images need to be optimized externally
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### 2. Build Static Files

```bash
# Generate static HTML
npm run build

# Output will be in 'out/' folder
ls out/
```

### 3. Deploy to Static Host

**GitHub Pages:**
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

**Amazon S3:**
```bash
# Install AWS CLI
aws s3 sync out/ s3://your-bucket-name --delete
```

**Any Web Server:**
```bash
# Upload 'out/' folder contents via FTP/SFTP
# Point web server root to uploaded files
```

---

## Custom Server

**For advanced use cases (VPS, self-hosted)**

### 1. Build Application

```bash
npm run build
```

### 2. Run Production Server

```bash
# Start server
npm start

# Or with PM2 (process manager)
npm install -g pm2
pm2 start npm --name "wayne.dev" -- start
pm2 save
pm2 startup
```

### 3. Nginx Configuration

```nginx
server {
    listen 80;
    server_name wayne.dev www.wayne.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. SSL with Certbot

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d wayne.dev -d www.wayne.dev
```

---

## Domain Setup

### Purchasing Domain

**Recommended registrars:**
- **Namecheap** - Affordable, good support
- **Google Domains** - Simple, reliable
- **Cloudflare** - Best pricing + free CDN

### DNS Configuration

**For wayne.dev domain:**

```
Type: A
Name: @
Value: [Your server IP or hosting provider IP]
TTL: Auto

Type: CNAME
Name: www
Value: wayne.dev
TTL: Auto
```

**Cloudflare (Recommended):**
1. Add site to Cloudflare
2. Update nameservers at registrar
3. Enable proxy (orange cloud) for CDN
4. Enable "Always Use HTTPS"
5. Set SSL/TLS to "Full (strict)"

---

## Environment Variables

If using API services (analytics, forms, etc.):

### Local Development

```bash
# .env.local (create in project root)
NEXT_PUBLIC_ANALYTICS_ID=your-id
NEXT_PUBLIC_FORM_ENDPOINT=your-endpoint
```

### Production

**Vercel:**
```bash
# Dashboard → Settings → Environment Variables
# Add each variable
```

**Netlify:**
```bash
# Dashboard → Site settings → Environment variables
# Add each variable
```

**Important:**
- Prefix public variables with `NEXT_PUBLIC_`
- Never commit `.env.local` to Git
- Add `.env.local` to `.gitignore`

---

## Post-Deployment

### 1. Verify Deployment

- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Language switching works
- [ ] Mobile menu functions
- [ ] Contact links work
- [ ] No 404 errors
- [ ] SSL certificate active (https://)

### 2. Performance Check

```bash
# Run Lighthouse audit
1. Open site in Chrome
2. DevTools → Lighthouse
3. Generate report
4. Aim for 90+ scores
```

**Or use:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### 3. SEO Verification

- [ ] Test on [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap (if created)
- [ ] Verify mobile-friendly: [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Check structured data: [Rich Results Test](https://search.google.com/test/rich-results)

### 4. Analytics Setup (Optional)

**Google Analytics 4:**
```typescript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

**Plausible (Privacy-focused):**
```typescript
<Script
  defer
  data-domain="wayne.dev"
  src="https://plausible.io/js/script.js"
/>
```

### 5. Monitor

- Set up uptime monitoring (UptimeRobot, Pingdom)
- Check analytics weekly
- Monitor Core Web Vitals
- Watch for errors in console

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check `next.config.js` image domains
- Ensure images in `/public` folder
- Verify image paths are correct

### 404 on Refresh

**For static exports:**
- Configure web server for SPA routing
- Use `trailingSlash: true` in next.config.js

### Styles Not Applied

```bash
# Rebuild Tailwind
npm run build

# Check Tailwind content paths in tailwind.config.ts
```

### Language Switching Broken

- Verify `LanguageProvider` wraps app
- Check all components use `useLanguage()`
- Ensure `allContent` exported from content.ts

---

## Rollback

### Vercel

```bash
# Via Dashboard
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"
```

### Git-based Deployment

```bash
# Revert to previous commit
git revert HEAD
git push origin main
# Auto-deploys reverted version
```

---

## Support

**Deployment Issues:**
- Check platform docs (Vercel, Netlify)
- Review build logs
- Test build locally first

**Questions:**
- Email: wrdevilliers@gmail.com
- Review: `docs/ARCHITECTURE.md`
