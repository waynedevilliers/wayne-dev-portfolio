import { t, type DeclarationContent } from 'intlayer';

const footerContent = {
  key: 'footer',
  content: {
    location: t({
      en: 'Halle (Saale), Germany',
      de: 'Halle (Saale), Deutschland',
    }),
    availability: t({
      en: 'Available for projects',
      de: 'Verfügbar für Projekte',
    }),
  },
} satisfies DeclarationContent;

export default footerContent;
