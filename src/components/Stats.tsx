'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { stats } from '@/lib/data';

export default function Stats() {
  return (
    <section className="bg-[var(--bg-dark)] py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--text-light-gray)] text-lg leading-8 mb-10">
              Discover how we can bring your architectural dreams to life. From
              concept to completion, we&apos;re with you every step of the way.
              Ready to start your journey? Contact us today for a free
              consultation and let&apos;s create something extraordinary
              together.
            </p>

            {/* Stats */}
            <div className="space-y-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Check
                    size={20}
                    className="text-[var(--accent-gold)] flex-shrink-0"
                  />
                  <span className="text-white">
                    <strong>{stat.value}</strong> {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-gold)] text-[var(--text-dark)] text-sm uppercase tracking-wider hover:bg-[#b8983f] transition-colors font-medium"
            >
              Let&apos;s Work Together
            </Link>
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/WhatsApp-Image-2025-02-01-at-12.27.48-PM.jpeg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/huik.jpeg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/WhatsApp-Image-2025-02-01-at-12.27.48-sad.jpeg"
                  alt="Project 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
