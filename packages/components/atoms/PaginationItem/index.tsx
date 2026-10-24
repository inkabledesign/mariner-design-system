import React from 'react';
import ViewStyled from '../ViewStyled';
import TextStyled from '../TextStyled';
import type { PaginationItemProps, PaginationItemState } from './index.types';

const numberStyles: Record<
  PaginationItemState,
  { border: string; text: string; fontWeight: '500' | '700' }
> = {
  default: { border: 'border-brand-accent-20', text: 'text-brand-primary-60', fontWeight: '500' },
  active: { border: 'border-brand-accent-100', text: 'text-brand-primary-100', fontWeight: '700' },
  correct: { border: 'border-brand-accent-100', text: 'text-brand-accent-100', fontWeight: '700' },
  error: { border: 'border-system-error-100', text: 'text-system-error-100', fontWeight: '700' },
};

const dotBorder: Record<PaginationItemState, string> = {
  default: 'border-brand-accent-40',
  active: 'border-brand-accent-100',
  correct: 'border-brand-accent-100',
  error: 'border-system-error-100',
};

/**
 * PaginationItem Component (Atom)
 *
 * A single pagination indicator: a numbered 24px ring or an 8px dot, in
 * default / active / correct / error states.
 * Source: Figma PaginationStyledNumber (4215:30483) / PaginationStyledDot
 * (4215:30497) section items.
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
  if (variant === 'dot') {
    return (
      <ViewStyled
        className={`w-2 h-2 rounded-full border bg-material-surface-0 items-center justify-center ${dotBorder[state]} ${className}`.trim()}>
        {state === 'active' && <ViewStyled className="w-1 h-1 rounded-full bg-brand-primary-100" />}
      </ViewStyled>
    );
  }

  const styles = numberStyles[state];

  return (
    <ViewStyled
      className={`w-6 h-6 rounded-full border bg-material-surface-0 items-center justify-center ${styles.border} ${className}`.trim()}>
      {/* `label` is SpaceMono on mobile; Figma wants Montserrat Medium — weight
          500 makes TextStyled pick it while keeping the 11px label size */}
      <TextStyled
        textStyle="label"
        fontWeight={styles.fontWeight}
        className={`text-center ${styles.text}`}>
        {String(number ?? '')}
      </TextStyled>
    </ViewStyled>
  );
};

export default PaginationItem;
