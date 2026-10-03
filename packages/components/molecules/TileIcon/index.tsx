import React from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { TileIconProps } from './index.types';

/**
 * TileIcon Component (Molecule)
 *
 * An icon + label tile (e.g. facility selector). Unlike InputTileSelect, the
 * active state is expressed through colour only — no background fill.
 * Source: Mariner-Library / Molecules / Tiles/TileIcon (Figma).
 *
 * @example
 * <TileIcon iconName="ico-loundry" label="Laundry" isActive onPress={fn} />
 */
const TileIcon = ({ iconName, label, isActive = false, onPress, className = '' }: TileIconProps) => {
  const fg = isActive ? 'text-brand-primary-100' : 'text-material-surface-60';

  return (
    <PressableStyled onPress={onPress} accessibilityState={{ selected: isActive }}>
      <Column className={`w-[72px] h-[72px] items-center justify-center gap-xs ${className}`.trim()}>
        <Icon iconName={iconName} color={fg} className="w-8 h-8" />
        <TextStyled textStyle="label" className={fg}>
          {label}
        </TextStyled>
      </Column>
    </PressableStyled>
  );
};

export default TileIcon;
