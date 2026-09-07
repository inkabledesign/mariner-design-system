import type { TileWeatherRailItem } from '../TileWeatherRail/index.types';

export interface CardWeatherDetailProps {
  /**
   * Date label (e.g. "Friday 13th").
   */
  date: string;

  /**
   * Weather metrics displayed in a horizontal row.
   */
  items: TileWeatherRailItem[];

  /**
   * Short summary text below the metrics.
   */
  summary?: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
