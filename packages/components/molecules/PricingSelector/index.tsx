import React, { useEffect, useState } from 'react';
import { View, type LayoutChangeEvent } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TilePrice from '../TilePrice';
import { theme } from '@inkabledesign/mariner-theme';
import type { PricingSelectorProps } from './index.types';

/**
 * PricingSelector Component (Molecule)
 *
 * A row of pricing tiles with an animated accent-border highlight that slides
 * to the selected option. Selection is controlled — the sliding overlay is a
 * UI animation concern handled here.
 * Source: mariner-edu molecules/PricingSelector (simplified: per-tile shared
 * value interpolation → controlled selection + sliding highlight).
 *
 * @example
 * <PricingSelector pricingData={[{ id: 'monthly', title: 'Monthly', price: '£5.99' }]} selectedOption="monthly" onSelectOption={fn} />
 */
const PricingSelector = ({
  pricingData,
  selectedOption,
  onSelectOption,
  className = '',
}: PricingSelectorProps) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [rowHeight, setRowHeight] = useState(0);
  const animatedPosition = useSharedValue(0);

  const selectedIndex = Math.max(
    0,
    pricingData.findIndex(item => item.id === selectedOption)
  );

  const handleLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  useEffect(() => {
    if (containerWidth === 0 || pricingData.length === 0) return;
    const tileWidth = containerWidth / pricingData.length;
    animatedPosition.value = withTiming(selectedIndex * tileWidth, { duration: 300 });
  }, [selectedIndex, containerWidth, pricingData.length, animatedPosition]);

  const animatedOverlayStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: animatedPosition.value }],
  }));

  return (
    <View style={{ width: '100%' }} onLayout={handleLayout}>
      <View onLayout={e => setRowHeight(e.nativeEvent.layout.height)}>
        <Row className={`w-full rounded-md border border-brand-primary-20 overflow-hidden ${className}`.trim()}>
          {pricingData.map((item, index) => (
            <React.Fragment key={item.id}>
              {index > 0 && <ViewStyled className="w-px h-full bg-material-surface-10" />}
              <TilePrice
                title={item.title}
                price={item.price}
                subtitle={item.subtitle}
                isSelected={selectedOption === item.id}
                onPress={() => onSelectOption?.(item.id, index)}
              />
            </React.Fragment>
          ))}
        </Row>
      </View>
      {pricingData.length > 0 && rowHeight > 0 && (
        <Animated.View
          pointerEvents="none"
          style={[
            animatedOverlayStyle,
            {
              width: `${100 / pricingData.length}%`,
              height: rowHeight,
              position: 'absolute',
              top: 0,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: theme.color.light.brand.accent['100'],
            },
          ]}
        />
      )}
    </View>
  );
};

export default PricingSelector;
