'use client';

import ServiceCard from './ServiceCard';
import SectionHeading from './SectionHeading';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section className="bg-[var(--bg-cream)] py-20 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Services"
          subtitle="We offer comprehensive real estate solutions tailored to your needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
