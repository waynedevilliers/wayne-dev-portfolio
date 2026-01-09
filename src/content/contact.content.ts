import { t, type DeclarationContent } from 'intlayer';

const contactContent = {
  key: 'contact',
  content: {
    heading: t({
      en: "Let's talk",
      de: 'Lass uns sprechen',
    }),
    description: t({
      en: 'Have a project in mind? Need a website, landing page, or technical help? Get in touch and let\'s discuss how I can help bring your ideas to life.',
      de: 'Hast du ein Projekt im Kopf? Brauchst du eine Website, Landing Page oder technische Unterstützung? Melde dich und lass uns besprechen, wie ich helfen kann.',
    }),
    email: 'wrdevilliers@gmail.com',
    calendarText: t({
      en: 'Or schedule a call',
      de: 'Oder vereinbare einen Anruf',
    }),
    calendarLink: 'https://calendly.com/waynedevilliers',
    copyButton: t({
      en: 'Copy email',
      de: 'E-Mail kopieren',
    }),
    copiedButton: t({
      en: 'Copied!',
      de: 'Kopiert!',
    }),
  },
} satisfies DeclarationContent;

export default contactContent;
