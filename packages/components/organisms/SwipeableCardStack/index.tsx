import React from 'react';
import { Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolation,
  runOnJS,
  type SharedValue,
} from 'react-native-reanimated';
import ViewStyled from '../../atoms/ViewStyled';
import type { SwipeableCardStackProps } from './index.types';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface CardProps<T> {
  item: T;
  index: number;
  currentIndex: number;
  stackOffset: number;
  maxVisibleCards: number;
  swipeThreshold: number;
  animatedValue: SharedValue<number>;
  renderCard: (item: T, index: number) => React.ReactNode;
  onDismiss: (item: T, index: number) => void;
}

const SwipeableCard = <T,>({
  item,
  index,
  currentIndex,
  stackOffset,
  maxVisibleCards,
  swipeThreshold,
  animatedValue,
  renderCard,
  onDismiss,
}: CardProps<T>) => {
  const translateY = useSharedValue(0);
  const isTop = index === currentIndex;

  const panGesture = Gesture.Pan()
    .enabled(isTop)
    .onUpdate((event: { translationY: number }) => {
      if (event.translationY > 0) {
        translateY.value = event.translationY;
        animatedValue.value = interpolate(event.translationY, [0, SCREEN_HEIGHT], [index, index + 1]);
      }
    })
    .onEnd((event: { translationY: number }) => {
      if (event.translationY > swipeThreshold) {
        translateY.value = withTiming(SCREEN_HEIGHT + 100, { duration: 200 }, () => {
          runOnJS(onDismiss)(item, index);
        });
        animatedValue.value = withTiming(index + 1, { duration: 200 });
      } else {
        translateY.value = withTiming(0);
        animatedValue.value = withTiming(index);
      }
    });

  const animatedCardStyle = useAnimatedStyle(() => {
    const stackPosition = index - animatedValue.value;
    const scale = interpolate(
      stackPosition,
      [0, 1, 2, 3, 4, 5],
      [1, 0.98, 0.96, 0.94, 0.92, 0.9],
      Extrapolation.CLAMP
    );
    const stackTranslateY = interpolate(
      stackPosition,
      [0, 1, 2, 3, 4, 5],
      [0, -stackOffset, -stackOffset * 2, -stackOffset * 3, -stackOffset * 4, -stackOffset * 5],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      stackPosition,
      [-1, 0, maxVisibleCards, maxVisibleCards + 1],
      [0, 1, 1, 0],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY: isTop ? translateY.value : stackTranslateY }, { scale }],
      opacity,
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={[
          { position: 'absolute', width: '100%', alignItems: 'center', zIndex: -index },
          animatedCardStyle,
        ]}
      >
        {renderCard(item, index)}
      </Animated.View>
    </GestureDetector>
  );
};

/**
 * SwipeableCardStack Component (Organism)
 *
 * A deck of cards where the front card can be dragged down and dismissed.
 * Presentational — the consumer owns `currentIndex` and data. Gesture and
 * stack animation are UI concerns handled here.
 * Source: mariner-edu organisms/SwipeableCardStack (simplified: internal
 * state/infinite loop → controlled currentIndex/onIndexChange).
 *
 * @example
 * <SwipeableCardStack data={cards} currentIndex={i} onIndexChange={setI} renderCard={render} />
 */
const SwipeableCardStack = <T,>({
  data,
  renderCard,
  currentIndex = 0,
  onIndexChange,
  onSwipe,
  stackOffset = 16,
  maxVisibleCards = 5,
  swipeThreshold = 120,
  className = '',
}: SwipeableCardStackProps<T>) => {
  const animatedValue = useSharedValue(currentIndex);

  const handleDismiss = (item: T, index: number) => {
    onIndexChange?.(index + 1);
    onSwipe?.(item, 'down');
  };

  return (
    <ViewStyled className={`relative items-center justify-center ${className}`.trim()}>
      {data.map((item, index) => {
        if (index < currentIndex || index > currentIndex + maxVisibleCards) return null;
        return (
          <SwipeableCard
            key={index}
            item={item}
            index={index}
            currentIndex={currentIndex}
            stackOffset={stackOffset}
            maxVisibleCards={maxVisibleCards}
            swipeThreshold={swipeThreshold}
            animatedValue={animatedValue}
            renderCard={renderCard}
            onDismiss={handleDismiss}
          />
        );
      })}
    </ViewStyled>
  );
};

export default SwipeableCardStack;
