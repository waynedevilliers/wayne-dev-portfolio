import { t, type DeclarationContent } from 'intlayer';

const servicesContent = {
  key: 'services',
  content: {
    heading: t({
      en: 'Services',
      de: 'Leistungen',
    }),
    subheading: t({
      en: 'Complete web solutions for your business',
      de: 'Komplette Web-Lösungen für Ihr Unternehmen',
    }),
    items: [
      {
        title: t({
          en: 'WordPress Development',
          de: 'WordPress-Entwicklung',
        }),
        description: t({
          en: 'Custom WordPress sites, themes, and plugins. E-commerce integration, content management systems, and ongoing maintenance. Fast, secure, and easy to manage.',
          de: 'Maßgeschneiderte WordPress-Sites, Themes und Plugins. E-Commerce-Integration, Content-Management-Systeme und laufende Wartung. Schnell, sicher und einfach zu verwalten.',
        }),
        icon: 'wordpress',
      },
      {
        title: t({
          en: 'Landing Pages & Web Design',
          de: 'Landing Pages & Webdesign',
        }),
        description: t({
          en: 'High-converting landing pages and modern website design. Responsive layouts, fast loading times, and optimized for conversions. Built with React, Next.js, or WordPress.',
          de: 'Hochkonvertierende Landing Pages und modernes Webdesign. Responsive Layouts, schnelle Ladezeiten und conversion-optimiert. Gebaut mit React, Next.js oder WordPress.',
        }),
        icon: 'code',
      },
      {
        title: t({
          en: 'SEO & Email Campaigns',
          de: 'SEO & E-Mail-Kampagnen',
        }),
        description: t({
          en: 'Search engine optimization to increase visibility. Email marketing integration, newsletter campaigns, and automation. Analytics setup and performance tracking.',
          de: 'Suchmaschinenoptimierung für mehr Sichtbarkeit. E-Mail-Marketing-Integration, Newsletter-Kampagnen und Automatisierung. Analytics-Setup und Performance-Tracking.',
        }),
        icon: 'chart',
      },
      {
        title: t({
          en: 'Forms, Chatbots & Integrations',
          de: 'Formulare, Chatbots & Integrationen',
        }),
        description: t({
          en: 'Custom contact forms, lead capture systems, and chatbot integration. Third-party API connections, payment gateways, and booking systems.',
          de: 'Individuelle Kontaktformulare, Lead-Capture-Systeme und Chatbot-Integration. Drittanbieter-API-Verbindungen, Payment-Gateways und Buchungssysteme.',
        }),
        icon: 'tools',
      },
    ],
  },
} satisfies DeclarationContent;

export default servicesContent;
