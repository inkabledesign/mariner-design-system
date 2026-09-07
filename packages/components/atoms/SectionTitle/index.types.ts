import type { ReactNode } from 'react';

export interface SectionTitleProps {
  /**
   * Title text.
   */
  children: ReactNode;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
