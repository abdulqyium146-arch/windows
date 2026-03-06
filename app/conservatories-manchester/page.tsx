import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Conservatories Manchester | Bespoke Conservatory Installer | M & S Windows',
  description: 'Bespoke conservatory installation in Manchester. Victorian, Edwardian, lean-to, orangeries and more. Family-run with 20+ years experience. Free quote: 0161 286 8256.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/conservatories-manchester',
  },
  openGraph: {
    title: 'Conservatories Manchester | M & S Windows & Conservatory Ltd',
    description: 'Bespoke conservatory installation across Manchester. Free survey and quote available.',
    url: 'https://mandswindows.co.uk/conservatories-manchester',
  },
};

const conservatoryTypes = [
  {
    title: 'Victorian Conservatory',
    description: 'The classic choice for period Manchester homes. Features a bay front and ornate ridge details, typically with a 3 or 5 facet bay. Timeless elegance that adds real kerb appeal.',
  },
  {
    title: 'Edwardian Conservatory',
    description: 'A rectangular design that maximises usable floor space. The square or rectangular shape makes it ideal for use as a dining room, playroom, or home office.',
  },
  {
    title: 'Lean-To Conservatory',
    description: 'A simple, cost-effective single-pitch design that works well on bungalows and properties with limited height. Clean, modern lines suit contemporary Manchester homes.',
  },
  {
    title: 'P-Shape Conservatory',
    description: 'Combines a rectangular Edwardian section with a Victorian bay front for a larger, more versatile space. Ideal for open-plan living.',
  },
  {
    title: 'Gable Conservatory',
    description: 'Features a tall, vertical front wall that floods the interior with natural light. The high apex creates a dramatic, spacious feel.',
  },
  {
    title: 'Orangery',
    description: 'A premium hybrid between a conservatory and an extension, with a solid brick base and full-height glass panels. Superior insulation makes it usable year-round.',
  },
];

const faqs = [
  {
    q: 'Do I need planning permission for a conservatory in Manchester?',
    a: 'Most conservatories fall within permitted development rights and do not require planning permission, provided they meet certain size conditions. We advise on this during your free survey.',
  },
  {
    q: 'How long does a conservatory take to build in Manchester?',
    a: 'A typical conservatory installation takes between 5–10 working days, depending on size and complexity. We aim to minimise disruption throughout the build.',
  },
  {
    q: 'Can I use my conservatory all year round?',
    a: 'Yes. We fit fully insulated roofing systems and quality glazing so your conservatory remains comfortable in both summer and winter across Manchester\'s variable climate.',
  },
  {
    q: 'What is the guarantee on a conservatory installation?',
    a: 'All our conservatories come with a 10-year guarantee on the structure and materials, giving you complete peace of mind.',
  },
];

export default function ConservatoriesManchesterPage() {
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
                <li className="text-white font-medium" aria-current="page">Conservatories Manchester</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Conservatories Manchester
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Bespoke conservatory design and installation across Manchester and Greater Manchester. Extend your living space with a beautiful, fully insulated conservatory. 10-year guarantee.
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
                Conservatory Installation Across Manchester
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                M &amp; S Windows &amp; Conservatory Ltd has been designing and installing conservatories across Manchester since 1999.
                We work with homeowners in Chorlton, Didsbury, Sale, Altrincham, Stockport, and throughout Greater Manchester
                to create beautiful bespoke conservatories that add real value to their homes.
              </p>
              <p className="text-gray-700 mb-4">
                Every conservatory we design is built to your exact requirements — from the footprint and style to the glazing,
                roof type, and internal finishes. We use premium uPVC profiles and toughened safety glass throughout.
              </p>
              <p className="text-gray-700">
                Our conservatories come with a comprehensive <strong>10-year guarantee</strong> and all work is carried out
                by our experienced in-house Manchester installation team. Call us on{' '}
                <a href="tel:01612868256" className="text-primary font-semibold hover:underline">0161 286 8256</a> to
                arrange a free, no-obligation design consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Conservatory Types */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4">Conservatory Styles for Manchester Homes</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Choose from our full range of conservatory designs, each available in a wide range of colours and glazing options.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conservatoryTypes.map((type) => (
                <div key={type.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-primary mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions — Conservatories Manchester</h2>
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
              <Link href="/porches-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Porches Manchester</Link>
              <Link href="/leaded-windows-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Leaded Windows Manchester</Link>
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
              'name': 'Conservatory Installation Manchester',
              'description': 'Bespoke conservatory design and installation across Manchester and Greater Manchester.',
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
              'url': 'https://mandswindows.co.uk/conservatories-manchester',
            }),
          }}
        />

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free Conservatory Quote in Manchester
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Free design consultation &bull; No-obligation survey &bull; 10-year guarantee &bull; Expert Manchester fitters
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
