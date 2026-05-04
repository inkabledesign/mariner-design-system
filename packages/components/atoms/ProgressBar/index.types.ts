import { StyleProp, ViewStyle } from 'react-native';

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
   * @default 2
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
}
