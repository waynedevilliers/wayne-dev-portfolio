// Content structure for easy updates
// Change language by updating the exported 'content' at the bottom

export type Language = 'en' | 'de';

interface Content {
  nav: {
    services: string;
    work: string;
    process: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    description: string;
    cta: string;
  };
  services: {
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  work: {
    heading: string;
    subheading: string;
    projects: Array<{
      title: string;
      description: string;
      tech: string[];
      link: string;
      year: string;
      imageFileName?: string;
    }>;
    linkText: string;
    comingSoonText: string;
  };
  process: {
    heading: string;
    subheading: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  tech: {
    heading: string;
    items: string[];
  };
  contact: {
    heading: string;
    description: string;
    email: string;
    calendarText: string;
    calendarLink: string;
    copyButton: string;
    copiedButton: string;
  };
  footer: {
    location: string;
    availability: string;
  };
}

const contentEn: Content = {
  nav: {
    services: 'Services',
    work: 'Work',
    process: 'Process',
    contact: 'Contact',
  },
  hero: {
    name: 'Wayne de Villiers',
    title: 'Web Developer & Designer',
    description: 'I build professional websites, landing pages, and digital solutions for businesses. WordPress development, SEO optimization, email campaigns, and modern web applications. Based in Germany, working globally.',
    cta: "Let's work together",
  },
  services: {
    heading: 'Services',
    subheading: 'Complete web solutions for your business',
    items: [
      {
        title: 'WordPress Development',
        description: 'Custom WordPress sites, themes, and plugins. E-commerce integration, content management systems, and ongoing maintenance. Fast, secure, and easy to manage.',
        icon: 'wordpress',
      },
      {
        title: 'Landing Pages & Web Design',
        description: 'High-converting landing pages and modern website design. Responsive layouts, fast loading times, and optimized for conversions. Built with React, Next.js, or WordPress.',
        icon: 'code',
      },
      {
        title: 'SEO & Email Campaigns',
        description: 'Search engine optimization to increase visibility. Email marketing integration, newsletter campaigns, and automation. Analytics setup and performance tracking.',
        icon: 'chart',
      },
      {
        title: 'Forms, Chatbots & Integrations',
        description: 'Custom contact forms, lead capture systems, and chatbot integration. Third-party API connections, payment gateways, and booking systems.',
        icon: 'tools',
      },
    ],
  },
  work: {
    heading: 'Projects',
    subheading: 'Current freelance work and recent projects',
    projects: [
      {
        title: 'ELLU Studios',
        description: 'Current freelance WordPress developer. Building education platform features, custom plugins, user onboarding systems, and technical documentation. Ongoing maintenance and optimization.',
        tech: ['WordPress', 'PHP', 'JavaScript', 'Custom Plugins'],
        link: 'https://ellustudios.com',
        year: 'Current',
        imageFileName: 'ellu-studios-fashion-assistant.png',
      },
      {
        title: 'Culture Academy',
        description: 'Ongoing web development for nonprofit organization. Sports, culture, and education platform combining combat sports training, workshops, and digital literacy programs since 2005.',
        tech: ['Web Development', 'Content Management', 'SEO'],
        link: 'https://culture-academy.org',
        year: 'Ongoing',
      },
      {
        title: 'Musikleben',
        description: 'Responsive web application for music organization. Event management features, mobile-first design, and optimized user experience. Full project lifecycle from planning to deployment.',
        tech: ['JavaScript', 'HTML/CSS', 'Responsive Design'],
        link: 'https://musikleben.live',
        year: '2024-2025',
      },
      {
        title: 'Landing Pages',
        description: 'High-converting landing pages and custom web designs. Responsive layouts, fast loading times, and optimized for conversions. Built with React, Next.js, or WordPress. Includes Brevo email integration, email templates, and marketing automation campaigns.',
        tech: ['Next.js', 'React', 'Brevo', 'Email Marketing'],
        link: 'https://ellu-studios-chatbot.vercel.app/',
        year: '2025',
        imageFileName: '/screenshots/ellustudios_landing_page.png',
      },
      {
        title: 'Mainflug Drone Services',
        description: 'Professional drone services platform for aerial photography and inspections. Features include roof inspections, real estate photography, 3D modeling, and construction monitoring. Tiered service packages with online booking system.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        link: 'https://drone-services-pro.vercel.app/',
        year: '2025',
      },
    ],
    linkText: 'View site',
    comingSoonText: 'Coming soon',
  },
  process: {
    heading: 'How we work together',
    subheading: 'A straightforward process, no corporate nonsense',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        description: 'We talk about your business, goals, and audience. I ask questions to understand what success looks like for you.',
      },
      {
        number: '02',
        title: 'Plan & Design',
        description: 'I create a clear plan and initial designs. You review and we refine until it feels right.',
      },
      {
        number: '03',
        title: 'Build & Test',
        description: 'I build your site with clean code, test thoroughly across devices, and keep you updated on progress.',
      },
      {
        number: '04',
        title: 'Launch & Support',
        description: 'We launch together, and I stay available for questions, updates, and ongoing improvements.',
      },
    ],
  },
  tech: {
    heading: 'Tech Stack',
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
  contact: {
    heading: 'Let\'s talk',
    description: 'Have a project in mind? Need a website, landing page, or technical help? Get in touch and let\'s discuss how I can help bring your ideas to life.',
    email: 'hello@waynedev.dev',
    calendarText: 'Or schedule a call',
    calendarLink: 'https://calendly.com/waynedevilliers',
    copyButton: 'Copy email',
    copiedButton: 'Copied!',
  },
  footer: {
    location: 'Halle (Saale), Germany',
    availability: 'Available for projects',
  },
};

const contentDe: Content = {
  nav: {
    services: 'Leistungen',
    work: 'Projekte',
    process: 'Prozess',
    contact: 'Kontakt',
  },
  hero: {
    name: 'Wayne de Villiers',
    title: 'Web-Entwickler & Designer',
    description: 'Ich entwickle professionelle Websites, Landing Pages und digitale Lösungen für Unternehmen. WordPress-Entwicklung, SEO-Optimierung, E-Mail-Kampagnen und moderne Webanwendungen. In Deutschland ansässig, weltweit tätig.',
    cta: 'Lass uns zusammenarbeiten',
  },
  services: {
    heading: 'Leistungen',
    subheading: 'Komplette Web-Lösungen für Ihr Unternehmen',
    items: [
      {
        title: 'WordPress-Entwicklung',
        description: 'Maßgeschneiderte WordPress-Sites, Themes und Plugins. E-Commerce-Integration, Content-Management-Systeme und laufende Wartung. Schnell, sicher und einfach zu verwalten.',
        icon: 'wordpress',
      },
      {
        title: 'Landing Pages & Webdesign',
        description: 'Hochkonvertierende Landing Pages und modernes Webdesign. Responsive Layouts, schnelle Ladezeiten und conversion-optimiert. Gebaut mit React, Next.js oder WordPress.',
        icon: 'code',
      },
      {
        title: 'SEO & E-Mail-Kampagnen',
        description: 'Suchmaschinenoptimierung für mehr Sichtbarkeit. E-Mail-Marketing-Integration, Newsletter-Kampagnen und Automatisierung. Analytics-Setup und Performance-Tracking.',
        icon: 'chart',
      },
      {
        title: 'Formulare, Chatbots & Integrationen',
        description: 'Individuelle Kontaktformulare, Lead-Capture-Systeme und Chatbot-Integration. Drittanbieter-API-Verbindungen, Payment-Gateways und Buchungssysteme.',
        icon: 'tools',
      },
    ],
  },
  work: {
    heading: 'Projekte',
    subheading: 'Aktuelle Freelance-Arbeit und kürzliche Projekte',
    projects: [
      {
        title: 'ELLU Studios',
        description: 'Aktueller Freelance WordPress-Entwickler. Entwicklung von Bildungsplattform-Features, benutzerdefinierten Plugins, User-Onboarding-Systemen und technischer Dokumentation. Laufende Wartung und Optimierung.',
        tech: ['WordPress', 'PHP', 'JavaScript', 'Custom Plugins'],
        link: 'https://ellustudios.com',
        year: 'Aktuell',
        imageFileName: 'ellu-studios-fashion-assistant.png',
      },
      {
        title: 'Culture Academy',
        description: 'Laufende Webentwicklung für gemeinnützige Organisation. Sport-, Kultur- und Bildungsplattform mit Kampfsporttraining, Workshops und digitalen Literacy-Programmen seit 2005.',
        tech: ['Web Development', 'Content Management', 'SEO'],
        link: 'https://culture-academy.org',
        year: 'Laufend',
      },
      {
        title: 'Musikleben',
        description: 'Responsive Webanwendung für Musikorganisation. Event-Management-Features, Mobile-First-Design und optimierte Benutzererfahrung. Vollständiger Projektzyklus von Planung bis Deployment.',
        tech: ['JavaScript', 'HTML/CSS', 'Responsive Design'],
        link: 'https://musikleben.live',
        year: '2024-2025',
      },
      {
        title: 'Landing Pages',
        description: 'Hochkonvertierende Landing Pages und Custom Web Designs. Responsive Layouts, schnelle Ladezeiten und conversion-optimiert. Gebaut mit React, Next.js oder WordPress. Umfasst Brevo E-Mail-Integration, E-Mail-Vorlagen und Marketing-Automatisierungskampagnen.',
        tech: ['Next.js', 'React', 'Brevo', 'Email Marketing'],
        link: 'https://ellu-studios-chatbot.vercel.app/',
        year: '2025',
        imageFileName: '/screenshots/ellustudios_landing_page.png',
      },
      {
        title: 'Mainflug Drohnen-Services',
        description: 'Professionelle Drohnen-Service-Plattform für Luftaufnahmen und Inspektionen. Funktionen umfassen Dachinspektionen, Immobilienfotografie, 3D-Modellierung und Baustellenüberwachung. Gestaffelte Service-Pakete mit Online-Buchungssystem.',
        tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        link: 'https://drone-services-pro.vercel.app/',
        year: '2025',
      },
    ],
    linkText: 'Website ansehen',
    comingSoonText: 'Demnächst verfügbar',
  },
  process: {
    heading: 'Wie wir zusammenarbeiten',
    subheading: 'Ein unkomplizierter Prozess, kein Unternehmensjargon',
    steps: [
      {
        number: '01',
        title: 'Entdeckung',
        description: 'Wir sprechen über dein Unternehmen, deine Ziele und deine Zielgruppe. Ich stelle Fragen, um zu verstehen, wie Erfolg für dich aussieht.',
      },
      {
        number: '02',
        title: 'Planung & Design',
        description: 'Ich erstelle einen klaren Plan und erste Designs. Du prüfst und wir verfeinern, bis es sich richtig anfühlt.',
      },
      {
        number: '03',
        title: 'Entwicklung & Test',
        description: 'Ich baue deine Seite mit sauberem Code, teste gründlich auf allen Geräten und halte dich über den Fortschritt auf dem Laufenden.',
      },
      {
        number: '04',
        title: 'Launch & Support',
        description: 'Wir starten gemeinsam, und ich bleibe für Fragen, Updates und laufende Verbesserungen erreichbar.',
      },
    ],
  },
  tech: {
    heading: 'Werkzeuge, die ich nutze',
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
  contact: {
    heading: 'Lass uns sprechen',
    description: 'Hast du ein Projekt im Kopf? Brauchst du eine Website, Landing Page oder technische Unterstützung? Melde dich und lass uns besprechen, wie ich helfen kann.',
    email: 'hello@waynedev.dev',
    calendarText: 'Oder vereinbare einen Anruf',
    calendarLink: 'https://calendly.com/waynedevilliers',
    copyButton: 'E-Mail kopieren',
    copiedButton: 'Kopiert!',
  },
  footer: {
    location: 'Halle (Saale), Deutschland',
    availability: 'Verfügbar für Projekte',
  },
};

// Export content - change 'en' to 'de' to switch language
// Or use this as a starting point for a proper i18n setup
export const content = contentEn; // Change to contentDe for German

// Export both for language switcher
export const allContent = {
  en: contentEn,
  de: contentDe,
};
