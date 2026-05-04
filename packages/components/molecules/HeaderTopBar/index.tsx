import React from 'react';
import ViewStyled from '../../atoms/ViewStyled';
import Row from '../../atoms/Row';
import Icon from '../../atoms/Icon';
import TextStyled from '../../atoms/TextStyled';
import SearchInput from '../SearchInput';
import { theme } from '@mariner/theme';
import type { HeaderTopBarProps } from './index.types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';

const HeaderTopBar: React.FC<HeaderTopBarProps> = ({
  variant = 'default',
  title = 'Screen title',
  iconLeft,
  iconRight,
  textLeft,
  textRight,
  searchPlaceholder = 'Search for marina',
  searchValue = '',
  onSearchChange,
  onLeftPress,
  onRightPress,
  orientation = 'portrait',
  breakpoint = 'mobile',
}) => {
  const insets = useSafeAreaInsets();

  // In landscape mode, use horizontal insets for proper spacing from rounded corners
  const topPadding = orientation === 'landscape' ? Math.max(insets.left / 2) : insets.top + 4;
  const horizontalPadding =
    orientation === 'landscape' ? Math.max(insets.left / 2.5, insets.right / 2.5, 1) : theme.spacing[breakpoint].spacing.md;
  return (
    <>
      <ViewStyled
        style={{
          paddingTop: topPadding,
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
        }}
        className={'flex-row items-center justify-center py-xxs gap-md z-[2]'}>
        {/* Left Section */}
        <Row className="items-center gap-md w-[44px]">
          {iconLeft && (
            <Pressable onPress={onLeftPress}>
              <ViewStyled className="items-center justify-center h-[32px]">
                <Icon
                  iconName={iconLeft.iconName}
                  color={iconLeft.color}
                  className="w-[32px] h-[32px]"
                />
              </ViewStyled>
            </Pressable>
          )}

          {textLeft && (
            <Pressable onPress={onLeftPress}>
              <ViewStyled className="pr-xs">
                <TextStyled
                  style={{ backgroundColor: 'red' }}
                  text={textLeft}
                  textStyle="body"
                  colorCategory="brand"
                  colorName="primary"
                  colorVariant="100"
                />
              </ViewStyled>
            </Pressable>
          )}
        </Row>
        {/* Search Variant */}
        {variant === 'search' && (
          <SearchInput
            value={searchValue}
            onChangeText={onSearchChange}
            placeholder={searchPlaceholder}
          />
        )}
        {/* Title Variant */}
        {variant === 'default' && (
          <ViewStyled className="flex-1 items-center justify-center px-xs">
            {title && title.trim() !== '' && (
              <TextStyled
                text={title}
                textStyle="heading6"
                colorCategory="brand"
                colorName="primary"
                colorVariant="100"
                numberOfLines={1}
                className="text-center"
              />
            )}
          </ViewStyled>
        )}
        {/* Right Section */}
        <Row className="items-center justify-end gap-md w-[44px]">
          {textRight && (
            <Pressable onPress={onRightPress}>
              <ViewStyled className="pl-xs">
                <TextStyled
                  text={textRight}
                  textStyle="body"
                  colorCategory="brand"
                  colorName="primary"
                  colorVariant="100"
                />
              </ViewStyled>
            </Pressable>
          )}

          {iconRight && (
            <Pressable onPress={onRightPress}>
              <ViewStyled className="items-center justify-center w-[32px] h-[32px]">
                <Icon
                  iconName={iconRight.iconName}
                  color={iconRight.color}
                  className="w-[32px] h-[32px]"
                />
              </ViewStyled>
            </Pressable>
          )}
        </Row>
      </ViewStyled>
    </>
  );
};

export default HeaderTopBar;
