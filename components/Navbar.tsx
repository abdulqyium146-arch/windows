'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';

const serviceLinks = [
  { label: 'Windows Manchester', href: '/windows-manchester' },
  { label: 'Doors Manchester', href: '/doors-manchester' },
  { label: 'Conservatories Manchester', href: '/conservatories-manchester' },
  { label: 'Leaded Windows Manchester', href: '/leaded-windows-manchester' },
  { label: 'Porches Manchester', href: '/porches-manchester' },
  { label: 'Door Canopies Manchester', href: '/door-canopies-manchester' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-elevated' : 'bg-white'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="M &amp; S Windows home page">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary"
            >
              M &amp; S Windows
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

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <FiChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-elevated border border-gray-100 py-2 z-50"
                    role="menu"
                  >
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-blue-50 transition-colors"
                      role="menuitem"
                      onClick={closeAll}
                    >
                      All Services
                    </Link>
                    <div className="border-t border-gray-100 my-1" />
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                        role="menuitem"
                        onClick={closeAll}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
            aria-label="Call us on 0161 286 8256"
          >
            <FiPhone size={20} aria-hidden="true" />
            0161 286 8256
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary text-2xl"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="pb-4 pt-2 space-y-1">
                <Link
                  href="/"
                  className="block py-2 px-2 text-gray-700 hover:text-primary font-medium rounded"
                  onClick={closeAll}
                >
                  Home
                </Link>

                {/* Mobile Services accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-2 px-2 text-gray-700 hover:text-primary font-medium rounded"
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <FiChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4 space-y-1"
                      >
                        <Link
                          href="/services"
                          className="block py-2 text-sm font-semibold text-primary hover:text-primary/80"
                          onClick={closeAll}
                        >
                          All Services
                        </Link>
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="block py-2 text-sm text-gray-600 hover:text-primary"
                            onClick={closeAll}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/gallery"
                  className="block py-2 px-2 text-gray-700 hover:text-primary font-medium rounded"
                  onClick={closeAll}
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="block py-2 px-2 text-gray-700 hover:text-primary font-medium rounded"
                  onClick={closeAll}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 px-2 text-gray-700 hover:text-primary font-medium rounded"
                  onClick={closeAll}
                >
                  Contact
                </Link>
                <motion.a
                  href="tel:01612868256"
                  whileHover={{ scale: 1.02 }}
                  className="block mt-2 w-full text-center bg-cta hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
                  onClick={closeAll}
                  aria-label="Call us on 0161 286 8256"
                >
                  Call: 0161 286 8256
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
