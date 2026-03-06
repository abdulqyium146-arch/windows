import type { Metadata, Viewport } from 'next';
import './globals.css';

const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003366',
  colorScheme: 'light',
};

const metadata: Metadata = {
  metadataBase: new URL('https://mandswindows.co.uk'),
  title: 'M & S Windows & Conservatory Ltd | Windows & Conservatories Manchester',
  description: 'High quality uPVC windows, doors and conservatories in Manchester. Family run installers offering premium materials and expert fitting. Free quotes within 24 hours.',
  applicationName: 'M & S Windows & Conservatory Ltd',
  authors: [{ name: 'M & S Windows & Conservatory Ltd', url: 'https://mandswindows.co.uk' }],
  creator: 'M & S Windows & Conservatory Ltd',
  publisher: 'M & S Windows & Conservatory Ltd',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  keywords: [
    'windows manchester',
    'upvc windows manchester',
    'windows installer manchester',
    'door installer manchester',
    'doors manchester',
    'conservatories manchester',
    'window installers manchester',
    'leaded windows manchester',
    'door canopies manchester',
    'porches manchester',
    'home improvement manchester',
    'double glazing manchester',
    'uPVC windows',
    'window installation',
    'door installation',
    'conservatory installation',
    'window installation manchester',
    'door installation manchester',
    'conservatory builders manchester',
    'manchester windows',
  ],
  category: 'Business',
  classification: 'Home Improvement',

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  manifest: '/manifest.json',

  // OpenGraph
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mandswindows.co.uk',
    siteName: 'M & S Windows & Conservatory Ltd',
    title: 'M & S Windows & Conservatory Ltd | Premium Windows & Doors in Manchester',
    description: 'High quality uPVC windows, doors and conservatories in Manchester. Family run business with 20+ years experience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'M & S Windows & Conservatory Ltd - Manchester',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'M & S Windows & Conservatory Ltd',
        type: 'image/jpeg',
      },
    ],
    countryName: 'United Kingdom',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'M & S Windows & Conservatory Ltd | Premium Windows Manchester',
    description: 'High quality uPVC windows, doors and conservatories in Manchester. Family run business.',
    images: {
      url: '/og-image.jpg',
      alt: 'M & S Windows & Conservatory Ltd',
    },
    creator: '@mandswindows',
    site: '@mandswindows',
  },

  // Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    other: {
      'facebook-domain-verification': process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION || '',
    },
  },

  // Alternates
  alternates: {
    canonical: 'https://mandswindows.co.uk',
    languages: {
      'en-GB': 'https://mandswindows.co.uk',
    },
  },
};

export { metadata, viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <meta charSet="utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <meta name="theme-color" content="#003366" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
            <script dangerouslySetInnerHTML={{__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `}} />
          </>
        )}

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
              '@id': 'https://mandswindows.co.uk/#business',
              'name': 'M & S Windows & Conservatory Ltd',
              'image': 'https://mandswindows.co.uk/og-image.jpg',
              'description': 'Family-run specialist installers of uPVC windows, doors, conservatories, leaded windows, porches and door canopies in Manchester.',
              'telephone': '+441612868256',
              'email': 'info@mandswindows.co.uk',
              'url': 'https://mandswindows.co.uk',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '243 Barlow Moor Road',
                'addressLocality': 'Chorlton',
                'addressRegion': 'Manchester',
                'postalCode': 'M21 7QL',
                'addressCountry': 'GB',
              },
              'geo': {
                '@type': 'GeoCoordinates',
                'latitude': '53.4264',
                'longitude': '-2.2618',
              },
              'openingHoursSpecification': [
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  'opens': '09:00',
                  'closes': '17:00',
                },
              ],
              'sameAs': [
                'https://www.facebook.com/mandswindows',
                'https://www.instagram.com/mandswindows',
              ],
              'priceRange': '££',
              'currenciesAccepted': 'GBP',
              'paymentAccepted': 'Cash, Credit Card, Bank Transfer',
              'areaServed': [
                { '@type': 'City', 'name': 'Manchester' },
                { '@type': 'City', 'name': 'Chorlton' },
                { '@type': 'City', 'name': 'Didsbury' },
                { '@type': 'City', 'name': 'Altrincham' },
                { '@type': 'City', 'name': 'Stockport' },
                { '@type': 'City', 'name': 'Sale' },
                { '@type': 'AdministrativeArea', 'name': 'Greater Manchester' },
              ],
              'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'customer service',
                'telephone': '+441612868256',
                'email': 'info@mandswindows.co.uk',
                'areaServed': 'GB',
                'availableLanguage': 'English',
              },
              'hasOfferCatalog': {
                '@type': 'OfferCatalog',
                'name': 'Window & Door Installation Services',
                'itemListElement': [
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'uPVC Windows Manchester', 'url': 'https://mandswindows.co.uk/windows-manchester' } },
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Doors Manchester', 'url': 'https://mandswindows.co.uk/doors-manchester' } },
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Conservatories Manchester', 'url': 'https://mandswindows.co.uk/conservatories-manchester' } },
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Leaded Windows Manchester', 'url': 'https://mandswindows.co.uk/leaded-windows-manchester' } },
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Porches Manchester', 'url': 'https://mandswindows.co.uk/porches-manchester' } },
                  { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Door Canopies Manchester', 'url': 'https://mandswindows.co.uk/door-canopies-manchester' } },
                ],
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://mandswindows.co.uk/#organization',
              'name': 'M & S Windows & Conservatory Ltd',
              'url': 'https://mandswindows.co.uk',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://mandswindows.co.uk/favicon.svg',
                'width': 512,
                'height': 512,
              },
              'description': 'Premium uPVC windows, doors, and conservatories installer in Manchester since 1999.',
              'foundingDate': '1999',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '243 Barlow Moor Road',
                'addressLocality': 'Chorlton',
                'addressRegion': 'Manchester',
                'postalCode': 'M21 7QL',
                'addressCountry': 'GB',
              },
              'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'customer service',
                'telephone': '+441612868256',
                'email': 'info@mandswindows.co.uk',
              },
              'sameAs': [
                'https://www.facebook.com/mandswindows',
                'https://www.instagram.com/mandswindows',
              ],
            }),
          }}
        />

        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://mandswindows.co.uk/#website',
              'url': 'https://mandswindows.co.uk',
              'name': 'M & S Windows & Conservatory Ltd',
              'description': 'Premium uPVC windows, doors and conservatories in Manchester',
              'publisher': {
                '@id': 'https://mandswindows.co.uk/#organization',
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://mandswindows.co.uk',
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Services',
                  'item': 'https://mandswindows.co.uk/services',
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': 'Gallery',
                  'item': 'https://mandswindows.co.uk/gallery',
                },
                {
                  '@type': 'ListItem',
                  'position': 4,
                  'name': 'About',
                  'item': 'https://mandswindows.co.uk/about',
                },
                {
                  '@type': 'ListItem',
                  'position': 5,
                  'name': 'Contact',
                  'item': 'https://mandswindows.co.uk/contact',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
