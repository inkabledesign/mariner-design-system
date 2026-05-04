import React from 'react';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { iconMap } from '@mariner/assets';
import { IconCategoryType, IconName } from '../../types/icons.type';
import ViewStyled from '../ViewStyled';
import { getColorFromClass } from '@mariner/theme';

// Valid Tailwind color classes from design tokens
type BrandColor =
  | 'text-brand-primary-10'
  | 'text-brand-primary-20'
  | 'text-brand-primary-40'
  | 'text-brand-primary-60'
  | 'text-brand-primary-80'
  | 'text-brand-primary-100'
  | 'text-brand-secondary-5'
  | 'text-brand-secondary-10'
  | 'text-brand-secondary-20'
  | 'text-brand-secondary-40'
  | 'text-brand-secondary-60'
  | 'text-brand-secondary-80'
  | 'text-brand-secondary-100'
  | 'text-brand-accent-5'
  | 'text-brand-accent-10'
  | 'text-brand-accent-20'
  | 'text-brand-accent-40'
  | 'text-brand-accent-60'
  | 'text-brand-accent-80'
  | 'text-brand-accent-100';

type MaterialColor =
  | 'text-material-surface-0'
  | 'text-material-surface-5'
  | 'text-material-surface-10'
  | 'text-material-surface-20'
  | 'text-material-surface-40'
  | 'text-material-surface-60'
  | 'text-material-surface-80'
  | 'text-material-surface-100'
  | 'text-material-alphaDark-5'
  | 'text-material-alphaDark-10'
  | 'text-material-alphaDark-20'
  | 'text-material-alphaDark-40'
  | 'text-material-alphaDark-60'
  | 'text-material-alphaDark-80';

type SolidColor =
  | 'text-solid-white'
  | 'text-solid-black'
  | 'text-solid-primary'
  | 'text-solid-secondary'
  | 'text-solid-accent';

type SystemColor =
  | 'text-system-error-5'
  | 'text-system-error-20'
  | 'text-system-error-40'
  | 'text-system-error-60'
  | 'text-system-error-80'
  | 'text-system-error-100'
  | 'text-system-success-5'
  | 'text-system-success-20'
  | 'text-system-success-40'
  | 'text-system-success-60'
  | 'text-system-success-80'
  | 'text-system-success-100'
  | 'text-system-warning-5'
  | 'text-system-warning-20'
  | 'text-system-warning-40'
  | 'text-system-warning-60'
  | 'text-system-warning-80'
  | 'text-system-warning-100';

export type SVGColor = BrandColor | MaterialColor | SolidColor | SystemColor;

export type IconProps<T extends IconCategoryType = IconCategoryType> = {
  iconType?: T;
  iconName: IconName; // Accept any icon name
  color?: SVGColor; // Type-safe Tailwind color classes only
  className?: string; // Other Tailwind utilities (e.g., 'w-8 h-8 opacity-50')
  style?: ViewStyle | ViewStyle[];
  themeMode?: 'light' | 'dark'; // Theme mode for color resolution (defaults to 'light')
};

/**
 * Finds the icon type (category) for a given icon name by searching through the icon map
 * @param iconName - The name of the icon to find
 * @returns The icon type/category or undefined if not found
 */
const findIconType = (iconName: string): IconCategoryType | undefined => {
  for (const [type, icons] of Object.entries(iconMap)) {
    if (iconName in icons) {
      return type as IconCategoryType;
    }
  }
  return undefined;
};

/**
 * Converts Tailwind color class to hex color
 * @param colorClass - Tailwind color class (e.g., 'text-brand-primary-100')
 * @param themeMode - Current theme mode ('light' or 'dark')
 * @returns Hex color string
 */

/**
 * Icon component with NativeWind/Tailwind styling.
 *
 * Defaults:
 * - Size: w-6 h-6 (24px)
 * - Color: text-material-surface-100
 * - Theme: light
 *
 * @example
 * // Basic usage with defaults (iconType is auto-detected)
 * <Icon iconName="ico-chevron-right" />
 *
 * @example
 * // Custom size and color
 * <Icon
 *   iconName="ico-heart"
 *   color="text-brand-primary-100"
 *   className="w-8 h-8"
 * />
 *
 * @example
 * // With theme mode (for apps with light/dark mode)
 * <Icon
 *   iconName="ico-close"
 *   themeMode={appTheme}
 *   className="w-4 h-4"
 * />
 *
 * @example
 * // Explicit iconType (optional, for performance or type safety)
 * <Icon
 *   iconType="nav"
 *   iconName="ico-chevron-right"
 * />
 */
const Icon = <T extends IconCategoryType = IconCategoryType>(props: IconProps<T>) => {
  const { iconType: explicitIconType, iconName, color, className, style, themeMode = 'light' } = props;

  // Early return if iconName is missing
  if (!iconName) {
    if (__DEV__) {
      console.warn('Icon: iconName is required');
    }
    return null;
  }

  // Determine icon type: use explicit type if provided, otherwise auto-detect
  const iconType = explicitIconType || findIconType(iconName);

  if (!iconType) {
    if (__DEV__) {
      console.error(`Icon type not found for iconName: ${iconName}`);
    }
    return null;
  }

  // Get the icon component from the icon map
  // TypeScript needs help understanding that iconName is valid for the determined iconType
  const icons = iconMap[iconType];
  const IconComponent = icons?.[iconName as keyof typeof icons] as React.FC<SvgProps> | undefined;

  if (!IconComponent) {
    if (__DEV__) {
      console.error(`Icon not found for type: ${iconType}, name: ${iconName}`);
    }
    return null;
  }

  // Default size and color
  const defaultSize = 'w-6 h-6';
  const defaultColor = 'text-material-surface-100 dark:text-material-surface-0';

  // Extract color from color prop or use default, respecting current theme
  const colorClass = color || defaultColor;
  const fillColor = getColorFromClass(colorClass, themeMode);

  // Check if className contains size utilities, if not use default
  const hasCustomSize = className && /\b(w-|h-|size-)/.test(className);
  const sizeClasses = hasCustomSize ? '' : defaultSize;

  // Build container className (size + utilities + color for currentColor support)
  const containerClassName =
    `inline-flex items-center justify-center flex-shrink-0 ${sizeClasses} ${colorClass} ${className || ''}`.trim();

  // Merge styles properly for web compatibility
  const containerStyle = {
    color: fillColor,
    ...(style as any),
  };

  return (
    <ViewStyled className={containerClassName} style={containerStyle}>
      <IconComponent
        width="100%"
        height="100%"
        viewBox="0 0 36 36"
        fill={fillColor}
        color={fillColor}
        preserveAspectRatio="xMidYMid meet"
      />
    </ViewStyled>
  );
};

export default Icon;
