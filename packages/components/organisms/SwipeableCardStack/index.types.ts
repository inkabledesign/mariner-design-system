import type { ReactNode } from 'react';

export interface SwipeableCardStackProps<T> {
  /**
   * Stack items.
   */
  data: T[];

  /**
   * Card renderer.
   */
  renderCard: (item: T, index: number) => ReactNode;

  /**
   * Index of the front (top) card — controlled by the consumer.
   * @default 0
   */
  currentIndex?: number;

  /**
   * Called when the front card is dismissed.
   */
  onIndexChange?: (index: number) => void;

  /**
   * Called when a card is swiped away.
   */
  onSwipe?: (item: T, direction: 'down') => void;

  /**
   * Vertical offset between stacked cards (px).
   * @default 16
   */
  stackOffset?: number;

  /**
   * Maximum cards rendered behind the front card.
   * @default 5
   */
  maxVisibleCards?: number;

  /**
   * Drag distance (px) required to dismiss a card.
   * @default 120
   */
  swipeThreshold?: number;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
