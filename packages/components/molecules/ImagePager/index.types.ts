import type { ImageSource } from 'expo-image';
import type { PrimaryImageProps } from '../../atoms/PrimaryImage/index.types';

export interface ImagePagerProps {
  /**
   * Image sources displayed by the pager.
   */
  sources: (ImageSource | string)[];

  /**
   * Zero-based index of the current image.
   * @default 0
   */
  currentIndex?: number;

  /**
   * Image aspect ratio.
   * @default '4:3'
   */
  aspectRatio?: PrimaryImageProps['aspectRatio'];

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
