'use client';

import ServiceCard from './ServiceCard';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
