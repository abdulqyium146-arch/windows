'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const galleryItems = [
  { id: 1, category: 'Windows', title: 'Modern White uPVC Windows' },
  { id: 2, category: 'Doors', title: 'Elegant Patio Doors' },
  { id: 3, category: 'Conservatories', title: 'Spacious Glass Conservatory' },
  { id: 4, category: 'Porches', title: 'Classic Brick Porch' },
  { id: 5, category: 'Canopies', title: 'Grey GRP Door Canopy' },
  { id: 6, category: 'Windows', title: 'Leaded Glass Design' },
  { id: 7, category: 'Doors', title: 'Modern Black Doors' },
  { id: 8, category: 'Conservatories', title: 'Extended Living Space' },
];

const categories = [
  'All',
  'Windows',
  'Doors',
  'Conservatories',
  'Porches',
  'Canopies',
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems[0]) | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See our latest installations across Manchester
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cta text-white shadow-lg'
                  : 'bg-light text-primary hover:bg-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(item)}
                className="cursor-pointer group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-400 to-primary h-48 w-full flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="text-center text-white relative z-10">
                    <div className="text-3xl mb-2">📸</div>
                    <p className="font-semibold text-sm">{item.category}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full"
              >
                <div className="bg-gradient-to-br from-blue-400 to-primary h-96 w-full rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-lg font-semibold">{selectedImage.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
                >
                  <FiX size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
