import type { ReactNode } from 'react';
import type { ImageSource } from 'expo-image';

export interface OnboardingWrapperProps {
  /**
   * Screen content.
   */
  children: ReactNode;

  /**
   * Brand texture image for the right/left edges (optional). The component
   * library does not bundle brand PNGs — the consumer supplies them.
   */
  textureRightSource?: ImageSource | string;
  textureLeftSource?: ImageSource | string;
}
