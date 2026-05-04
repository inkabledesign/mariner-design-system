import { IconName } from '@/types/icons.type';

export type BadgeVariant = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'default';
export type BadgeSize = 'lg' | 'sm';

export interface BadgeProps {
  /**
   * Badge label text
   */
  label?: string;

  /**
   * Badge variant/type
   * - primary: Blue background with white text
   * - secondary: Light blue background with dark blue text
   * - danger: Red background with white text
   * - success: Green background with white text
   * - warning: Yellow background with dark text
   * - default: Default background with white text
   * @default 'primary'
   */
  variant?: BadgeVariant;

  /**
   * Badge size
   * - lg: Large (20px icon, 16px text)
   * - sm: Small (16px icon, 13.33px text)
   * @default 'lg'
   */
  size?: BadgeSize;

  /**
   * Show icon
   * @default true
   */
  hasIcon?: boolean;

  /**
   * Show text
   * @default true
   */
  hasText?: boolean;

  /**
   * Optional custom icon name
   * If not provided, default icon will be used
   */
  iconName?: IconName;

  /**
   * Additional CSS classes
   */
  className?: string;
}
