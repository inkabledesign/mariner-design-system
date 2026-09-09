export type ScaleKey = 'mobile' | 'tablet' | 'desktop-sm' | 'desktop-lg';

export interface ColorPalette {
  light: ThemeColors;
  dark: ThemeColors;
}

export interface ThemeColors {
  brand: {
    primary: PrimaryColorScale;
    secondary: ColorScale;
    accent: AccentColorScale;
  };
  material: {
    surface: SurfaceColorScale;
    alphaDark: AlphaColorScale;
    alphaLight: AlphaColorScale;
  };
  solid: {
    white: string;
    black: string;
    primary: string;
    secondary: string;
    accent: string;
  };
  system: {
    error: SystemColorScale;
    success: SystemColorScale;
    warning: SystemColorScale;
  };
  text: TextColorScale;
}

export interface ColorScale {
  '5': string;
  '10': string;
  '20': string;
  '40': string;
  '60': string;
  '80': string;
  '100': string;
}

export interface AlphaColorScale extends ColorScale {
  '0': string;
}

export interface PrimaryColorScale extends ColorScale {
  dark: string;
  'alpha-5': string;
  'alpha-10': string;
  'alpha-20': string;
  'alpha-40': string;
  'alpha-60': string;
  'alpha-80': string;
  'alpha-100': string;
}

export interface AccentColorScale extends ColorScale {
  'alpha-5': string;
  'alpha-10': string;
  'alpha-20': string;
  'alpha-40': string;
  'alpha-60': string;
  'alpha-80': string;
  'alpha-100': string;
}

export interface SurfaceColorScale extends AlphaColorScale {
  light: string;
  dark: string;
}

export type SystemColorScale = ColorScale;

export interface TextColorScale {
  primary: string;
  secondary: string;
  accent: string;
  darkPrimary: string;
  darkSecondary: string;
  lightPrimary: string;
  lightSecondary: string;
}

export interface TypographyTextScale {
  heading1: TypographyToken;
  heading2: TypographyToken;
  heading3: TypographyToken;
  heading4: TypographyToken;
  heading5: TypographyToken;
  heading6: TypographyToken;
  body: TypographyToken;
  quote: TypographyToken;
  button: TypographyToken;
  input: TypographyToken;
  placeholder: TypographyToken;
  caption: TypographyToken;
  label: TypographyToken;
  footnote: TypographyToken;
  link: TypographyToken;
  number: TypographyToken;
}

export type TypographyScale = Record<ScaleKey, { text: TypographyTextScale }>;

export interface TypographyToken {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontStyle?: string;
}

export interface SpacingValues {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export type SpacingScale = Record<ScaleKey, { spacing: SpacingValues }>;

export interface RadiusValues {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export type RadiusScale = Record<ScaleKey, { radius: RadiusValues }>;

export interface SizeValues {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export type SizeScale = Record<ScaleKey, { size: SizeValues }>;

export interface DesignTokens {
  color: ColorPalette;
  typography: TypographyScale;
  spacing: SpacingScale;
  radius: RadiusScale;
  size: SizeScale;
}

/** Unified theme object aggregating all design tokens. */
export type Theme = DesignTokens;
