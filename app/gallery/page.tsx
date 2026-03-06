import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Project Gallery | Windows & Conservatories Manchester',
  description: 'View our completed window, door and conservatory projects in Manchester. See the quality of our work with before and after photos.',
  keywords: [
    'window installation manchester',
    'conservatory installation manchester',
    'door installation manchester',
    'manchester home improvement',
    'uPVC installation projects',
  ],
  openGraph: {
    title: 'Gallery | M & S Windows & Conservatory Ltd',
    description: 'View completed projects and installations in Manchester',
    url: 'https://mandswindows.co.uk/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Gallery Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90">
              See our completed window, door and conservatory installations in Manchester
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
            <h2 className="text-3xl font-bold text-center mb-12">
              Customer Testimonials
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
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
                  text: 'Best window installers in Manchester. They transformed our home.',
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex text-accent mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.area}, Manchester</p>
                </div>
              ))}
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
              Contact us for a free survey and quote on your window or conservatory project
            </p>
            <a href="/contact" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold inline-block">
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white">
        <Footer />
      </footer>
    </>
  );
}
