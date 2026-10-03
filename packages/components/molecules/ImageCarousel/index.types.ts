import type { ImageSource } from 'expo-image';
import type { AspectRatio } from '../../atoms/PrimaryImage/index.types';

export interface CarouselImage {
  /**
   * Image source (URL string or ImageSource).
   */
  source: ImageSource | string;

  /**
   * Accessibility alt text.
   */
  alt?: string;
}

export interface ImageCarouselProps {
  /**
   * Images to display.
   */
  images: CarouselImage[];

  /**
   * Image aspect ratio.
   * @default '4:3'
   */
  aspectRatio?: AspectRatio;

  /**
   * Show the gradient overlay on images.
   * @default false
   */
  showOverlay?: boolean;

  /**
   * Auto-play interval in ms (0 = disabled).
   * @default 0
   */
  autoPlayInterval?: number;

  /**
   * Called when the visible page changes.
   */
  onIndexChange?: (index: number) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
