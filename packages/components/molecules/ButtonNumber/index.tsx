import React from 'react';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { ButtonNumberProps, ButtonNumberState } from './index.types';

const stateStyles: Record<
  ButtonNumberState,
  { borderColor: string; textColor: string; textStyle: 'label' | 'footnote' }
> = {
  default: {
    borderColor: 'border-brand-accent-20',
    textColor: 'text-brand-primary-100',
    textStyle: 'label',
  },
  active: {
    borderColor: 'border-brand-accent-100',
    textColor: 'text-brand-primary-100',
    textStyle: 'footnote',
  },
  completed: {
    borderColor: 'border-brand-accent-100',
    textColor: 'text-brand-primary-100',
    textStyle: 'footnote',
  },
  success: {
    borderColor: 'border-system-success-100',
    textColor: 'text-system-success-100',
    textStyle: 'footnote',
  },
  error: {
    borderColor: 'border-system-error-100',
    textColor: 'text-system-error-100',
    textStyle: 'footnote',
  },
};

/**
 * ButtonNumber Component (Molecule)
 *
 * A circular numbered button for step indicators, pagination, or numbered
 * navigation. States: default, active, completed, success, error.
 * Source: mariner-edu molecules/ButtonNumber (ported).
 *
 * @example
 * <ButtonNumber number={1} state="active" onPress={fn} />
 */
const ButtonNumber = ({ number, state = 'default', onPress, className = '' }: ButtonNumberProps) => {
  const styles = stateStyles[state];

  return (
    <PressableStyled
      onPress={onPress}
      className={`bg-material-surface-0 ${styles.borderColor} border rounded-full w-xl h-xl items-center justify-center ${className}`.trim()}
    >
      <TextStyled textStyle={styles.textStyle} className={styles.textColor}>
        {number}
      </TextStyled>
    </PressableStyled>
  );
};

export default ButtonNumber;
