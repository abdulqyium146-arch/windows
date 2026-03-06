import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Windows, Doors & Conservatories Manchester | M & S Windows',
  description: 'Premium uPVC windows, doors, conservatories, leaded windows, porches and door canopies in Manchester. Family-run installers with 20+ years experience. Free quotes.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/services',
  },
  openGraph: {
    title: 'Our Services | M & S Windows & Conservatory Ltd Manchester',
    description: 'Premium window, door and conservatory installation services in Manchester',
    url: 'https://mandswindows.co.uk/services',
  },
};

const servicePages = [
  {
    title: 'Windows Manchester',
    description: 'Energy-efficient uPVC windows custom designed for your home. Double and triple glazing available.',
    href: '/windows-manchester',
  },
  {
    title: 'Doors Manchester',
    description: 'Secure, stylish composite and uPVC doors. Entrance, patio, and bifold options available.',
    href: '/doors-manchester',
  },
  {
    title: 'Conservatories Manchester',
    description: 'Bespoke fully insulated conservatories that extend your living space all year round.',
    href: '/conservatories-manchester',
  },
  {
    title: 'Leaded Windows Manchester',
    description: 'Traditional and modern leaded glass designs, perfect for period properties.',
    href: '/leaded-windows-manchester',
  },
  {
    title: 'Porches Manchester',
    description: 'Custom-built entrance porches that add kerb appeal and weather protection.',
    href: '/porches-manchester',
  },
  {
    title: 'Door Canopies Manchester',
    description: 'Durable GRP door canopies available in multiple finishes. Long-lasting and maintenance-free.',
    href: '/door-canopies-manchester',
  },
];

export default function ServicesPage() {
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
                <li className="text-white font-medium" aria-current="page">Services</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services in Manchester
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Premium quality windows, doors, and conservatories for Manchester homes. Family-run with 20+ years experience.
            </p>
          </div>
        </section>

        {/* Service Pages Grid */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <p className="text-gray-700 text-lg max-w-3xl mb-12">
              M &amp; S Windows &amp; Conservatory Ltd provides expert installation of uPVC windows, doors, conservatories,
              leaded windows, porches, and door canopies across Manchester and Greater Manchester. All work is guaranteed
              for 10 years with free site surveys available.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicePages.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block bg-white rounded-xl p-8 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-cta font-semibold group-hover:underline">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links to areas served */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-6">Areas We Cover</h2>
            <p className="text-gray-700 mb-6">
              Based in Chorlton, we install windows, doors and conservatories across Greater Manchester including:
              Chorlton, Didsbury, Old Trafford, Stretford, Altrincham, Sale, Stockport, Withington, Fallowfield,
              Whalley Range, Eccles, and Salford.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/windows-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                Windows Manchester
              </Link>
              <Link href="/doors-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                Doors Manchester
              </Link>
              <Link href="/conservatories-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                Conservatories Manchester
              </Link>
              <Link href="/leaded-windows-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                Leaded Windows Manchester
              </Link>
              <Link href="/porches-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                Porches Manchester
              </Link>
              <Link href="/door-canopies-manchester" className="bg-white border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                Door Canopies Manchester
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get a free quote for your windows, doors, or conservatory project today
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
