import type { IconName } from '../../types/icons.type';

export type ChipType = 'text' | 'icon' | 'filter';

export interface ChipProps {
  /**
   * Chip label text.
   */
  label?: string;

  /**
   * Chip type.
   * - text: label only
   * - icon: leading icon + label
   * - filter: label + trailing filter icon
   * @default 'text'
   */
  type?: ChipType;

  /**
   * Selected state (filled brand tint + primary text).
   * @default false
   */
  selected?: boolean;

  /**
   * Show the label.
   * @default true
   */
  hasText?: boolean;

  /**
   * Leading icon name (icon type).
   * @default 'ico-mylocation'
   */
  iconName?: IconName;

  /**
   * Trailing icon name (filter type / hasTrailing).
   * @default 'ico-filter-round'
   */
  trailingIconName?: IconName;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
