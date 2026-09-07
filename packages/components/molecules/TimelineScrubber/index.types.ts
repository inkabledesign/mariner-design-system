export interface TimelineScrubberProps {
  /**
   * Hour labels shown along the time rail.
   */
  hours: string[];

  /**
   * Scrubber indicator position as a 0–1 fraction across the rail width.
   * @default 0
   */
  position?: number;

  /**
   * Number of sub-ticks per hour segment.
   * @default 5
   */
  subTicks?: number;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
