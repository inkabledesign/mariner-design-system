import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  runOnJS,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import TextStyled from '../../atoms/TextStyled';
import ViewStyled from '../../atoms/ViewStyled';
import { theme } from '@mariner/theme';
import type { ButtonGroupProps } from './index.types';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';

/**
 * ButtonGroup Component - iOS 16+ Style Segmented Control
 *
 * A modern segmented control with smooth animations and haptic feedback.
 * Inspired by iOS 16+ design with sliding background indicator.
 *
 * Features:
 * - Smooth sliding animation between selections
 * - Haptic feedback on selection (iOS)
 * - Scale animation on press
 * - Flexible width based on number of options
 *
 * Design Specs:
 * - Border radius: rounded-full (56px)
 * - Border: brand-accent-20 (#e4dbcc) for container
 * - Active: brand-accent-100 (#a68756) border with shadow
 * - Typography: button (16px Montserrat Bold for active, Regular for inactive)
 * - Height: 56px
 * - Width: 102px per button (flexible)
 *
 * @example
 * <ButtonGroup
 *   options={[
 *     { id: 'day', label: 'Day' },
 *     { id: 'night', label: 'Night' }
 *   ]}
 *   selectedId="day"
 *   onChange={(id) => setTheme(id)}
 * />
 */
const ButtonGroup = ({
  options,
  selectedId,
  onChange,
  variant = 'light',
  className = '',
  size = 'sm',
  themeMode = 'light',
}: ButtonGroupProps) => {
  const selectedIndex = options.findIndex(opt => opt.id === selectedId);
  const buttonWidth = 102;
  const containerWidth = buttonWidth * options.length;

  // Background color based on variant
  const bgColor = variant === 'dark' ? 'bg-material-surface-100' : 'bg-material-surface-0';

  const borderColor =
    variant === 'dark' ? 'border-brand-accent-alpha-40' : 'border-brand-accent-alpha-20';

  // Shared value for drag position
  const dragX = useSharedValue(selectedIndex * buttonWidth);

  // Animated style for sliding background (glass overlay with scale)
  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: dragX.value }, // Just read the value, don't animate here
        { scale: 1.05 }, // Match PricingSelector scale
      ],
      borderRadius: 56, // Full rounded
    };
  });

  // Pan gesture for dragging between options
  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      const newX = selectedIndex * buttonWidth + event.translationX;
      // Clamp between 0 and max position
      const clampedX = Math.max(0, Math.min(newX, (options.length - 1) * buttonWidth));
      dragX.value = clampedX;
    })
    .onEnd(event => {
      // Calculate which option is closest
      const targetIndex = Math.round(dragX.value / buttonWidth / 2);
      const clampedIndex = Math.max(0, Math.min(targetIndex, options.length - 1));

      // Snap to target position
      dragX.value = withTiming(clampedIndex * buttonWidth, {
        duration: 300, // Match PricingSelector timing
      });

      // Call onChange if different option
      if (clampedIndex !== selectedIndex) {
        runOnJS(onChange)(options[clampedIndex].id);
      }
    });

  // Update drag position when selectedId changes externally
  React.useEffect(() => {
    dragX.value = withTiming(selectedIndex * buttonWidth, {
      duration: 300, // Match PricingSelector timing
    });
  }, [selectedIndex, buttonWidth]);

  return (
    <GestureDetector gesture={panGesture}>
      <View collapsable={false}>
        <ViewStyled
          style={{ width: containerWidth }}
          className={`
            ${bgColor}
            border ${borderColor}
            rounded-full
            h-[${size === 'lg' ? 58 : 48}px]
            flex-row
            relative
          
            ${className}
          `.trim()}>
          {/* Sliding background indicator */}
          <Animated.View
            style={[
              styles.slidingBackground,
              {
                width: buttonWidth,
                height: size === 'lg' ? 58 : 48,
                borderColor: theme.color[themeMode].brand.primary['100'],
              },
              animatedBackgroundStyle,
            ]}
          />

          {/* Buttons */}
          <Row className="flex-1 justify-center items-center ">
            {options.map((option, index) => {
              const isSelected = option.id === selectedId;
              // ButtonGroupItem
              return (
                <ViewStyled
                  key={option.id}
                  className="flex-1 items-center justify-center w-full  h-[56px]">
                  <Pressable
                    onPress={() => {
                      dragX.value = withTiming(index * buttonWidth, {
                        duration: 300, // Match PricingSelector timing
                      });
                      onChange(option.id);
                    }}
                    style={({ pressed }) => [
                      styles.button,
                      {
                        backgroundColor: isSelected ? 'brand-primary-100' : 'transparent',
                        width: buttonWidth,
                        height: 56,
                        opacity: pressed ? 0.7 : 1,
                        transform: [{ scale: pressed ? 0.95 : 1 }],
                      },
                    ]}>
                    <TextStyled
                      textStyle={'caption'}
                      fontWeight={isSelected ? '700' : '400'}
                      className={
                        isSelected && option.id === 'day'
                          ? 'text-brand-primary-100'
                          : isSelected && option.id === 'night'
                            ? 'text-brand-primary-5'
                            : option.id === 'day'
                              ? 'text-brand-primary-5'
                              : 'text-brand-primary-100'
                      }>
                      {option.label}
                    </TextStyled>
                  </Pressable>
                </ViewStyled>
              );
            })}
          </Row>
        </ViewStyled>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  slidingBackground: {
    position: 'absolute',
    zIndex: 2,
    height: 56,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect - match PricingSelector
    borderWidth: 1,
    borderColor: theme.color.light.brand.primary['100'],
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.15, // Match PricingSelector shadow
    // shadowRadius: 14,
    // elevation: 5,
  },
  button: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    // zIndex: 1,
    width: 102,
    flex: 1,
    flexDirection: 'row',
  },
});

export default ButtonGroup;
