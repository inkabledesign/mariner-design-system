import React from 'react';
import Row from '../../../atoms/Row';
import InputDate from '../InputDate';
import type { InputDateRangeProps } from './index.types';

/**
 * InputDateRange Component (Molecule)
 *
 * Two InputDate tiles side by side for selecting a date range (from/to).
 * Source: Mariner-Library / Molecules / Input/InputDateRange (Figma).
 *
 * @example
 * <InputDateRange from={{ day: '12', month: '02', year: '2025' }} to={{ day: '19', month: '02', year: '2025' }} />
 */
const InputDateRange = ({
  from,
  to,
  fromLabel = 'From',
  toLabel = 'To',
  onFromPress,
  onToPress,
  className = '',
}: InputDateRangeProps) => (
  <Row className={`gap-lg ${className}`.trim()}>
    <InputDate
      label={fromLabel}
      day={from?.day}
      month={from?.month}
      year={from?.year}
      onPress={onFromPress}
      className="flex-1"
    />
    <InputDate
      label={toLabel}
      day={to?.day}
      month={to?.month}
      year={to?.year}
      onPress={onToPress}
      className="flex-1"
    />
  </Row>
);

export default InputDateRange;
