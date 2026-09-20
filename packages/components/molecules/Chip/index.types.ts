import type { IconName } from '../../types/icons.type';

export type ChipType = 'text' | 'icon' | 'filter';

export interface ChipProps {
  /**
   * Chip label. Rendered when provided — omit it for an icon-only chip.
   */
  label?: string;

  /**
   * Chip variant (Figma Chips/InputChip):
   * - text: label, optional trailing icon (e.g. ico-close for a removable chip)
   * - icon: leading icon + optional label; defaults to ico-mylocation
   * - filter: label + trailing icon (defaults to ico-chevron-down), optional leading icon
   * @default 'text'
   */
  type?: ChipType;

  /**
   * Selected state (filled brand tint + primary-100 content).
   * @default false
   */
  selected?: boolean;

  /**
   * Leading icon glyph. Rendered when provided; always rendered for
   * type="icon" (default ico-mylocation).
   */
  iconName?: IconName;

  /**
   * Trailing icon glyph. Rendered when provided; type="filter" defaults
   * to ico-chevron-down. Use ico-close for a removable chip.
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
