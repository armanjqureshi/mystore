/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          bg: "#FFFFFF",
          surface: "#F6F6F4",
          border: "#E7E4DC",
        },
        ink: {
          DEFAULT: "#23221E",
          muted: "#6B675F",
        },
        sage: {
          DEFAULT: "#6B7860",
          dark: "#4F5A47",
          light: "#DDE2D6",
        },
        clay: {
          DEFAULT: "#C9A88C",
          light: "#F1E6DA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        shelf: "0 18px 20px -18px rgba(35, 34, 30, 0.35)",
        card: "0 1px 2px rgba(35, 34, 30, 0.06)",
        "card-hover": "0 12px 24px -12px rgba(35, 34, 30, 0.18)",
      },
    },
  },
  plugins: [],
};
