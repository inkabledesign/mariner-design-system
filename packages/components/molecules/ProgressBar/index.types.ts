export type ProgressBarStyle = 'accent' | 'primary';

export interface ProgressBarProps {
  /**
   * Progress value (0-100)
   */
  progress: number;

  /**
   * Visual style variant
   * - accent: Gold/tan colors (brand-accent)
   * - primary: Blue colors (brand-primary)
   * @default 'accent'
   */
  style?: ProgressBarStyle;

  /**
   * Additional CSS classes
   */
  className?: string;
}
