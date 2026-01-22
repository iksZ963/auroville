'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden mb-4">
          <Image
            src={project.mainImage}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-[15px] text-[#1a1a1a] font-semibold uppercase tracking-wide mb-2">
            {project.name}
          </h3>
          <p className="text-[#666666] text-[14px] mb-2 line-clamp-2">
            {project.shortDescription}
          </p>
          <span className="inline-flex items-center text-[#c9a962] text-[13px] hover:underline">
            View Project
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
