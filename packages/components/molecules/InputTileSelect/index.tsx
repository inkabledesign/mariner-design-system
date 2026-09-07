import React from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { InputTileSelectProps } from './index.types';

/**
 * InputTileSelect Component (Molecule)
 *
 * A square selectable tile: icon over a short label. Active state fills the
 * tile with brand primary and inverts the icon/label color.
 * Source: Mariner-Library / Molecules / Input/InputTileSelect (Figma).
 *
 * @example
 * <InputTileSelect iconName="ico-loundry" label="Laundry" isActive onPress={fn} />
 */
const InputTileSelect = ({
  iconName,
  label,
  isActive = false,
  onPress,
  className = '',
}: InputTileSelectProps) => {
  const fg = isActive ? 'text-material-surface-0' : 'text-brand-primary-100';

  return (
    <PressableStyled onPress={onPress} accessibilityRole="button" accessibilityState={{ selected: isActive }}>
      <Column
        className={`w-[72px] h-[72px] items-center justify-center gap-xs rounded-md ${
          isActive ? 'bg-brand-primary-100' : 'bg-material-surface-0'
        } ${className}`.trim()}
      >
        <Icon iconName={iconName} color={fg} className="w-8 h-8" />
        <TextStyled textStyle="label" className={fg}>
          {label}
        </TextStyled>
      </Column>
    </PressableStyled>
  );
};

export default InputTileSelect;
