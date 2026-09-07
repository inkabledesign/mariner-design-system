import type { SharedValue } from 'react-native-reanimated';
import type { ProgressBarStyle } from '../../atoms/ProgressBar/index.types';

export interface ModuleProgressProps {
  /**
   * Module completion percentage (0–100).
   */
  progress?: number;

  /**
   * Colour variant.
   * @default 'accent'
   */
  variant?: ProgressBarStyle;

  /**
   * Optional shared value driving the label opacity (scroll-linked).
   */
  animatedOpacity?: SharedValue<number>;

  /**
   * Optional shared value driving the collapse animation (scroll-linked).
   * Maps scroll position 102→170 to collapse progress 0→1.
   */
  animatedPositionY?: SharedValue<number>;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
