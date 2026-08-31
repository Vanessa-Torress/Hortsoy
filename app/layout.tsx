import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import AnimationManager from '@/components/providers/AnimationManager';
import PageTransition from '@/components/providers/PageTransition';
import { siteConfig } from '@/config/site';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: '%s | HORTSOY | Agronegócio',
  },
  description: siteConfig.defaultDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: '/assets/img/about.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Agronegócio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: ['/assets/img/about.png'],
  },
  icons: {
    icon: '/assets/img/favicon.png',
    apple: '/assets/img/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={poppins.variable}>
      <body className={poppins.className}>
        <AnimationManager />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
