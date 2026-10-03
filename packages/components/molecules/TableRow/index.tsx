import React from 'react';
import Row from '../../atoms/Row';
import PressableStyled from '../../atoms/PressableStyled';
import ViewStyled from '../../atoms/ViewStyled';
import type { TableRowComponentProps } from '../../organisms/Table/index.types';

/**
 * TableRow Component (Molecule)
 *
 * A table row that can contain multiple TableCell children. Supports header
 * styling, press interactions, borders, and striped backgrounds.
 * Source: mariner-edu molecules/TableRow (ported as-is — presentational).
 */
const TableRow = ({
  children,
  isHeader = false,
  onPress,
  showBorder = true,
  striped = false,
  className = '',
}: TableRowComponentProps) => {
  const baseClasses = `w-full ${showBorder ? 'border-b border-material-surface-20' : ''} ${
    isHeader ? 'bg-material-surface-5' : striped ? 'bg-material-surface-0' : 'bg-solid-white'
  } ${className}`.trim();

  const content = <Row className="w-full min-h-[44px]">{children}</Row>;

  return onPress ? (
    <PressableStyled onPress={onPress} className={baseClasses}>
      {content}
    </PressableStyled>
  ) : (
    <ViewStyled className={baseClasses}>{content}</ViewStyled>
  );
};

export default TableRow;
