import type { IconName } from '../../types/icons.type';

export type TitleSectionTheme = 'light' | 'dark' | 'accent';

export interface TitleSectionProps {
  /**
   * Section title text.
   */
  title: string;

  /**
   * Colour theme for the title.
   * - light: brand-primary
   * - dark: material-surface-100
   * - accent: brand-accent
   * @default 'light'
   */
  theme?: TitleSectionTheme;

  /**
   * Show a trailing action icon.
   * @default false
   */
  hasIcon?: boolean;

  /**
   * Trailing icon name.
   * @default 'ico-edit'
   */
  iconName?: IconName;

  /**
   * Optional press handler for the trailing icon.
   */
  onPressIcon?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
