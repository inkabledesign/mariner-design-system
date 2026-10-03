import type { ReactNode } from 'react';

export type TableCellAlign = 'left' | 'center' | 'right';

export interface TableColumn<T = Record<string, unknown>> {
  /**
   * Key used to read the value from each row.
   */
  key: string;

  /**
   * Header label.
   */
  label: string;

  /**
   * Text alignment for the column.
   * @default 'left'
   */
  align?: TableCellAlign;

  /**
   * Flex weight for column width.
   * @default 1
   */
  flex?: number;

  /**
   * Custom cell renderer — receives the cell value and the full row.
   */
  render?: (value: unknown, row: T) => ReactNode;
}

export interface TableRowData {
  id: string | number;
  [key: string]: unknown;
}

export interface TableProps<T extends TableRowData = TableRowData> {
  /**
   * Column definitions.
   */
  columns: TableColumn<T>[];

  /**
   * Row data.
   */
  data: T[];

  /**
   * Show the header row.
   * @default true
   */
  showHeader?: boolean;

  /**
   * Row press handler.
   */
  onRowPress?: (row: T) => void;

  /**
   * Show borders between rows.
   * @default true
   */
  showRowBorders?: boolean;

  /**
   * Alternate row backgrounds.
   * @default false
   */
  striped?: boolean;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}

export interface TableRowComponentProps {
  children?: ReactNode;
  isHeader?: boolean;
  onPress?: () => void;
  showBorder?: boolean;
  striped?: boolean;
  className?: string;
}

export interface TableCellProps {
  children?: ReactNode;
  align?: TableCellAlign;
  flex?: number;
  isHeader?: boolean;
  className?: string;
}
