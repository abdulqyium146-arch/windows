import type { Metadata } from 'next';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Windows, Doors & Conservatories Manchester | M & S Windows',
  description: 'Premium uPVC windows, doors, conservatories, leaded windows, porches and door canopies in Manchester. Family-run installers with 20+ years experience.',
  keywords: [
    'windows manchester',
    'doors manchester',
    'conservatories manchester',
    'uPVC windows manchester',
    'window installers manchester',
    'door installers manchester',
    'leaded windows manchester',
    'door canopies manchester',
    'porches manchester',
    'home improvement manchester',
  ],
  openGraph: {
    title: 'Services | M & S Windows & Conservatory Ltd',
    description: 'Premium window, door and conservatory installation services in Manchester',
    url: 'https://mandswindows.co.uk/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Services Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/90">
              Premium quality windows, doors, and conservatories for Manchester homes
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20">
          <Services />
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
            <a href="/contact" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold inline-block">
              Request a Free Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
