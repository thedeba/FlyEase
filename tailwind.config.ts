import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep, warm-neutral "ink" palette for a premium dark travel look.
        navy: {
          DEFAULT: "#0A0F1C",
          900: "#060911",
          800: "#0C1220",
          700: "#111A2C",
          600: "#17223A",
          500: "#1E2C47",
        },
        // Refined steel/sea accent (kept under the `sky` key for compatibility).
        sky: {
          DEFAULT: "#8FBADF",
          soft: "#BBD6EC",
          deep: "#5C89B4",
        },
        // Warm champagne tertiary accent.
        sand: {
          DEFAULT: "#E2C9A4",
          soft: "#F1E2CC",
          deep: "#C7A97C",
        },
        call: {
          DEFAULT: "#F5821F",
          dark: "#DC6B0C",
          light: "#FFA24D",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      boxShadow: {
        call: "0 14px 30px -14px rgba(245, 130, 31, 0.55)",
        soft: "0 24px 60px -30px rgba(0, 0, 0, 0.8)",
        ring: "0 0 0 1px rgba(255,255,255,0.06)",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,130,31,0.45)" },
          "50%": { boxShadow: "0 0 0 12px rgba(245,130,31,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        floatSlow: "floatSlow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
