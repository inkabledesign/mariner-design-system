export interface StepNumberProps {
  /**
   * The step number (or short label) shown inside the circle.
   */
  number: number | string;

  /**
   * Active state. Swaps the primary/accent colour pairing.
   * @default false
   */
  active?: boolean;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
