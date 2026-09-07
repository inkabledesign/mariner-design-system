export interface TimelineProps {
  /**
   * Hour labels shown along the time rail (e.g. ["12:00", "13:00", ...]).
   */
  hours: string[];

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
