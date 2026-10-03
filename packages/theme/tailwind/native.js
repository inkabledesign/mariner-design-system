// Native Tailwind configuration for React Native with NativeWind
const { buildTheme } = require("../src/loadTokens.js");
const { safelist } = require("./shared.js");

const { theme } = buildTheme({
  radius: "mobile",
  spacing: "mobile",
  size: "mobile",
  typography: "mobile",
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  theme: {
    extend: theme.extend,
  },
  plugins: [],
  darkMode: "class",
  safelist,
};
