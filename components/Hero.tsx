"use client";

import { motion } from "framer-motion";
export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.10] text-sm text-white/55"
        style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(10px)" }}
      >
        <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
        Digital Agency · Portugal
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl"
      >
        We{" "}
        <span className="text-[#CC0000]">Build.</span>
        {" "}We{" "}
        <span className="text-[#CC0000]">Design.</span>
        {" "}We{" "}
        <span className="text-[#CC0000]">Grow.</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed"
      >
        Your digital partner for websites, e-commerce and web security —
        built fast, built right, built for results.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <button
          onClick={() => scrollTo("booking")}
          className="btn-red text-base px-8 py-3"
        >
          Book a Free Call
        </button>
        <button
          onClick={() => scrollTo("services")}
          className="btn-outline text-base px-8 py-3"
        >
          See Our Services
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("trusted")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
