import React from 'react';
import ViewStyled from '../ViewStyled';
import TextStyled from '../TextStyled';
import type { TableCellProps } from '../../organisms/Table/index.types';

/**
 * TableCell Component
 * 
 * A flexible table cell that can be used in header or body rows.
 * Supports text alignment and flexible width distribution.
 * 
 * @example
 * // Basic cell
 * <TableCell>Cell content</TableCell>
 * 
 * @example
 * // Header cell with center alignment
 * <TableCell isHeader align="center">
 *   Column Name
 * </TableCell>
 * 
 * @example
 * // Cell with custom flex width
 * <TableCell flex={2} align="right">
 *   Value
 * </TableCell>
 */
const TableCell: React.FC<TableCellProps> = ({
  children,
  align = 'left',
  flex = 1,
  isHeader = false,
  className = '',
}) => {
  const alignmentClass = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  }[align];

  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <ViewStyled
      className={`
        px-sm py-xs
        ${alignmentClass}
        justify-center
        ${className}
      `.trim()}
      style={{ flex }}>
      {typeof children === 'string' || typeof children === 'number' ? (
        <TextStyled
          textStyle={isHeader ? 'heading6' : 'body'}
          colorCategory={isHeader ? 'material' : 'material'}
          colorName="surface"
          colorVariant={isHeader ? '100' : '80'}
          className={textAlign}>
          {children}
        </TextStyled>
      ) : (
        children
      )}
    </ViewStyled>
  );
};

export default TableCell;
