import React from 'react';
import PressableStyled from '../PressableStyled';
import ViewStyled from '../ViewStyled';
import Icon from '../Icon';
import type { CheckboxProps } from './index.types';

/**
 * Checkbox Component (Atom)
 *
 * A square tick box with checked / unchecked states.
 * Source: Mariner-Library / Atoms / Input/TickBox (Figma) — 36px, radius-sm,
 * brand-primary border + tick.
 *
 * @example
 * <Checkbox checked={value} onPress={() => setValue(!value)} />
 */
const Checkbox = ({ checked = false, onPress, disabled = false, className = '' }: CheckboxProps) => (
  <PressableStyled onPress={onPress} disabled={disabled}>
    <ViewStyled
      className={`w-9 h-9 rounded-sm border border-brand-primary-100 items-center justify-center ${
        disabled ? 'opacity-50' : ''
      } ${className}`.trim()}>
      {checked && <Icon iconName="ico-tick" color="text-brand-primary-100" className="w-5 h-5" />}
    </ViewStyled>
  </PressableStyled>
);

export default Checkbox;
