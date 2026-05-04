import React, { useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, RadialGradient, Stop, Rect } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import type { GradientBackgroundProps, GradientConfig } from './index.types';
import gradientConfigs from './gradient-configs.json';

// Create Animated SVG components
const AnimatedRect = Animated.createAnimatedComponent(Rect);

/**
 * GradientBackground Component
 *
 * A complex gradient background using SVG with multiple layers:
 * - Linear gradient (configurable angle and colors)
 * - Radial gradient 1 (configurable position and colors)
 * - Radial gradient 2 (configurable position and colors)
 *
 * Features:
 * - JSON-based configuration for colors and positions
 * - Optional Reanimated animations (opacity, position, scale)
 * - Multiple preset configs (default, blue, gold, purple, green)
 */
const GradientBackground = ({
  width = '100%',
  height = '100%',
  className = '',
  config,
  animated = false,
  animationDuration = 3000,
}: GradientBackgroundProps) => {
  // Use provided config or default from JSON
  const gradientConfig: GradientConfig = config || (gradientConfigs.default as GradientConfig);

  // Animation values
  const opacity = useSharedValue(1);
  const radial1Scale = useSharedValue(1);
  const radial2Scale = useSharedValue(1);

  useEffect(() => {
    if (animated) {
      // Opacity pulse animation
      opacity.value = withRepeat(
        withSequence(
          withTiming(0.7, { duration: animationDuration, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: animationDuration, easing: Easing.inOut(Easing.ease) })
        ),
        -1, // Infinite repeat
        false
      );

      // Radial gradient 1 scale animation
      radial1Scale.value = withRepeat(
        withSequence(
          withTiming(1.1, { duration: animationDuration * 1.5, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: animationDuration * 1.5, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        false
      );

      // Radial gradient 2 scale animation (offset timing)
      radial2Scale.value = withRepeat(
        withSequence(
          withTiming(1, { duration: animationDuration * 1.2, easing: Easing.inOut(Easing.ease) }),
          withTiming(1.15, { duration: animationDuration * 1.2, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        false
      );
    }
  }, [animated, animationDuration]);

  // Animated props for opacity
  const animatedOpacityProps = useAnimatedProps(() => ({
    opacity: opacity.value,
  }));

  // Animated props for radial gradient 1 scale
  const animatedRadial1Props = useAnimatedProps(() => ({
    opacity: opacity.value * 0.8,
  }));

  // Animated props for radial gradient 2 scale
  const animatedRadial2Props = useAnimatedProps(() => ({
    opacity: opacity.value * 0.9,
  }));

  // Convert angle to SVG coordinates
  const getLinearGradientCoords = (angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x1: `${50 + 50 * Math.cos(rad)}%`,
      y1: `${50 + 50 * Math.sin(rad)}%`,
      x2: `${50 - 50 * Math.cos(rad)}%`,
      y2: `${50 - 50 * Math.sin(rad)}%`,
    };
  };

  const linearCoords = gradientConfig.linear
    ? getLinearGradientCoords(gradientConfig.linear.angle)
    : { x1: '0%', y1: '0%', x2: '0%', y2: '100%' };

  return (
    <View className={`absolute top-0 left-0 w-full h-full ${className}`}>
      <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <Defs>
          {/* Linear Gradient - from JSON config */}
          {gradientConfig.linear && (
            <LinearGradient
              id="linearGrad"
              x1={linearCoords.x1}
              y1={linearCoords.y1}
              x2={linearCoords.x2}
              y2={linearCoords.y2}>
              {gradientConfig.linear.stops.map((stop, index) => (
                <Stop
                  key={`linear-${index}`}
                  offset={stop.offset}
                  stopColor={stop.color}
                  stopOpacity={stop.opacity}
                />
              ))}
            </LinearGradient>
          )}

          {/* Radial Gradient 1 - from JSON config */}
          {gradientConfig.radial1 && (
            <RadialGradient
              id="radialGrad1"
              cx={gradientConfig.radial1.cx}
              cy={gradientConfig.radial1.cy}
              rx={gradientConfig.radial1.rx}
              ry={gradientConfig.radial1.ry}
              gradientUnits="userSpaceOnUse">
              {gradientConfig.radial1.stops.map((stop, index) => (
                <Stop
                  key={`radial1-${index}`}
                  offset={stop.offset}
                  stopColor={stop.color}
                  stopOpacity={stop.opacity}
                />
              ))}
            </RadialGradient>
          )}

          {/* Radial Gradient 2 - from JSON config */}
          {gradientConfig.radial2 && (
            <RadialGradient
              id="radialGrad2"
              cx={gradientConfig.radial2.cx}
              cy={gradientConfig.radial2.cy}
              rx={gradientConfig.radial2.rx}
              ry={gradientConfig.radial2.ry}
              gradientUnits="userSpaceOnUse">
              {gradientConfig.radial2.stops.map((stop, index) => (
                <Stop
                  key={`radial2-${index}`}
                  offset={stop.offset}
                  stopColor={stop.color}
                  stopOpacity={stop.opacity}
                />
              ))}
            </RadialGradient>
          )}
        </Defs>

        {/* Layer 3: Radial gradient 2 (bottom layer) */}
        {gradientConfig.radial2 &&
          (animated ? (
            <AnimatedRect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="url(#radialGrad2)"
              animatedProps={animatedRadial2Props}
            />
          ) : (
            <Rect x="0" y="0" width="100" height="100" fill="url(#radialGrad2)" />
          ))}

        {/* Layer 2: Radial gradient 1 */}
        {gradientConfig.radial1 &&
          (animated ? (
            <AnimatedRect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="url(#radialGrad1)"
              animatedProps={animatedRadial1Props}
            />
          ) : (
            <Rect x="0" y="0" width="100" height="100" fill="url(#radialGrad1)" />
          ))}

        {/* Layer 1: Linear gradient (top layer) */}
        {gradientConfig.linear &&
          (animated ? (
            <AnimatedRect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="url(#linearGrad)"
              animatedProps={animatedOpacityProps}
            />
          ) : (
            <Rect x="0" y="0" width="100" height="100" fill="url(#linearGrad)" />
          ))}
      </Svg>
    </View>
  );
};

export default GradientBackground;
