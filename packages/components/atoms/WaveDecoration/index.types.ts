import type { ViewStyle } from 'react-native';
import { SVGColor } from '../Icon';

export type WaveDirection = 'left' | 'right';

export interface WaveDecorationProps {
  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';
  variant: 'shortL' | 'shortR' | 'long';
  color?: SVGColor;
  style?: ViewStyle;
  className?: string;
}
