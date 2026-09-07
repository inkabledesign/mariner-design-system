import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { DateInputProps } from './index.types';

const segments = [
  { key: 'day', label: 'Day' },
  { key: 'month', label: 'Month' },
  { key: 'year', label: 'Year' },
] as const;

/**
 * DateInput Component (Molecule)
 *
 * A segmented day/month/year date display-input with per-segment labels and
 * hairline dividers. Presentational — the consumer opens a date picker onPress.
 * Source: Mariner-Library / Molecules / Input/Elements/DateInput (Figma).
 *
 * @example
 * <DateInput label="Date of birth" day="12" month="02" year="1990" onPress={fn} />
 */
const DateInput = ({ label, day, month, year, onPress, className = '' }: DateInputProps) => {
  const values = { day, month, year };

  return (
    <Column className={`gap-xxs ${className}`.trim()}>
      {label && (
        <TextStyled textStyle="label" className="text-brand-primary-100">
          {label}
        </TextStyled>
      )}
      <PressableStyled onPress={onPress}>
        <Row className="items-center rounded-md bg-material-surface-0 px-md py-xs">
          {segments.map((segment, index) => (
            <React.Fragment key={segment.key}>
              {index > 0 && <ViewStyled className="w-px h-9 bg-brand-primary-10 mx-sm" />}
              <Column className="flex-1 items-center">
                <TextStyled textStyle="label" className="text-brand-primary-80">
                  {segment.label}
                </TextStyled>
                <TextStyled textStyle="heading6" className="text-material-surface-80">
                  {values[segment.key] ?? ''}
                </TextStyled>
              </Column>
            </React.Fragment>
          ))}
        </Row>
      </PressableStyled>
    </Column>
  );
};

export default DateInput;
