'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiArrowRight,
} from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';

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
            <h3 className="text-2xl font-bold mb-4">M & S Windows</h3>
            <p className="text-blue-100 mb-6">
              Premium windows, doors, and conservatories for your Manchester home.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://facebook.com"
                whileHover={{ scale: 1.2 }}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <FiFacebook size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                whileHover={{ scale: 1.2 }}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
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
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Windows', 'Doors', 'Conservatories', 'Leaded Windows', 'Porches', 'Door Canopies'].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-blue-100 hover:text-white flex items-center gap-2 transition-colors"
                    >
                      <FiArrowRight size={16} />
                      {service}
                    </a>
                  </li>
                )
              )}
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
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-blue-100 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
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
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-4">
              <motion.a
                href="tel:01612868256"
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors"
              >
                <FiPhone className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">0161 286 8256</p>
                  <p className="text-sm">Mon-Fri: 9AM-5PM</p>
                </div>
              </motion.a>

              <motion.a
                href="https://maps.google.com"
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors"
              >
                <FiMapPin className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Manchester</p>
                  <p className="text-sm">Chorlton, M21 7QL</p>
                </div>
              </motion.a>
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
            © {currentYear} M & S Windows & Conservatory Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-100">
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
