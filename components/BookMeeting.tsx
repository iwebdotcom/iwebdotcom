"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { InlineWidget } from "react-calendly";

export default function BookMeeting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="booking" className="relative z-10 py-24 px-4 overflow-hidden">
      {/* Extra red glow behind this section */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(204,0,0,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm text-[#CC0000] uppercase tracking-widest font-semibold mb-3">
            Let's Talk
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Book a free 30-min discovery call — no commitment, just a conversation
            about what you want to build.
          </p>
        </motion.div>

        {/* Calendly widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card overflow-hidden rounded-2xl"
        >
          <InlineWidget
            url="https://calendly.com/iwebdotcom"
            styles={{ height: "700px", minWidth: "320px" }}
            pageSettings={{
              backgroundColor: "000000",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "CC0000",
              textColor: "ffffff",
            }}
          />
        </motion.div>

        {/* Email fallback */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-6 text-white/40 text-sm"
        >
          Prefer email?{" "}
          <a
            href="mailto:iwebdotcom@gmail.com"
            className="text-[#CC0000] hover:text-[#DC143C] underline underline-offset-4 transition-colors"
          >
            iwebdotcom@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
