'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact us for a no-obligation consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="0161 286 8256"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
                type="submit"
                className="w-full btn-cta flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-700 rounded-lg text-sm"
                >
                  ✓ Thank you! We&apos;ll contact you within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {/* Phone */}
            <motion.a
              href="tel:01612868256"
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-6 bg-light rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cta text-white">
                  <FiPhone size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">Call Us</h3>
                <p className="text-gray-600 mt-1">0161 286 8256</p>
                <p className="text-sm text-gray-500 mt-2">
                  Monday-Friday: 9AM-5PM
                </p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-6 bg-light rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cta text-white">
                  <FiMapPin size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">Visit Us</h3>
                <p className="text-gray-600 mt-2">
                  243 Barlow Moor Road
                  <br />
                  Chorlton, Manchester
                  <br />
                  M21 7QL, United Kingdom
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.a
              href="mailto:info@mandswindows.co.uk"
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-6 bg-light rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cta text-white">
                  <FiMail size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">Email Us</h3>
                <p className="text-gray-600 mt-1">
                  info@mandswindows.co.uk
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Response within 24 hours
                </p>
              </div>
            </motion.a>

            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden shadow-card h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.5670455667377!2d-2.2618!3d53.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba88f8e3b0001%3A0x1234567890abc!2s243%20Barlow%20Moor%20Road%2C%20Chorlton%2C%20Manchester%20M21%207QL!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
