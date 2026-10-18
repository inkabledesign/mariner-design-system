import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import type { ProgressStepperProps } from './index.types';

/**
 * ProgressStepper Component (Molecule)
 *
 * A segmented progress track: a row of equal-width bars where the first
 * `current` segments render filled (active) and the remainder render muted
 * (inactive). An optional leading/trailing label row sits above the track.
 * Source: Mariner-Library / Molecules / ProgressStepper (Figma, node 4484:28342).
 *
 * Design specs:
 * - Track: Row, gap-sm (8px), full width
 * - Segment: flex-1, 6px tall, rounded radius-xs (6px)
 * - light: active brand-primary-100, inactive brand-primary-20
 * - dark:  active brand-primary-5, inactive brand-primary-80
 * - Labels: label typography (Space Mono 11px); primary-100 (light) / primary-5 (dark)
 *
 * @example
 * <ProgressStepper total={11} current={6} labelLeading="STEP 1 of 5 - Tidal Diamond" />
 * <ProgressStepper total={5} current={2} themeMode="dark" labelTrailing="2/5" />
 */
const ProgressStepper = ({
  total,
  current = 0,
  labelLeading,
  labelTrailing,
  themeMode = 'light',
  className = '',
}: ProgressStepperProps) => {
  const isDark = themeMode === 'dark';
  const filled = Math.max(0, Math.min(current, total));

  const activeBg = isDark ? 'bg-brand-primary-5' : 'bg-brand-primary-100';
  const inactiveBg = isDark ? 'bg-brand-primary-80' : 'bg-brand-primary-20';
  const labelColor = isDark ? 'text-brand-primary-5' : 'text-brand-primary-100';

  const hasLabels = !!labelLeading || !!labelTrailing;

  return (
    <Column className={`w-full gap-sm ${className}`.trim()}>
      {hasLabels && (
        <Row className="w-full items-center justify-between">
          {labelLeading && (
            <TextStyled textStyle="label" className={labelColor}>
              {labelLeading}
            </TextStyled>
          )}
          {labelTrailing && (
            <TextStyled textStyle="label" className={`ml-auto text-right ${labelColor}`}>
              {labelTrailing}
            </TextStyled>
          )}
        </Row>
      )}
      <Row className="w-full items-center gap-sm">
        {Array.from({ length: Math.max(0, total) }).map((_, index) => (
          <ViewStyled
            key={index}
            className={`flex-1 h-[6px] rounded-xs ${index < filled ? activeBg : inactiveBg}`}
          />
        ))}
      </Row>
    </Column>
  );
};

export default ProgressStepper;
