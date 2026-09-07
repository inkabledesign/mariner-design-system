import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewStyled from '../../atoms/ViewStyled';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import WaveDecoration from '../../atoms/WaveDecoration';
import Avatar from '../Avatar';
import { theme } from '@inkabledesign/mariner-theme';
import type { HeaderTopSheetProps } from './index.types';

// Worklet-safe validation utility
const isValidValue = (value: number) => {
  'worklet';
  return value === value && value !== Infinity && value !== -Infinity;
};

/**
 * HeaderTopSheet Component (Molecule)
 *
 * A bottom-sheet-style header: wave decorations flanking an avatar, title,
 * rating + subtitle details, and a content slot. Supports optional
 * scroll-linked shared values for the collapse animation.
 * Source: mariner-edu molecules/HeaderTopSheet (ported — animation is a UI
 * concern; all data comes via props).
 *
 * @example
 * <HeaderTopSheet title="John Smith" rating={4.2} subtitle="Skipper" imageUrl={uri} />
 */
const HeaderTopSheet = ({
  title,
  rating,
  subtitle,
  children,
  imageUrl,
  iconName,
  onEditPress,
  animatedHeight,
  animatedAvatarScale,
  animatedPositionY,
}: HeaderTopSheetProps) => {
  const insets = useSafeAreaInsets();
  const showDetails = subtitle || rating;
  const showTopSection = title || showDetails || imageUrl || iconName;

  const animatedContainerStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedHeight) return {};
    const heightValue = animatedHeight.value;
    if (!isValidValue(heightValue)) return {};
    return { height: heightValue };
  });

  const animatedAvatarStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedAvatarScale || !animatedPositionY) return {};
    const scaleValue = animatedAvatarScale.value;
    const positionValue = animatedPositionY.value;
    if (!isValidValue(scaleValue) || !isValidValue(positionValue)) return {};
    const progress = Math.max(0, Math.min(1, (positionValue - 102) / 68));
    return { transform: [{ scale: scaleValue }, { translateY: -32 + progress * 32 }] };
  });

  const animatedContentStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedPositionY) return {};
    const positionValue = animatedPositionY.value;
    if (!isValidValue(positionValue)) return {};
    const progress = Math.max(0, Math.min(1, (positionValue - 102) / 68));
    return { transform: [{ translateY: -44 + progress * 44 }, { scale: 0.8 + progress * 0.2 }] };
  });

  const animatedDetailsStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedPositionY) return {};
    const positionValue = animatedPositionY.value;
    if (!isValidValue(positionValue)) return {};
    return { opacity: Math.max(0, Math.min(1, (positionValue - 102) / 68)) };
  });

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          borderRadius: 36,
          overflow: 'hidden',
          backgroundColor: theme.color.light.material.surface['0'],
        },
        animatedContainerStyle,
      ]}
    >
      <Animated.View
        style={[
          {
            flex: 1,
            overflow: 'hidden',
            alignItems: 'center',
            paddingTop: insets.top,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: theme.color.light.brand.primary['20'],
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          },
          animatedContainerStyle,
        ]}
      >
        {showTopSection && (
          <Animated.View style={animatedAvatarStyle}>
            <ViewStyled className="relative overflow-hidden pt-md pb-md">
              <Row className="items-center justify-center gap-sm">
                <WaveDecoration variant="shortL" className="translate-y-md" />
                <Avatar
                  className="mb-md"
                  size={72}
                  imageUrl={imageUrl}
                  iconName={iconName}
                  onEditPress={onEditPress}
                />
                <WaveDecoration variant="shortR" className="translate-y-md" />
              </Row>
            </ViewStyled>
          </Animated.View>
        )}
        <Animated.View
          style={[{ flex: 1, alignItems: 'center', flexDirection: 'column' }, animatedContentStyle]}
        >
          {title && (
            <TextStyled
              text={title}
              textStyle="heading6"
              colorCategory="brand"
              colorName="primary"
              colorVariant="100"
              className="text-center"
            />
          )}
          {showDetails && (
            <Animated.View style={animatedDetailsStyle}>
              <Row className="gap-xs items-center justify-center min-h-[21px]">
                {rating !== undefined && (
                  <ViewStyled className="border-brand-secondary-5 rounded-md px-xxs py-0 flex-row items-center gap-xxs">
                    <TextStyled
                      text={rating.toFixed(1)}
                      textStyle="body"
                      colorCategory="brand"
                      colorName="primary"
                      colorVariant="100"
                      className="text-[11px] leading-[16px]"
                    />
                    <Icon
                      iconName="ico-star"
                      color="text-brand-primary-100"
                      className="w-[12px] h-[12px]"
                    />
                  </ViewStyled>
                )}
                {subtitle && (
                  <TextStyled
                    text={subtitle}
                    textStyle="caption"
                    colorCategory="brand"
                    colorName="primary"
                    colorVariant="100"
                    className="text-center"
                  />
                )}
              </Row>
            </Animated.View>
          )}
        </Animated.View>
        {children && (
          <ViewStyled className="w-full px-md pb-md items-center justify-center">
            {children}
          </ViewStyled>
        )}
      </Animated.View>
    </Animated.View>
  );
};

export default HeaderTopSheet;
