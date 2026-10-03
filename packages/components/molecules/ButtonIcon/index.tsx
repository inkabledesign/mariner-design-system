import React from 'react';
import ViewStyled from '../../atoms/ViewStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { ButtonIconProps } from './index.types';

/**
 * ButtonIcon Component (Molecule)
 *
 * A compact square icon-only button (49×49) on a surface background.
 * Source: Mariner-Library / Molecules / ButtonIcon (Figma).
 *
 * @example
 * <ButtonIcon iconName="ico-heart-outline" onPress={fn} accessibilityLabel="Save" />
 */
const ButtonIcon = ({
  iconName,
  onPress,
  isActive = false,
  accessibilityLabel,
  className = '',
}: ButtonIconProps) => (
  <PressableStyled onPress={onPress} accessibilityRole="button" accessibilityLabel={accessibilityLabel}>
    <ViewStyled
      className={`w-[49px] h-[49px] rounded-md bg-material-surface-0 items-center justify-center ${className}`.trim()}
    >
      <Icon
        iconName={iconName}
        color={isActive ? 'text-brand-primary-100' : 'text-material-surface-80'}
        className="w-8 h-8"
      />
    </ViewStyled>
  </PressableStyled>
);

export default ButtonIcon;
