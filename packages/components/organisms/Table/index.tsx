import React from 'react';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TableRow from '../../molecules/TableRow';
import TableCell from '../../atoms/TableCell';
import type { TableProps, TableRowData } from './index.types';

/**
 * Table Component (Organism)
 *
 * A flexible, cross-platform table with configurable columns, optional header,
 * row press, striped rows, and per-column alignment/flex.
 * Source: mariner-edu organisms/Table (ported as-is — already presentational).
 *
 * @example
 * <Table
 *   columns={[{ key: 'name', label: 'Name' }, { key: 'value', label: 'Value', align: 'right' }]}
 *   data={[{ id: '1', name: 'Item 1', value: 100 }]}
 *   onRowPress={fn}
 *   striped
 * />
 */
const Table = <T extends TableRowData = TableRowData>({
  columns,
  data,
  showHeader = true,
  onRowPress,
  showRowBorders = true,
  striped = false,
  className = '',
}: TableProps<T>) => (
  <ViewStyled
    className={`w-full border border-material-surface-20 rounded-sm overflow-hidden ${className}`.trim()}
  >
    <Column className="w-full">
      {showHeader && (
        <TableRow isHeader showBorder={showRowBorders}>
          {columns.map(column => (
            <TableCell key={column.key} isHeader align={column.align} flex={column.flex}>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      )}
      {data.map((row, index) => (
        <TableRow
          key={row.id}
          onPress={onRowPress ? () => onRowPress(row) : undefined}
          showBorder={showRowBorders && index < data.length - 1}
          striped={striped && index % 2 === 1}
        >
          {columns.map(column => {
            const value = row[column.key];
            return (
              <TableCell key={column.key} align={column.align} flex={column.flex}>
                {column.render ? column.render(value, row) : (value as React.ReactNode)}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </Column>
  </ViewStyled>
);

export default Table;
