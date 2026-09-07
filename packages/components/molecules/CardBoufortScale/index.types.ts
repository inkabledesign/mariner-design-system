import type { ImageSource } from 'expo-image';

export interface CardBoufortScaleProps {
  /**
   * Beaufort force number.
   */
  force: number;

  /**
   * Wind speed in knots (e.g. "1-3").
   */
  windSpeedKnots?: string;

  /**
   * Wind speed in km/h (e.g. "1-5").
   */
  windSpeedKmh?: string;

  /**
   * Wave height in metres (e.g. "0-0.1").
   */
  waveHeightM?: string;

  /**
   * Scale description (e.g. "Light Air").
   */
  description?: string;

  /**
   * Sea conditions text.
   */
  seaConditions?: string;

  /**
   * Background image.
   */
  imageUrl?: ImageSource | string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
