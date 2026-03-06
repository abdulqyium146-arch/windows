import type { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Project Gallery | Windows & Conservatories Manchester | M & S Windows',
  description: 'View our completed window, door and conservatory projects in Manchester. See the quality of our installations. 5,000+ projects completed across Greater Manchester.',
  alternates: {
    canonical: 'https://mandswindows.co.uk/gallery',
  },
  openGraph: {
    title: 'Project Gallery | M & S Windows & Conservatory Ltd Manchester',
    description: 'View completed window, door and conservatory installations in Manchester',
    url: 'https://mandswindows.co.uk/gallery',
  },
};

const testimonials = [
  {
    name: 'John Smith',
    area: 'Chorlton',
    text: 'Excellent service from start to finish. The quality of work is outstanding.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    area: 'Didsbury',
    text: 'Professional team, great communication, and beautiful results. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    area: 'Withington',
    text: 'Best window installers in Manchester. They transformed our home completely.',
    rating: 5,
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        {/* Gallery Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">Gallery</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90">
              See our completed window, door and conservatory installations across Manchester
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-20">
          <Gallery />
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Customer Testimonials
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex text-yellow-400 mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} aria-hidden="true">&#9733;</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.area}, Manchester</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service links */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Installation Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Windows Manchester</Link>
              <Link href="/doors-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Doors Manchester</Link>
              <Link href="/conservatories-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Conservatories Manchester</Link>
              <Link href="/leaded-windows-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Leaded Windows</Link>
              <Link href="/porches-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Porches Manchester</Link>
              <Link href="/door-canopies-manchester" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">Door Canopies</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in a Similar Project?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us for a free survey and quote on your window or conservatory project in Manchester
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-cta hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
                Get a Free Quote
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
