import { t, type DeclarationContent } from 'intlayer';

const techContent = {
  key: 'tech',
  content: {
    heading: t({
      en: 'Tech Stack',
      de: 'Werkzeuge, die ich nutze',
    }),
    items: [
      'WordPress',
      'JavaScript / TypeScript',
      'React / Next.js',
      'HTML / CSS',
      'Tailwind CSS',
      'PHP',
      'MySQL / PostgreSQL',
      'Git',
    ],
  },
} satisfies DeclarationContent;

export default techContent;
