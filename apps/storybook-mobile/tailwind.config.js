// Mobile Storybook NativeWind config — loads Mariner design tokens
const path = require('path');
const { buildTheme } = require('../../packages/theme/src/loadTokens.js');

const { theme } = buildTheme({
  radius: 'mobile-sm',
  spacing: 'mobile-sm',
  size: 'mobile-sm',
  typography: 'mobile-sm',
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/components/{atoms,molecules,organisms,templates,hooks,data}/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: theme.extend,
  },
  plugins: [],
  presets: [require('nativewind/preset')],
  safelist: [
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
    { pattern: /^(w|h)-(4|6|8|10|12|14|16|20|24)$/ },
  ],
};
