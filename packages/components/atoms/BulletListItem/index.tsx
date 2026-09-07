import React from 'react';
import Row from '../Row';
import TextStyled from '../TextStyled';
import Icon from '../Icon';
import type { BulletListItemProps } from './index.types';

/**
 * BulletListItem Component (Atom)
 *
 * A single feature/benefit line: a leading tick icon and text.
 * Source: Mariner-Learning / Atoms / Text/BulletListItem (Figma) — footnote text.
 *
 * @example
 * <BulletListItem text="Full access to this module — forever" />
 */
const BulletListItem = ({
  text,
  iconName = 'ico-tick-round-fill',
  className = '',
}: BulletListItemProps) => (
  <Row className={`items-start gap-sm ${className}`.trim()}>
    <Icon iconName={iconName} color="text-brand-primary-100" className="w-3.5 h-3.5 mt-0.5" />
    <TextStyled textStyle="footnote" className="text-material-surface-80 flex-1">
      {text}
    </TextStyled>
  </Row>
);

export default BulletListItem;
