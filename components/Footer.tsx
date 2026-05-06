"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-[#CC0000] font-bold text-xl tracking-tight font-mono">
                &lt;i·&gt;
              </span>
              <span className="font-bold text-white text-lg">iWebDotCom</span>
            </div>
            <p className="text-white/40 text-sm">
              We Build. We Design. We Grow.
            </p>
            <p className="text-white/25 text-xs mt-1">
              Built with ❤️ in Portugal 🇵🇹
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">
              Navigate
            </p>
            {[
              { label: "Services", id: "services" },
              { label: "Reviews", id: "testimonials" },
              { label: "Contact", id: "booking" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-white/30 text-xs uppercase tracking-widest">
              Get in touch
            </p>
            <a
              href="mailto:iwebdotcom@gmail.com"
              className="text-sm text-[#CC0000] hover:text-[#DC143C] transition-colors"
            >
              iwebdotcom@gmail.com
            </a>
            <a
              href="https://linkedin.com/company/iwebdotcom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-white/25 text-xs">
            © 2025 iWebDotCom · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
