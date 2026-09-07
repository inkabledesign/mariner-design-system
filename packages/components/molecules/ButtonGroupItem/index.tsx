import React from 'react';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { ButtonGroupItemProps } from './index.types';

/**
 * ButtonGroupItem Component (Molecule)
 *
 * A single item within a ButtonGroup. Selected state shows bold primary text.
 * Source: Mariner-Library / Molecules / Tabs/Elements/ButtonGroupItem (Figma).
 *
 * @example
 * <ButtonGroupItem label="12:20 am" isSelected onPress={fn} />
 */
const ButtonGroupItem = ({
  label,
  isSelected = false,
  onPress,
  className = '',
}: ButtonGroupItemProps) => (
  <PressableStyled onPress={onPress}>
    <ViewStyled
      className={`items-center justify-center px-md py-sm bg-material-surface-0 ${className}`.trim()}
    >
      <TextStyled
        textStyle={isSelected ? 'heading6' : 'body'}
        className={isSelected ? 'text-brand-primary-100' : 'text-material-surface-80'}
      >
        {label}
      </TextStyled>
    </ViewStyled>
  </PressableStyled>
);

export default ButtonGroupItem;
