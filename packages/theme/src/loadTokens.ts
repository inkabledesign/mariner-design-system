import { colorsData } from './colors.data';
import { radiusData } from './radius.data';
import { sizeData } from './size.data';
import { spacingData } from './spacing.data';
import { typographyData } from './typography.data';
import type { ScaleKey, TextColorScale, TypographyTextScale } from './types';

type InputScaleKey = ScaleKey | 'mobile-sm' | 'tablet-md';

interface BuildThemeParams {
  radius: InputScaleKey;
  spacing: InputScaleKey;
  size: InputScaleKey;
  typography: InputScaleKey;
}

const normalizeScale = (scale: InputScaleKey): ScaleKey => {
  if (scale === 'mobile-sm') return 'mobile';
  if (scale === 'tablet-md') return 'tablet';
  return scale;
};

const toPixels = <T extends Record<string, number>>(values: T) =>
  Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, `${value}px`]),
  );

const toTailwindTextColors = (text: TextColorScale) => ({
  primary: text.primary,
  secondary: text.secondary,
  accent: text.accent,
  'dark-primary': text.darkPrimary,
  'dark-secondary': text.darkSecondary,
  'light-primary': text.lightPrimary,
  'light-secondary': text.lightSecondary,
});

const toTailwindFontSizes = (typography: TypographyTextScale) =>
  Object.fromEntries(
    Object.entries(typography).map(([name, token]) => [
      name,
      [
        `${token.fontSize}px`,
        {
          lineHeight: `${token.lineHeight}px`,
          fontWeight: token.fontWeight,
          letterSpacing: `${token.letterSpacing}px`,
        },
      ],
    ]),
  );

const makeColorTheme = (mode: 'light' | 'dark') => {
  const colors = colorsData[mode];
  const text = toTailwindTextColors(colors.text);

  return {
    primary: colors.brand.primary,
    secondary: colors.brand.secondary,
    accent: colors.brand.accent,
    surface: colors.material.surface,
    alphaDark: colors.material.alphaDark,
    alphaLight: colors.material.alphaLight,
    brand: colors.brand,
    material: colors.material,
    solid: colors.solid,
    system: colors.system,
    text,
    white: colors.solid.white,
    black: colors.solid.black,
    brandPrimary: colors.solid.primary,
    brandSecondary: colors.solid.secondary,
    brandAccent: colors.solid.accent,
    error: colors.system.error,
    success: colors.system.success,
    warning: colors.system.warning,
  };
};

export function buildTheme(scales: BuildThemeParams) {
  const radius = radiusData[normalizeScale(scales.radius)].radius;
  const spacing = spacingData[normalizeScale(scales.spacing)].spacing;
  const size = sizeData[normalizeScale(scales.size)].size;
  const typography = typographyData[normalizeScale(scales.typography)].text;
  const pixelSize = toPixels(size);

  return {
    theme: {
      extend: {
        colors: makeColorTheme('light'),
        borderRadius: {
          xxs: `${radius.xxs}px`,
          xs: `${radius.xs}px`,
          sm: `${radius.sm}px`,
          md: `${radius.md}px`,
          lg: `${radius.lg}px`,
          xl: `${radius.xl}px`,
          '2xl': `${radius.xxl}px`,
          '3xl': `${radius.xxxl}px`,
          xxl: `${radius.xxl}px`,
          xxxl: `${radius.xxxl}px`,
        },
        spacing: toPixels(spacing),
        size: pixelSize,
        width: pixelSize,
        height: pixelSize,
        minWidth: pixelSize,
        minHeight: pixelSize,
        maxWidth: pixelSize,
        maxHeight: pixelSize,
        fontSize: toTailwindFontSizes(typography),
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          'montserrat-light': ['Montserrat-Light', 'sans-serif'],
          'montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
          'montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
          'montserrat-semibold': ['Montserrat-SemiBold', 'sans-serif'],
          'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
          'space-mono': ['SpaceMono-Regular', 'monospace'],
          'space-mono-regular': ['SpaceMono-Regular', 'monospace'],
          'space-mono-bold': ['SpaceMono-Bold', 'monospace'],
        },
      },
    },
    darkThemeOverride: {
      extend: {
        colors: makeColorTheme('dark'),
      },
    },
    size,
  };
}
