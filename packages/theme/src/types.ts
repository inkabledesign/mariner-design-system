export type ScaleKey = "mobile" | "tablet" | "desktop-sm" | "desktop-lg";

export interface ColorPalette {
  light: ThemeColors;
  dark: ThemeColors;
}

export interface ThemeColors {
  brand: {
    primary: BrandColorScale;
    secondary: BrandColorScale;
    accent: BrandColorScale;
  };
  material: {
    surface: SurfaceColorScale;
    alphaDark: AlphaDarkColorScale;
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
}

export interface BrandColorScale {
  "5": string;
  "10": string;
  "20": string;
  "40": string;
  "60": string;
  "80": string;
  "100": string;
  "alpha-5": string;
  "alpha-10": string;
  "alpha-20": string;
  "alpha-40": string;
  "alpha-60": string;
  "alpha-80": string;
  "alpha-100": string;
}

export interface SurfaceColorScale {
  "0": string;
  "5": string;
  "10": string;
  "20": string;
  "40": string;
  "60": string;
  "80": string;
  "100": string;
}

export interface AlphaDarkColorScale {
  "5": string;
  "10": string;
  "20": string;
  "40": string;
  "60": string;
  "80": string;
}

export interface SystemColorScale {
  "5": string;
  "10"?: string;
  "20": string;
  "40": string;
  "60": string;
  "80": string;
  "100": string;
}

export interface TypographyScale {
  [key: string]: {
    text: {
      heading1: TypographyToken;
      heading2: TypographyToken;
      heading3: TypographyToken;
      heading4: TypographyToken;
      heading5: TypographyToken;
      heading6: TypographyToken;
      body: TypographyToken;
      button: TypographyToken;
      input: TypographyToken;
      placeholder: TypographyToken;
      caption: TypographyToken;
      label: TypographyToken;
      footnote: TypographyToken;
      link: TypographyToken;
    };
  };
}

export interface TypographyToken {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontStyle?: string;
}

export interface SpacingScale {
  [key: string]: {
    spacing: {
      xxs: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
  };
}

export interface RadiusScale {
  [key: string]: {
    radius: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  };
}

export interface DesignTokens {
  color: ColorPalette;
  typography: TypographyScale;
  spacing: SpacingScale;
  radius: RadiusScale;
}

/** Unified theme object aggregating all design tokens */
export type Theme = DesignTokens;
