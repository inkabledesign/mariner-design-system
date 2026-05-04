import React from 'react';
import AnimatedCircleProgress from '../AnimatedCircleProgress';
import { getColorFromClass } from '@mariner/theme';
import type { CircleProgressProps } from './index.types';

/**
 * CircleProgress Component
 * 
 * A circular progress indicator with a rail (background) and progress bar.
 * The progress bar fills clockwise from the top (12 o'clock position) as progress increases.
 * 
 * Features:
 * - Cross-platform (React Native + Next.js web)
 * - SVG-based for smooth rendering
 * - Configurable size, stroke width, and colors
 * - Supports children content in the center
 * 
 * @example
 * <CircleProgress progress={75} size={28} strokeWidth={2} />
 * 
 * @example
 * // With icon in center
 * <CircleProgress progress={50} size={32}>
 *   <Icon iconType="ui" iconName="ico-success" />
 * </CircleProgress>
 */
const CircleProgress = ({
  themeMode = 'light',
  progress = 0,
  size = 28,
  strokeWidth = 2,
  progressColor = 'text-brand-primary-100',
  railColor = 'text-brand-primary-20',
  className = '',
  children,
}: CircleProgressProps) => {
  // Get colors from Tailwind classes
  const progressColorHex = getColorFromClass(progressColor, themeMode);
  const railColorHex = getColorFromClass(railColor, themeMode);

  return (
    <AnimatedCircleProgress
      progress={progress}
      size={size}
      strokeWidth={strokeWidth}
      progressColor={progressColorHex}
      railColor={railColorHex}
      duration={800}
      className={className}
    >
      {children}
    </AnimatedCircleProgress>
  );
};

export default CircleProgress;
