"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  { label: "Restaurants", icon: "🍽️" },
  { label: "Architects", icon: "🏛️" },
  { label: "Clinics", icon: "🏥" },
  { label: "Retail", icon: "🛍️" },
  { label: "Freelancers", icon: "💼" },
  { label: "Startups", icon: "🚀" },
];

export default function WhoWeHelp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-[#CC0000] uppercase tracking-widest font-semibold mb-3">
            Industries
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built for Your Industry
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-lg mx-auto">
            We've delivered results for businesses across every sector.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.06 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.04] text-white font-medium text-sm hover:border-[#CC0000]/60 hover:shadow-[0_0_20px_rgba(204,0,0,0.2)] transition-all duration-300 cursor-default"
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
