import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#050816",
          secondary: "#0B1120",
          tertiary: "#111827",
        },
        foreground: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
        },
        accent: {
          blue: "#00D4FF",
          green: "#00FF88",
          purple: "#8B5CF6",
          cyan: "#06B6D4",
        },
        border: {
          DEFAULT: "rgba(148, 163, 184, 0.1)",
          hover: "rgba(148, 163, 184, 0.2)",
        },
        card: {
          DEFAULT: "rgba(17, 24, 39, 0.6)",
          hover: "rgba(17, 24, 39, 0.8)",
        },
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.4)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
