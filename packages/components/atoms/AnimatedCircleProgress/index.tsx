import React, { useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import ViewStyled from '../ViewStyled';
import { theme } from '@mariner/theme';
import type { AnimatedCircleProgressProps } from './index.types';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

/**
 * AnimatedCircleProgress Component
 * 
 * A reusable animated circular progress indicator with a rail (background) and progress bar.
 * The progress bar fills clockwise from the top (12 o'clock position) as progress increases.
 * 
 * This is the base component used by both CircleProgress and DonutStats.
 * 
 * Features:
 * - Smooth animations using react-native-reanimated
 * - Cross-platform (React Native + Next.js web)
 * - SVG-based for smooth rendering
 * - Configurable size, stroke width, colors, and animation duration
 * - Supports children content in the center
 * 
 * @example
 * <AnimatedCircleProgress 
 *   progress={75} 
 *   size={28} 
 *   strokeWidth={2}
 *   progressColor={getColor('light', 'brand', 'primary', '100')}
 *   railColor={getColor('light', 'brand', 'primary', '20')}
 * />
 * 
 * @example
 * // With icon in center
 * <AnimatedCircleProgress progress={50} size={32}>
 *   <Icon iconName="ico-success" />
 * </AnimatedCircleProgress>
 */
const AnimatedCircleProgress = ({
  themeMode = 'light',
  progress = 0,
  size = 28,
  strokeWidth = 2,
  progressColor = theme.color.light.brand.primary['100'],
  railColor = theme.color.light.brand.primary['20'],
  duration = 800,
  className = '',
  children,
}: AnimatedCircleProgressProps) => {
  // Animated progress value
  const animatedProgress = useSharedValue(0);
  
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  // Animate progress changes
  useEffect(() => {
    animatedProgress.value = withTiming(clampedProgress, {
      duration,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [clampedProgress, duration]);

  // Animated props for the progress circle
  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = circumference - (animatedProgress.value / 100) * circumference;
    return {
      strokeDashoffset,
    };
  });

  return (
    <ViewStyled 
      className={`relative items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* SVG Circle Progress */}
      <ViewStyled style={{ position: 'absolute' }}>
        <Svg width={size} height={size}>
          <G rotation="-90" origin={`${center}, ${center}`}>
            {/* Rail (background circle) */}
            <Circle
              cx={center}
              cy={center}
              r={radius}
              stroke={railColor}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Animated progress circle */}
            <AnimatedCircle
              cx={center}
              cy={center}
              r={radius}
              stroke={progressColor}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeLinecap="round"
              animatedProps={animatedProps}
            />
          </G>
        </Svg>
      </ViewStyled>
      
      {/* Center content */}
      {children && (
        <ViewStyled className="absolute inset-0 items-center justify-center">
          {children}
        </ViewStyled>
      )}
    </ViewStyled>
  );
};

export default AnimatedCircleProgress;
