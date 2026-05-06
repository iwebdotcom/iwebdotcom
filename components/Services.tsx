"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Website Creation",
    description:
      "Institutional sites, landing pages & portfolios — crafted for conversion and built to impress.",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    description:
      "Online stores with Stripe, PayPal & MB Way integration — ready to sell from day one.",
  },
  {
    icon: "🎨",
    title: "Design & Branding",
    description:
      "UI/UX, brand identity & logo design — a visual presence that sets you apart.",
  },
  {
    icon: "🔒",
    title: "Security Auditing",
    description:
      "Vulnerability audits & OWASP consulting — protect your business before attackers do.",
  },
  {
    icon: "⚡",
    title: "Performance & SEO",
    description:
      "Core Web Vitals & technical SEO — rank higher and load faster than your competition.",
  },
  {
    icon: "🔧",
    title: "Code Maintenance",
    description:
      "Refactoring, updates & ongoing support — your site stays secure, fast, and up to date.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#CC0000] uppercase tracking-widest font-semibold mb-3">
            Our Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">What We Build</h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Everything your digital presence needs, under one roof.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 cursor-default transition-all duration-300 group"
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#CC0000] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
