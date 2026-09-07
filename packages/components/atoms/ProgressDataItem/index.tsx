import React from 'react';
import Column from '../Column';
import TextStyled from '../TextStyled';
import type { ProgressDataItemProps } from './index.types';

/**
 * ProgressDataItem Component (Atom)
 *
 * A stacked stat: a large value with a caption label beneath it.
 * Source: Mariner-Learning / Atoms / ProgressDataItem (Figma).
 *
 * @example
 * <ProgressDataItem value={51} label="Total" />
 */
const ProgressDataItem = ({ value, label, className = '' }: ProgressDataItemProps) => (
  <Column className={`items-center gap-xs ${className}`.trim()}>
    <TextStyled textStyle="heading2" className="text-material-surface-100">
      {String(value)}
    </TextStyled>
    <TextStyled textStyle="footnote" className="text-material-surface-100">
      {label}
    </TextStyled>
  </Column>
);

export default ProgressDataItem;
