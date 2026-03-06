import { Metadata } from 'next';
import dynamic from 'next/dynamic';
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
  title: 'M & S Windows & Conservatory Ltd | Windows & Conservatories Manchester',
  description: 'High quality uPVC windows, doors and conservatories in Manchester. Family run installers offering premium materials and expert fitting.',
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
        <About />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
