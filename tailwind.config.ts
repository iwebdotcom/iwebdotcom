import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          vivid: "#CC0000",
          crimson: "#DC143C",
          dark: "#8B0000",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        drift1: "drift1 30s ease-in-out infinite",
        drift2: "drift2 40s ease-in-out infinite",
        drift3: "drift3 25s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        drift1: {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "25%": { transform: "translate(80px, 60px) rotate(90deg)" },
          "50%": { transform: "translate(100px, -40px) rotate(180deg)" },
          "75%": { transform: "translate(-60px, 80px) rotate(270deg)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0px, 0px) rotate(0deg)" },
          "25%": { transform: "translate(-100px, -80px) rotate(-90deg)" },
          "50%": { transform: "translate(-60px, 60px) rotate(-180deg)" },
          "75%": { transform: "translate(80px, -100px) rotate(-270deg)" },
        },
        drift3: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "33%": { transform: "translate(-80px, 60px)" },
          "66%": { transform: "translate(60px, -80px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
