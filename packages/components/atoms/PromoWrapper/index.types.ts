import type { ReactNode } from 'react';
import type { ImageSource } from 'expo-image';

export type PromoWrapperVariant = 'primary' | 'gradient' | 'gradient-light' | 'dark' | 'light';

export interface PromoWrapperProps {
  /**
   * Card content.
   */
  children?: ReactNode;

  /**
   * Headline.
   */
  headline?: string;

  /**
   * Sub-headline.
   */
  subHeadline?: string;

  /**
   * Visual variant — controls text/background colours. The background image
   * comes via `imageSource`.
   * @default 'primary'
   */
  variant?: PromoWrapperVariant;

  /**
   * Background hero image. The component library does not bundle brand PNGs —
   * the consumer supplies them.
   */
  imageSource?: ImageSource | string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
