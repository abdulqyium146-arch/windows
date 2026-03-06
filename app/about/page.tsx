import type { Metadata } from 'next';
import Link from 'next/link';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us | M & S Windows & Conservatory Ltd Manchester',
  description: 'Learn about M & S Windows — a family-run business founded in 1999, with 20+ years experience installing premium windows, doors and conservatories across Manchester.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/about',
  },
  openGraph: {
    title: 'About M & S Windows & Conservatory Ltd | Manchester',
    description: 'Family-run window and conservatory installers in Manchester since 1999.',
    url: 'https://mandswindows.co.uk/about',
  },
};

export default function AboutPage() {
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
                <li className="text-white font-medium" aria-current="page">About Us</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About M &amp; S Windows
            </h1>
            <p className="text-xl text-white/90">
              20+ years of excellence in window and conservatory installation across Manchester
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 md:py-20">
          <About />
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose M &amp; S Windows?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  20+ Years Experience
                </h3>
                <p className="text-gray-700">
                  Founded in 1999, we&apos;ve been serving Manchester families and businesses for over two decades with proven expertise in windows, doors, and conservatories.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Local Manchester Business
                </h3>
                <p className="text-gray-700">
                  Based at 243 Barlow Moor Road, Chorlton, M21 7QL, we are personally committed to quality and customer satisfaction in every project we undertake across Greater Manchester.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Premium Materials
                </h3>
                <p className="text-gray-700">
                  We use only the highest quality uPVC windows, composite doors, and conservatory materials from trusted UK manufacturers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Expert Installation Team
                </h3>
                <p className="text-gray-700">
                  Our fully trained installation team has completed over 5,000 projects across Chorlton, Didsbury, Altrincham, Stockport, Sale, and the wider Manchester area.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  10-Year Guarantee
                </h3>
                <p className="text-gray-700">
                  All our installations come with a comprehensive 10-year warranty for complete peace of mind.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Free Surveys &amp; Quotes
                </h3>
                <p className="text-gray-700">
                  No obligation free site survey and detailed quote within 24 hours of your request. Call us on <a href="tel:01612868256" className="text-primary font-semibold hover:underline">0161 286 8256</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Links */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Windows Manchester</Link>
              <Link href="/doors-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Doors Manchester</Link>
              <Link href="/conservatories-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Conservatories Manchester</Link>
              <Link href="/leaded-windows-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Leaded Windows Manchester</Link>
              <Link href="/porches-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Porches Manchester</Link>
              <Link href="/door-canopies-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Door Canopies Manchester</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Thousands of Happy Manchester Customers
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience the M &amp; S Windows difference — premium quality, professional service, and a 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-cta hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
                Contact Us Today
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
