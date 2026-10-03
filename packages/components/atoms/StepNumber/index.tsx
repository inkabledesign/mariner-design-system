import React from 'react';
import ViewStyled from '../ViewStyled';
import TextStyled from '../TextStyled';
import type { StepNumberProps } from './index.types';

/**
 * StepNumber Component (Atom)
 *
 * A 28px circular badge containing a step index, used in onboarding / stepper UIs.
 * Source: Mariner-Library / Atoms / Title/StepNumber (Figma).
 *
 * - default: primary background, accent text
 * - active: accent background, primary text
 *
 * @example
 * <StepNumber number={1} active />
 */
const StepNumber = ({ number, active = false, className = '' }: StepNumberProps) => {
  const bg = active ? 'bg-brand-accent-100' : 'bg-brand-primary-100';
  const text = active ? 'text-brand-primary-100' : 'text-brand-accent-100';

  return (
    <ViewStyled className={`w-7 h-7 rounded-full items-center justify-center ${bg} ${className}`.trim()}>
      <TextStyled textStyle="heading6" className={text}>
        {String(number)}
      </TextStyled>
    </ViewStyled>
  );
};

export default StepNumber;
