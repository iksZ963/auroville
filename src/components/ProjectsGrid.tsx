'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects, getFeaturedProjects } from '@/lib/data';

interface ProjectsGridProps {
  showAll?: boolean;
}

export default function ProjectsGrid({ showAll = false }: ProjectsGridProps) {
  const displayProjects = showAll ? projects : getFeaturedProjects();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">
            Our Best Projects
          </h2>
          <p className="text-[#666666] text-[15px] max-w-xl mx-auto">
            Innovative Designs, Timeless Impact: Our Latest Architectural Endeavors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] text-[13px] tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
