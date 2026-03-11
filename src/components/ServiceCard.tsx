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
      className="px-6 py-8"
    >
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={45}
          height={45}
          className="w-[45px] h-[45px]"
          style={{
            filter: 'brightness(0) saturate(100%) invert(72%) sepia(29%) saturate(647%) hue-rotate(7deg) brightness(89%) contrast(86%)'
          }}
        />
      </div>
      <h3 className="text-[17px] font-semibold text-[#1a1a1a] mb-3">
        {title}
      </h3>
      <p className="text-[#666666] text-[14px] leading-[1.75]">
        {description}
      </p>
    </motion.div>
  );
}
