import type { ImageSource } from 'expo-image';

export interface CardImageSelectProps {
  /**
   * Image source displayed in the square thumbnail.
   */
  source: ImageSource | string;

  /**
   * Handler for the remove (close) affordance. Hidden when omitted.
   */
  onRemove?: () => void;

  /**
   * Accessibility label for the image.
   */
  accessibilityLabel?: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
