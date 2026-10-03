import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import ViewStyled from '../../atoms/ViewStyled';
import PrimaryImage from '../../atoms/PrimaryImage';
import PageControl from '../../atoms/PageControl';
import type { ImageCarouselProps } from './index.types';

/**
 * ImageCarousel Component (Molecule)
 *
 * A swipeable image carousel with a pager-dot platter. Scroll tracking and
 * auto-play are view concerns; the consumer may observe the index via
 * onIndexChange.
 * Source: mariner-edu molecules/ImageCarousel (ported — hand-rolled dots
 * replaced by the PageControl atom).
 *
 * @example
 * <ImageCarousel images={[{ source: 'https://…/a.jpg' }, { source: 'https://…/b.jpg' }]} />
 */
const ImageCarousel = ({
  images,
  aspectRatio = '4:3',
  showOverlay = false,
  autoPlayInterval = 0,
  onIndexChange,
  className = '',
}: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const [viewWidth, setViewWidth] = useState(Dimensions.get('window').width);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / viewWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
      onIndexChange?.(index);
    }
  };

  useEffect(() => {
    if (autoPlayInterval > 0 && images.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex(prev => {
          const next = (prev + 1) % images.length;
          scrollViewRef.current?.scrollTo({ x: next * viewWidth, animated: true });
          onIndexChange?.(next);
          return next;
        });
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, images.length, viewWidth, onIndexChange]);

  if (!images?.length) return null;

  return (
    <View
      style={{ width: '100%', position: 'relative', overflow: 'hidden' }}
      onLayout={e => setViewWidth(e.nativeEvent.layout.width)}
    >
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={viewWidth}
        snapToAlignment="center"
      >
        {images.map((image, index) => (
          <ViewStyled key={index} style={{ width: viewWidth }}>
            <PrimaryImage
              source={image.source}
              alt={image.alt}
              aspectRatio={aspectRatio}
              showOverlay={showOverlay}
            />
          </ViewStyled>
        ))}
      </ScrollView>
      {images.length > 1 && (
        <ViewStyled className="absolute bottom-sm left-0 right-0 items-center">
          <PageControl count={images.length} selected={activeIndex} platter />
        </ViewStyled>
      )}
    </View>
  );
};

export default ImageCarousel;
