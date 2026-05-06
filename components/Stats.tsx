"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Websites Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 48, suffix: "h", label: "Average Delivery Time" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative z-10 py-20 px-4">
      {/* Red accent line */}
      <div className="max-w-6xl mx-auto">
        <div className="relative glass-card px-8 py-12 overflow-hidden">
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, #CC0000 0%, transparent 70%)",
            }}
          />

          <div
            ref={ref}
            className="relative grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#CC0000] mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/50 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
