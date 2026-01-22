'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { stats } from '@/lib/data';

export default function Stats() {
  return (
    <section className="bg-[#0f0f0f] py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-white leading-[1.3] mb-5">
              Discover how we can bring your architectural dreams to life.
            </h2>
            <p className="text-[#999999] text-[15px] leading-[1.8] mb-8">
              From concept to completion, we&apos;re with you every step of the way.
              Ready to start your journey? Contact us today for a free
              consultation and let&apos;s create something extraordinary
              together.
            </p>

            {/* Stats */}
            <div className="space-y-3 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/images/icon-check.svg"
                    alt="Check"
                    width={18}
                    height={18}
                    className="flex-shrink-0"
                  />
                  <span className="text-white text-[15px]">
                    {stat.value} {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a962] text-[#1a1a1a] text-[13px] font-medium tracking-wide hover:bg-[#b8983f] transition-colors rounded-sm"
            >
              Let&apos;s Work Together
              <ArrowRight size={16} />
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
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/lake-garden-1.jpeg"
                  alt="Lake Garden Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/lake-garden-2.jpeg"
                  alt="Lake Garden Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/m-block-1084.jpeg"
                  alt="M Block 1084"
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
