import spacingJson from './spacing.json';
import type { SpacingScale } from './types';

export const spacing: SpacingScale = spacingJson;

// Export individual scales for easier access
export const mobileSpacing = spacing['mobile'];
export const tabletSpacing = spacing['tablet'];
export const desktopSmSpacing = spacing['desktop-sm'];
export const desktopLgSpacing = spacing['desktop-lg'];

// Export common spacing values from mobile as defaults
export const spacingValues = spacing['mobile'].spacing;

export default spacing;
