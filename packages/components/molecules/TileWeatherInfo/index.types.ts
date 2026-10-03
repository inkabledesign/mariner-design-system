import type { IconName } from '../../types/icons.type';

export interface TileWeatherInfoProps {
  /**
   * Weather icon (weather category).
   * @default 'ico-weather-cloudy'
   */
  iconName?: IconName;

  /**
   * Temperature label (e.g. "27°C").
   */
  temperature: string;

  /**
   * Condition label (e.g. "Partly cloudy").
   */
  condition: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
