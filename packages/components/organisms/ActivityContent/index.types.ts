import type { ReactNode } from 'react';
import type { ImageSource } from 'expo-image';

export type ActivityAsset =
  | { type: 'image'; source: ImageSource | string; caption?: string }
  | { type: 'carousel'; sources: (ImageSource | string)[]; currentIndex?: number };

export interface ActivityContentProps {
  /**
   * Optional media asset rendered above the activity body.
   */
  asset?: ActivityAsset;

  /**
   * Activity body — the consumer renders the activity molecule
   * (quiz, short answer, scenario, etc.) appropriate to the activity type.
   */
  children?: ReactNode;

  /**
   * Message shown when there is no content.
   */
  emptyMessage?: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
