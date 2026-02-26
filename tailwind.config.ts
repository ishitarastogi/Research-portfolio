import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Outfit", "-apple-system", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
        antic: ["Antic", "sans-serif"],
      },
      colors: {
        warm: "#c4956a",
        ink: "#161616",
        "bg-warm": "#faf9f6",
        card: "#ffffff",
        sub: "#555555",
        muted: "#999999",
        border: "#e8e4dd",
        tag: "#edeae4",
        accent: "#C3E41D",
      },
      keyframes: {
        up: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        up: "up 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
