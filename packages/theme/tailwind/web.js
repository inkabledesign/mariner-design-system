// Web Tailwind configuration for Next.js
const { buildTheme } = require('../src/loadTokens.js');

const { theme } = buildTheme({
  radius: 'desktop-sm',
  spacing: 'desktop-sm',
  size: 'desktop-sm',
  typography: 'desktop-sm',
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: theme.extend,
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
    // Icon and component sizing - base classes
    { pattern: /^(w|h)-(4|6|8|10|12|14|16|20|24)$/ },
    // Icon and component sizing - responsive classes
    'md:w-4', 'md:h-4', 'md:w-6', 'md:h-6', 'md:w-8', 'md:h-8', 
    'md:w-10', 'md:h-10', 'md:w-12', 'md:h-12', 'md:w-14', 'md:h-14',
    'md:w-16', 'md:h-16', 'md:w-20', 'md:h-20', 'md:w-24', 'md:h-24',
    'lg:w-4', 'lg:h-4', 'lg:w-6', 'lg:h-6', 'lg:w-8', 'lg:h-8',
    'lg:w-10', 'lg:h-10', 'lg:w-12', 'lg:h-12', 'lg:w-14', 'lg:h-14',
    'lg:w-16', 'lg:h-16', 'lg:w-20', 'lg:h-20', 'lg:w-24', 'lg:h-24',
    'xl:w-4', 'xl:h-4', 'xl:w-6', 'xl:h-6', 'xl:w-8', 'xl:h-8',
    'xl:w-10', 'xl:h-10', 'xl:w-12', 'xl:h-12', 'xl:w-14', 'xl:h-14',
    'xl:w-16', 'xl:h-16', 'xl:w-20', 'xl:h-20', 'xl:w-24', 'xl:h-24',
  ],
};
