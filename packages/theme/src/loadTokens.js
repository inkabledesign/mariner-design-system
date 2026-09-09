const colorsJson = require("./colors.json");
const radiusJson = require("./radius.json");
const sizeJson = require("./size.json");
const spacingJson = require("./spacing.json");
const typographyJson = require("./typography.json");

const scaleMap = {
  mobile: "mobile-sm",
  "mobile-sm": "mobile-sm",
  tablet: "tablet-md",
  "tablet-md": "tablet-md",
  "desktop-sm": "desktop-sm",
  "desktop-lg": "desktop-lg",
};

const toPixels = (values) =>
  Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, `${value}px`]),
  );

const toTailwindTextColors = (text) => ({
  primary: text.primary,
  secondary: text.secondary,
  accent: text.accent,
  "dark-primary": text.darkPrimary,
  "dark-secondary": text.darkSecondary,
  "light-primary": text.lightPrimary,
  "light-secondary": text.lightSecondary,
});

const toTailwindFontSizes = (typography) =>
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

const makeColorTheme = (mode) => {
  const colors = colorsJson[mode];

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
    text: toTailwindTextColors(colors.text),
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

function buildTheme(scales) {
  const radius = radiusJson[scaleMap[scales.radius]].radius;
  const spacing = spacingJson[scaleMap[scales.spacing]].spacing;
  const size = sizeJson[scaleMap[scales.size]].size;
  const typography = typographyJson[scaleMap[scales.typography]].text;
  const pixelSize = toPixels(size);

  return {
    theme: {
      extend: {
        colors: makeColorTheme("light"),
        borderRadius: {
          xxs: `${radius.xxs}px`,
          xs: `${radius.xs}px`,
          sm: `${radius.sm}px`,
          md: `${radius.md}px`,
          lg: `${radius.lg}px`,
          xl: `${radius.xl}px`,
          "2xl": `${radius.xxl}px`,
          "3xl": `${radius.xxxl}px`,
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
          montserrat: ["Montserrat", "sans-serif"],
          "montserrat-light": ["Montserrat-Light", "sans-serif"],
          "montserrat-regular": ["Montserrat-Regular", "sans-serif"],
          "montserrat-medium": ["Montserrat-Medium", "sans-serif"],
          "montserrat-semibold": ["Montserrat-SemiBold", "sans-serif"],
          "montserrat-bold": ["Montserrat-Bold", "sans-serif"],
          rajdhani: ["Rajdhani", "sans-serif"],
          "rajdhani-light": ["Rajdhani-Light", "sans-serif"],
          "rajdhani-regular": ["Rajdhani-Regular", "sans-serif"],
          "rajdhani-medium": ["Rajdhani-Medium", "sans-serif"],
          "rajdhani-semibold": ["Rajdhani-SemiBold", "sans-serif"],
          "rajdhani-bold": ["Rajdhani-Bold", "sans-serif"],
          "space-mono": ["SpaceMono-Regular", "monospace"],
          "space-mono-regular": ["SpaceMono-Regular", "monospace"],
          "space-mono-bold": ["SpaceMono-Bold", "monospace"],
        },
      },
    },
    darkThemeOverride: {
      extend: {
        colors: makeColorTheme("dark"),
      },
    },
    size,
  };
}

module.exports = { buildTheme };
