import type { SVGColor } from '../Icon';

export interface RatingProps {
  /**
   * Current rating value (number of filled stars). Rounded to the nearest whole star.
   */
  value: number;

  /**
   * Total number of stars.
   * @default 5
   */
  max?: number;

  /**
   * Star color as a design-token class.
   * @default 'text-brand-primary-100'
   */
  color?: SVGColor;

  /**
   * Star sizing class.
   * @default 'w-4 h-4'
   */
  starClassName?: string;

  /**
   * Additional Tailwind classes for the row container.
   */
  className?: string;
}
