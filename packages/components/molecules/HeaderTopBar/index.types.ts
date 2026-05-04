import type { IconProps } from '@/components/atoms/Icon';
import type { Breakpoint } from '@mariner/theme';

export type HeaderTopBarVariant = 'default' | 'search';
export type Orientation = 'portrait' | 'landscape';

export interface HeaderTopBarProps {
  /** Breakpoint for responsive token resolution @default 'mobile' */
  breakpoint?: Breakpoint;
  variant?: HeaderTopBarVariant;
  title?: string;
  iconLeft?: IconProps;
  iconRight?: IconProps;
  textLeft?: string;
  textRight?: string;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (text: string) => void;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  /**
   * Device orientation for responsive layout adjustments.
   * Defaults to 'portrait' if not provided.
   */
  orientation?: Orientation;
}
