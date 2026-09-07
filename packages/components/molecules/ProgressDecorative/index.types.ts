export interface ProgressDecorativeProps {
  /**
   * Progress value, 0–100.
   */
  progress: number;

  /**
   * Diameter in pixels.
   * @default 84
   */
  size?: number;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
