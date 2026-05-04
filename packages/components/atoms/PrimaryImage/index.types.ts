import type { ImageProps } from 'expo-image';

export type AspectRatio = '1:1' | '4:3' | '16:9' | '9:16' | '5:3';

export interface PrimaryImageProps extends Omit<ImageProps, 'source'> {
  /**
   * The remote image URL or local asset.
   */
  source: ImageProps['source'];

  /**
   * The aspect ratio of the image.
   * @default '4:3'
   */
  aspectRatio?: AspectRatio;

  /**
   * Whether to show the gradient overlay.
   * @default false
   */
  showOverlay?: boolean;

  /**
   * Additional classes for the container.
   */
  className?: string;
}
