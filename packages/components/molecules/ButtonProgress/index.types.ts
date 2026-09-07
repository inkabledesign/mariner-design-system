export interface ButtonProgressProps {
  /**
   * Colour variant.
   * @default 'secondary'
   */
  variant?: 'primary' | 'secondary';

  /**
   * Progress percentage (0–100).
   */
  percentage: number;

  /**
   * Total number of files being downloaded.
   */
  totalFiles?: number;

  /**
   * Number of files downloaded so far.
   */
  downloadedFiles?: number;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
