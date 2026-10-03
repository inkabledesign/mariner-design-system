import type { IconName } from '../../types/icons.type';

export interface TileWeatherItemProps {
  /**
   * Weather metric icon.
   */
  iconName: IconName;

  /**
   * Metric value (e.g. "33°C", "87%", "8.1 km").
   */
  value: string;

  /**
   * Metric label (e.g. "Temp.", "Humidity").
   */
  label: string;

  /**
   * Selects the color palette for text/icon.
   * @default 'light'
   */
  themeMode?: 'light' | 'dark';

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
