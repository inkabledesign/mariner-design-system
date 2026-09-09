const darkVariant = ["dark"];

/**
 * Classes assembled dynamically by Mariner components cannot be discovered by
 * Tailwind's source scanner. Keep that knowledge in the design system so every
 * consumer produces the same utilities and variants.
 */
const safelist = [
  {
    pattern:
      /^(bg|text|border)-(brand-(primary|secondary|accent)-(dark|5|10|20|40|60|80|100)|material-surface-(light|dark|0|5|10|20|40|60|80|100)|material-alpha(Dark|Light)-(0|5|10|20|40|60|80|100)|text-(primary|secondary|accent|dark-primary|dark-secondary|light-primary|light-secondary)|solid-(white|black|primary|secondary|accent)|system-(error|success|warning)-(5|10|20|40|60|80|100))$/,
    variants: darkVariant,
  },
  {
    pattern:
      /^(bg|text|border)-brand-(primary|accent)-alpha-(5|10|20|40|60|80|100)$/,
    variants: darkVariant,
  },
  {
    pattern:
      /^(bg|text|border)-(primary|secondary|accent|surface|alphaDark|alphaLight|error|success|warning)-(dark|light|0|5|10|20|40|60|80|100)$/,
    variants: darkVariant,
  },
  { pattern: /^(p|m|gap)-(xxs|xs|sm|md|lg|xl|xxl|xxxl)$/ },
  { pattern: /^(px|py|pt|pb|pl|pr)-(xxs|xs|sm|md|lg|xl|xxl|xxxl)$/ },
  { pattern: /^(mx|my|mt|mb|ml|mr)-(xxs|xs|sm|md|lg|xl|xxl|xxxl)$/ },
  { pattern: /^rounded-(xxs|xs|sm|md|lg|xl|2xl|3xl|xxl|xxxl)$/ },
  {
    pattern:
      /^text-(heading1|heading2|heading3|heading4|heading5|heading6|body|quote|button|input|placeholder|caption|label|footnote|link|number)$/,
  },
  { pattern: /^font-montserrat(-(light|regular|medium|semibold|bold))?$/ },
  { pattern: /^font-rajdhani(-(light|regular|medium|semibold|bold))?$/ },
  { pattern: /^font-space-mono(-(regular|bold))?$/ },
  { pattern: /^(w|h|min-w|min-h|max-w|max-h)-(xxs|xs|sm|md|lg|xl|xxl)$/ },
  { pattern: /^(w|h)-(4|6|8|10|12|14|16|20|24)$/ },
];

module.exports = { safelist };
