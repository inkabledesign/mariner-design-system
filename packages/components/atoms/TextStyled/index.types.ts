import type { TextStyle as RNTextStyle } from 'react-native';
import type { TextStyles } from '@/style/tokens.types';
import type { Breakpoint } from '@mariner/theme';

export interface StyledTextProps {
  /** Breakpoint for responsive typography resolution @default 'mobile' */
  breakpoint?: Breakpoint;
  // Text content
  text?: string;
  children?: React.ReactNode;

  // Typography
  textStyle?: keyof TextStyles;

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

  // Additional styles
  style?: RNTextStyle;
  className?: string;
}
