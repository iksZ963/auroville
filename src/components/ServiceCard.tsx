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
      className="p-8 md:p-6 lg:p-8"
    >
      <div className="mb-5">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="w-10 h-10"
        />
      </div>
      <h3 className="font-serif text-xl text-[#1a1a1a] mb-3">
        {title}
      </h3>
      <p className="text-[#666666] text-[15px] leading-[1.7]">
        {description}
      </p>
    </motion.div>
  );
}
