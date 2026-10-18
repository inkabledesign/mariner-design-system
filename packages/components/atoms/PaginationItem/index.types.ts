export type PaginationItemVariant = 'number' | 'dot';
export type PaginationItemState = 'default' | 'active' | 'correct' | 'error';

export interface PaginationItemProps {
  /**
   * Render style.
   * - number: 24px circle showing the index
   * - dot: 8px dot
   * @default 'number'
   */
  variant?: PaginationItemVariant;

  /**
   * Visual state.
   * - default: muted (accent ring, primary-60 text)
   * - active: accent ring, brand-primary text / centre dot
   * - correct: brand-accent ring and text
   * - error: system-error ring and text
   * @default 'default'
   */
  state?: PaginationItemState;

  /**
   * The number to show (number variant only).
   */
  number?: number | string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
