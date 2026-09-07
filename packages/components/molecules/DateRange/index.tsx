import React from 'react';
import Row from '../../atoms/Row';
import DateInput from '../DateInput';
import type { DateRangeProps } from './index.types';

/**
 * DateRange Component (Molecule)
 *
 * Two DateInput tiles side by side for selecting a date range (from/to).
 * Source: Mariner-Library / Molecules / Input/DateRange (Figma).
 *
 * @example
 * <DateRange from={{ day: '12', month: '02', year: '2025' }} to={{ day: '19', month: '02', year: '2025' }} />
 */
const DateRange = ({
  from,
  to,
  fromLabel = 'From',
  toLabel = 'To',
  onFromPress,
  onToPress,
  className = '',
}: DateRangeProps) => (
  <Row className={`gap-md ${className}`.trim()}>
    <DateInput
      label={fromLabel}
      day={from?.day}
      month={from?.month}
      year={from?.year}
      onPress={onFromPress}
      className="flex-1"
    />
    <DateInput
      label={toLabel}
      day={to?.day}
      month={to?.month}
      year={to?.year}
      onPress={onToPress}
      className="flex-1"
    />
  </Row>
);

export default DateRange;
