import type { IconName } from '../../types/icons.type';

export type TagVariant = 'primary' | 'secondary';

export interface TagProps {
  /**
   * Tag label text (e.g. a coordinate or short descriptor).
   */
  label: string;

  /**
   * Visual variant.
   * - primary: brand-primary tint background with brand-primary text
   * - secondary: neutral surface background with dark text
   * @default 'primary'
   */
  variant?: TagVariant;

  /**
   * Whether to render a leading icon.
   * @default true
   */
  hasIcon?: boolean;

  /**
   * Leading icon name. Defaults to the location pin used in the Figma design.
   * @default 'ico-pin'
   */
  iconName?: IconName;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
