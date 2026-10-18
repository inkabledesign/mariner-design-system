import type { IconName } from '../../types/icons.type';

export type ChipVariant = 'primary' | 'secondary';

export type ChipSize = 'sm' | 'md';

export type ChipRadius =
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'full';

export interface ChipProps {
  /**
   * Chip label. Rendered when provided — omit it for an icon-only chip.
   */
  label?: string;

  /**
   * Color scheme (Figma Chips/InputChip `type`):
   * - primary: brand-primary tint + border, primary content
   * - secondary: brand-accent tint + border, surface-80 content
   * @default 'primary'
   */
  variant?: ChipVariant;

  /**
   * Size (Figma `size`):
   * - sm: caption typography, 25px tall, px-xs / py-xxs
   * - md: footnote typography, 34px tall, px-sm / py-xs
   * @default 'md'
   */
  size?: ChipSize;

  /**
   * Corner radius token. `'full'` is the round pill; smaller tokens
   * (e.g. `'xs'` / `'xxxs'`) give the squared "default" Figma style.
   * @default 'full'
   */
  radius?: ChipRadius;

  /**
   * Selected state (Figma `state="active"` — filled brand tint).
   * @default false
   */
  selected?: boolean;

  /**
   * Leading icon glyph. Rendered when provided. A chip with an icon and
   * no label renders as a fixed-size icon-only chip.
   */
  iconName?: IconName;

  /**
   * Trailing icon glyph. Rendered when provided (e.g. ico-chevron-down for
   * a filter chip, ico-close for a removable chip).
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
