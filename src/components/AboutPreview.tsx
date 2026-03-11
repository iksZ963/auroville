'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/about-image.jpeg"
              alt="Architectural design"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl lg:text-[32px] text-[#1a1a1a] leading-[1.3] mb-5 font-semibold">
              Architectural more innovative and coherent your concept
            </h2>
            <p className="text-[#666666] text-[15px] leading-[1.8]">
              An idea that takes the parts of a structure and turns them into a
              whole system. Practice is the frequent and continued contemplation
              of the mode of executing any given work, or of the mere operation
              of the hands.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
