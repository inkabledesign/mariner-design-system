// Native Tailwind configuration for React Native with NativeWind
const { buildTheme } = require('../src/loadTokens.js');

const { theme } = buildTheme({
  radius: 'mobile',
  spacing: 'mobile',
  size: 'mobile',
  typography: 'mobile',
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: theme.extend,
  },
  plugins: [],
  darkMode: 'class',
  safelist: [
    // Safelist all design token classes to ensure they're generated
    { pattern: /^(bg|text|border)-brand-(primary|secondary|accent)-(5|10|20|40|60|80|100)$/ },
    { pattern: /^(bg|text|border)-material-surface-(0|5|10|20|40|60|80|100)$/ },
    { pattern: /^(bg|text|border)-material-alphaDark-(5|10|20|40|60|80)$/ },
    { pattern: /^(bg|text|border)-solid-(white|black|primary|secondary|accent)$/ },
    { pattern: /^(bg|text|border)-system-(error|success|warning)-(5|10|20|40|60|80|100)$/ },
    { pattern: /^(p|m|gap)-(xxs|xs|sm|md|lg|xl|xxl|xxxl)$/ },
    { pattern: /^(px|py|pt|pb|pl|pr)-(xxs|xs|sm|md|lg|xl|xxl|xxxl)$/ },
    { pattern: /^(mx|my|mt|mb|ml|mr)-(xxs|xs|sm|md|lg|xl|xxl|xxxl)$/ },
    { pattern: /^rounded-(xs|sm|md|lg|xl|2xl)$/ },
    { pattern: /^text-(heading1|heading2|heading3|heading4|heading5|heading6|body|button|input|placeholder|caption|label|footnote|link)$/ },
    { pattern: /^font-montserrat-(light|regular|medium|semibold|bold)$/ },
    // Icon and component sizing
    { pattern: /^(w|h)-(4|6|8|10|12|14|16|20|24)$/ },
  ],
};
