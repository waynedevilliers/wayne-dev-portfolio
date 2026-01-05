# 🚀 Quick Start Guide

## Get Running in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Go to: http://localhost:3000

---

## ⚡ First Things to Customize

### Update Your Content (5 minutes)
Open `content.ts` and change:

1. **Line 101**: Your name
```typescript
name: 'Your Name', // ← Change this
```

2. **Line 103**: Your description
```typescript
description: 'I build clean, effective websites...' // ← Make it yours
```

3. **Line 242**: Your email
```typescript
email: 'hello@yoursite.com', // ← Your real email
```

### Change the Accent Color (1 minute)
Open `tailwind.config.ts`, line 27:
```typescript
accent: {
  DEFAULT: '#2563eb', // ← Change this hex code
```

Try these alternatives:
- Emerald: `#10b981`
- Purple: `#8b5cf6`
- Rose: `#f43f5e`

### Switch to German (30 seconds)
Open `content.ts`, line 247:
```typescript
export const content = contentEn; // Change to contentDe
```

---

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          ← Styles
│   ├── layout.tsx           ← SEO metadata
│   └── page.tsx             ← Main page
├── components/              ← All sections
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Work.tsx
│   ├── Process.tsx
│   └── Contact.tsx
├── content.ts               ← ALL YOUR CONTENT HERE
├── tailwind.config.ts       ← Colors & design
├── README.md                ← Full documentation
└── ANALYSIS.md              ← Design decisions
```

---

## 🎨 What I Built for You

### Design Philosophy: "Refined Editorial Minimalism"
- Professional but warm
- Typography-driven
- Generous whitespace
- Subtle animations
- Mobile-first

### Features
✅ Bilingual (EN/DE)
✅ SEO-optimized
✅ Fully responsive
✅ Click-to-copy email
✅ Smooth scroll navigation
✅ No backend needed
✅ Easy to customize
✅ Production-ready

### Color Palette
- **Text**: Deep charcoal (#1a1a1a)
- **Background**: Warm off-white (#fafaf9)
- **Accent**: Trustworthy blue (#2563eb)
- **Grain texture overlay** for depth

### Typography
- **Headings**: Crimson Pro (elegant serif)
- **Body**: DM Sans (clean sans-serif)
- Both loaded from Google Fonts

---

## 📝 Content Checklist

Before launching, update these in `content.ts`:

- [ ] Your name
- [ ] Title/tagline
- [ ] Services descriptions
- [ ] Project details (3 projects)
- [ ] Process steps
- [ ] Tech stack
- [ ] Email address
- [ ] Calendar link
- [ ] Location

---

## 🚢 Deploy to Vercel (5 minutes)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

Done! ✨

---

## 📖 Full Documentation

- **README.md** - Complete setup guide
- **ANALYSIS.md** - Design decisions & recommendations
- **Code comments** - Implementation details

---

## 🆘 Common Issues

**Fonts not showing?**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Tailwind not working?**
- Make sure you're in the `portfolio/` directory
- Check `tailwind.config.ts` paths

**Port already in use?**
```bash
npm run dev -- -p 3001
```

---

## ✅ You're Ready!

1. Customize content
2. Test locally
3. Deploy to Vercel
4. Share with the world 🌍

**Questions?** Check README.md for detailed docs.

Good luck! 🚀
