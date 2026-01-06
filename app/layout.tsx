import type { Metadata } from "next";
import { Crimson_Pro, DM_Sans } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "wayne.dev | Web Developer | WordPress | Landing Pages | SEO",
  description: "wayne.dev - Professional web development services by Wayne de Villiers. WordPress sites, landing pages, SEO optimization, email campaigns, and custom web applications. Based in Germany, working globally.",
  keywords: ["wayne.dev", "web developer", "wordpress developer", "landing page design", "seo optimization", "email campaigns", "web design", "react developer", "nextjs", "halle saale germany", "freelance web developer"],
  authors: [{ name: "Wayne de Villiers" }],
  openGraph: {
    title: "wayne.dev - Web Developer & Designer",
    description: "Professional websites, landing pages, and digital solutions. WordPress, SEO, email campaigns, and modern web apps.",
    type: "website",
    locale: "en_US",
    alternateLocale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "wayne.dev - Web Developer & Designer",
    description: "Professional websites, landing pages, and digital solutions for businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
