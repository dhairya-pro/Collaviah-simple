import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pearl: "#FFFFFF",
        champagne: {
          DEFAULT: "#F6EDE4",
          light: "#FAF5EE",
          dark: "#E8DDD1",
        },
        crimson: {
          DEFAULT: "#B5124A",
          hover: "#96103D",
          deep: "#7A0D32",
        },
        gold: {
          antique: "#B07A2E",
          soft: "#D4A94F",
          light: "#F0E1BD",
          champagne: "#E5CCA5",
        },
        richBlack: "#1A1A1A",
        charcoal: {
          DEFAULT: "#4A4340",
          light: "#716965",
          muted: "#968E8A",
        },
        leafGreen: {
          DEFAULT: "#2F5D3A",
          light: "#E7EFE9",
        },
        blush: {
          DEFAULT: "#F6D9DD",
          light: "#FAF0F2",
          deep: "#E8B8C0",
        },
        flavor: {
          strawberry: "#D7263D",
          lime: "#9CC83C",
          cranberry: "#8E1B3A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        script: ["var(--font-great-vibes)", "Great Vibes", "cursive"],
      },
      letterSpacing: {
        luxury: "0.25em",
        subtle: "0.08em",
      },
      animation: {
        "float-gentle": "float 5s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

