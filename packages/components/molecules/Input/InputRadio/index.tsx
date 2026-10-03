import React from 'react';
import Row from '../../../atoms/Row';
import TextStyled from '../../../atoms/TextStyled';
import Icon from '../../../atoms/Icon';
import PressableStyled from '../../../atoms/PressableStyled';
import type { IconName } from '../../../types/icons.type';
import type { SVGColor } from '../../../atoms/Icon';
import type { InputRadioProps, InputRadioStatus } from './index.types';

const statusStyles: Record<InputRadioStatus, string> = {
  default: 'bg-material-surface-light border-brand-primary-20',
  error: 'bg-system-error-5 border-system-error-100',
  success: 'bg-system-success-10 border-system-success-100',
};

const radioColors: Record<InputRadioStatus, { selected: SVGColor; unselected: SVGColor }> = {
  default: { selected: 'text-brand-primary-100', unselected: 'text-material-surface-40' },
  error: { selected: 'text-system-error-100', unselected: 'text-system-error-100' },
  success: { selected: 'text-system-success-100', unselected: 'text-system-success-100' },
};

const trailingIcons: Partial<Record<InputRadioStatus, { icon: IconName; color: SVGColor }>> = {
  error: { icon: 'ico-close-round', color: 'text-system-error-100' },
  success: { icon: 'ico-tick-round', color: 'text-system-success-100' },
};

/**
 * InputRadio Component (Molecule)
 *
 * A selectable option row: radio indicator, label, and a trailing status
 * affordance (close icon on error, tick on success).
 * Source: Mariner-Library / Molecules / Input/InputRadio (Figma).
 *
 * @example
 * <InputRadio label="A power-driven vessel" isSelected onPress={fn} />
 */
const InputRadio = ({
  label,
  isSelected = false,
  status = 'default',
  onPress,
  onTrailingPress,
  className = '',
}: InputRadioProps) => {
  const isDefault = status === 'default';
  const containerClass =
    isDefault && isSelected
      ? 'bg-material-surface-light border-brand-primary-100'
      : statusStyles[status];

  const labelColor = !isDefault
    ? 'text-material-surface-100'
    : isSelected
      ? 'text-brand-primary-100'
      : 'text-material-surface-80';

  const radioColor = isSelected ? radioColors[status].selected : radioColors[status].unselected;
  const trailing = trailingIcons[status];

  return (
    <PressableStyled
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected: isSelected }}
    >
      <Row
        className={`h-xl items-center gap-sm rounded-sm border pl-sm pr-lg py-sm ${containerClass} ${className}`.trim()}
      >
        <Icon
          iconName={isSelected ? 'ico-radio-on' : 'ico-radio-off'}
          iconSize="md"
          color={radioColor}
        />
        <TextStyled textStyle="footnote" className={`flex-1 ${labelColor}`}>
          {label}
        </TextStyled>
        {trailing &&
          (onTrailingPress ? (
            <PressableStyled onPress={onTrailingPress} accessibilityLabel="Clear selection">
              <Icon iconName={trailing.icon} iconSize="md" color={trailing.color} />
            </PressableStyled>
          ) : (
            <Icon iconName={trailing.icon} iconSize="md" color={trailing.color} />
          ))}
      </Row>
    </PressableStyled>
  );
};

export default InputRadio;
