'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiTrendingUp } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Family-Owned, Built on Trust
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              M & S Windows & Conservatory Ltd is a family-run business established over 20 years ago. Founded by Steve and Louise Wright, we've built our reputation on delivering premium-quality installations and exceptional customer service.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Every project is handled with care by our experienced fitting teams. We partner with top manufacturers to ensure you receive only the highest quality materials and installations that stand the test of time.
            </p>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cta text-white">
                    <FiHeart size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    Family-Run Values
                  </h3>
                  <p className="text-gray-600">
                    Personal attention to every customer, treating your home like our own.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cta text-white">
                    <FiUsers size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    Expert Installation Crews
                  </h3>
                  <p className="text-gray-600">
                    Our experienced team ensures flawless installation every time.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cta text-white">
                    <FiTrendingUp size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    Premium Materials
                  </h3>
                  <p className="text-gray-600">
                    We only use top-tier suppliers and materials for lasting results.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-8 border-t border-gray-300"
            >
              <p className="text-gray-700 mb-4">
                <span className="font-bold block mb-2">Owners</span>
                Steve Wright & Louise Wright
              </p>
              <p className="text-gray-600 text-sm">
                Based in Chorlton, Manchester, serving Greater Manchester and beyond.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative hidden md:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-blue-500 to-primary h-96 w-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                  <p className="text-white text-lg font-semibold">Family Since 1999</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
