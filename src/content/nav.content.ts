import { t, type DeclarationContent } from 'intlayer';

const navContent = {
  key: 'nav',
  content: {
    services: t({
      en: 'Services',
      de: 'Leistungen',
    }),
    work: t({
      en: 'Work',
      de: 'Projekte',
    }),
    process: t({
      en: 'Process',
      de: 'Prozess',
    }),
    contact: t({
      en: 'Contact',
      de: 'Kontakt',
    }),
  },
} satisfies DeclarationContent;

export default navContent;
