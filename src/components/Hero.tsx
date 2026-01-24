'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Luxury apartment building"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-serif text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.25] mb-8 italic"
        >
          Beautifully Designed
          <br />
          For Everyday Living
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d2d2d] text-white text-[13px] tracking-wide hover:bg-[#3d3d3d] transition-all rounded"
          >
            <span>Know More</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
