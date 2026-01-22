'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/projects', label: 'Projects' },
];

const socialLinks = [
  { icon: Twitter, href: companyInfo.social.twitter, label: 'X' },
  { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
  { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: companyInfo.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Contact */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-serif text-white tracking-wider">
                AUROVILLE
              </span>
            </Link>
            <div className="space-y-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="block text-white hover:text-[var(--accent-gold)] transition-colors"
              >
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="block text-white hover:text-[var(--accent-gold)] transition-colors"
              >
                {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[var(--accent-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white text-lg font-medium mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white hover:text-[var(--accent-gold)] transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-gray)]">
          <p className="text-center text-[var(--text-gray)] text-sm">
            &copy; {new Date().getFullYear()} Auroville. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
