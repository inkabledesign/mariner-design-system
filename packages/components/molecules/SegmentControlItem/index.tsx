import React from 'react';
import type { ViewStyle } from 'react-native';
import { theme } from '@inkabledesign/mariner-theme';
import PressableStyled from '../../atoms/PressableStyled';
import TextStyled from '../../atoms/TextStyled';
import ViewStyled from '../../atoms/ViewStyled';
import type { SegmentControlItemProps } from './index.types';

/**
 * SegmentControlItem Component (Molecule)
 *
 * A single segment of a SegmentControl. Inactive segments render as a flat
 * label; the active segment carries a selection background — light surface
 * with accent border + soft accent shadow ('secondary') or a solid primary
 * fill ('primary').
 * Source: Mariner-Library / Molecules / Tabs/Elements/SegmentControlItem (Figma).
 *
 * Inside SegmentControl the item is used in two ways: as a label cell
 * (`indicator={false}`, active state colours the label only) and as the
 * sliding selection indicator itself (active, no label).
 *
 * @example
 * <SegmentControlItem label="12:20 am" isActive onPress={fn} />
 */
const SegmentControlItem = ({
  label,
  isActive = false,
  onPress,
  size = 'lg',
  shape = 'pill',
  variant = 'secondary',
  indicator = true,
  themeMode = 'light',
  breakpoint = 'mobile',
  className = '',
}: SegmentControlItemProps) => {
  const palette = theme.color[themeMode];
  const radius = theme.radius[breakpoint].radius;

  const borderRadius =
    shape === 'pill'
      ? size === 'lg'
        ? radius.xxxl
        : radius.xl
      : size === 'lg'
        ? radius.sm
        : radius.xs;

  const selectionStyle: ViewStyle =
    isActive && indicator
      ? {
          borderRadius,
          borderWidth: 1,
          borderColor: palette.brand.accent['100'],
          backgroundColor:
            variant === 'primary'
              ? palette.brand.primary['100']
              : palette.material.surface.light,
          shadowColor: palette.brand.accent['100'],
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 7,
        }
      : { borderRadius };

  const labelColor = isActive
    ? variant === 'primary'
      ? 'text-material-surface-light'
      : 'text-brand-primary-100'
    : 'text-material-surface-60';

  return (
    <PressableStyled
      onPress={onPress}
      className={className}
      accessibilityState={{ selected: isActive }}>
      <ViewStyled
        className={`w-full items-baseline justify-center px-lg ${
          size === 'lg' ? 'h-12' : 'h-9'
        }`}
        style={selectionStyle}>
        {label && (
          <TextStyled
            textStyle={size === 'lg' ? 'button' : 'button-sml'}
            breakpoint={breakpoint}
            numberOfLines={1}
            className={`text-center ${labelColor}`}>
            {label}
          </TextStyled>
        )}
      </ViewStyled>
    </PressableStyled>
  );
};

export default SegmentControlItem;
