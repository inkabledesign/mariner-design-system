import type { IconName } from '../../types/icons.type';

export interface CardToolProps {
  /**
   * Tool icon.
   */
  iconName: IconName;

  /**
   * Tool title.
   */
  title: string;

  /**
   * Short description under the title.
   */
  paragraph?: string;

  /**
   * Press handler — renders the card pressable.
   */
  onPress?: () => void;

  /**
   * Icon size classes.
   * @default 'w-8 h-8'
   */
  iconSize?: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
