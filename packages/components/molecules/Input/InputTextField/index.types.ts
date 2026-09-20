import type { TextInputProps } from 'react-native';
import type { Breakpoint } from '@inkabledesign/mariner-theme';

export type InputTextFieldStatus = 'default' | 'error' | 'success' | 'disabled';

export interface InputTextFieldProps extends Omit<TextInputProps, 'style'> {
  /**
   * Validation status — controls the field border and surface tint.
   * 'disabled' also makes the field non-editable.
   * @default 'default'
   */
  status?: InputTextFieldStatus;

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
