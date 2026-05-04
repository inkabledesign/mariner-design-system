import React from 'react';
import ViewStyled from '../../atoms/ViewStyled';
import type { ProgressBarProps } from './index.types';

/**
 * ProgressBar Component
 *
 * A horizontal progress bar with rail and fill.
 * Used to show completion progress for modules and lessons.
 *
 * @example
 * <ProgressBar progress={60} style="accent" />
 * <ProgressBar progress={30} style="primary" />
 */
const ProgressBar = ({ progress, style = 'accent', className = '' }: ProgressBarProps) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  // Style variants
  const railColor = style === 'accent' ? 'bg-brand-accent-40' : 'bg-brand-primary-20';
  const fillColor = style === 'accent' ? 'bg-brand-accent-100' : 'bg-brand-primary-100';

  return (
    <ViewStyled className={`h-[4px] w-full overflow-hidden relative ${className}`.trim()}>
      {/* Rail (background) */}
      <ViewStyled className={`absolute inset-0 rounded-lg ${railColor}`} />

      {/* Progress fill */}
      <ViewStyled
        className={`absolute top-0 left-0 bottom-0 rounded-lg ${fillColor}`}
        style={{ width: `${clampedProgress}%` }}
      />
    </ViewStyled>
  );
};

export default ProgressBar;
