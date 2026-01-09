import { t, type DeclarationContent } from 'intlayer';

const workContent = {
  key: 'work',
  content: {
    heading: t({
      en: 'Projects',
      de: 'Projekte',
    }),
    subheading: t({
      en: 'Current freelance work and recent projects',
      de: 'Aktuelle Freelance-Arbeit und kürzliche Projekte',
    }),
    projects: [
      {
        title: t({
          en: 'ELLU Studios',
          de: 'ELLU Studios',
        }),
        description: t({
          en: 'Current freelance WordPress developer. Building education platform features, custom plugins, user onboarding systems, and technical documentation. Ongoing maintenance and optimization.',
          de: 'Aktueller Freelance WordPress-Entwickler. Entwicklung von Bildungsplattform-Features, benutzerdefinierten Plugins, User-Onboarding-Systemen und technischer Dokumentation. Laufende Wartung und Optimierung.',
        }),
        tech: ['WordPress', 'PHP', 'JavaScript', 'Custom Plugins'],
        link: 'https://ellustudios.com',
        year: t({
          en: 'Current',
          de: 'Aktuell',
        }),
      },
      {
        title: t({
          en: 'Culture Academy',
          de: 'Culture Academy',
        }),
        description: t({
          en: 'Ongoing web development for nonprofit organization. Sports, culture, and education platform combining combat sports training, workshops, and digital literacy programs since 2005.',
          de: 'Laufende Webentwicklung für gemeinnützige Organisation. Sport-, Kultur- und Bildungsplattform mit Kampfsporttraining, Workshops und digitalen Literacy-Programmen seit 2005.',
        }),
        tech: ['Web Development', 'Content Management', 'SEO'],
        link: 'https://culture-academy.org',
        year: t({
          en: 'Ongoing',
          de: 'Laufend',
        }),
      },
      {
        title: t({
          en: 'Musikleben',
          de: 'Musikleben',
        }),
        description: t({
          en: 'Responsive web application for music organization. Event management features, mobile-first design, and optimized user experience. Full project lifecycle from planning to deployment.',
          de: 'Responsive Webanwendung für Musikorganisation. Event-Management-Features, Mobile-First-Design und optimierte Benutzererfahrung. Vollständiger Projektzyklus von Planung bis Deployment.',
        }),
        tech: ['JavaScript', 'HTML/CSS', 'Responsive Design'],
        link: 'https://musikleben.live',
        year: '2024-2025',
      },
      {
        title: t({
          en: 'ELLU Studios Fashion Assistant',
          de: 'ELLU Studios Fashion Assistant',
        }),
        description: t({
          en: 'AI-powered chatbot specialized in fashion design education. RAG architecture with GPT-4o Mini for student support in pattern construction and design courses. Real-time chat with session persistence and conversation export.',
          de: 'KI-gestützter Chatbot spezialisiert auf Modedesign-Ausbildung. RAG-Architektur mit GPT-4o Mini zur Unterstützung von Studenten bei Schnittkonstruktion und Designkursen. Echtzeit-Chat mit Sitzungsspeicherung und Konversationsexport.',
        }),
        tech: ['Next.js', 'OpenAI GPT-4o', 'RAG', 'TypeScript'],
        link: 'https://ellu-studios-chatbot.vercel.app/',
        year: '2025',
      },
      {
        title: t({
          en: 'Mainflug Drone Services',
          de: 'Mainflug Drohnen-Services',
        }),
        description: t({
          en: 'Professional drone services platform for aerial photography and inspections. Features include roof inspections, real estate photography, 3D modeling, and construction monitoring. Tiered service packages with online booking system.',
          de: 'Professionelle Drohnen-Service-Plattform für Luftaufnahmen und Inspektionen. Funktionen umfassen Dachinspektionen, Immobilienfotografie, 3D-Modellierung und Baustellenüberwachung. Gestaffelte Service-Pakete mit Online-Buchungssystem.',
        }),
        tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        link: 'https://drone-services-pro.vercel.app/',
        year: '2025',
      },
    ],
    linkText: t({
      en: 'View site',
      de: 'Website ansehen',
    }),
    comingSoonText: t({
      en: 'Coming soon',
      de: 'Demnächst verfügbar',
    }),
  },
} satisfies DeclarationContent;

export default workContent;
