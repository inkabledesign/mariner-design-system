export interface PageControlProps {
  /**
   * Total number of dots.
   */
  count: number;

  /**
   * Zero-based index of the selected dot.
   * @default 0
   */
  selected?: number;

  /**
   * Render the dots on a translucent dark "platter" background.
   * @default false
   */
  platter?: boolean;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
