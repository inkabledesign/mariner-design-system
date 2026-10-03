import React from 'react';
import CircleProgress from '../../atoms/CircleProgress';
import TextStyled from '../../atoms/TextStyled';
import type { ProgressDecorativeProps } from './index.types';

/**
 * ProgressDecorative Component (Molecule)
 *
 * A circular progress ring with a centered percentage label.
 * Source: Mariner-Library / Molecules / Progress/ProgressDecorative (Figma).
 *
 * @example
 * <ProgressDecorative progress={30} />
 */
const ProgressDecorative = ({ progress, size = 84, className = '' }: ProgressDecorativeProps) => (
  <CircleProgress
    progress={progress}
    size={size}
    strokeWidth={8}
    progressColor="text-brand-primary-100"
    railColor="text-brand-primary-20"
    className={className}>
    <TextStyled textStyle="heading5" className="text-brand-primary-100">
      {`${Math.round(progress)}%`}
    </TextStyled>
  </CircleProgress>
);

export default ProgressDecorative;
