// Mobile Storybook NativeWind config — loads Mariner design tokens
const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/components/{atoms,molecules,organisms,templates,hooks,data}/**/*.{ts,tsx}",
  ],
  presets: [require("../../packages/theme/tailwind/native")],
};
