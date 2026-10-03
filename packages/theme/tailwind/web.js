// Web Tailwind configuration for Next.js
const { buildTheme } = require("../src/loadTokens.js");
const { safelist } = require("./shared.js");

const { theme } = buildTheme({
  radius: "desktop-sm",
  spacing: "desktop-sm",
  size: "desktop-sm",
  typography: "desktop-sm",
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: theme.extend,
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
  darkMode: "class",
  safelist,
};
