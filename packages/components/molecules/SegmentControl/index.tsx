import React, { useEffect, useState } from 'react';
import { View, type LayoutChangeEvent } from 'react-native';
import {
  createAnimatedComponent,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { theme } from '@inkabledesign/mariner-theme';
import ViewStyled from '../../atoms/ViewStyled';
import SegmentControlItem from '../SegmentControlItem';
import type { SegmentControlProps } from './index.types';

// NOTE: use createAnimatedComponent rather than Animated.View — in the
// Rollup-bundled output `Animated` resolves to the module namespace, which
// does not expose `View` as a named export.
const AnimatedView = createAnimatedComponent(View);

const SPRING_CONFIG = {
  damping: 24,
  mass: 0.8,
  overshootClamping: true,
  stiffness: 240,
};

/**
 * SegmentControl Component (Molecule)
 *
 * An animated segmented control: equal-width label cells sit on a subtle
 * track while a single SegmentControlItem slides horizontally to the
 * selected segment (spring animation, respects reduced-motion settings).
 * Selection is controlled — the consumer owns the state.
 * Source: Mariner-Library / Molecules / Tabs/SegmentControl (Figma).
 *
 * @example
 * <SegmentControl
 *   options={[{ id: 'day', label: 'Day' }, { id: 'week', label: 'Week' }]}
 *   selectedId={selected}
 *   onChange={setSelected}
 * />
 */
const SegmentControl = ({
  options,
  selectedId,
  onChange,
  size = 'lg',
  shape = 'rounded',
  variant = 'secondary',
  themeMode = 'light',
  breakpoint = 'mobile',
  className = '',
}: SegmentControlProps) => {
  const palette = theme.color[themeMode];
  const radius = theme.radius[breakpoint].radius;
  const reduceMotion = useReducedMotion();

  const selectedIndex = Math.max(
    0,
    options.findIndex(option => option.id === selectedId)
  );
  const indicatorIndex = useSharedValue(selectedIndex);
  const [trackWidth, setTrackWidth] = useState(0);

  const itemWidth = trackWidth > 0 && options.length > 0 ? trackWidth / options.length : 0;

  const onTrackLayout = (event: LayoutChangeEvent) => {
    setTrackWidth(event.nativeEvent.layout.width);
  };

  useEffect(() => {
    indicatorIndex.set(
      reduceMotion ? selectedIndex : withSpring(selectedIndex, SPRING_CONFIG)
    );
  }, [indicatorIndex, reduceMotion, selectedIndex]);

  const indicatorAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: indicatorIndex.get() * itemWidth }],
    }),
    [itemWidth]
  );

  return (
    <ViewStyled
      className={`w-full p-xs ${shape === 'pill' ? 'rounded-full' : 'rounded-sm'} ${className}`.trim()}
      style={{ backgroundColor: palette.material.surface['0'] }}>
      <View
        onLayout={onTrackLayout}
        style={{
          flexDirection: 'row',
          borderRadius: shape === 'pill' ? radius.xxxl : radius.xs,
          backgroundColor: palette.material.alphaDark['5'],
        }}>
        {itemWidth > 0 && (
          <AnimatedView
            pointerEvents="none"
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            style={[
              indicatorAnimatedStyle,
              {
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: itemWidth,
              },
            ]}>
            <SegmentControlItem
              isActive
              size={size}
              shape={shape}
              variant={variant}
              themeMode={themeMode}
              breakpoint={breakpoint}
              className="w-full"
            />
          </AnimatedView>
        )}
        {options.map(option => (
          <SegmentControlItem
            key={option.id}
            label={option.label}
            isActive={option.id === selectedId}
            indicator={false}
            onPress={() => onChange(option.id)}
            size={size}
            shape={shape}
            variant={variant}
            themeMode={themeMode}
            breakpoint={breakpoint}
            className="flex-1"
          />
        ))}
      </View>
    </ViewStyled>
  );
};

export default SegmentControl;
