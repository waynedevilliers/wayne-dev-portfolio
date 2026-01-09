# Project Overview

This is a personal portfolio website for Wayne de Villiers, a freelance web developer and designer. The site showcases his services, projects, and development process. It's designed to attract potential clients and provide a point of contact.

The project is built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), using [TypeScript](https://www.typescriptlang.org/) for type safety. Styling is done with [Tailwind CSS](https://tailwindcss.com/). The content is managed in a central `content.ts` file, which includes both English and German versions, with a language switcher on the site.

The site is a single-page application (SPA) with smooth scrolling navigation to different sections: Services, Work, Process, and Contact.

# Building and Running

### Development

To run the project in development mode:

```bash
npm run dev
```

This will start the development server on `http://localhost:3000`.

### Building

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `.next` directory.

### Starting the Production Server

To start the production server:

```bash
npm run start
```

This will serve the production build on `http://localhost:3000`.

### Linting

To run the linter and check for code quality issues:

```bash
npm run lint
```

# Development Conventions

*   **Components:** Reusable UI components are located in the `components` directory.
*   **Content:** All text content for the site is managed in the `content.ts` file. This allows for easy updates and localization.
*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS. Colors, fonts, and other design tokens are configured in `tailwind.config.ts`.
*   **State Management:** For simple state management, React's built-in hooks (`useState`, `useContext`) are used. A `LanguageContext` is used to manage the language state across the application.
*   **Fonts:** The project uses `next/font` to load custom fonts (`Crimson_Pro` and `DM_Sans`).
*   **Images:** Images are located in the `public/images` directory. The Next.js Image component is not currently configured with any remote domains.
