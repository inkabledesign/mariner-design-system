import type { ReactNode } from 'react';

export interface SegmentProps {
  children?: ReactNode;
  className?: string;
  hasTitle?: boolean;
  title?: string;
}
