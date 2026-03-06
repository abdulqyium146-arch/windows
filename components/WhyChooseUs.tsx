'use client';

import { motion } from 'framer-motion';
import {
  FiAward,
  FiCheckCircle,
  FiThumbsUp,
  FiUsers,
  FiZap,
  FiShield,
} from 'react-icons/fi';

const reasons = [
  {
    icon: FiHeart,
    title: 'Family Business',
    description: 'Personal values and quality service at every step.',
  },
  {
    icon: FiAward,
    title: 'Qualified Installers',
    description: 'Certified teams with 20+ years of experience.',
  },
  {
    icon: FiCheckCircle,
    title: 'Premium Materials',
    description: 'Top manufacturers and industry-leading products.',
  },
  {
    icon: FiUsers,
    title: 'Custom Designs',
    description: 'Tailor-made solutions for your unique home.',
  },
  {
    icon: FiZap,
    title: 'Friendly Service',
    description: 'Quick responses and transparent communication.',
  },
  {
    icon: FiShield,
    title: '5-Year Warranty',
    description: 'Full peace of mind with our comprehensive guarantee.',
  },
];

import { FiHeart } from 'react-icons/fi';

export default function WhyChooseUs() {
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
    <section className="section-padding bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose M & S Windows?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here&apos;s what sets us apart from the rest
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-white rounded-xl card-shadow hover:bg-primary transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon
                      size={32}
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-white mb-2 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors duration-300">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 text-center p-8 bg-white rounded-xl shadow-card"
        >
          <p className="text-gray-600 mb-4">Trusted by over 5,000 happy customers</p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-yellow-400">
                ★
              </span>
            ))}
          </div>
          <p className="text-primary font-bold mt-2">4.9/5 Average Rating</p>
        </motion.div>
      </div>
    </section>
  );
}
