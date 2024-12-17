import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#166534",
          light: "#d4ffcf",
        },
        secondary: "#999999",
        textPrimary: "#4f4f4f",
        bgMain: "#E8E8E8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rokkitt: ["Rokkitt", "serif"],
      },
      screens: {
        xs: "375px",
        sm: "480px",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        shake: "shake 0.5s",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
