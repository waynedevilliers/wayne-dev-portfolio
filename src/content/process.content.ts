import { t, type DeclarationContent } from 'intlayer';

const processContent = {
  key: 'process',
  content: {
    heading: t({
      en: 'How we work together',
      de: 'Wie wir zusammenarbeiten',
    }),
    subheading: t({
      en: 'A straightforward process, no corporate nonsense',
      de: 'Ein unkomplizierter Prozess, kein Unternehmensjargon',
    }),
    steps: [
      {
        number: '01',
        title: t({
          en: 'Discovery',
          de: 'Entdeckung',
        }),
        description: t({
          en: 'We talk about your business, goals, and audience. I ask questions to understand what success looks like for you.',
          de: 'Wir sprechen über dein Unternehmen, deine Ziele und deine Zielgruppe. Ich stelle Fragen, um zu verstehen, wie Erfolg für dich aussieht.',
        }),
      },
      {
        number: '02',
        title: t({
          en: 'Plan & Design',
          de: 'Planung & Design',
        }),
        description: t({
          en: 'I create a clear plan and initial designs. You review and we refine until it feels right.',
          de: 'Ich erstelle einen klaren Plan und erste Designs. Du prüfst und wir verfeinern, bis es sich richtig anfühlt.',
        }),
      },
      {
        number: '03',
        title: t({
          en: 'Build & Test',
          de: 'Entwicklung & Test',
        }),
        description: t({
          en: 'I build your site with clean code, test thoroughly across devices, and keep you updated on progress.',
          de: 'Ich baue deine Seite mit sauberem Code, teste gründlich auf allen Geräten und halte dich über den Fortschritt auf dem Laufenden.',
        }),
      },
      {
        number: '04',
        title: t({
          en: 'Launch & Support',
          de: 'Launch & Support',
        }),
        description: t({
          en: 'We launch together, and I stay available for questions, updates, and ongoing improvements.',
          de: 'Wir starten gemeinsam, und ich bleibe für Fragen, Updates und laufende Verbesserungen erreichbar.',
        }),
      },
    ],
  },
} satisfies DeclarationContent;

export default processContent;
