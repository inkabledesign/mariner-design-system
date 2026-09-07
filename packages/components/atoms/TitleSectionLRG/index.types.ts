import type { SVGColor } from '../Icon';

export interface TitleSectionLRGProps {
  /**
   * Large section title text.
   */
  title: string;

  /**
   * Title + underline colour token.
   * @default 'text-brand-accent-100'
   */
  color?: SVGColor;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
