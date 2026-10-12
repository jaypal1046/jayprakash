import { DM_Sans, Manrope } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const siteUrl = 'https://jayprakash.flutterjs.dev';

export const viewport = {
  themeColor: '#f4f1e9',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jayprakash Pal — Web & Mobile Product Development | React & Next.js SSR',
    template: '%s | Jayprakash Pal'
  },
  description:
    'Websites, mobile apps, and digital products built by Jayprakash Pal. High-performance React/Next.js SSR, Flutter & native Android apps, and consumer finance experiences.',
  applicationName: 'Jayprakash Pal Portfolio',
  authors: [{ name: 'Jayprakash Pal', url: 'https://github.com/jaypal1046' }],
  creator: 'Jayprakash Pal',
  publisher: 'Jayprakash Pal',
  keywords: [
    'Jayprakash Pal',
    'Next.js SSR',
    'React developer',
    'Web developer Mumbai',
    'Mobile app developer',
    'Flutter developer',
    'Android Kotlin',
    'PaisaChoice developer',
    'Consumer finance web app',
    'SEO optimization'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Jayprakash Pal — Web & Mobile Product Development',
    description:
      'Websites, mobile apps, and useful digital products, from first idea to working release with React/Next.js SSR.',
    url: siteUrl,
    siteName: 'Jayprakash Pal',
    images: [
      {
        url: '/assets/paisachoice.png',
        width: 1200,
        height: 630,
        alt: 'Jayprakash Pal — Digital Product Development'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jayprakash Pal — Web & Mobile Product Development',
    description:
      'High-performance React/Next.js SSR, Flutter & native Android apps, and consumer finance tools.',
    images: ['/assets/paisachoice.png'],
    creator: '@jayprakashpal'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/jp-logo.svg',
    shortcut: '/jp-logo.svg',
    apple: '/jp-logo.svg'
  }
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data Schema for Person & ProfessionalService
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Jayprakash Pal',
        jobTitle: 'Digital Product Developer & Mobile Engineer',
        description: 'Independent developer building high-speed SSR React/Next.js web apps and Android/Flutter mobile products.',
        url: siteUrl,
        image: `${siteUrl}/assets/orbital.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressCountry: 'IN'
        },
        sameAs: [
          'https://github.com/jaypal1046',
          'https://www.linkedin.com/in/jayprakashpal1005'
        ],
        knowsAbout: [
          'Next.js',
          'React',
          'Server-Side Rendering',
          'Flutter',
          'Android',
          'Kotlin',
          'Fintech Systems',
          'Search Engine Optimization (SEO)'
        ]
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#service`,
        name: 'Jayprakash Pal — Web & Mobile Development',
        url: siteUrl,
        telephone: '+919082691348',
        email: 'jayprakash.pal@flutterjs.dev',
        founder: { '@id': `${siteUrl}/#person` },
        areaServed: 'Worldwide',
        currenciesAccepted: 'INR, USD, EUR, GBP',
        priceRange: '$$',
        openingHours: 'Mo-Sa 09:00-19:00'
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Jayprakash Pal Portfolio',
        description: 'Websites, mobile apps, and digital products engineered by Jayprakash Pal.',
        publisher: { '@id': `${siteUrl}/#person` }
      }
    ]
  };

  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
