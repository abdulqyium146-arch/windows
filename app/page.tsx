import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Dynamic imports for below-the-fold components
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-96 bg-light" />,
});
const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="h-96 bg-light" />,
});
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-96 bg-light" />,
});
const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div className="h-96 bg-light" />,
});
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="h-96 bg-light" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-96 bg-light" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32 bg-primary" />,
});

export const metadata: Metadata = {
  title: 'M & S Windows & Conservatory Ltd | Windows, Doors & Conservatories Manchester',
  description: 'High quality uPVC windows, doors and conservatories in Manchester. Family-run installers with 20+ years experience. Free quotes within 24 hours. Call 0161 286 8256.',
  alternates: {
    canonical: 'https://mandswindows.co.uk',
  },
  openGraph: {
    url: 'https://mandswindows.co.uk',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />

        {/* Quick Service Links — SEO internal linking hub */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Our Installation Services in Manchester
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <Link
                href="/windows-manchester"
                className="text-center bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary text-gray-700 px-3 py-4 rounded-xl text-sm font-semibold transition-all duration-200 block"
              >
                Windows<br />Manchester
              </Link>
              <Link
                href="/doors-manchester"
                className="text-center bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary text-gray-700 px-3 py-4 rounded-xl text-sm font-semibold transition-all duration-200 block"
              >
                Doors<br />Manchester
              </Link>
              <Link
                href="/conservatories-manchester"
                className="text-center bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary text-gray-700 px-3 py-4 rounded-xl text-sm font-semibold transition-all duration-200 block"
              >
                Conservatories<br />Manchester
              </Link>
              <Link
                href="/leaded-windows-manchester"
                className="text-center bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary text-gray-700 px-3 py-4 rounded-xl text-sm font-semibold transition-all duration-200 block"
              >
                Leaded Windows<br />Manchester
              </Link>
              <Link
                href="/porches-manchester"
                className="text-center bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary text-gray-700 px-3 py-4 rounded-xl text-sm font-semibold transition-all duration-200 block"
              >
                Porches<br />Manchester
              </Link>
              <Link
                href="/door-canopies-manchester"
                className="text-center bg-gray-50 hover:bg-primary hover:text-white border border-gray-200 hover:border-primary text-gray-700 px-3 py-4 rounded-xl text-sm font-semibold transition-all duration-200 block"
              >
                Door Canopies<br />Manchester
              </Link>
            </div>
          </div>
        </section>

        <About />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
