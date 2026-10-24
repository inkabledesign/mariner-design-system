import React from 'react';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { ButtonNumberProps, ButtonNumberState } from './index.types';

const stateStyles: Record<
  ButtonNumberState,
  { borderColor: string; textColor: string; fontWeight: '500' | '700' }
> = {
  default: {
    borderColor: 'border-brand-accent-20',
    textColor: 'text-brand-primary-60',
    fontWeight: '500',
  },
  active: {
    borderColor: 'border-brand-accent-100',
    textColor: 'text-brand-primary-100',
    fontWeight: '700',
  },
  completed: {
    borderColor: 'border-brand-accent-100',
    textColor: 'text-brand-accent-100',
    fontWeight: '700',
  },
  success: {
    borderColor: 'border-system-success-100',
    textColor: 'text-system-success-100',
    fontWeight: '700',
  },
  error: {
    borderColor: 'border-system-error-100',
    textColor: 'text-system-error-100',
    fontWeight: '700',
  },
};

/**
 * ButtonNumber Component (Molecule)
 *
 * A circular numbered button for step indicators, pagination, or numbered
 * navigation. States: default, active, completed, success, error.
 * Source: mariner-edu molecules/ButtonNumber (ported); colours per Figma
 * PaginationStyledNumber (4215:30483): default accent-20 ring / primary-60
 * label, active accent-100 ring / primary-100, completed accent-100 ring + text.
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
      {/* `label` is SpaceMono on mobile; Figma wants Montserrat Medium — weight
          500 makes TextStyled pick it while keeping the 11px label size */}
      <TextStyled textStyle="label" fontWeight={styles.fontWeight} className={styles.textColor}>
        {number}
      </TextStyled>
    </PressableStyled>
  );
};

export default ButtonNumber;
