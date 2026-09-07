export interface DotsRowProps {
  /**
   * Number of small dots to render.
   * @default 4
   */
  count?: number;

  /**
   * Dot colour as a background token class.
   * @default 'bg-brand-primary-100'
   */
  dotClassName?: string;

  /**
   * Additional Tailwind classes for the row.
   */
  className?: string;
}
