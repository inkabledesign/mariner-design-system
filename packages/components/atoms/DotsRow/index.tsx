import React from 'react';
import Row from '../Row';
import ViewStyled from '../ViewStyled';
import type { DotsRowProps } from './index.types';

/**
 * DotsRow Component (Atom)
 *
 * A compact row of small dots (decorative separator / loading affordance).
 * Source: Mariner-Learning / Atoms / DotsRow (Figma) — 6px dots.
 *
 * @example
 * <DotsRow count={4} />
 */
const DotsRow = ({ count = 4, dotClassName = 'bg-brand-primary-100', className = '' }: DotsRowProps) => (
  <Row className={`items-center gap-xxs ${className}`.trim()}>
    {Array.from({ length: count }).map((_, i) => (
      <ViewStyled key={i} className={`w-1.5 h-1.5 rounded-full ${dotClassName}`} />
    ))}
  </Row>
);

export default DotsRow;
