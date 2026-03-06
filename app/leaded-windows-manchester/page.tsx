import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Leaded Windows Manchester | Traditional Lead Glass Installer | M & S Windows',
  description: 'Expert leaded window installation in Manchester. Traditional and modern lead glass designs for period and contemporary properties. Free quote: 0161 286 8256.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/leaded-windows-manchester',
  },
  openGraph: {
    title: 'Leaded Windows Manchester | M & S Windows & Conservatory Ltd',
    description: 'Traditional and modern leaded glass window installation across Manchester.',
    url: 'https://mandswindows.co.uk/leaded-windows-manchester',
  },
};

const leadedStyles = [
  {
    title: 'Diamond Lead Pattern',
    description: 'The classic diamond lead pattern that suits Victorian and Edwardian period properties across Manchester. Available with clear, obscure, or coloured glass.',
  },
  {
    title: 'Rectangular Lead Pattern',
    description: 'A more contemporary take on leaded glass, with clean rectangular lines that complement both traditional and modern home styles.',
  },
  {
    title: 'Decorative Stained Glass',
    description: 'Bespoke stained glass panels in a wide range of colours and patterns. Perfect for front doors, sidelights, and feature windows.',
  },
  {
    title: 'Flemish Glass',
    description: 'Textured glass with a distinctive rippled appearance that provides privacy whilst allowing natural light to flow through.',
  },
  {
    title: 'Georgian Bar Windows',
    description: 'Subtle internal glazing bars that create the appearance of leaded lights without the maintenance. Available in any window style.',
  },
  {
    title: 'Custom Lead Designs',
    description: 'We work with skilled craftsmen to create entirely bespoke leaded glass designs for Manchester homeowners wanting something truly unique.',
  },
];

const faqs = [
  {
    q: 'Are leaded windows energy efficient?',
    a: 'Yes. Our modern leaded windows use double-glazed units with lead effect strips, combining the traditional aesthetic with modern thermal performance. They meet current UK building regulations.',
  },
  {
    q: 'Can you fit leaded windows in a period Manchester property?',
    a: 'Absolutely. We have extensive experience working with Victorian and Edwardian properties across Manchester, ensuring new leaded windows complement the existing character of the home.',
  },
  {
    q: 'Are leaded windows more expensive than standard windows?',
    a: 'Leaded windows typically cost slightly more than standard windows due to the additional craftsmanship involved. We provide a transparent, itemised quote so you know exactly what you\'re paying for.',
  },
  {
    q: 'How long does leaded window installation take?',
    a: 'Installation times are similar to standard windows — typically 1–2 days for a typical house. Bespoke leaded units may require a longer lead time for manufacture.',
  },
];

export default function LeadedWindowsManchesterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">Leaded Windows Manchester</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Leaded Windows Manchester
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Beautiful traditional and bespoke leaded glass windows for Manchester homes. Perfect for period properties in Chorlton, Didsbury, and across Greater Manchester. 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-cta hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
                Get a Free Quote
              </Link>
              <a href="tel:01612868256" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold inline-block transition-colors text-center">
                Call: 0161 286 8256
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Leaded Glass Window Installation in Manchester
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Manchester has a rich architectural heritage of Victorian and Edwardian properties, many of which feature
                original leaded glass windows. M &amp; S Windows &amp; Conservatory Ltd specialises in sensitive leaded window
                replacement that preserves the character of period homes whilst upgrading thermal performance.
              </p>
              <p className="text-gray-700 mb-4">
                We offer a full range of leaded glass styles — from traditional diamond patterns to bespoke stained glass —
                all manufactured to the highest standard using modern double-glazed units with lead effect strips.
              </p>
              <p className="text-gray-700">
                Based in Chorlton and serving all of Greater Manchester, our experienced team will help you find the
                perfect leaded window design for your home. All installations carry a <strong>10-year guarantee</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Leaded Styles */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4">Leaded Window Styles Available in Manchester</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadedStyles.map((style) => (
                <div key={style.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-primary mb-2">{style.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions — Leaded Windows Manchester</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/windows-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Windows Manchester</Link>
              <Link href="/doors-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Doors Manchester</Link>
              <Link href="/conservatories-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Conservatories Manchester</Link>
              <Link href="/porches-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Porches Manchester</Link>
              <Link href="/door-canopies-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Door Canopies Manchester</Link>
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': faqs.map((faq) => ({
                '@type': 'Question',
                'name': faq.q,
                'acceptedAnswer': { '@type': 'Answer', 'text': faq.a },
              })),
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Leaded Window Installation Manchester',
              'description': 'Traditional and bespoke leaded glass window installation in Manchester.',
              'provider': {
                '@type': 'LocalBusiness',
                'name': 'M & S Windows & Conservatory Ltd',
                'telephone': '+441612868256',
                'address': {
                  '@type': 'PostalAddress',
                  'streetAddress': '243 Barlow Moor Road',
                  'addressLocality': 'Chorlton',
                  'addressRegion': 'Manchester',
                  'postalCode': 'M21 7QL',
                  'addressCountry': 'GB',
                },
              },
              'areaServed': { '@type': 'City', 'name': 'Manchester' },
              'url': 'https://mandswindows.co.uk/leaded-windows-manchester',
            }),
          }}
        />

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free Leaded Window Quote in Manchester
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Free site survey &bull; Bespoke designs available &bull; 10-year guarantee &bull; Period property specialists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-cta hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
                Request a Free Quote
              </Link>
              <a href="tel:01612868256" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
                Call: 0161 286 8256
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
