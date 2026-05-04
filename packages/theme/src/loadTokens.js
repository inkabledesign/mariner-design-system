const colorsJson = require('./colors.json')
const radiusJson = require('./radius.json')
const spacingJson = require('./spacing.json')
const sizeJson = require('./size.json')
const typographyJson = require('./typography.json')

function buildTheme(scales) {
  const radius = radiusJson[scales.radius].radius
  const spacing = spacingJson[scales.spacing].spacing
  const size = sizeJson[scales.size].size
  const typography = typographyJson[scales.typography].text

  // Colors: flatten to Tailwind-friendly objects
  const light = colorsJson.light
  const dark = colorsJson.dark

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
    success: light.system.success,
    warning: light.system.warning,
    // expose dark as a parallel palette (used via dark:)
    _dark: {
      primary: dark.brand.primary,
      secondary: dark.brand.secondary,
      accent: dark.brand.accent,
      surface: dark.material.surface,
      alphaDark: dark.material.alphaDark,
      solid: dark.solid,
      error: dark.system.error,
      success: dark.system.success,
      warning: dark.system.warning,
    },
  }

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
          // Brand category (for text-brand-primary-100 pattern)
          brand: {
            primary: colorPalette.primary,
            secondary: colorPalette.secondary,
            accent: colorPalette.accent,
          },
          // Material category (for text-material-surface-80 pattern)
          material: {
            surface: colorPalette.surface,
            alphaDark: colorPalette.alphaDark,
          },
          // Solid category (for text-solid-white pattern)
          solid: colorPalette.solid,
          // System category
          system: {
            error: colorPalette.error,
            success: colorPalette.success,
            warning: colorPalette.warning,
          },
          // solids & system (legacy)
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
          xs: `${radius.xs}px`,
          sm: `${radius.sm}px`,
          md: `${radius.md}px`,
          lg: `${radius.lg}px`,
          xl: `${radius.xl}px`,
          '2xl': `${radius.xxl}px`,
        },
        spacing: {
          xxs: `${spacing.xxs}px`,
          xs: `${spacing.xs}px`,
          sm: `${spacing.sm}px`,
          md: `${spacing.md}px`,
          lg: `${spacing.lg}px`,
          xl: `${spacing.xl}px`,
          xxl: `${spacing.xxl}px`,
          xxxl: `${spacing.xxxl}px`,
        },
        fontSize: {
          'heading1': [`${typography.heading1.fontSize}px`, { lineHeight: `${typography.heading1.lineHeight}px`, fontWeight: typography.heading1.fontWeight, letterSpacing: `${typography.heading1.letterSpacing}px` }],
          'heading2': [`${typography.heading2.fontSize}px`, { lineHeight: `${typography.heading2.lineHeight}px`, fontWeight: typography.heading2.fontWeight, letterSpacing: `${typography.heading2.letterSpacing}px` }],
          'heading3': [`${typography.heading3.fontSize}px`, { lineHeight: `${typography.heading3.lineHeight}px`, fontWeight: typography.heading3.fontWeight, letterSpacing: `${typography.heading3.letterSpacing}px` }],
          'heading4': [`${typography.heading4.fontSize}px`, { lineHeight: `${typography.heading4.lineHeight}px`, fontWeight: typography.heading4.fontWeight, letterSpacing: `${typography.heading4.letterSpacing}px` }],
          'heading5': [`${typography.heading5.fontSize}px`, { lineHeight: `${typography.heading5.lineHeight}px`, fontWeight: typography.heading5.fontWeight, letterSpacing: `${typography.heading5.letterSpacing}px` }],
          'heading6': [`${typography.heading6.fontSize}px`, { lineHeight: `${typography.heading6.lineHeight}px`, fontWeight: typography.heading6.fontWeight, letterSpacing: `${typography.heading6.letterSpacing}px` }],
          'body': [`${typography.body.fontSize}px`, { lineHeight: `${typography.body.lineHeight}px`, fontWeight: typography.body.fontWeight, letterSpacing: `${typography.body.letterSpacing}px` }],
          'button': [`${typography.button.fontSize}px`, { lineHeight: `${typography.button.lineHeight}px`, fontWeight: typography.button.fontWeight, letterSpacing: `${typography.button.letterSpacing}px` }],
          'input': [`${typography.input.fontSize}px`, { lineHeight: `${typography.input.lineHeight}px`, fontWeight: typography.input.fontWeight, letterSpacing: `${typography.input.letterSpacing}px` }],
          'placeholder': [`${typography.placeholder.fontSize}px`, { lineHeight: `${typography.placeholder.lineHeight}px`, fontWeight: typography.placeholder.fontWeight, letterSpacing: `${typography.placeholder.letterSpacing}px` }],
          'caption': [`${typography.caption.fontSize}px`, { lineHeight: `${typography.caption.lineHeight}px`, fontWeight: typography.caption.fontWeight, letterSpacing: `${typography.caption.letterSpacing}px` }],
          'label': [`${typography.label.fontSize}px`, { lineHeight: `${typography.label.lineHeight}px`, fontWeight: typography.label.fontWeight, letterSpacing: `${typography.label.letterSpacing}px` }],
          'footnote': [`${typography.footnote.fontSize}px`, { lineHeight: `${typography.footnote.lineHeight}px`, fontWeight: typography.footnote.fontWeight, letterSpacing: `${typography.footnote.letterSpacing}px` }],
          'link': [`${typography.link.fontSize}px`, { lineHeight: `${typography.link.lineHeight}px`, fontWeight: typography.link.fontWeight, letterSpacing: `${typography.link.letterSpacing}px` }],
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
    // values use the SAME keys (primary, surface, etc). You don't need a second map:
    darkThemeOverride: {
      extend: {
        colors: {
          primary: colorPalette._dark.primary,
          secondary: colorPalette._dark.secondary,
          accent: colorPalette._dark.accent,
          surface: colorPalette._dark.surface,
          alphaDark: colorPalette._dark.alphaDark,
          // Brand category (for dark mode)
          brand: {
            primary: colorPalette._dark.primary,
            secondary: colorPalette._dark.secondary,
            accent: colorPalette._dark.accent,
          },
          // Material category (for dark mode)
          material: {
            surface: colorPalette._dark.surface,
            alphaDark: colorPalette._dark.alphaDark,
          },
          // Solid category (for dark mode)
          solid: colorPalette._dark.solid,
          // System category (for dark mode)
          system: {
            error: colorPalette._dark.error,
            success: colorPalette._dark.success,
            warning: colorPalette._dark.warning,
          },
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
    size, // export raw size tokens if you want custom utilities
  }
}

module.exports = { buildTheme }
