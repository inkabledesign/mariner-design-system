import type { TextInputProps } from 'react-native';
import type { Breakpoint } from '@inkabledesign/mariner-theme';

export type TextFieldStatus = 'default' | 'error' | 'success' | 'disabled';

export interface TextFieldProps extends Omit<TextInputProps, 'style'> {
  /**
   * Field label shown above the input.
   */
  label?: string;

  /**
   * Validation status — tints the field surface.
   * @default 'default'
   */
  status?: TextFieldStatus;

  /**
   * Helper/error message shown below the input.
   */
  message?: string;

  /**
   * Selects the color palette.
   * @default 'light'
   */
  themeMode?: 'light' | 'dark';

  /**
   * Selects responsive typography/spacing.
   * @default 'mobile'
   */
  breakpoint?: Breakpoint;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
