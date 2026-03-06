'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiArrowRight,
  FiMapPin,
  FiMail,
} from 'react-icons/fi';

const serviceLinks = [
  { label: 'Windows Manchester', href: '/windows-manchester' },
  { label: 'Doors Manchester', href: '/doors-manchester' },
  { label: 'Conservatories Manchester', href: '/conservatories-manchester' },
  { label: 'Leaded Windows Manchester', href: '/leaded-windows-manchester' },
  { label: 'Porches Manchester', href: '/porches-manchester' },
  { label: 'Door Canopies Manchester', href: '/door-canopies-manchester' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" aria-label="M & S Windows home page">
              <h3 className="text-2xl font-bold mb-4 hover:text-blue-200 transition-colors">M &amp; S Windows</h3>
            </Link>
            <p className="text-blue-100 mb-6">
              Premium windows, doors, and conservatories for your Manchester home. Family-run since 1999.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/mandswindows"
                whileHover={{ scale: 1.2 }}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="M &amp; S Windows on Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiFacebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mandswindows"
                whileHover={{ scale: 1.2 }}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="M &amp; S Windows on Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FiInstagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-blue-100 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <FiArrowRight size={14} aria-hidden="true" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-100 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-blue-100 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <motion.a
                href="tel:01612868256"
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors"
                aria-label="Call us on 0161 286 8256"
              >
                <FiPhone className="flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold">0161 286 8256</p>
                  <p className="text-sm">Mon&ndash;Fri: 9AM&ndash;5PM</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@mandswindows.co.uk"
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors"
                aria-label="Email info@mandswindows.co.uk"
              >
                <FiMail className="flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold">info@mandswindows.co.uk</p>
                  <p className="text-sm">Response within 24 hours</p>
                </div>
              </motion.a>

              <address className="not-italic flex items-start gap-3 text-blue-100">
                <FiMapPin className="flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-semibold">243 Barlow Moor Road</p>
                  <p className="text-sm">Chorlton, Manchester</p>
                  <p className="text-sm">M21 7QL</p>
                </div>
              </address>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-blue-100 text-sm">
            &copy; {currentYear} M &amp; S Windows &amp; Conservatory Ltd. All rights reserved. Registered in England &amp; Wales.
          </p>
          <nav aria-label="Footer legal links" className="flex gap-6 text-sm text-blue-100">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
