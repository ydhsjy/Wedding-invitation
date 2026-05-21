import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8F5F0",
        gold: "#C6A969",
        ink: "#2B2B2B",
        clay: "#8D6E63",
        ivory: "#FFFDF8"
      },
      fontFamily: {
        script: ["var(--font-great-vibes)", "cursive"],
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(43, 43, 43, 0.12)",
        soft: "0 18px 44px rgba(141, 110, 99, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
