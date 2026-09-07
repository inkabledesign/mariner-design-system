import type { SVGColor } from '../Icon';

export interface StarProps {
  /**
   * Filled (active) or outline (default) star.
   * @default false
   */
  active?: boolean;

  /**
   * Star color as a design-token class.
   * @default 'text-brand-primary-100'
   */
  color?: SVGColor;

  /**
   * Additional Tailwind classes (e.g. sizing 'w-5 h-5').
   * @default 'w-4 h-4'
   */
  className?: string;
}
