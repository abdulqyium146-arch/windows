import type { Metadata } from 'next';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us | M & S Windows & Conservatory Ltd Manchester',
  description: 'Learn about M & S Windows - a family-run business with 20+ years experience installing premium windows, doors and conservatories in Manchester.',
  keywords: [
    'about windows manchester',
    'family run window installers',
    'reliable window company manchester',
    'experienced conservatory installers',
  ],
  openGraph: {
    title: 'About Us | M & S Windows & Conservatory Ltd',
    description: 'Learn about our family-run business and expertise',
    url: 'https://mandswindows.co.uk/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* About Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About M & S Windows
            </h1>
            <p className="text-xl text-white/90">
              20+ years of excellence in window and conservatory installation
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
              Why Choose M & S Windows?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  20+ Years Experience
                </h3>
                <p className="text-gray-700">
                  Founded in 1999, we've been serving Manchester families and businesses for over two decades with proven expertise.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Founders: Steve & Louise Wright
                </h3>
                <p className="text-gray-700">
                  Personally committed to quality and customer satisfaction in every project we undertake.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Premium Materials
                </h3>
                <p className="text-gray-700">
                  We use only the highest quality uPVC windows, doors and conservatory materials available.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Local Manchester Team
                </h3>
                <p className="text-gray-700">
                  Based in Chorlton, we're committed to serving our local Manchester community with pride.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  10-Year Guarantee
                </h3>
                <p className="text-gray-700">
                  All our installations come with a comprehensive 10-year warranty for peace of mind.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Free Surveys & Quotes
                </h3>
                <p className="text-gray-700">
                  No obligation free site survey and detailed quote within 24 hours of your request.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Thousands of Happy Customers
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience the M & S Windows difference with premium quality and professional service
            </p>
            <a href="/contact" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold inline-block">
              Contact Us Today
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
