import { IconName } from '@/types/icons.type';

/**
 * Badge variants matching the Figma component set.
 * 'error' and 'default' are legacy aliases kept for backwards compatibility:
 * - 'error' renders as 'danger'
 * - 'default' is not part of the Figma spec
 */
export type BadgeVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'error' | 'default';
export type BadgeSize = 'lg' | 'sm';

export interface BadgeProps {
  /**
   * Badge label text. Renders only when provided.
   */
  label?: string;

  /**
   * Badge variant/type
   * - primary: Blue background with light text
   * - secondary: White background with primary text and accent border
   * - danger: Red background with light text
   * - success: Green background with dark text
   * - warning: Yellow background with dark text
   * - error: @deprecated Use 'danger'
   * - default: @deprecated Not part of the Figma spec
   * @default 'primary'
   */
  variant?: BadgeVariant;

  /**
   * Badge size
   * - lg: Large (20px icon, footnote 13px text)
   * - sm: Small (16px icon, caption 11px text)
   * @default 'lg'
   */
  size?: BadgeSize;

  /**
   * Optional icon name. The icon renders only when provided —
   * omit for a text-only badge, or omit `label` for an icon-only badge.
   */
  iconName?: IconName;

  /**
   * Theme mode used to resolve the icon color token.
   * @default 'light'
   */
  themeMode?: 'light' | 'dark';

  /**
   * Additional CSS classes
   */
  className?: string;
}
