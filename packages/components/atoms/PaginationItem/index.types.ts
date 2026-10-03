export type PaginationItemVariant = 'number' | 'dot';
export type PaginationItemState = 'default' | 'active' | 'correct';

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
   * - default: muted
   * - active: brand-primary
   * - correct: brand-accent
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
