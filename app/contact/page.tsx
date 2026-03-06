import type { Metadata } from 'next';
import Link from 'next/link';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us | Free Quote | M & S Windows Manchester — 0161 286 8256',
  description: 'Contact M & S Windows for a free survey and quote. Call 0161 286 8256 or visit 243 Barlow Moor Road, Chorlton, Manchester M21 7QL. Response within 24 hours.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/contact',
  },
  openGraph: {
    title: 'Contact M & S Windows | Free Quote Manchester',
    description: 'Get your free survey and quote today. Call 0161 286 8256.',
    url: 'https://mandswindows.co.uk/contact',
  },
};

export default function ContactPage() {
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
                <li className="text-white font-medium" aria-current="page">Contact</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-white/90">
              Contact us today for a free survey and no-obligation quote on windows, doors or conservatories
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
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Other Ways to Reach Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-cta mb-4" aria-hidden="true">📞</div>
                <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                <a
                  href="tel:01612868256"
                  className="text-gray-700 text-lg font-semibold hover:text-primary transition-colors block"
                  aria-label="Call us on 0161 286 8256"
                >
                  0161 286 8256
                </a>
                <p className="text-gray-600 text-sm mt-2">Available Monday&ndash;Friday 9am&ndash;5pm</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-cta mb-4" aria-hidden="true">✉️</div>
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <a
                  href="mailto:info@mandswindows.co.uk"
                  className="text-gray-700 text-lg font-semibold hover:text-primary transition-colors break-all"
                  aria-label="Email info@mandswindows.co.uk"
                >
                  info@mandswindows.co.uk
                </a>
                <p className="text-gray-600 text-sm mt-2">Response within 24 hours</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl text-cta mb-4" aria-hidden="true">📍</div>
                <h3 className="text-xl font-bold text-primary mb-2">Visit Us</h3>
                <address className="not-italic text-gray-700 text-sm leading-relaxed">
                  243 Barlow Moor Road<br />
                  Chorlton<br />
                  Manchester<br />
                  M21 7QL
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              Service Area
            </h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
              We install windows, doors and conservatories across Manchester and surrounding areas:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              <ul className="space-y-2 text-gray-700">
                <li>&#10003; Chorlton</li>
                <li>&#10003; Didsbury</li>
                <li>&#10003; Old Trafford</li>
                <li>&#10003; Stretford</li>
                <li>&#10003; Withington</li>
                <li>&#10003; Fallowfield</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>&#10003; Altrincham</li>
                <li>&#10003; Stockport</li>
                <li>&#10003; Sale</li>
                <li>&#10003; Trafford</li>
                <li>&#10003; Eccles</li>
                <li>&#10003; Salford</li>
              </ul>
            </div>
            {/* Internal links to service pages */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Our Services</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/windows-manchester" className="text-primary hover:underline font-medium text-sm">Windows Manchester</Link>
                <span className="text-gray-400">|</span>
                <Link href="/doors-manchester" className="text-primary hover:underline font-medium text-sm">Doors Manchester</Link>
                <span className="text-gray-400">|</span>
                <Link href="/conservatories-manchester" className="text-primary hover:underline font-medium text-sm">Conservatories Manchester</Link>
                <span className="text-gray-400">|</span>
                <Link href="/leaded-windows-manchester" className="text-primary hover:underline font-medium text-sm">Leaded Windows Manchester</Link>
                <span className="text-gray-400">|</span>
                <Link href="/porches-manchester" className="text-primary hover:underline font-medium text-sm">Porches Manchester</Link>
                <span className="text-gray-400">|</span>
                <Link href="/door-canopies-manchester" className="text-primary hover:underline font-medium text-sm">Door Canopies Manchester</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Response Guarantee */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Free survey within 48 hours &bull; Quote within 24 hours &bull; No hidden charges &bull; No pressure sales
            </p>
            <a href="tel:01612868256" className="bg-cta hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
              Call Now: 0161 286 8256
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
