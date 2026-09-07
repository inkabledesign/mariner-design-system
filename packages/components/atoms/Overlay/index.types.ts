import type { ReactNode } from 'react';

export type OverlayVariant = '50%' | 'blur';

export interface OverlayProps {
  /**
   * Overlay style.
   * - '50%': solid 50% black scrim
   * - 'blur': 50% black scrim intended to sit over a blurred backdrop
   *   (the actual backdrop blur must be provided by the consumer app, since the
   *   design system does not bundle a blur view)
   * @default '50%'
   */
  variant?: OverlayVariant;

  /**
   * Optional content rendered above the scrim (e.g. a centered dialog).
   */
  children?: ReactNode;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
