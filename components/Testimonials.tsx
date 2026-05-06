"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    stars: 5,
    quote:
      "iWebDotCom transformed our online presence in under a week. Sales through the website doubled in the first month.",
    name: "Miguel Ferreira",
    role: "Restaurant Owner",
    avatar: "MF",
  },
  {
    stars: 5,
    quote:
      "Professional, fast and creative. My portfolio looks stunning and I get new client inquiries every week.",
    name: "Ana Costa",
    role: "Architect",
    avatar: "AC",
  },
  {
    stars: 5,
    quote:
      "The security audit found 3 critical vulnerabilities we didn't know about. Excellent work, highly recommended.",
    name: "Rui Mendes",
    role: "E-commerce Founder",
    avatar: "RM",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#CC0000] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directions = [-60, 0, 60];

  return (
    <section id="testimonials" className="relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#CC0000] uppercase tracking-widest font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: directions[i] }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-7 flex flex-col"
            >
              <Stars count={t.stars} />
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B0000] to-[#CC0000] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
