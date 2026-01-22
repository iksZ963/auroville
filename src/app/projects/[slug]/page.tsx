'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Maximize, Car, Route } from 'lucide-react';
import { getProjectBySlug, projects } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const specs = [
    { icon: Maximize, label: project.specs.sqft, key: 'sqft' },
    { icon: MapPin, label: project.specs.plot, key: 'plot' },
    { icon: Car, label: project.specs.parking, key: 'parking' },
    { icon: Route, label: project.specs.road, key: 'road' },
  ];

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={project.mainImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-24 left-6 z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white hover:text-[var(--accent-gold)] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--text-dark)] mb-4">
              {project.name}
            </h1>
            <p className="text-[var(--accent-gold)] text-lg mb-8">
              {project.location}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <spec.icon
                    size={24}
                    className="text-[var(--accent-gold)] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[var(--text-dark)]">{spec.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      {project.galleryImages.length > 1 && (
        <section className="bg-[var(--bg-cream)] py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl text-[var(--text-dark)] mb-8"
            >
              Gallery
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/3] overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Description */}
      <section className="bg-[var(--bg-dark)] py-16 md:py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <blockquote className="border-l-4 border-[var(--accent-gold)] pl-6 py-2">
              <p className="text-lg md:text-xl text-[var(--text-light-gray)] leading-8 italic">
                {project.fullDescription}
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-dark)] mb-4">
              Interested in this project?
            </h2>
            <p className="text-[var(--text-gray)] mb-8 max-w-xl mx-auto">
              Contact us today to schedule a viewing and make this your dream
              address.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-gold)] text-[var(--text-dark)] text-sm uppercase tracking-wider hover:bg-[#b8983f] transition-colors font-medium"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
