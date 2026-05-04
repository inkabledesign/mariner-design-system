import { spacing, radius, typography, color } from '../';

type Breakpoint = 'mobile' | 'tablet' | 'desktop-sm' | 'desktop-lg';
type SpacingScale = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
type SizeScale = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
type RadiusScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type TextStyles = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' | 'body' | 'button' | 'input' | 'placeholder' | 'caption' | 'label' | 'footnote' | 'link';
type ColorValue = string;

/**
 * Get spacing value for a specific breakpoint and scale
 * @example getSpacing('mobile', 'md') // returns 12
 */
export const getSpacing = (breakpoint: Breakpoint, scale: SpacingScale): number => {
  return spacing[breakpoint].spacing[scale];
};

/**
 * Get size value for a specific breakpoint and scale
 * @example getSize('mobile', 'lg') // returns 32
 */
export const getSize = (breakpoint: Breakpoint, scale: SizeScale): number => {
  return spacing[breakpoint].spacing[scale];
};

/**
 * Get radius value for a specific breakpoint and scale
 * @example getRadius('mobile', 'md') // returns 12
 */
export const getRadius = (breakpoint: Breakpoint, scale: RadiusScale): number => {
  return radius[breakpoint].radius[scale];
};

/**
 * Get text style for a specific breakpoint and style name
 * @example getTextStyle('mobile', 'heading1')
 */
export const getTextStyle = (
  breakpoint: Breakpoint,
  styleName: TextStyles
) => {
  return typography[breakpoint].text[styleName];
};

/**
 * Get color value from the theme
 * @example getColor('light', 'brand', 'primary', '100') // returns '#262ebc'
 */
export const getColor = (
  mode: 'light' | 'dark',
  category: 'brand' | 'material' | 'solid' | 'system',
  name: string,
  variant?: string
): ColorValue => {
  const colorCategory = (color as any)[mode][category];
  
  if (category === 'solid') {
    return (colorCategory as any)[name];
  }
  
  if (category === 'system' && (name === 'success' || name === 'warning')) {
    return (colorCategory as any)[name];
  }
  
  const colorGroup = (colorCategory as any)[name];
  
  if (variant) {
    return colorGroup[variant];
  }
  
  return colorGroup;
};

/**
 * Determine current breakpoint based on screen width
 */
export const getCurrentBreakpoint = (width: number): Breakpoint => {
  if (width < 640) return 'mobile';
  if (width < 768) return 'tablet';
  if (width < 1024) return 'desktop-sm';
  return 'desktop-lg';
};

/**
 * Get responsive value based on current breakpoint
 * @example getResponsiveValue(1024, { 'mobile': 16, 'tablet': 24, 'desktop-sm': 32, 'desktop-lg': 48 })
 */
export const getResponsiveValue = <T>(width: number, values: Record<Breakpoint, T>): T => {
  const breakpoint = getCurrentBreakpoint(width);
  return values[breakpoint];
};
