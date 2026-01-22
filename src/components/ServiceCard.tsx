'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-10 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="mb-6">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="text-[var(--accent-gold)]"
          style={{ filter: 'invert(67%) sepia(54%) saturate(385%) hue-rotate(7deg) brightness(92%) contrast(84%)' }}
        />
      </div>
      <h3 className="font-serif text-2xl text-[var(--text-dark)] mb-4">
        {title}
      </h3>
      <p className="text-[var(--text-gray)] leading-7">
        {description}
      </p>
    </motion.div>
  );
}
