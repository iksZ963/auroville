'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--bg-cream)] pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-dark)] mb-4">
              Our Projects
            </h1>
            <p className="text-[var(--text-gray)] max-w-2xl mx-auto">
              Innovative Designs, Timeless Impact: Our Latest Architectural
              Endeavors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
