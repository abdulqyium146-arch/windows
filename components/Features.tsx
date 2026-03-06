'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiAward, FiUsers, FiZap } from 'react-icons/fi';

const features = [
  {
    icon: FiZap,
    title: 'Energy Efficient Windows',
    description:
      'Advanced glazing technology reduces energy bills by up to 30%. Keep your home warm and comfortable year-round.',
  },
  {
    icon: FiAward,
    title: 'Custom Designs',
    description:
      'Bespoke designs tailored to your home. From modern minimalist to traditional styles, we deliver your vision.',
  },
  {
    icon: FiCheck,
    title: 'Maintenance Free Materials',
    description:
      'High-quality uPVC requires minimal maintenance. Never paint or treat wood again. Clean for life.',
  },
  {
    icon: FiAward,
    title: 'GRP Door Canopies',
    description:
      'Durable fiberglass reinforced plastic available in grey, terracotta, or red brick finishes. Built to last decades.',
  },
  {
    icon: FiZap,
    title: 'Weather-Resistant',
    description:
      'Superior insulation and weather-tight seals protect your home from Manchester\'s unpredictable climate.',
  },
  {
    icon: FiCheck,
    title: 'Long-Lasting Roof Tiles',
    description:
      'Premium roof tiles engineered for durability. Superior protection with aesthetic appeal for 30+ years.',
  },
];

export default function Features() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Our Products?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-leading materials and expert installation for lasting results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg border border-gray-200 hover:border-cta hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-primary">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
