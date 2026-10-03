export interface ProgressDataItemProps {
  /**
   * The large stat value (e.g. "51").
   */
  value: string | number;

  /**
   * The label beneath the value (e.g. "Total").
   */
  label: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
