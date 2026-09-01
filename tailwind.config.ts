import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        lg: "1120px",
        xl: "1120px",
        "2xl": "1120px",
      },
    },
    extend: {
      colors: {
  paper: "#FFFFFF",
  cream: "#F5F5F5",
  ink: "#0A0A0A",
  steel: "#1A1A1A",
  line: "#E2E2E2",
  muted: "#6B6B6B",
  accent: "oklab(0.5 0.118727 0.0741887 / 0.8)",
},
      fontFamily: {
        display: ["var(--font-oswald)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      borderRadius: {
        card: "0.375rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px -12px rgba(0,0,0,0.22)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
