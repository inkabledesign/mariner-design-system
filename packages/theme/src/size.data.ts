import sizeJson from './size.json';

export const sizeData = {
  mobile: sizeJson['mobile-sm'],
  tablet: sizeJson['tablet-md'],
  'desktop-sm': sizeJson['desktop-sm'],
  'desktop-lg': sizeJson['desktop-lg'],
} as const;
