# Project Images

This directory contains screenshots/images for the portfolio projects displayed on wayne.dev.

## Required Images

Add project screenshots as `.jpg` files with the following filenames:

1. **ellu-studios.jpg**
   - Project: ELLU Studios
   - URL: https://ellustudios.com
   - Recommended: Homepage screenshot or dashboard view
   - Aspect ratio: 4:3 (e.g., 1200x900px)

2. **culture-academy.jpg**
   - Project: Culture Academy
   - URL: https://culture-academy.org
   - Recommended: Homepage or main program page
   - Aspect ratio: 4:3 (e.g., 1200x900px)

3. **musikleben.jpg**
   - Project: Musikleben
   - URL: https://musikleben.live
   - Recommended: Event listing or homepage
   - Aspect ratio: 4:3 (e.g., 1200x900px)

4. **ellu-studios-fashion-assistant.jpg**
   - Project: ELLU Studios Fashion Assistant (AI Chatbot)
   - URL: https://ellu-studios-chatbot.vercel.app/
   - Recommended: Chat interface screenshot with example conversation
   - Aspect ratio: 4:3 (e.g., 1200x900px)

5. **mainflug-drone-services.jpg**
   - Project: Mainflug Drone Services
   - URL: https://drone-services-pro.vercel.app/
   - Recommended: Homepage with drone imagery or services overview
   - Aspect ratio: 4:3 (e.g., 1200x900px)

## Image Specifications

- **Format:** JPG (recommended for photos/screenshots)
- **Dimensions:** Minimum 1200x900px (4:3 aspect ratio)
- **Size:** Keep under 500KB for optimal performance
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
3. Optimize for web (compress to under 500KB)
4. Save as `project-title.jpg` (lowercase, hyphens instead of spaces)
5. Place in this directory (`public/images/projects/`)

The filename is auto-generated from the project title in `content.ts`:
- Lowercase conversion
- Spaces replaced with hyphens
- Special characters removed

Example: "ELLU Studios Fashion Assistant" → `ellu-studios-fashion-assistant.jpg`
