import { IntlayerClientProvider } from 'next-intlayer';
import { Crimson_Pro, DM_Sans } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={`${crimsonPro.variable} ${dmSans.variable}`}>
      <body>
        <IntlayerClientProvider>
          {children}
        </IntlayerClientProvider>
      </body>
    </html>
  );
}
