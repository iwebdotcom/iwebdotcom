"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
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
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-max"
    >
      <div
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)]"
            : "border-white/[0.05]"
        }`}
        style={{
          background: scrolled
            ? "rgba(0,0,0,0.45)"
            : "rgba(0,0,0,0.15)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-1.5 px-2 py-0.5"
        >
          <span className="text-[#CC0000] font-bold text-base tracking-tight font-mono leading-none">
            &lt;i·&gt;
          </span>
          <span className="font-semibold text-white text-sm tracking-wide">
            iWebDotCom
          </span>
        </button>

        {/* Separator */}
        <div className="hidden md:block w-px h-4 bg-white/10 mx-1" />

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {[
            { label: "Services", id: "services" },
            { label: "Work", id: "testimonials" },
            { label: "Reviews", id: "testimonials" },
            { label: "Contact", id: "booking" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="px-3.5 py-1.5 text-sm text-white/60 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-4 bg-white/10 mx-1" />

        {/* CTA */}
        <button
          onClick={() => scrollTo("booking")}
          className="btn-white px-5 py-2 text-sm whitespace-nowrap"
        >
          Book a Meeting
        </button>
      </div>
    </motion.nav>
  );
}
