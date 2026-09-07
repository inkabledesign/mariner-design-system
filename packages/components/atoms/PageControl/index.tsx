import React from 'react';
import Row from '../Row';
import ViewStyled from '../ViewStyled';
import type { PageControlProps } from './index.types';

/**
 * PageControl Component (Atom)
 *
 * A row of pagination dots with an optional translucent "platter" backing.
 * Source: Mariner-Library / Atoms / PageControl (Figma).
 *
 * Design specs:
 * - Dot: 8x8, fully rounded, surface-0; selected opacity 100%, others 30%
 * - Gap: sm (8)
 * - Platter: fully rounded translucent dark backing (approximates Figma's
 *   background blur, which requires a blur view supplied by the consumer app)
 *
 * @example
 * <PageControl count={3} selected={1} platter />
 */
const PageControl = ({ count, selected = 0, platter = false, className = '' }: PageControlProps) => {
  const platterClasses = platter ? 'bg-material-surface-100/60 px-sm py-xs rounded-full' : '';

  return (
    <Row className={`items-center gap-sm self-start ${platterClasses} ${className}`.trim()}>
      {Array.from({ length: count }).map((_, i) => (
        <ViewStyled
          key={i}
          className={`w-2 h-2 rounded-full bg-material-surface-0 ${i === selected ? '' : 'opacity-30'}`}
        />
      ))}
    </Row>
  );
};

export default PageControl;
