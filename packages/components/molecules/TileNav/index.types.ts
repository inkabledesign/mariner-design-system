import type { IconName } from '../../types/icons.type';

export interface TileNavProps {
  /**
   * Tile title.
   */
  title: string;

  /**
   * Tile icon.
   */
  iconName: IconName;

  /**
   * Selected state (filled brand-primary background).
   * @default false
   */
  selected?: boolean;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
