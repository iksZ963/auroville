'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-[40px] font-normal mb-4 ${
          light ? 'text-white' : 'text-[var(--text-dark)]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-[var(--text-light-gray)]' : 'text-[var(--text-gray)]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
