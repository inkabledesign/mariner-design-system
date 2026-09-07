import type { ImageSource } from 'expo-image';
import type { IconName } from '../../types/icons.type';

export interface CardMarinaListProps {
  /**
   * Title (e.g. marina or crew name).
   */
  title: string;

  /**
   * Subtitle (e.g. role or location).
   */
  subtitle?: string;

  /**
   * Optional image shown in the circular thumbnail.
   * Falls back to `iconName` on a tinted circle.
   */
  source?: ImageSource | string;

  /**
   * Fallback icon when no image is provided.
   * @default 'ico-marina'
   */
  iconName?: IconName;

  /**
   * Status badge label (e.g. "Available"). Hidden when omitted.
   */
  badgeLabel?: string;

  /**
   * Short descriptor tags (e.g. "Certified", "200 miles").
   */
  tags?: string[];

  /**
   * Card press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
