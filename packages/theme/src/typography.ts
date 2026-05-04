import typographyJson from './typography.json';
import type { TypographyScale } from './types';

export const typography: TypographyScale = typographyJson;

// Export individual scales for easier access
export const mobileTypography = typography['mobile'];
export const tabletTypography = typography['tablet'];
export const desktopSmTypography = typography['desktop-sm'];
export const desktopLgTypography = typography['desktop-lg'];

// Export common text styles from mobile as defaults
export const textStyles = typography['mobile'].text;

export default typography;
