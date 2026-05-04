import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Pressable, LayoutChangeEvent, View } from 'react-native';
import Row from '../../atoms/Row';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  useDerivedValue,
} from 'react-native-reanimated';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import { theme } from '@mariner/theme';
import type { TabBarProps } from './index.types';

/**
 * TabBar - Animated tab bar with sliding indicator
 *
 * Features an animated underline that follows the active tab and can
 * interpolate based on scroll position for smooth transitions.
 *
 * @component
 * @example
 * ```tsx
 * <TabBar
 *   tabs={[
 *     { id: 'tab1', label: 'First' },
 *     { id: 'tab2', label: 'Second' }
 *   ]}
 *   selectedIndex={0}
 *   onChange={(index) => setActiveTab(index)}
 * />
 * ```
 */
const TabBar = ({
  tabs,
  selectedIndex,
  onChange,
  scrollX = 0,
  maxScrollX = 0,
  className,
  themeMode = 'light',
}: TabBarProps) => {
  // Local state to track tab positions
  const [tabMeasurements, setTabMeasurements] = useState<Array<{ x: number; width: number }>>([]);
  const [isReady, setIsReady] = useState(false);

  // Refs for measurements
  const containerRef = useRef<View>(null);
  const tabRefs = useRef<Array<View | null>>(tabs.map(() => null));

  // Animation values
  const indicatorX = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);

  // Flag to disable scroll interpolation during manual tab changes
  const isManualChange = useSharedValue(false);

  // Handle container layout
  const onContainerLayout = () => {
    // Wait a bit to ensure all elements are rendered and styled
    setTimeout(measureTabs, 300);
  };

  // Measure all tabs
  const measureTabs = () => {
    if (!containerRef.current) return;

    const measurements: Array<{ x: number; width: number }> = [];

    // Get container position
    containerRef.current.measureInWindow(containerX => {
      // Measure each tab
      const measureTabsPromises = tabRefs.current.map((tabRef, index) => {
        return new Promise<void>(resolve => {
          if (!tabRef) {
            resolve();
            return;
          }

          tabRef.measureInWindow((x, _y, width) => {
            // Calculate position relative to container
            const relativeX = x - containerX;
            measurements[index] = { x: relativeX, width };
            resolve();
          });
        });
      });

      // When all measurements are done
      Promise.all(measureTabsPromises).then(() => {
        if (measurements.filter(Boolean).length === tabs.length) {
          // console.log('[TabBar] Measurements:', measurements);
          // console.log('[TabBar] Selected index:', selectedIndex);
          setTabMeasurements(measurements);
          setIsReady(true);

          // Initialize indicator position
          if (measurements[selectedIndex]) {
            const { x, width } = measurements[selectedIndex];
            // console.log('[TabBar] Initial indicator position:', { x, width });
            indicatorX.value = x;
            indicatorWidth.value = width;
          }
        }
      });
    });
  };

  // Handle tab selection
  const handleTabPress = (index: number) => {
    // console.log('[TabBar] Tab pressed:', index);

    // Disable scroll interpolation during manual change
    isManualChange.value = true;

    onChange(index);

    // Animate the indicator
    if (tabMeasurements[index]) {
      const { x, width } = tabMeasurements[index];
      // console.log('[TabBar] Animating indicator to:', { x, width, index });
      indicatorX.value = withTiming(x, {
        duration: 250,
        easing: Easing.bezier(0.33, 1, 0.68, 1),
      });
      indicatorWidth.value = withTiming(width, {
        duration: 250,
        easing: Easing.bezier(0.33, 1, 0.68, 1),
      });

      // Re-enable scroll interpolation after animation completes
      setTimeout(() => {
        isManualChange.value = false;
      }, 300);
    }
  };

  // Re-measure tabs when tabs array changes
  useEffect(() => {
    if (tabs.length > 0) {
      setIsReady(false);
      setTabMeasurements([]);
      setTimeout(measureTabs, 300);
    }
  }, [tabs.length]);

  // Update indicator when selectedIndex changes
  useEffect(() => {
    if (isReady && tabMeasurements[selectedIndex]) {
      const { x, width } = tabMeasurements[selectedIndex];
      indicatorX.value = withTiming(x, { duration: 250, easing: Easing.bezier(0.33, 1, 0.68, 1) });
      indicatorWidth.value = withTiming(width, {
        duration: 250,
        easing: Easing.bezier(0.33, 1, 0.68, 1),
      });
    }
  }, [selectedIndex, isReady, tabMeasurements]);

  // Handle scroll-based interpolation
  useDerivedValue(() => {
    // Skip interpolation during manual tab changes
    if (isManualChange.value) {
      return 0;
    }

    // Only run if we have scroll data and measurements
    if (isReady && maxScrollX > 0 && typeof scrollX !== 'undefined') {
      const scrollValue = typeof scrollX === 'number' ? scrollX : scrollX.value;

      if (scrollValue === 0) return 0;

      const progress = scrollValue / maxScrollX;

      const currentTabIndex = Math.floor(progress);
      const nextTabIndex = Math.min(currentTabIndex + 1, tabs.length - 1);
      const tabProgress = progress - currentTabIndex;

      // Only interpolate if we have valid tab positions
      if (tabMeasurements[currentTabIndex] && tabMeasurements[nextTabIndex]) {
        const currentTab = tabMeasurements[currentTabIndex];
        const nextTab = tabMeasurements[nextTabIndex];

        // Interpolate position and width
        const interpolatedX = currentTab.x + (nextTab.x - currentTab.x) * tabProgress;
        const interpolatedWidth =
          currentTab.width + (nextTab.width - currentTab.width) * tabProgress;

        // Update animated values without animation for smooth tracking
        indicatorX.value = interpolatedX;
        indicatorWidth.value = interpolatedWidth;
      }
    }
    return 0;
  }, [scrollX, maxScrollX, isReady, tabMeasurements, tabs.length]);

  // Animated style for the indicator
  const indicatorStyle = useAnimatedStyle(() => {
    // console.log('[TabBar] Indicator animated values:', {
      // x: indicatorX.value,
      // width: indicatorWidth.value,
    // });
    return {
      transform: [{ translateX: indicatorX.value }],
      width: indicatorWidth.value,
    };
  });

  return (
    <ViewStyled className={`w-full overflow-hidden ${className || ''}`}>
      {/* Tab buttons container with indicator */}
      <View
        ref={containerRef}
        onLayout={onContainerLayout}
        style={{
          position: 'relative',
          flexDirection: 'row',
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: theme.color[themeMode].brand.primary['20'],
          backgroundColor: theme.color[themeMode].material.surface['0'],
        }}>
        {tabs.map((item, index) => (
          <Pressable
            key={item.id}
            ref={ref => {
              tabRefs.current[index] = ref as unknown as View | null;
            }}
            style={{ flex: 1 }}
            onPress={() => handleTabPress(index)}>
            <Row className="pt-sm pb-xs items-center justify-center">
              <TextStyled
                textStyle="body"
                fontWeight={selectedIndex === index ? '600' : '400'}
                className={`text-center ${
                  selectedIndex === index ? 'text-brand-primary-100' : 'text-material-surface-80'
                }`}>
                {item.label}
              </TextStyled>
            </Row>
          </Pressable>
        ))}

        {/* Animated indicator - now sibling of tabs */}
        <Animated.View
          style={[
            indicatorStyle,
            {
              position: 'absolute',
              height: 2,
              bottom: 0,
              backgroundColor: theme.color[themeMode].brand.primary['100'],
            },
          ]}
        />
      </View>
    </ViewStyled>
  );
};

export default TabBar;
