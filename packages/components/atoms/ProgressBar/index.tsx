import React from 'react';
import { View } from 'react-native';
import ViewStyled from '../ViewStyled';
import type { ProgressBarProps } from './index.types';
import { createAnimatedComponent } from 'react-native-reanimated';
import { theme } from '@inkabledesign/mariner-theme';

// NOTE: use createAnimatedComponent rather than Animated.View — in the
// Rollup-bundled output `Animated` resolves to the module namespace, which
// does not expose `View` as a named export.
const AnimatedView = createAnimatedComponent(View);

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
  breakpoint = 'mobile',
}) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const progressWidth: `${number}%` = `${clampedProgress}%`;

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
  const trackRadius = theme.radius[breakpoint].radius.lg;

  return (
    <ViewStyled className={`w-full ${className}`}>
      {/* className is a no-op on Animated components under NativeWind, so the
          track layout lives in `style` */}
      <AnimatedView
        style={[
          { position: 'relative', height, width: '100%', overflow: 'hidden', borderRadius: trackRadius },
          animatedProgressLBarStyle,
        ]}>
        {/* Rail (background) */}
        <ViewStyled className={`absolute inset-0 rounded-lg ${colors.rail}`} />

        {/* Progress fill */}
        <ViewStyled
          className={`absolute bottom-0 left-0 top-0 rounded-lg ${colors.progress}`}
          style={{ width: progressWidth }}
        />
      </AnimatedView>
    </ViewStyled>
  );
};

export default ProgressBar;
