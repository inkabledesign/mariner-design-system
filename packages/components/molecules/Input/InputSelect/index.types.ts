import type { IconName } from '../../../types/icons.type';
import type { Breakpoint } from '@inkabledesign/mariner-theme';

export interface InputSelectProps {
  /**
   * Selected option label. When omitted the placeholder is shown.
   */
  value?: string;

  /**
   * Placeholder text shown when no value is selected — rendered in the
   * `placeholder` text style (Montserrat Italic, surface-40).
   */
  placeholder?: string;

  /**
   * Icon rendered at the leading edge of the field.
   */
  iconLeft?: IconName;

  /**
   * Disabled state — non-interactive, tinted surface.
   * @default false
   */
  disabled?: boolean;

  /**
   * Press handler — the consumer opens the option picker.
   */
  onPress?: () => void;

  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';

  /** Breakpoint for responsive token resolution @default 'mobile' */
  breakpoint?: Breakpoint;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
