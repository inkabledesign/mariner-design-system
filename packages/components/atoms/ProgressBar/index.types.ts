import { StyleProp, ViewStyle } from 'react-native';
import type { Breakpoint } from '@inkabledesign/mariner-theme';

export type ProgressBarStyle = 'primary' | 'accent';

export interface ProgressBarProps {
  /**
   * Progress value between 0 and 100
   */
  progress: number;

  /**
   * Style variant for the progress bar
   * @default 'accent'
   */
  style?: ProgressBarStyle;

  /**
   * Height of the progress bar in pixels
   * @default 12
   */
  height?: number;

  /**
   * Additional class names for custom styling
   */
  className?: string;

  /**
   * Animated style for the progress bar
   */
  animatedProgressLBarStyle?: StyleProp<ViewStyle>;

  /**
   * Breakpoint used for radius tokens
   * @default 'mobile'
   */
  breakpoint?: Breakpoint;
}
