import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#07070A",
        obsidian: "#0B0B10",
        gold: "#D6B25E",
        sand: "#C9B27A",
      },
      boxShadow: {
        glow: "0 0 35px rgba(214,178,94,0.18)",
        neon: "0 0 55px rgba(160,90,255,0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
