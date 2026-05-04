import type { TextInputProps } from 'react-native';
import type { IconName } from '@/types/icons.type';
import type { Breakpoint } from '@mariner/theme';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';
  /** Breakpoint for responsive token resolution @default 'mobile' */
  breakpoint?: Breakpoint;
  /** Label text displayed above the input */
  label?: string;
  /** Error message displayed below the input */
  error?: string;
  /** Icon name to display */
  iconName?: IconName;
  /** Icon position: left, right, or none */
  iconPosition?: 'left' | 'right' | 'none';
  /** Additional CSS classes */
  className?: string;
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChangeText?: (text: string) => void;
}
