import React from 'react';
import ViewStyled from '../ViewStyled';
import TextStyled from '../TextStyled';
import type { PaginationItemProps } from './index.types';

/**
 * PaginationItem Component (Atom)
 *
 * A single pagination indicator: a numbered circle or a dot, in default /
 * active / correct states.
 * Source: Mariner-Learning / Atoms / PaginationItem (Figma).
 *
 * @example
 * <PaginationItem variant="number" state="active" number={2} />
 */
const PaginationItem = ({
  variant = 'number',
  state = 'default',
  number,
  className = '',
}: PaginationItemProps) => {
  const textColor =
    state === 'active'
      ? 'text-brand-primary-100'
      : state === 'correct'
        ? 'text-brand-accent-100'
        : 'text-brand-primary-60';

  if (variant === 'dot') {
    return (
      <ViewStyled
        className={`w-2 h-2 rounded-full bg-material-surface-0 items-center justify-center ${className}`.trim()}>
        {state === 'active' && <ViewStyled className="w-1 h-1 rounded-full bg-brand-primary-100" />}
      </ViewStyled>
    );
  }

  return (
    <ViewStyled
      className={`w-6 h-6 rounded-full bg-material-surface-0 items-center justify-center ${className}`.trim()}>
      <TextStyled textStyle="footnote" className={textColor}>
        {String(number ?? '')}
      </TextStyled>
    </ViewStyled>
  );
};

export default PaginationItem;
