'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-elevated' : 'bg-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
            >
              M & S Windows
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Call Now Button */}
          <motion.a
            href="tel:01612868256"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-cta hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            <FiPhone size={20} />
            Call Now
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-gray-200"
          >
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <motion.a
              href="tel:01612868256"
              whileHover={{ scale: 1.02 }}
              className="block mt-4 w-full text-center bg-cta hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Call Now
            </motion.a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
