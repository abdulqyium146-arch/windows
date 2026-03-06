import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Doors Manchester | Composite & uPVC Door Installer | M & S Windows',
  description: 'Expert composite and uPVC door installation in Manchester. Entrance doors, patio doors, bifold doors and more. 20+ years experience. Free quote: 0161 286 8256.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/doors-manchester',
  },
  openGraph: {
    title: 'Doors Manchester | M & S Windows & Conservatory Ltd',
    description: 'Expert composite and uPVC door installation across Manchester. Free quote available.',
    url: 'https://mandswindows.co.uk/doors-manchester',
  },
};

const doorTypes = [
  {
    title: 'Composite Entrance Doors',
    description: 'The most secure and thermally efficient front doors available. Composite doors combine a solid timber core with uPVC, glass reinforced plastic (GRP) and foam insulation for outstanding security and weather performance.',
  },
  {
    title: 'uPVC Entrance Doors',
    description: 'Durable and low-maintenance uPVC front doors available in a wide range of colours, styles and glazing options to suit any Manchester home.',
  },
  {
    title: 'Patio Doors',
    description: 'Sliding patio doors that maximise natural light and provide seamless access to your garden. Available in 2, 3 and 4 panel configurations.',
  },
  {
    title: 'French Doors',
    description: 'Classic double-opening doors that create a stunning connection between your home and garden. Available in uPVC and aluminium.',
  },
  {
    title: 'Bifold Doors',
    description: 'Open up your entire wall to the outside with our aluminium bifold doors. Perfect for dining rooms and extensions.',
  },
  {
    title: 'Back Doors',
    description: 'Secure and weather-tight rear access doors. Available in uPVC and composite with multi-point locking as standard.',
  },
];

const faqs = [
  {
    q: 'How long does door installation take in Manchester?',
    a: 'A single door replacement typically takes 2–4 hours. We can usually complete a full day\'s work installing multiple doors, keeping disruption to a minimum.',
  },
  {
    q: 'Are composite doors more secure than uPVC doors?',
    a: 'Yes. Composite doors feature a solid timber core making them significantly harder to break through. Both types include multi-point locking systems as standard.',
  },
  {
    q: 'What guarantee do you offer on door installations in Manchester?',
    a: 'All our door installations come with a 10-year guarantee covering both the frame and the mechanism.',
  },
  {
    q: 'Can I choose the colour of my new door?',
    a: 'Yes. Our composite and uPVC doors are available in a wide range of colours and woodgrain finishes, allowing you to match or complement your home\'s existing style.',
  },
];

export default function DoorsManchesterPage() {
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
                <li className="text-white font-medium" aria-current="page">Doors Manchester</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Doors Manchester
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Professional composite and uPVC door installation across Manchester and Greater Manchester. Secure, stylish, and energy-efficient. 10-year guarantee on every installation.
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
                Door Installation in Manchester
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                M &amp; S Windows &amp; Conservatory Ltd is one of Manchester&apos;s most trusted door installers, with over 20 years
                serving homeowners across Chorlton, Didsbury, Altrincham, Stockport, Sale, and the wider Greater Manchester area.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you need a new composite front door, sliding patio doors, or bifold doors for a rear extension,
                our expert installation team will ensure a perfect fit and finish. All doors are supplied with multi-point
                locking systems as standard for maximum security.
              </p>
              <p className="text-gray-700">
                Every door installation comes with a <strong>10-year guarantee</strong>. Call us today on{' '}
                <a href="tel:01612868256" className="text-primary font-semibold hover:underline">0161 286 8256</a> for a free,
                no-obligation survey and quote.
              </p>
            </div>
          </div>
        </section>

        {/* Door Types */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4">Door Styles Available in Manchester</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              We supply and install a comprehensive range of doors to suit every Manchester home, period or modern.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doorTypes.map((type) => (
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
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions — Doors Manchester</h2>
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
              <Link href="/conservatories-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Conservatories Manchester</Link>
              <Link href="/porches-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Porches Manchester</Link>
              <Link href="/door-canopies-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Door Canopies Manchester</Link>
              <Link href="/leaded-windows-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Leaded Windows Manchester</Link>
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
              'name': 'Composite & uPVC Door Installation Manchester',
              'description': 'Expert composite and uPVC door installation across Manchester and Greater Manchester.',
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
              'url': 'https://mandswindows.co.uk/doors-manchester',
            }),
          }}
        />

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free Door Quote in Manchester
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Free site survey &bull; 24-hour quote &bull; 10-year guarantee &bull; Multi-point locking as standard
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
