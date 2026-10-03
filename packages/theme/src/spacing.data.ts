import spacingJson from './spacing.json';

/** Figma modes map to code breakpoints as SML → mobile, MED → tablet, LRG → desktop. */
export const spacingData = {
  mobile: spacingJson['mobile-sm'],
  tablet: spacingJson['tablet-md'],
  'desktop-sm': spacingJson['desktop-sm'],
  'desktop-lg': spacingJson['desktop-lg'],
} as const;
