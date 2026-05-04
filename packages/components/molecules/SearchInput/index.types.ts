import type { ViewStyle, TextInputProps } from 'react-native';
import type { Breakpoint } from '@mariner/theme';

export interface SearchInputProps extends Omit<TextInputProps, 'style'> {
  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';
  /** Breakpoint for responsive token resolution @default 'mobile' */
  breakpoint?: Breakpoint;
  /**
   * Search input value
   */
  value?: string;
  
  /**
   * Placeholder text
   * @default 'Search for marina'
   */
  placeholder?: string;
  
  /**
   * Change handler
   */
  onChangeText?: (text: string) => void;
  
  /**
   * Whether to show the search icon
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Whether to show the divider
   * @default true
   */
  showDivider?: boolean;
  
  /**
   * Additional styles for the container
   */
  containerStyle?: ViewStyle;
  
  /**
   * Additional className for the container
   */
  className?: string;
}
