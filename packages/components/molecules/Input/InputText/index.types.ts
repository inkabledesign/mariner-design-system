import type { TextInputProps } from 'react-native';
import type { IconName } from '../../../types/icons.type';
import type { Breakpoint } from '@inkabledesign/mariner-theme';

export type InputTextVariant = 'default' | 'rounded';

export interface InputTextProps extends Omit<TextInputProps, 'style'> {
  /**
   * Corner style — 'default' uses radius-sm, 'rounded' renders a pill.
   * @default 'default'
   */
  variant?: InputTextVariant;

  /**
   * Disabled state — non-editable, tinted surface.
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon rendered at the leading edge of the field.
   */
  iconLeft?: IconName;

  /**
   * Icon rendered at the trailing edge of the field.
   */
  iconRight?: IconName;

  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';

  /** Breakpoint for responsive token resolution @default 'mobile' */
  breakpoint?: Breakpoint;

  /** Additional CSS classes for the field container */
  className?: string;

  /** Controlled value */
  value?: string;

  /** Change handler */
  onChangeText?: (text: string) => void;
}
