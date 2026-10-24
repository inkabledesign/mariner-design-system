import React from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import {
  createAnimatedComponent,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import ProgressBar from '../../atoms/ProgressBar';
import { theme } from '@inkabledesign/mariner-theme';
import type { ModuleProgressProps } from './index.types';

// NOTE: use createAnimatedComponent rather than Animated.View — in the
// Rollup-bundled output `Animated` resolves to the module namespace, which
// does not expose `View` as a named export.
const AnimatedView = createAnimatedComponent(View);

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
  themeMode = 'light',
}: ModuleProgressProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const colors = theme.color[themeMode];
  const surfaceColor =
    themeMode === 'dark' ? colors.material.surface['100'] : colors.material.surface['0'];

  const animationProgress = useDerivedValue(() => {
    'worklet';
    if (!animatedPositionY) return 1;
    const positionValue = animatedPositionY.value;
    if (!isValidValue(positionValue)) return 1;
    return Math.max(0, Math.min(1, (positionValue - 102) / 68));
  });

  // Card chrome (padding + border) fades out as the header collapses so only the
  // bar remains — Figma HeaderModule isCollapsed state.
  const animatedContainerStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedPositionY) return {};
    const p = animationProgress.value;
    return {
      height: 4 + p * 52,
      paddingVertical: p * 12,
      // 12→24: collapsed bar keeps Figma's ~24px inset from the sheet edge
      // (sheet px-md 12 + card padH 12)
      paddingHorizontal: theme.spacing.mobile.spacing.md + p * 12,
      borderWidth: p,
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
    // The card is justifyContent:flex-end, so the bar always hugs its bottom
    // edge — no translate needed as the card height animates.
    return { height: 4 - p * 2 };
  });

  return (
    <AnimatedView
      style={[
        {
          borderRadius: theme.radius.mobile.radius.xl,
          gap: theme.spacing.mobile.spacing.xs,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundColor: surfaceColor,
          borderColor: colors.brand.primary['10'],
          borderWidth: 1,
          paddingVertical: theme.spacing.mobile.spacing.md,
          paddingHorizontal: theme.spacing.mobile.spacing.xl,
          overflow: 'hidden',
        },
        animatedContainerStyle,
      ]}
    >
      <AnimatedView style={animatedLabelStyle}>
        <Row className="items-center justify-between w-full">
          <TextStyled textStyle="label" fontWeight="500" className="text-brand-primary-100">
            Module progress
          </TextStyled>
          <TextStyled textStyle="footnote" className="text-brand-primary-100" fontWeight="700">
            {Math.round(clampedProgress)}%
          </TextStyled>
        </Row>
      </AnimatedView>
      <ProgressBar
        progress={clampedProgress}
        animatedProgressLBarStyle={animatedProgressBarStyle as unknown as StyleProp<ViewStyle>}
        style={variant}
        height={2}
      />
    </AnimatedView>
  );
};

export default ModuleProgress;
