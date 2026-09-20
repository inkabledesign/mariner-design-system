import type { ImageSource } from 'expo-image';

export interface HeaderBackgroundProps {
  /**
   * Brand texture pinned to the left edge (optional). The component library
   * does not bundle brand PNGs — the consumer supplies them, choosing the
   * light/dark variant for the current theme.
   */
  textureLeftSource?: ImageSource | string;

  /**
   * Brand texture pinned to the right edge (optional).
   */
  textureRightSource?: ImageSource | string;

  /**
   * Square edge of each texture in px.
   * @default 124
   */
  size?: number;

  /**
   * Additional Tailwind classes for the container row.
   */
  className?: string;
}
