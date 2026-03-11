'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const companyInfo = {
  phone: '+8801308653943',
};

const phoneNumber = '+8801308653943'; // Declare the phoneNumber variable

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#5b7a94] to-[#6b8aaa] bg-opacity-85 backdrop-blur-sm"
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
                  className="text-white text-[15px] font-medium hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button - shadcn outline variant */}
              <Button
                variant="outline"
                asChild
                className="text-white border-white hover:bg-white/10 bg-transparent"
              >
                <a href={`tel:${phoneNumber}`}>
                  Call: {phoneNumber}
                </a>
              </Button>
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
            className="fixed inset-0 z-40 bg-gradient-to-r from-[#5b7a94] to-[#6b8aaa] md:hidden pt-24"
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
                    className="text-white text-2xl font-semibold tracking-wider hover:text-white/80 transition-colors"
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
                <Button
                  variant="outline"
                  asChild
                  className="text-white border-white hover:bg-white/10 bg-transparent"
                >
                  <a href={`tel:${phoneNumber}`}>
                    Call: {phoneNumber}
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
