import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us | M & S Windows & Conservatory Ltd Manchester',
  description: 'Get in touch with M & S Windows. Free survey and quote. Call 0161 XXXX XXXX or visit our Chorlton showroom.',
  keywords: [
    'contact manchester windows',
    'free window quote manchester',
    'windows installer near me',
    'conservatory installer contact',
  ],
  openGraph: {
    title: 'Contact Us | M & S Windows',
    description: 'Get your free survey and quote today',
    url: 'https://mandswindows.co.uk/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Contact Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-white/90">
              Contact us today for a free survey and no-obligation quote
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-20">
          <Contact />
        </section>

        {/* Contact Details Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Other Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-accent mb-4">📞</div>
                <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                <p className="text-gray-700 text-lg font-semibold">0161 XXXX XXXX</p>
                <p className="text-gray-600 text-sm mt-2">Available Monday-Friday 9am-5pm</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-accent mb-4">✉️</div>
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <p className="text-gray-700 text-lg font-semibold">info@mandswindows.co.uk</p>
                <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-accent mb-4">📍</div>
                <h3 className="text-xl font-bold text-primary mb-2">Visit Us</h3>
                <p className="text-gray-700 text-sm">
                  Chorlton<br/>
                  Manchester<br/>
                  Greater Manchester
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Service Area
            </h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
              We serve Manchester and surrounding areas including:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="space-y-2 text-gray-700">
                <p>✓ Chorlton</p>
                <p>✓ Didsbury</p>
                <p>✓ Old Trafford</p>
                <p>✓ Stretford</p>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>✓ Altrincham</p>
                <p>✓ Stockport</p>
                <p>✓ Sale</p>
                <p>✓ Trafford</p>
              </div>
            </div>
          </div>
        </section>

        {/* Response Guarantee */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commitment
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Free survey within 48 hours • Quote within 24 hours • No hidden charges • No pressure sales
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
