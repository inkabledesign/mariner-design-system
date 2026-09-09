// Main exports for @inkabledesign/mariner-theme
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radius';
export * from './size';
export * from './types';
export * from './fontWeightMap';

// Re-export JSON files for direct access.
export { default as colorsJson } from './colors.json';
export { default as typographyJson } from './typography.json';
export { default as spacingJson } from './spacing.json';
export { default as radiusJson } from './radius.json';
export { default as sizeJson } from './size.json';

export * from './utils/tokens.utils';
export * from './utils/style-helpers';
export * from './hooks/useBreakpoint';
export * from './hooks/useDesignTokens';
export { buildTheme } from './loadTokens';

import { color } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import { size } from './size';
import type { Theme } from './types';

/** All Mariner style and variable tokens in one object. */
export const theme: Theme = {
  color,
  typography,
  spacing,
  radius,
  size,
};
