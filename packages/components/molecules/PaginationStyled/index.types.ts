import type { PaginationItemState, PaginationItemVariant } from '../../atoms/PaginationItem/index.types';

export type { PaginationItemState, PaginationItemVariant };

export interface PaginationStyledProps {
  /**
   * Number of pages / sections to render.
   */
  count: number;

  /**
   * Index of the active item.
   * @default 0
   */
  activeIndex?: number;

  /**
   * Render numbered rings (PaginationStyledNumber) or dots (PaginationStyledDot).
   * @default 'number'
   */
  variant?: PaginationItemVariant;

  /**
   * Optional per-item state override (e.g. 'correct' / 'error' for answered
   * sections). Items without an entry fall back to active/default.
   */
  itemStates?: Partial<Record<number, PaginationItemState>>;

  /**
   * Press handler — items are only pressable when provided.
   */
  onItemPress?: (index: number) => void;

  /**
   * Allow the row to scroll horizontally when it overflows the container.
   * When true the pill fills the available width (Figma PaginationStyledNumber);
   * when false it hugs its content (Figma PaginationStyledDot).
   * @default true
   */
  scrollable?: boolean;

  /**
   * Additional Tailwind classes for the outer container.
   */
  className?: string;
}
