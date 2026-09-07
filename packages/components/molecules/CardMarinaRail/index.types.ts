import type { ImageSource } from 'expo-image';
import type { IconName } from '../../types/icons.type';

export interface CardMarinaRailProps {
  /**
   * Card title (e.g. marina name).
   */
  title: string;

  /**
   * Subtitle shown beside the title.
   */
  subtitle?: string;

  /**
   * Marker icon inside the circular badge.
   * @default 'ico-berth-round'
   */
  markerIconName?: IconName;

  /**
   * Card image source (4:3).
   */
  source?: ImageSource | string;

  /**
   * Coordinate tag label (e.g. "51 30' 40''N, 0 2' 12''W").
   */
  coordinates?: string;

  /**
   * Distance tag label (e.g. "200 miles").
   */
  distance?: string;

  /**
   * Card press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
