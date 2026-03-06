'use client';

import { motion } from 'framer-motion';
import {
  FiHome,
  FiGift,
  FiZap,
  FiGrid,
  FiBox,
  FiAward,
} from 'react-icons/fi';

const services = [
  {
    icon: FiHome,
    title: 'Windows',
    description: 'Energy-efficient uPVC windows with advanced glazing technology. Custom designs to match your home style.',
  },
  {
    icon: FiGift,
    title: 'Doors',
    description: 'Premium entrance and patio doors. Secure, stylish, and weather-resistant solutions for your home.',
  },
  {
    icon: FiBox,
    title: 'Conservatories',
    description: 'Bespoke conservatories that extend your living space. Fully insulated and maintenance-free designs.',
  },
  {
    icon: FiGrid,
    title: 'Leaded Windows',
    description: 'Traditional leaded glass designs. Perfect for period properties and classic aesthetics.',
  },
  {
    icon: FiAward,
    title: 'Porches',
    description: 'Elegant entrance porches that add character and protection. Custom-built to your specifications.',
  },
  {
    icon: FiZap,
    title: 'Door Canopies',
    description: 'Durable GRP door canopies available in grey, terracotta, or red brick finishes. Long-lasting quality.',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive home improvement solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl p-8 card-shadow hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 group-hover:bg-cta transition-colors duration-300">
                    <Icon
                      size={32}
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 text-cta font-semibold cursor-pointer inline-block"
                >
                  Learn more →
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
