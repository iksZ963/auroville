'use client';

import Link from 'next/link';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import { projects, getFeaturedProjects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

interface ProjectsGridProps {
  showAll?: boolean;
}

export default function ProjectsGrid({ showAll = false }: ProjectsGridProps) {
  const displayProjects = showAll ? projects : getFeaturedProjects();

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Best Projects"
          subtitle="Innovative Designs, Timeless Impact: Our Latest Architectural Endeavors"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--text-dark)] text-[var(--text-dark)] text-sm uppercase tracking-wider hover:bg-[var(--text-dark)] hover:text-white transition-all group"
            >
              <span>View All Projects</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
