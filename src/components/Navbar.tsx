'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '@/lib/data';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#1a1a1a]/90 backdrop-blur-sm' : 'bg-black/20'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo - Full header height */}
            <Link href="/" className="flex items-center h-full py-2">
              <Image
                src="/images/logo.png"
                alt="Auroville"
                width={180}
                height={60}
                className="h-[60px] w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Right side */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-[16px] font-semibold hover:text-[#c9a962] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button - Outlined with gold hover */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="px-6 py-2.5 border border-white/70 text-white text-[14px] font-medium hover:bg-[#c9a962] hover:border-[#c9a962] hover:text-[#1a1a1a] transition-all rounded-full"
              >
                Call: {companyInfo.phone}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1a1a1a] md:hidden pt-24"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-2xl font-semibold tracking-wider hover:text-[#c9a962] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="px-6 py-3 border border-white/70 text-white text-lg font-medium hover:bg-[#c9a962] hover:border-[#c9a962] hover:text-[#1a1a1a] transition-all rounded-full"
                >
                  Call: {companyInfo.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
