import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Door Canopies Manchester | GRP Canopy Installer | M & S Windows',
  description: 'Expert GRP door canopy installation in Manchester. Durable canopies in grey, terracotta, red brick finishes. Maintenance-free and long-lasting. Free quote: 0161 286 8256.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/door-canopies-manchester',
  },
  openGraph: {
    title: 'Door Canopies Manchester | M & S Windows & Conservatory Ltd',
    description: 'Durable GRP door canopy installation across Manchester. Free quote available.',
    url: 'https://mandswindows.co.uk/door-canopies-manchester',
  },
};

const canopyFeatures = [
  {
    title: 'GRP Construction',
    description: 'Glass Reinforced Plastic (GRP) canopies are incredibly durable, lightweight, and completely weatherproof. They will not crack, warp, or rust — even in Manchester\'s challenging climate.',
  },
  {
    title: 'Multiple Finishes',
    description: 'Available in grey, terracotta, red brick, and other popular finishes. Each canopy arrives pre-finished with a realistic textured surface that complements most property styles.',
  },
  {
    title: 'Range of Sizes',
    description: 'We stock a comprehensive range of sizes to suit standard and wider doorways. Custom sizes can also be accommodated on request.',
  },
  {
    title: 'Quick Installation',
    description: 'Most door canopies can be installed in half a day or less, with minimal disruption to your household.',
  },
  {
    title: 'Maintenance-Free',
    description: 'Unlike timber canopies, GRP requires no painting, staining, or regular maintenance. An occasional clean is all that is needed.',
  },
  {
    title: '10-Year Guarantee',
    description: 'All our door canopy installations come with a 10-year guarantee on both the product and the installation.',
  },
];

const faqs = [
  {
    q: 'What is a GRP door canopy?',
    a: 'GRP stands for Glass Reinforced Plastic. It is a strong, lightweight composite material used to make durable, maintenance-free door canopies that resist weathering far better than timber alternatives.',
  },
  {
    q: 'How long does door canopy installation take in Manchester?',
    a: 'A standard door canopy installation typically takes 2–4 hours. It is a quick and clean job with minimal disruption.',
  },
  {
    q: 'Do door canopies require planning permission?',
    a: 'In most cases, door canopies do not require planning permission as they fall within permitted development rights. We can advise specifically based on your property during the survey.',
  },
  {
    q: 'What sizes of door canopy do you install in Manchester?',
    a: 'We install a range of standard sizes from approximately 900mm wide up to 2400mm wide and beyond. We will advise on the most suitable size for your doorway during the free survey.',
  },
];

export default function DoorCanopiesManchesterPage() {
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
                <li className="text-white font-medium" aria-current="page">Door Canopies Manchester</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Door Canopies Manchester
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Durable GRP door canopies that protect your entrance from Manchester&apos;s rain and wind. Maintenance-free, long-lasting, and professionally installed. 10-year guarantee.
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
                GRP Door Canopy Installation in Manchester
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Manchester is one of the UK&apos;s wettest cities, which makes a quality door canopy an extremely practical
                addition to any home. M &amp; S Windows &amp; Conservatory Ltd supplies and installs premium GRP (Glass
                Reinforced Plastic) door canopies across Manchester and the wider Greater Manchester area.
              </p>
              <p className="text-gray-700 mb-4">
                Our GRP canopies are far superior to cheap plastic or timber alternatives. They are weatherproof, UV-stable,
                and require virtually no maintenance — making them a long-term, cost-effective solution for Manchester
                homeowners. Available in a range of attractive finishes including grey, terracotta, and red brick.
              </p>
              <p className="text-gray-700">
                Installation is quick and clean — most canopies can be fitted in under half a day by our Manchester-based
                team. All canopies carry a <strong>10-year guarantee</strong>. Call us today on{' '}
                <a href="tel:01612868256" className="text-primary font-semibold hover:underline">0161 286 8256</a> for a
                free, no-obligation quote.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4">Features of Our Manchester Door Canopies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {canopyFeatures.map((feature) => (
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
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions — Door Canopies Manchester</h2>
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
              <Link href="/conservatories-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Conservatories Manchester</Link>
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
              'name': 'GRP Door Canopy Installation Manchester',
              'description': 'Durable GRP door canopy supply and installation across Manchester.',
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
              'url': 'https://mandswindows.co.uk/door-canopies-manchester',
            }),
          }}
        />

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free Door Canopy Quote in Manchester
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Quick installation &bull; Maintenance-free GRP &bull; 10-year guarantee &bull; Free survey
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
