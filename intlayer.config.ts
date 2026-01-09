import { Locales, type IntlayerConfig } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.GERMAN],
    defaultLocale: Locales.ENGLISH,
  },
  middleware: {
    headerName: 'x-intlayer-locale',
  },
  content: {
    // Directory where content declarations are located
    dirName: './src/content',
    // Watch content files in development
    watch: process.env.NODE_ENV === 'development',
  },
  editor: {
    // Disable visual editor for now
    enabled: false,
  },
};

export default config;
