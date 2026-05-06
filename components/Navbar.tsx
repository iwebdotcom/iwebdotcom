"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div
        className={`flex items-center gap-6 px-6 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-black/70 border-white/15 shadow-[0_0_30px_rgba(204,0,0,0.15)]"
            : "bg-black/40 border-white/10"
        }`}
        style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 mr-2 group"
        >
          <span className="text-[#CC0000] font-bold text-lg tracking-tight font-mono">
            &lt;i·&gt;
          </span>
          <span className="font-bold text-white text-sm tracking-wide">
            iWebDotCom
          </span>
        </button>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "Services", id: "services" },
            { label: "Work", id: "testimonials" },
            { label: "Reviews", id: "testimonials" },
            { label: "Contact", id: "booking" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("booking")}
          className="ml-2 px-5 py-2 text-sm font-semibold rounded-full btn-red whitespace-nowrap"
        >
          Book a Meeting
        </button>
      </div>
    </motion.nav>
  );
}
