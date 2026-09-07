import type { IconName } from '../../types/icons.type';

export interface InputTileSelectProps {
  /**
   * Facility/feature icon.
   */
  iconName: IconName;

  /**
   * Short label under the icon.
   */
  label: string;

  /**
   * Active (selected) state — filled with brand primary.
   * @default false
   */
  isActive?: boolean;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
