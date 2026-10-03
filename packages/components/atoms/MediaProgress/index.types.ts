export interface MediaProgressProps {
  /**
   * Playback progress, 0–100.
   */
  progress: number;

  /**
   * Elapsed time label (e.g. "00:16").
   */
  currentTime: string;

  /**
   * Total duration label (e.g. "03:42").
   */
  totalTime: string;

  /**
   * Colour token for the time labels. Defaults to light text for use over media.
   * @default 'text-material-surface-0'
   */
  labelClassName?: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
