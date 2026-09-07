export interface TileCalendarDayProps {
  /**
   * Day letter (e.g. "M", "T").
   */
  dayLetter: string;

  /**
   * Day of month (e.g. 14).
   */
  dayNumber: string | number;

  /**
   * Day has a completed activity.
   */
  isCompleted?: boolean;

  /**
   * Day is the current/active day.
   * @default false
   */
  isActive?: boolean;

  /**
   * Day is in the future.
   * @default false
   */
  isFuture?: boolean;
}
