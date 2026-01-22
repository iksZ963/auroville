'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--bg-cream)] pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--text-dark)] mb-6">
              Auroville
            </h1>
            <p className="text-xl text-[var(--text-gray)] mb-8">
              Where dreams become reality
            </p>
            <div className="w-20 h-px bg-[var(--accent-gold)] mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-[var(--text-gray)] italic leading-relaxed"
          >
            Auroville isn&apos;t just building homes. We&apos;re building
            dreams. Our expert team, a fusion of visionaries and builders, is
            pioneering a new era in Bangladeshi real estate, one where value and
            innovation intertwine seamlessly.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[var(--bg-dark)] py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-8">
                Our mission is to elevate our customers&apos; lives through
                exceptional living experiences
              </h2>
              <p className="text-[var(--text-light-gray)] text-lg leading-8">
                Imagine living spaces that breathe – infused with biophilic
                design, where nature integrates with modern architecture.
                Various advanced amenities that seamlessly blend with
                cutting-edge technology, elevating your lifestyle beyond the
                ordinary. We meticulously select best-in-class materials,
                ensuring unparalleled quality and timely execution, all while
                prioritizing your complete satisfaction.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/images/E.jpg.jpeg"
                alt="Auroville architectural design"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--bg-cream)] py-20 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mb-4">
              Our Values
            </h2>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  'We constantly push boundaries to bring cutting-edge design and technology to every project.',
              },
              {
                title: 'Quality',
                description:
                  'We use only the finest materials and craftsmanship to ensure lasting value for our clients.',
              },
              {
                title: 'Integrity',
                description:
                  'We maintain transparency and honesty in all our dealings, building trust with every interaction.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 text-center"
              >
                <h3 className="font-serif text-2xl text-[var(--text-dark)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--text-gray)] leading-7">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
