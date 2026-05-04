import colorsJson from './colors.json';
import type { ColorPalette } from './types';

export const color: ColorPalette = colorsJson;

/** @deprecated Use `color` instead */
export const colors = color;

// Export individual color scales for easier access
export const lightColors = color.light;
export const darkColors = color.dark;

// Brand colors
export const brandPrimary = color.light.brand.primary;
export const brandSecondary = color.light.brand.secondary;
export const brandAccent = color.light.brand.accent;

// Material colors
export const materialSurface = color.light.material.surface;
export const materialAlphaDark = color.light.material.alphaDark;

// Solid colors
export const solidColors = color.light.solid;

// System colors
export const systemError = color.light.system.error;
export const systemSuccess = color.light.system.success;
export const systemWarning = color.light.system.warning;

export default color;
