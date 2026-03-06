import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Windows Manchester | uPVC Double Glazing Installer | M & S Windows',
  description: 'Expert uPVC window installation in Manchester. Double and triple glazing, bay windows, casement, sash and more. Family-run with 20+ years experience. Free quote: 0161 286 8256.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/windows-manchester',
  },
  openGraph: {
    title: 'Windows Manchester | M & S Windows & Conservatory Ltd',
    description: 'Expert uPVC window installation in Manchester. Free quote available.',
    url: 'https://mandswindows.co.uk/windows-manchester',
  },
};

const windowTypes = [
  {
    title: 'Casement Windows',
    description: 'The most popular window style in the UK. Energy-efficient uPVC casement windows with multi-point locking systems for security and weather performance.',
  },
  {
    title: 'Sash Windows',
    description: 'Traditional sliding sash windows that replicate the aesthetics of period timber frames with modern low-maintenance uPVC.',
  },
  {
    title: 'Bay Windows',
    description: 'Extend your living space and flood your room with natural light. Custom bay window configurations for any Manchester home.',
  },
  {
    title: 'Tilt & Turn Windows',
    description: 'Versatile windows that tilt inward for ventilation or open fully for easy cleaning. Ideal for upper-floor installations.',
  },
  {
    title: 'Fixed Windows',
    description: 'Maximise natural light in areas where ventilation is not required. Perfect above doors and in stairwells.',
  },
  {
    title: 'Triple Glazing',
    description: 'Superior thermal insulation for Manchester&apos;s climate. Reduce energy bills and noise with our triple-glazed window range.',
  },
];

const faqs = [
  {
    q: 'How long does window installation take in Manchester?',
    a: 'A typical window replacement takes 1–3 days depending on the number of windows. We work efficiently to minimise disruption to your home.',
  },
  {
    q: 'Are your windows A-rated for energy efficiency?',
    a: 'Yes. All our uPVC windows achieve at minimum an A-rating for energy efficiency, helping to reduce heating costs across Manchester homes.',
  },
  {
    q: 'Do you offer a guarantee on window installations?',
    a: 'Absolutely. All our window installations come with a comprehensive 10-year guarantee covering both materials and workmanship.',
  },
  {
    q: 'How much do new windows cost in Manchester?',
    a: 'Prices vary depending on size, style, and glazing. We offer free no-obligation surveys with itemised quotes so you know exactly what you\'re paying for.',
  },
];

export default function WindowsManchesterPage() {
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
                <li className="text-white font-medium" aria-current="page">Windows Manchester</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Windows Manchester
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              Expert uPVC window installation across Manchester and Greater Manchester. Family-run since 1999 with 20+ years of experience and a 10-year guarantee on every installation.
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
                uPVC Window Installation in Manchester
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                M &amp; S Windows &amp; Conservatory Ltd has been installing uPVC windows across Manchester since 1999.
                Based in Chorlton, we serve homeowners throughout Greater Manchester — from Didsbury and Altrincham to
                Stockport and Salford.
              </p>
              <p className="text-gray-700 mb-4">
                Our windows are manufactured from high-grade uPVC profiles with advanced multi-chamber construction for
                superior thermal performance. Every window we fit is A-rated for energy efficiency as standard, helping
                Manchester homeowners reduce their heating bills and carbon footprint.
              </p>
              <p className="text-gray-700">
                All window installations include a <strong>10-year guarantee</strong> on materials and workmanship, backed
                by over 5,000 successful projects across the Manchester area.
              </p>
            </div>
          </div>
        </section>

        {/* Window Types */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4">Window Styles Available in Manchester</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">
              We supply and install a full range of uPVC window styles to suit period and modern Manchester properties.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {windowTypes.map((type) => (
                <div key={type.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-primary mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: type.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Why Choose M &amp; S Windows for Your Manchester Window Installation?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                { title: '20+ Years Experience', body: 'Trusted by thousands of Manchester homeowners since 1999.' },
                { title: 'A-Rated Energy Efficiency', body: 'All windows meet or exceed UK building regulations for thermal performance.' },
                { title: '10-Year Guarantee', body: 'Complete peace of mind on materials and workmanship.' },
                { title: 'Free Site Survey', body: 'No-obligation survey and detailed quote within 24 hours.' },
                { title: 'Expert Local Fitters', body: 'All work carried out by our fully trained Manchester-based installation team.' },
                { title: 'No Hidden Costs', body: 'Transparent, itemised quotes — what we quote is what you pay.' },
              ].map((b) => (
                <div key={b.title} className="flex gap-4">
                  <span className="text-cta font-bold text-xl flex-shrink-0">&#10003;</span>
                  <div>
                    <p className="font-semibold text-gray-900">{b.title}</p>
                    <p className="text-gray-600 text-sm">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions — Windows Manchester</h2>
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
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/doors-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Doors Manchester</Link>
              <Link href="/conservatories-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Conservatories Manchester</Link>
              <Link href="/leaded-windows-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">Leaded Windows Manchester</Link>
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
              'name': 'uPVC Window Installation Manchester',
              'description': 'Expert uPVC window installation across Manchester and Greater Manchester.',
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
              'url': 'https://mandswindows.co.uk/windows-manchester',
            }),
          }}
        />

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free Window Quote in Manchester
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Free site survey &bull; 24-hour quote &bull; 10-year guarantee &bull; No hidden charges
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
