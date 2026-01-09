import { t, type DeclarationContent } from 'intlayer';

const heroContent = {
  key: 'hero',
  content: {
    name: t({
      en: 'Wayne de Villiers',
      de: 'Wayne de Villiers',
    }),
    title: t({
      en: 'Web Developer & Designer',
      de: 'Web-Entwickler & Designer',
    }),
    description: t({
      en: 'I build professional websites, landing pages, and digital solutions for businesses. WordPress development, SEO optimization, email campaigns, and modern web applications. Based in Germany, working globally.',
      de: 'Ich entwickle professionelle Websites, Landing Pages und digitale Lösungen für Unternehmen. WordPress-Entwicklung, SEO-Optimierung, E-Mail-Kampagnen und moderne Webanwendungen. In Deutschland ansässig, weltweit tätig.',
    }),
    cta: t({
      en: "Let's work together",
      de: 'Lass uns zusammenarbeiten',
    }),
  },
} satisfies DeclarationContent;

export default heroContent;
