import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Pricing | M & S Windows & Conservatory Ltd Manchester',
  description: 'Transparent pricing for windows, doors and conservatory installation in Manchester. Get competitive quotes today.',
  keywords: [
    'windows price manchester',
    'conservatory cost manchester',
    'door installation prices',
  ],
  openGraph: {
    title: 'Pricing | M & S Windows',
    description: 'Competitive pricing for quality windows and conservatories',
    url: 'https://mandswindows.co.uk/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Pricing Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing
            </h1>
            <p className="text-xl text-white/90">
              Competitive rates for premium quality installations
            </p>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-center text-gray-700 text-lg mb-12">
                Every project is unique. We provide competitive quotes based on your specific needs and requirements.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-primary mb-4">uPVC Windows</h3>
                  <p className="text-gray-700 mb-6">
                    Energy-efficient double and triple glazing windows for superior insulation.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Pricing varies based on size, style and specifications
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border-2 border-accent">
                  <h3 className="text-xl font-bold text-primary mb-4">Doors & Porches</h3>
                  <p className="text-gray-700 mb-6">
                    Composite doors, uPVC doors and modern porch installations for enhanced curb appeal.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Pricing varies based on size, style and specifications
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                  <h3 className="text-xl font-bold text-primary mb-4">Conservatories</h3>
                  <p className="text-gray-700 mb-6">
                    Beautiful glass conservatories and extensions to expand your living space.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Pricing varies based on size, style and specifications
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-accent p-8 rounded mb-12">
                <h3 className="text-lg font-bold text-primary mb-3">Why Our Pricing is Competitive</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Direct manufacturer relationships reduce costs</li>
                  <li>✓ Efficient installation processes save time</li>
                  <li>✓ No hidden charges or surprise fees</li>
                  <li>✓ Flexible payment plans available</li>
                  <li>✓ 10-year warranty included</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-2xl font-bold text-accent">1</div>
                    <div>
                      <p className="font-semibold text-gray-900">Free Site Survey</p>
                      <p className="text-gray-700">We visit your home to measure and assess your needs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl font-bold text-accent">2</div>
                    <div>
                      <p className="font-semibold text-gray-900">Detailed Quote</p>
                      <p className="text-gray-700">Receive itemized pricing with all options and upgrades</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl font-bold text-accent">3</div>
                    <div>
                      <p className="font-semibold text-gray-900">Professional Installation</p>
                      <p className="text-gray-700">Expert fitting with minimal disruption to your home</p>
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
              Get Your Free Quote
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              No obligation. No hidden charges. Transparent pricing you can trust.
            </p>
            <a href="/contact" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold inline-block">
              Request a Free Survey
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
