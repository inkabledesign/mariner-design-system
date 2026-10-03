export interface TileWeatherHeaderProps {
  /**
   * Section title (e.g. "Tides", "Weather").
   */
  title: string;

  /**
   * Day/time line (e.g. "Friday 13th | 12:20am").
   */
  day: string;

  /**
   * Short weather description.
   */
  description?: string;

  /**
   * Selects the color palette for text.
   * @default 'dark'
   */
  themeMode?: 'light' | 'dark';

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
