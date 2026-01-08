# Project Images

This directory contains screenshots/images for the portfolio projects displayed on wayne.dev.

## Required Images

Add project screenshots as `.png` files with the following filenames:

1. **ellu-studios.png**
   - Project: ELLU Studios
   - URL: https://ellustudios.com
   - Recommended: Homepage screenshot or dashboard view
   - Aspect ratio: 4:3 (e.g., 1200x900px)
   - Status: ✓ Added

2. **culture-academy.png**
   - Project: Culture Academy
   - URL: https://culture-academy.org
   - Recommended: Homepage or main program page
   - Aspect ratio: 4:3 (e.g., 1200x900px)
   - Status: ✓ Added

3. **musikleben.png**
   - Project: Musikleben
   - URL: https://musikleben.live
   - Recommended: Event listing or homepage
   - Aspect ratio: 4:3 (e.g., 1200x900px)
   - Status: ✓ Added

4. **ellu-studios-fashion-assistant.png**
   - Project: ELLU Studios Fashion Assistant (AI Chatbot)
   - URL: https://ellu-studios-chatbot.vercel.app/
   - Recommended: Chat interface screenshot with example conversation
   - Aspect ratio: 4:3 (e.g., 1200x900px)
   - Status: ✓ Added

5. **mainflug-drone-services.png**
   - Project: Mainflug Drone Services
   - URL: https://drone-services-pro.vercel.app/
   - Recommended: Homepage with drone imagery or services overview
   - Aspect ratio: 4:3 (e.g., 1200x900px)
   - Status: ✓ Added

## Image Specifications

- **Format:** PNG (current implementation) or JPG (for smaller file sizes)
- **Dimensions:** Minimum 1200x900px (4:3 aspect ratio)
- **Size:** Keep under 500KB for optimal performance (PNG) or 300KB (JPG)
- **Quality:** High quality but web-optimized
- **Content:** Clear, representative screenshot of the project

## How Images Are Used

Images are loaded via Next.js Image component in `components/Work.tsx`:
- Automatic optimization and responsive srcsets
- Lazy loading for performance
- Fallback to numbered placeholder if image not found
- Hover scale effect on desktop

## Adding New Project Images

1. Take a screenshot or export image from the project
2. Resize to 1200x900px (4:3 ratio)
3. Optimize for web (compress to under 500KB for PNG, 300KB for JPG)
4. Save as `project-title.png` (lowercase, hyphens instead of spaces)
5. Place in this directory (`public/images/projects/`)

The filename is auto-generated from the project title in `content.ts`:
- Lowercase conversion
- Spaces replaced with hyphens
- Special characters removed

Example: "ELLU Studios Fashion Assistant" → `ellu-studios-fashion-assistant.png`

**Note:** To use JPG instead of PNG, update line 17 in `components/Work.tsx` to return `.jpg` extension.
