"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const companies = [
  "Restaurante Atlântico",
  "Studio Arq & Design",
  "Clínica Lisboa",
  "Boutique Alfama",
  "Tech Startup Porto",
  "Advocacia Moderna",
  "Café Central",
  "Imobiliária Norte",
];

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const doubled = [...companies, ...companies];

  return (
    <section id="trusted" className="relative z-10 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-white/40 uppercase tracking-widest mb-8"
        >
          Trusted by businesses across Portugal
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/50 text-sm font-medium whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
