import type { TextProps } from 'react-native';
import type { Breakpoint, TypographyTextScale } from '@inkabledesign/mariner-theme';

export interface StyledTextProps extends TextProps {
  /** Breakpoint for responsive typography resolution @default 'mobile' */
  breakpoint?: Breakpoint;
  // Text content
  text?: string;
  children?: React.ReactNode;

  // Typography
  textStyle?: keyof TypographyTextScale;

  /**
   * Font weight override
   * - '300': Light
   * - '400': Regular
   * - '500': Medium
   * - '600': SemiBold
   * - '700': Bold
   * If not provided, uses the weight from textStyle
   */
  fontWeight?: '300' | '400' | '500' | '600' | '700';

  // Color
  colorCategory?: 'brand' | 'material' | 'solid' | 'system';
  colorName?: string;
  colorVariant?: '0' | '5' | '10' | '20' | '40' | '60' | '80' | '100';

  // Alignment
  textAlign?: 'left' | 'center' | 'right' | 'justify';

  // Text truncation
  numberOfLines?: number;

  // Allow the user to select text
  selectable?: boolean;

  // Additional styles
  className?: string;
}
