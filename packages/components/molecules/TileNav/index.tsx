import React from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { SVGColor } from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { TileNavProps } from './index.types';

/**
 * TileNav Component (Molecule)
 *
 * A 72x72 square navigation tile with a title and icon, plus a selected state.
 * Source: Mariner-Library / Molecules / Tile/TileNav (Figma).
 *
 * @example
 * <TileNav title="Tides" iconName="ico-tides" selected onPress={fn} />
 */
const TileNav = ({ title, iconName, selected = false, onPress, className = '' }: TileNavProps) => {
  const bg = selected ? 'bg-brand-primary-100' : 'bg-material-surface-0';
  const textColor = selected ? 'text-material-surface-0' : 'text-brand-primary-100';
  const iconColor: SVGColor = selected ? 'text-material-surface-0' : 'text-brand-primary-100';

  return (
    <PressableStyled onPress={onPress}>
      <Column
        className={`w-[72px] h-[72px] rounded-md items-center justify-center gap-xs p-sm ${bg} ${className}`.trim()}>
        <TextStyled textStyle="caption" className={textColor}>
          {title}
        </TextStyled>
        <Icon iconName={iconName} color={iconColor} className="w-8 h-8" />
      </Column>
    </PressableStyled>
  );
};

export default TileNav;
