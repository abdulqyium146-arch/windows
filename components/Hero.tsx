'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-blue-700 to-primary text-white pt-20 flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 -left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 -right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Premium Windows, Doors & Conservatories in Manchester
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Family-run specialists delivering high-quality installations with experienced fitting teams. Transform your home with premium uPVC solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-cta flex items-center justify-center gap-2"
              >
                Get Free Quote
                <MdArrowOutward size={20} />
              </motion.a>
              <motion.a
                href="tel:01612868256"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg inline-flex items-center justify-center"
              >
                Call Now: 0161 286 8256
              </motion.a>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 pt-8 border-t border-blue-400"
            >
              <p className="text-sm text-blue-100 mb-4">Trusted by thousands across Manchester</p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-blue-100 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">5000+</p>
                  <p className="text-blue-100 text-sm">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-blue-100 text-sm">Customer Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-96 w-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-white text-lg font-semibold">Premium Home Improvements</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl max-w-xs"
            >
              <p className="text-primary font-bold mb-2">✓ Free Quote</p>
              <p className="text-gray-600 text-sm">Get your personalized quote in 24 hours</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
