import type { TileCalendarDayProps } from '../../atoms/TileCalendarDay/index.types';

export interface WeeklyActivityCalendarProps {
  /**
   * The 7 days of the week.
   */
  days: TileCalendarDayProps[];

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
