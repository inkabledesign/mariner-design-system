import type { IconName } from '../../types/icons.type';

export interface TileWeatherRailItem {
  /**
   * Weather metric icon.
   */
  iconName: IconName;

  /**
   * Metric value (e.g. "33°C").
   */
  value: string;

  /**
   * Metric label (e.g. "Temp.").
   */
  label: string;
}

export interface TileWeatherRailProps {
  /**
   * Date label above the rail (e.g. "Friday 13th").
   */
  date?: string;

  /**
   * Weather metrics displayed in a horizontal row.
   */
  items: TileWeatherRailItem[];

  /**
   * Selects the color palette for text/icons.
   * @default 'light'
   */
  themeMode?: 'light' | 'dark';

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
