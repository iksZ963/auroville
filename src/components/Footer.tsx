'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <footer className="bg-[#0a0a0a] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Auroville"
              width={120}
              height={40}
              className="h-[40px] w-auto"
            />
          </Link>

          {/* Quick Links */}
          <div className="flex items-center gap-8">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-[14px] hover:text-[#c9a962] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-white hover:text-[#c9a962] transition-colors"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-[13px] text-white">
              <a
                href={`mailto:${companyInfo.email}`}
                className="hover:text-[#c9a962] transition-colors"
              >
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="hover:text-[#c9a962] transition-colors"
              >
                {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
