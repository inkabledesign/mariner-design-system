import React from 'react';
import ViewStyled from '../ViewStyled';
import type { ProgressBarProps } from './index.types';
import Animated from 'react-native-reanimated';

/**
 * ProgressBar Component
 *
 * A reusable progress bar component with customizable styles and height.
 * Used across the application for showing progress (module progress, audio playback, etc.)
 *
 * Features:
 * - Two style variants: primary (blue) and accent (gold)
 * - Customizable height
 * - Automatic clamping of progress value (0-100)
 * - Rounded corners
 * - Cross-platform (React Native + Next.js)
 *
 * @example
 * // Basic usage with accent style
 * <ProgressBar progress={60} />
 *
 * @example
 * // Primary style with custom height
 * <ProgressBar progress={75} style="primary" height={4} />
 *
 * @example
 * // Audio player progress bar
 * <ProgressBar progress={progress} style="accent" height={4} className="my-2" />
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  style = 'accent',
  height = 12,
  className = '',
  animatedProgressLBarStyle,
}) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const progressWidth = `${clampedProgress}%`;

  // Get colors based on style variant
  const getColors = () => {
    switch (style) {
      case 'primary':
        return {
          rail: 'bg-brand-primary-20',
          progress: 'bg-brand-primary-100',
        };
      case 'accent':
      default:
        return {
          rail: 'bg-brand-accent-40',
          progress: 'bg-brand-accent-100',
        };
    }
  };

  const colors = getColors();
  const heightClass = height === 2 ? 'h-[2px]' : height === 4 ? 'h-1' : `h-[${height}px]`;

  return (
    <ViewStyled className={`w-full ${className}`}>
      <Animated.View
        className={`relative ${heightClass} w-full overflow-hidden rounded-lg`}
        style={animatedProgressLBarStyle}>
        {/* Rail (background) */}
        <ViewStyled className={`absolute inset-0 rounded-lg ${colors.rail}`} />

        {/* Progress fill */}
        <ViewStyled
          className={`absolute bottom-0 left-0 top-0 rounded-lg ${colors.progress}`}
          style={{ width: progressWidth }}
        />
      </Animated.View>
    </ViewStyled>
  );
};

export default ProgressBar;
