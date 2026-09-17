import React from 'react';
import Column from '../Column';
import TextStyled from '../TextStyled';
import type { SegmentProps } from './index.types';

/**
 * A titled content segment with the rounded, inset slot used across settings screens.
 * Source: Mariner-Library / Atoms / Segment (Figma).
 */
const Segment = ({
  children,
  className = '',
  hasTitle = true,
  title = 'My account',
}: SegmentProps) => (
  <Column className={`w-full items-start gap-sm ${className}`.trim()}>
    {hasTitle && (
      <TextStyled textStyle="body" className="w-full text-text-dark-secondary">
        {title}
      </TextStyled>
    )}
    <Column className="w-full overflow-hidden rounded-sm bg-material-surface-light p-sm">
      {children}
    </Column>
  </Column>
);

export default Segment;
