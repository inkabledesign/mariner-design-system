import React from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import ProgressBar from '../../atoms/ProgressBar';
import { theme } from '@inkabledesign/mariner-theme';
import type { ModuleProgressProps } from './index.types';

// Worklet-safe validation utility
const isValidValue = (value: number) => {
  'worklet';
  return value === value && value !== Infinity && value !== -Infinity;
};

/**
 * ModuleProgress Component (Molecule)
 *
 * Module completion progress: "Module progress" label, percentage, and a
 * progress bar. Optionally driven by scroll-linked shared values for the
 * collapse animation. Animation is a UI concern — progress data comes via props.
 * Source: mariner-edu molecules/ModuleProgress (ported).
 *
 * @example
 * <ModuleProgress progress={20} />
 * <ModuleProgress progress={75} variant="primary" />
 */
const ModuleProgress = ({
  progress = 0,
  variant = 'accent',
  animatedOpacity,
  animatedPositionY,
  className = '',
}: ModuleProgressProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const animationProgress = useDerivedValue(() => {
    'worklet';
    if (!animatedPositionY) return 0;
    const positionValue = animatedPositionY.value;
    if (!isValidValue(positionValue)) return 0;
    return Math.max(0, Math.min(1, (positionValue - 102) / 68));
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedPositionY) return {};
    const p = animationProgress.value;
    return {
      height: 24 + p * 32,
      transform: [{ translateY: (Platform.OS === 'android' ? -34 : -28) + p * 40 }],
      padding: p * 12,
    };
  });

  const animatedLabelStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedOpacity) return {};
    const opacityValue = animatedOpacity.value;
    if (!isValidValue(opacityValue)) return {};
    return { opacity: opacityValue };
  });

  const animatedProgressBarStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedPositionY) return {};
    const p = animationProgress.value;
    return {
      height: 6 - p * 4,
      transform: [{ translateY: -8 + p * 8 }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          borderRadius: theme.radius.mobile.radius.xl,
          gap: theme.spacing.mobile.spacing.xs,
          width: '100%',
          flexDirection: 'column',
        },
        animatedContainerStyle,
      ]}
    >
      <Animated.View style={animatedLabelStyle}>
        <Row className="items-center justify-between w-full">
          <TextStyled textStyle="label" className="text-brand-primary-100">
            Module progress
          </TextStyled>
          <TextStyled textStyle="label" className="text-brand-primary-100" fontWeight="700">
            {Math.round(clampedProgress)}%
          </TextStyled>
        </Row>
      </Animated.View>
      <ProgressBar
        progress={clampedProgress}
        animatedProgressLBarStyle={animatedProgressBarStyle as unknown as StyleProp<ViewStyle>}
        style={variant}
        height={3}
      />
    </Animated.View>
  );
};

export default ModuleProgress;
