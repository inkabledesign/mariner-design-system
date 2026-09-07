import type { ReactNode } from 'react';

export interface ProgressDetailCardProps {
  /**
   * Card title.
   * @default 'Detailed statistics'
   */
  title?: string;

  /**
   * Whether the detail content is expanded (controlled).
   * @default false
   */
  expanded?: boolean;

  /**
   * Expand/collapse toggle handler.
   */
  onToggle?: (expanded: boolean) => void;

  /**
   * Detail content rendered when expanded (e.g. TileActivityStats).
   */
  children?: ReactNode;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
