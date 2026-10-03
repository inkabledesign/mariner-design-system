import radiusJson from './radius.json';

/** Figma modes map to code breakpoints as SML → mobile, MED → tablet, LRG → desktop. */
export const radiusData = {
  mobile: radiusJson['mobile-sm'],
  tablet: radiusJson['tablet-md'],
  'desktop-sm': radiusJson['desktop-sm'],
  'desktop-lg': radiusJson['desktop-lg'],
} as const;
