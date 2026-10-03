import type { IconName } from '../../types/icons.type';

export interface TileIconProps {
  /**
   * Facility/feature icon.
   */
  iconName: IconName;

  /**
   * Short label under the icon.
   */
  label: string;

  /**
   * Active state — icon and label in brand primary; otherwise muted.
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
