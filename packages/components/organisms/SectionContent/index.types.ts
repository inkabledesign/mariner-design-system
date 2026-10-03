import type { ReactNode } from 'react';
import type { ImageSource } from 'expo-image';
import type { CardInfoType } from '../../molecules/CardInfo/index.types';
import type { TableColumn, TableRowData } from '../Table/index.types';

/**
 * A renderable content block for section bodies. Consumers map their CMS
 * blocks (e.g. Sanity Portable Text) onto this union before rendering.
 */
export type SectionContentBlock =
  | { type: 'title'; text: string }
  | { type: 'text'; text: string; render?: (text: string) => ReactNode }
  | { type: 'image'; source: ImageSource | string; caption?: string }
  | { type: 'carousel'; sources: (ImageSource | string)[]; currentIndex?: number }
  | { type: 'highlight'; type2?: CardInfoType; title?: string; body: string }
  | { type: 'table'; columns: TableColumn[]; data: TableRowData[] }
  | { type: 'custom'; render: () => ReactNode };

export interface SectionContentProps {
  /**
   * Ordered content blocks.
   */
  blocks: SectionContentBlock[];

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
