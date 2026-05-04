// Main exports for @mariner/theme package
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radius';
export * from './types';
export * from './fontWeightMap';

// Re-export JSON files for direct access
export { default as colorsJson } from './colors.json';
export { default as typographyJson } from './typography.json';
export { default as spacingJson } from './spacing.json';
export { default as radiusJson } from './radius.json';

// Theme utility functions
export * from './utils/tokens.utils';
export * from './utils/style-helpers';

// Breakpoint hook
export * from './hooks/useBreakpoint';

// Unified theme object — single import for all tokens
import { color } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { radius } from './radius';
import type { Theme } from './types';

export const theme: Theme = {
  color,
  typography,
  spacing,
  radius,
};

// Utility function to build theme for Tailwind config
export function buildTheme(scales: {
  radius: 'mobile' | 'tablet' | 'desktop-sm' | 'desktop-lg';
  spacing: 'mobile' | 'tablet' | 'desktop-sm' | 'desktop-lg';
  size: 'mobile' | 'tablet' | 'desktop-sm' | 'desktop-lg';
  typography: 'mobile' | 'tablet' | 'desktop-sm' | 'desktop-lg';
}) {
  // Use the already-imported values (avoid self-referencing require cycle)
  const colorData = color;
  const typographyData = typography;
  const spacingData = spacing;
  const radiusData = radius;
  
  const radiusScale = radius[scales.radius].radius;
  const spacingScale = spacing[scales.spacing].spacing;
  const typographyScale = typography[scales.typography].text;
  
  // Colors: flatten to Tailwind-friendly objects
  const light = color.light;
  const dark = color.dark;

  // Tailwind expects nested objects like { primary: { 10: '#...', 20: '#...' } }
  const colorPalette = {
    // brand
    primary: light.brand.primary,
    secondary: light.brand.secondary,
    accent: light.brand.accent,
    // material
    surface: light.material.surface,
    alphaDark: light.material.alphaDark,
    // solids + system
    solid: light.solid,
    error: light.system.error,
    success: { DEFAULT: light.system.success },
    warning: { DEFAULT: light.system.warning },
    // expose dark as a parallel palette (used via dark:)
    _dark: {
      primary: dark.brand.primary,
      secondary: dark.brand.secondary,
      accent: dark.brand.accent,
      surface: dark.material.surface,
      alphaDark: dark.material.alphaDark,
      solid: dark.solid,
      error: dark.system.error,
      success: { DEFAULT: dark.system.success },
      warning: { DEFAULT: dark.system.warning },
    },
  };

  // Map to Tailwind theme fields
  return {
    theme: {
      extend: {
        colors: {
          // Use like bg-primary-80, text-secondary-100, bg-surface-0
          primary: colorPalette.primary,
          secondary: colorPalette.secondary,
          accent: colorPalette.accent,
          surface: colorPalette.surface,
          alphaDark: colorPalette.alphaDark,
          // solids & system
          white: colorPalette.solid.white,
          black: colorPalette.solid.black,
          brandPrimary: colorPalette.solid.primary,
          brandSecondary: colorPalette.solid.secondary,
          brandAccent: colorPalette.solid.accent,
          error: colorPalette.error,
          success: colorPalette.success,
          warning: colorPalette.warning,
        },
        borderRadius: {
          xs: `${radiusScale.xs}px`,
          sm: `${radiusScale.sm}px`,
          md: `${radiusScale.md}px`,
          lg: `${radiusScale.lg}px`,
          xl: `${radiusScale.xl}px`,
          '2xl': `${radiusScale.xxl}px`,
        },
        spacing: {
          xxs: `${spacingScale.xxs}px`,
          xs: `${spacingScale.xs}px`,
          sm: `${spacingScale.sm}px`,
          md: `${spacingScale.md}px`,
          lg: `${spacingScale.lg}px`,
          xl: `${spacingScale.xl}px`,
          xxl: `${spacingScale.xxl}px`,
          xxxl: `${spacingScale.xxxl}px`,
        },
        fontSize: {
          'heading1': [`${typographyScale.heading1.fontSize}px`, { lineHeight: `${typographyScale.heading1.lineHeight}px`, fontWeight: typographyScale.heading1.fontWeight }],
          'heading2': [`${typographyScale.heading2.fontSize}px`, { lineHeight: `${typographyScale.heading2.lineHeight}px`, fontWeight: typographyScale.heading2.fontWeight }],
          'heading3': [`${typographyScale.heading3.fontSize}px`, { lineHeight: `${typographyScale.heading3.lineHeight}px`, fontWeight: typographyScale.heading3.fontWeight }],
          'heading4': [`${typographyScale.heading4.fontSize}px`, { lineHeight: `${typographyScale.heading4.lineHeight}px`, fontWeight: typographyScale.heading4.fontWeight }],
          'heading5': [`${typographyScale.heading5.fontSize}px`, { lineHeight: `${typographyScale.heading5.lineHeight}px`, fontWeight: typographyScale.heading5.fontWeight }],
          'heading6': [`${typographyScale.heading6.fontSize}px`, { lineHeight: `${typographyScale.heading6.lineHeight}px`, fontWeight: typographyScale.heading6.fontWeight }],
          'body': [`${typographyScale.body.fontSize}px`, { lineHeight: `${typographyScale.body.lineHeight}px`, fontWeight: typographyScale.body.fontWeight }],
          'button': [`${typographyScale.button.fontSize}px`, { lineHeight: `${typographyScale.button.lineHeight}px`, fontWeight: typographyScale.button.fontWeight }],
          'input': [`${typographyScale.input.fontSize}px`, { lineHeight: `${typographyScale.input.lineHeight}px`, fontWeight: typographyScale.input.fontWeight }],
          'placeholder': [`${typographyScale.placeholder.fontSize}px`, { lineHeight: `${typographyScale.placeholder.lineHeight}px`, fontWeight: typographyScale.placeholder.fontWeight }],
          'caption': [`${typographyScale.caption.fontSize}px`, { lineHeight: `${typographyScale.caption.lineHeight}px`, fontWeight: typographyScale.caption.fontWeight }],
          'label': [`${typographyScale.label.fontSize}px`, { lineHeight: `${typographyScale.label.lineHeight}px`, fontWeight: typographyScale.label.fontWeight }],
          'footnote': [`${typographyScale.footnote.fontSize}px`, { lineHeight: `${typographyScale.footnote.lineHeight}px`, fontWeight: typographyScale.footnote.fontWeight }],
          'link': [`${typographyScale.link.fontSize}px`, { lineHeight: `${typographyScale.link.lineHeight}px`, fontWeight: typographyScale.link.fontWeight }],
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          'montserrat-light': ['Montserrat-Light', 'sans-serif'],
          'montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
          'montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
          'montserrat-semibold': ['Montserrat-SemiBold', 'sans-serif'],
          'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
        },
      },
    },
    // provide dark palette to components via `dark:` classes;
    darkThemeOverride: {
      extend: {
        colors: {
          primary: colorPalette._dark.primary,
          secondary: colorPalette._dark.secondary,
          accent: colorPalette._dark.accent,
          surface: colorPalette._dark.surface,
          alphaDark: colorPalette._dark.alphaDark,
          white: colorPalette._dark.solid.white,
          black: colorPalette._dark.solid.black,
          brandPrimary: colorPalette._dark.solid.primary,
          brandSecondary: colorPalette._dark.solid.secondary,
          brandAccent: colorPalette._dark.solid.accent,
          error: colorPalette._dark.error,
          success: colorPalette._dark.success,
          warning: colorPalette._dark.warning,
        },
      },
    },
  };
}
