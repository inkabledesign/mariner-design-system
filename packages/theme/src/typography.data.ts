import typographyJson from './typography.json';

/** Figma modes map to code breakpoints as SML → mobile, MED → tablet, LRG → desktop. */
export const typographyData = {
  mobile: typographyJson['mobile-sm'],
  tablet: typographyJson['tablet-md'],
  'desktop-sm': typographyJson['desktop-sm'],
  'desktop-lg': typographyJson['desktop-lg'],
} as const;
