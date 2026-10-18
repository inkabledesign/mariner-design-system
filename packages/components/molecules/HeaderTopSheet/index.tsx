import React from 'react';
import { View } from 'react-native';
import { createAnimatedComponent, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewStyled from '../../atoms/ViewStyled';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import WaveDecoration from '../../atoms/WaveDecoration';
import Avatar from '../Avatar';
import { theme } from '@inkabledesign/mariner-theme';
import type { HeaderTopSheetProps } from './index.types';

// NOTE: use createAnimatedComponent rather than Animated.View — in the
// Rollup-bundled output `Animated` resolves to the module namespace, which
// does not expose `View` as a named export.
const AnimatedView = createAnimatedComponent(View);

// Figma HeaderModule: expanded avatar block is 108px (pt-md + 72 avatar + mb-md + pb-md);
// collapsed it is 48px — the 0.6-scaled avatar (43px) sits level with the top-bar buttons.
const AVATAR_BLOCK_EXPANDED = 108;
const AVATAR_BLOCK_COLLAPSED = 48;
// Offset that keeps the scaled avatar centred in the collapsed box
const AVATAR_COLLAPSED_SHIFT = -26;
// Figma HeaderSection: the top bar row (Header/TopBar) is 44px and sits between
// the status bar and the sheet content — reserve it when there is no top section.
const TOP_BAR_HEIGHT = 44;

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
 *
 * Figma: Header/HeaderTopSheet (1217:84164) — surface-0 sheet, 1px primary-20
 * border, radius-xxl bottom corners, 0/2/5 primary@10% drop shadow.
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
  style,
  themeMode = 'light',
  breakpoint = 'mobile',
}: HeaderTopSheetProps) => {
  const insets = useSafeAreaInsets();
  const showDetails = subtitle || rating !== undefined;
  const showTopSection = title || showDetails || imageUrl || iconName;
  const colors = theme.color[themeMode];
  const sheetRadius = theme.radius[breakpoint].radius.xxl;
  const childrenPaddingX = theme.spacing[breakpoint].spacing.md;
  const childrenPaddingBottom = theme.spacing[breakpoint].spacing.md;
  const surfaceColor =
    themeMode === 'dark' ? colors.material.surface['100'] : colors.material.surface['0'];
  const borderColor =
    themeMode === 'dark' ? colors.brand.primary['alpha-40'] : colors.brand.primary['20'];

  const animatedContainerStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedHeight) return {};
    const heightValue = animatedHeight.value;
    if (!isValidValue(heightValue)) return {};
    return { height: heightValue };
  });

  // The avatar block's *layout* height collapses so the content slot and children
  // keep fitting inside the collapsed sheet; the visual shrink comes from `scale`,
  // and translateY keeps the scaled avatar centred in the shorter box.
  const animatedAvatarStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedAvatarScale || !animatedPositionY) return {};
    const scaleValue = animatedAvatarScale.value;
    const positionValue = animatedPositionY.value;
    if (!isValidValue(scaleValue) || !isValidValue(positionValue)) return {};
    const progress = Math.max(0, Math.min(1, (positionValue - 102) / 68));
    return {
      height: AVATAR_BLOCK_COLLAPSED + progress * (AVATAR_BLOCK_EXPANDED - AVATAR_BLOCK_COLLAPSED),
      transform: [{ translateY: AVATAR_COLLAPSED_SHIFT * (1 - progress) }, { scale: scaleValue }],
    };
  });

  // Title fades out as it collapses — the Figma collapsed state shows no title.
  const animatedContentStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedPositionY) return {};
    const positionValue = animatedPositionY.value;
    if (!isValidValue(positionValue)) return {};
    const progress = Math.max(0, Math.min(1, (positionValue - 102) / 68));
    return {
      opacity: progress,
      transform: [{ translateY: -44 + progress * 44 }, { scale: 0.8 + progress * 0.2 }],
    };
  });

  // When animated, the children slot is pinned to the sheet's bottom edge
  // (position: absolute) so the collapse can't push it out of flow. `bottom`
  // slides the slot's own bottom padding below the edge as the sheet collapses,
  // which is what makes the children flush with the edge when collapsed.
  const animatedChildrenStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedPositionY) return {};
    const positionValue = animatedPositionY.value;
    if (!isValidValue(positionValue)) return {};
    const progress = Math.max(0, Math.min(1, (positionValue - 102) / 68));
    return { bottom: childrenPaddingBottom * (progress - 1) };
  });

  const animatedDetailsStyle = useAnimatedStyle(() => {
    'worklet';
    if (!animatedPositionY) return {};
    const positionValue = animatedPositionY.value;
    if (!isValidValue(positionValue)) return {};
    return { opacity: Math.max(0, Math.min(1, (positionValue - 102) / 68)) };
  });

  return (
    <AnimatedView
      style={[
        {
          flex: 1,
          borderBottomLeftRadius: sheetRadius,
          borderBottomRightRadius: sheetRadius,
          backgroundColor: surfaceColor,
          shadowColor: colors.brand.primary['100'],
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 4,
        },
        animatedContainerStyle,
        style,
      ]}
    >
      <AnimatedView
        style={[
          {
            flex: 1,
            overflow: 'hidden',
            alignItems: 'center',
            paddingTop:
              insets.top +
              (showTopSection ? 0 : TOP_BAR_HEIGHT + theme.spacing[breakpoint].spacing.md),
            borderWidth: 1,
            borderColor,
            borderBottomLeftRadius: sheetRadius,
            borderBottomRightRadius: sheetRadius,
          },
          animatedContainerStyle,
        ]}
      >
        {showTopSection && (
          <AnimatedView style={animatedAvatarStyle}>
            <ViewStyled className="relative overflow-hidden pt-md pb-md">
              <Row className="items-center justify-center gap-sm">
                <WaveDecoration variant="shortL" className="translate-y-md" themeMode={themeMode} />
                <Avatar
                  className="mb-md"
                  size={72}
                  imageUrl={imageUrl}
                  iconName={imageUrl ? undefined : (iconName ?? 'ico-sailor')}
                  onEditPress={onEditPress}
                  themeMode={themeMode}
                />
                <WaveDecoration variant="shortR" className="translate-y-md" themeMode={themeMode} />
              </Row>
            </ViewStyled>
          </AnimatedView>
        )}
        <AnimatedView
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
            <AnimatedView style={animatedDetailsStyle}>
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
            </AnimatedView>
          )}
        </AnimatedView>
        {children && (
          <AnimatedView
            style={[
              {
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: childrenPaddingX,
                paddingBottom: childrenPaddingBottom,
              },
              animatedPositionY
                ? {
                    position: 'absolute' as const,
                    left: 0,
                    right: 0,
                    bottom: -childrenPaddingBottom,
                  }
                : null,
              animatedChildrenStyle,
            ]}
          >
            {children}
          </AnimatedView>
        )}
      </AnimatedView>
    </AnimatedView>
  );
};

export default HeaderTopSheet;
