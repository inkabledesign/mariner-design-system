import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { ProgressDetailCardProps } from './index.types';

/**
 * ProgressDetailCard Component (Molecule)
 *
 * An expandable "detailed statistics" card — header row with a chevron toggle,
 * content slot shown when expanded (typically TileActivityStats).
 * Source: mariner-edu molecules/ProgressDeatailCard (simplified: internal
 * state → controlled expanded/onToggle; content → children).
 *
 * @example
 * <ProgressDetailCard expanded={open} onToggle={setOpen}>
 *   <TileActivityStats chapters={chapters} />
 * </ProgressDetailCard>
 */
const ProgressDetailCard = ({
  title = 'Detailed statistics',
  expanded = false,
  onToggle,
  children,
  className = '',
}: ProgressDetailCardProps) => (
  <Column
    className={`gap-md border border-brand-primary-20 rounded-md px-md py-xs w-full ${className}`.trim()}
  >
    <Row className="justify-between items-center">
      <TextStyled textStyle="heading6" className="text-material-surface-100">
        {title}
      </TextStyled>
      <PressableStyled
        onPress={() => onToggle?.(!expanded)}
        className="px-sm py-xs"
        accessibilityRole="button"
        accessibilityState={{ expanded }}
      >
        <Icon
          iconName={expanded ? 'ico-chevron-up' : 'ico-chevron-down'}
          color="text-brand-primary-100"
        />
      </PressableStyled>
    </Row>
    {expanded && children}
  </Column>
);

export default ProgressDetailCard;
