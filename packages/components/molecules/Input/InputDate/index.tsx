import React from 'react';
import Row from '../../../atoms/Row';
import Column from '../../../atoms/Column';
import ViewStyled from '../../../atoms/ViewStyled';
import TextStyled from '../../../atoms/TextStyled';
import PressableStyled from '../../../atoms/PressableStyled';
import type { InputDateProps } from './index.types';

const segments = [
  { key: 'day', label: 'Day' },
  { key: 'month', label: 'Month' },
  { key: 'year', label: 'Year' },
] as const;

/**
 * InputDate Component (Molecule)
 *
 * A segmented day/month/year date display-input with per-segment labels and
 * hairline dividers. Presentational — the consumer opens a date picker onPress.
 * Source: Mariner-Library / Molecules / Input/InputDate (Figma).
 *
 * Wrap it in `FormItem` to add a label and error message.
 *
 * @example
 * <InputDate label="Date of birth" day="12" month="02" year="1990" onPress={fn} />
 */
const InputDate = ({ label, day, month, year, onPress, className = '' }: InputDateProps) => {
  const values = { day, month, year };

  return (
    <Column className={`gap-xs ${className}`.trim()}>
      {label && (
        <ViewStyled className="px-sm">
          <TextStyled textStyle="label" className="text-brand-primary-100">
            {label}
          </TextStyled>
        </ViewStyled>
      )}
      <PressableStyled onPress={onPress}>
        <Row className="items-center rounded-sm border border-brand-primary-5 bg-material-surface-light p-xs">
          {segments.map((segment, index) => (
            <React.Fragment key={segment.key}>
              {index > 0 && <ViewStyled className="w-px h-9 bg-brand-primary-10" />}
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

export default InputDate;
