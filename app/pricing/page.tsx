import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pricing | Windows, Doors & Conservatories Manchester | M & S Windows',
  description: 'Transparent pricing for windows, doors and conservatory installation in Manchester. No hidden charges. Free site survey and quote within 24 hours.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/pricing',
  },
  openGraph: {
    title: 'Pricing | M & S Windows & Conservatory Ltd Manchester',
    description: 'Competitive pricing for quality windows, doors and conservatories in Manchester',
    url: 'https://mandswindows.co.uk/pricing',
  },
};

export default function PricingPage() {
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
                <li className="text-white font-medium" aria-current="page">Pricing</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing
            </h1>
            <p className="text-xl text-white/90">
              Competitive rates for premium quality installations across Manchester
            </p>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-center text-gray-700 text-lg mb-12">
                Every project is unique. We provide competitive, itemised quotes based on your specific needs. No hidden charges, no pressure sales.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                  <h2 className="text-xl font-bold text-primary mb-4">
                    <Link href="/windows-manchester" className="hover:underline">uPVC Windows</Link>
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Energy-efficient double and triple glazing windows for superior insulation across Manchester homes.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Pricing varies based on size, style and specifications
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border-2 border-cta">
                  <h2 className="text-xl font-bold text-primary mb-4">
                    <Link href="/doors-manchester" className="hover:underline">Doors &amp; Porches</Link>
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Composite doors, uPVC doors and modern porch installations for enhanced kerb appeal.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Pricing varies based on size, style and specifications
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                  <h2 className="text-xl font-bold text-primary mb-4">
                    <Link href="/conservatories-manchester" className="hover:underline">Conservatories</Link>
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Beautiful glass conservatories and extensions to expand your Manchester home&apos;s living space.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Pricing varies based on size, style and specifications
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-cta p-8 rounded mb-12">
                <h3 className="text-lg font-bold text-primary mb-3">Why Our Pricing is Competitive</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>&#10003; Direct manufacturer relationships reduce costs</li>
                  <li>&#10003; Efficient installation processes save time</li>
                  <li>&#10003; No hidden charges or surprise fees</li>
                  <li>&#10003; Flexible payment plans available</li>
                  <li>&#10003; 10-year warranty included on all work</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-2xl font-bold text-cta flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold text-gray-900">Free Site Survey</p>
                      <p className="text-gray-700">We visit your home in Manchester to measure and assess your needs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl font-bold text-cta flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold text-gray-900">Detailed Quote</p>
                      <p className="text-gray-700">Receive itemised pricing with all options and upgrades within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl font-bold text-cta flex-shrink-0">3</div>
                    <div>
                      <p className="font-semibold text-gray-900">Professional Installation</p>
                      <p className="text-gray-700">Expert fitting with minimal disruption to your home. 10-year guarantee.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              No obligation. No hidden charges. Transparent pricing you can trust from Manchester&apos;s trusted window installers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-cta hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
                Request a Free Survey
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
