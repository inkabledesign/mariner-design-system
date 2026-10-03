import React from 'react';
import ViewStyled from '../ViewStyled';
import type { DotProps } from './index.types';

/**
 * Dot Component (Atom)
 *
 * A single indicator dot with quizz/lesson filled and outline variants.
 * Source: Mariner-Learning / Atoms / Dot (Figma) — ~16px circle.
 *
 * @example
 * <Dot variant="quizz" />
 */
const Dot = ({ variant = 'quizz', className = '' }: DotProps) => {
  const styles = {
    quizz: 'bg-brand-primary-100',
    'quizz-outline': 'border-2 border-brand-primary-100',
    lesson: 'bg-material-surface-100',
    'lesson-outline': 'border-2 border-material-surface-100',
  }[variant];

  return <ViewStyled className={`w-4 h-4 rounded-full ${styles} ${className}`.trim()} />;
};

export default Dot;
