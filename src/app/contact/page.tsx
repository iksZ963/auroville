'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/lib/data';

export default function ContactPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--text-dark)] mb-6">
              Get in touch
            </h1>
            <p className="text-xl text-[var(--text-gray)] mb-8">
              Feel free to contact us anytime
            </p>
            <div className="w-20 h-px bg-[var(--accent-gold)] mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--accent-gold)] rounded-full">
                  <Phone size={28} className="text-[var(--accent-gold)]" />
                </div>
                <h3 className="font-serif text-xl text-[var(--text-dark)] mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-lg text-[var(--text-gray)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--accent-gold)] rounded-full">
                  <Mail size={28} className="text-[var(--accent-gold)]" />
                </div>
                <h3 className="font-serif text-xl text-[var(--text-dark)] mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-lg text-[var(--text-gray)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  {companyInfo.email}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--bg-dark)] py-20 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Ready to find your dream home?
            </h2>
            <p className="text-[var(--text-light-gray)] text-lg max-w-2xl mx-auto mb-8">
              We&apos;re here to help you every step of the way. Reach out to us
              and let&apos;s start building your future together.
            </p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-gold)] text-[var(--text-dark)] text-sm uppercase tracking-wider hover:bg-[#b8983f] transition-colors font-medium"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
