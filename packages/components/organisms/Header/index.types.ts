import type { ViewStyle } from 'react-native';
import type { ImageSource } from 'expo-image';
import type { HeaderTopBarProps } from '../../molecules/HeaderTopBar/index.types';

export type HeaderVariant = 'default' | 'search' | 'styled';
export type HeaderBackground = 'default' | 'transparent';

export interface HeaderProps extends Omit<HeaderTopBarProps, 'variant'> {
  /**
   * Header variant
   * - 'default': Standard header with optional title
   * - 'search': Header with search input
   * - 'styled': Header with styled background and centered title
   * @default 'default'
   */
  variant?: HeaderVariant;

  /**
   * Orientation — landscape collapses the header height.
   * @default 'portrait'
   */
  orientation?: 'portrait' | 'landscape';

  /**
   * Brand graphic size (px).
   * @default 124
   */
  graphicSize?: number;

  /**
   * Left brand graphic source (e.g. brand-graphic-device-light-L).
   * Hidden when omitted.
   */
  graphicLeftSource?: ImageSource | string;

  /**
   * Right brand graphic source (e.g. brand-graphic-device-light-R).
   * Hidden when omitted.
   */
  graphicRightSource?: ImageSource | string;

  /**
   * Background style
   * - 'default': Light background with brand graphics
   * - 'transparent': Transparent background with brand graphics
   * @default 'default'
   */
  background?: HeaderBackground;

  /**
   * Additional styles for the container.
   */
  style?: ViewStyle;
}
