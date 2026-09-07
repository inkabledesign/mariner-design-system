import React from 'react';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import RadioButton from '../../atoms/RadioButton';
import PressableStyled from '../../atoms/PressableStyled';
import type { InputSelectProps, InputSelectStatus } from './index.types';

const statusStyles: Record<InputSelectStatus, string> = {
  default: 'bg-material-surface-0',
  error: 'bg-system-error-5',
  success: 'bg-system-success-10',
};

/**
 * InputSelect Component (Molecule)
 *
 * A selectable option row: radio indicator, label, and a trailing affordance
 * (close icon, or a tick when status="success").
 * Source: Mariner-Library / Molecules / Input/InputSelect (Figma).
 *
 * @example
 * <InputSelect label="A power-driven vessel" isSelected onPress={fn} />
 */
const InputSelect = ({
  label,
  isSelected = false,
  status = 'default',
  onPress,
  onTrailingPress,
  className = '',
}: InputSelectProps) => (
  <PressableStyled onPress={onPress} accessibilityRole="radio" accessibilityState={{ selected: isSelected }}>
    <Row className={`items-center gap-md rounded-md px-md py-sm ${statusStyles[status]} ${className}`.trim()}>
      <RadioButton checked={isSelected} onPress={onPress} />
      <TextStyled
        textStyle="footnote"
        className={`flex-1 ${isSelected ? 'text-brand-primary-100' : 'text-material-surface-100'}`}
      >
        {label}
      </TextStyled>
      {status === 'success' ? (
        <Icon iconName="ico-tick-round" color="text-system-success-100" className="w-6 h-6" />
      ) : (
        onTrailingPress && (
          <PressableStyled onPress={onTrailingPress} accessibilityLabel="Clear selection">
            <Icon iconName="ico-close-round" color="text-material-surface-80" className="w-6 h-6" />
          </PressableStyled>
        )
      )}
    </Row>
  </PressableStyled>
);

export default InputSelect;
