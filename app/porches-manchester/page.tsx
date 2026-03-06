import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Porches Manchester | uPVC Porch Installer | M & S Windows',
  description: 'Expert uPVC porch installation in Manchester. Custom-built entrance porches that add kerb appeal, weather protection and security. Free quote: 0161 286 8256.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/porches-manchester',
  },
  openGraph: {
    title: 'Porches Manchester | M & S Windows & Conservatory Ltd',
    description: 'Custom uPVC porch installation across Manchester. Free survey and quote.',
    url: 'https://mandswindows.co.uk/porches-manchester',
  },
};

const porchFeatures = [
  {
    title: 'uPVC Frames',
    description: 'All porches are built using high-grade multi-chambered uPVC profiles that are energy-efficient, rot-proof, and require minimal maintenance.',
  },
  {
    title: 'Wide Range of Styles',
    description: 'Choose from flat roof, apex roof, lean-to, and Georgian-style porches. Each design is bespoke to your home\'s proportions and existing architecture.',
  },
  {
    title: 'Secure Door Choices',
    description: 'Select from composite or uPVC entrance doors with multi-point locking systems. Add glazed side panels for a light, welcoming entrance.',
  },
  {
    title: 'Colour Options',
    description: 'Available in white, cream, woodgrain oak, grey, black, and a range of bespoke RAL colours to perfectly complement your Manchester home.',
  },
  {
    title: 'Double Glazing as Standard',
    description: 'All porch glazing uses A-rated double-glazed units for thermal efficiency and noise reduction.',
  },
  {
    title: '10-Year Guarantee',
    description: 'All porch installations come with our comprehensive 10-year guarantee covering both the structure and materials.',
  },
];

const faqs = [
  {
    q: 'Do I need planning permission for a porch in Manchester?',
    a: 'Most porches do not require planning permission provided they are under 3 square metres in floor area and do not exceed a height of 3 metres above ground. We advise on this during your free survey.',
  },
  {
    q: 'How long does porch installation take?',
    a: 'A typical porch installation takes 2–3 days. We work efficiently to minimise disruption and keep your home secure throughout the build.',
  },
  {
    q: 'Will a porch add value to my Manchester home?',
    a: 'Yes. A well-designed porch improves kerb appeal and provides additional security, both of which can positively impact property value.',
  },
  {
    q: 'Can you match my existing window and door colours?',
    a: 'Yes. We carry an extensive range of uPVC colours and woodgrain finishes, and can match your existing frames to create a seamless look.',
  },
];

export default function PorchesManchesterPage() {
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
                <li className="text-white font-medium" aria-current="page">Porches Manchester</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Porches Manchester
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Custom-built uPVC porches that add character, weather protection, and security to Manchester homes. Designed and installed by our local expert team. 10-year guarantee.
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
                Porch Installation in Manchester
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                A new porch from M &amp; S Windows &amp; Conservatory Ltd transforms the entrance to your Manchester home.
                Porches provide valuable weather protection, additional security, and a welcoming first impression — all
                while adding kerb appeal and potential value to your property.
              </p>
              <p className="text-gray-700 mb-4">
                We design and install bespoke uPVC porches across Manchester and Greater Manchester, from Chorlton and
                Didsbury to Altrincham, Sale, and Stockport. Every porch is custom-built to suit your home&apos;s specific
                dimensions, style, and your personal preferences.
              </p>
              <p className="text-gray-700">
                Contact us on{' '}
                <a href="tel:01612868256" className="text-primary font-semibold hover:underline">0161 286 8256</a> or{' '}
                <Link href="/contact" className="text-primary font-semibold hover:underline">request a free survey online</Link>{' '}
                to get started.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4">What&apos;s Included With Your Manchester Porch</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {porchFeatures.map((feature) => (
                <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions — Porches Manchester</h2>
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
              'name': 'uPVC Porch Installation Manchester',
              'description': 'Custom uPVC porch design and installation in Manchester.',
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
              'url': 'https://mandswindows.co.uk/porches-manchester',
            }),
          }}
        />

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free Porch Quote in Manchester
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Bespoke designs &bull; Free survey &bull; 10-year guarantee &bull; No hidden charges
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
