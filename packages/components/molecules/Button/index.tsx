import React from 'react';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import Icon from '../../atoms/Icon';
import type { ButtonProps } from './index.types';

/**
 * Button Component
 *
 * A versatile button component from Figma design system.
 * Supports multiple variants, icon positions, and styles.
 *
 * Features:
 * - Three variants: primary, secondary, text
 * - Two sizes: md (32-36px), lg (48px)
 * - Optional icons (left, right, or none)
 * - Rounded or sharp corners
 * - Icon-only mode (no text)
 * - Cross-platform (React Native + Next.js web)
 *
 * Design Specs:
 * - Border radius: radius-xxl (36px) for round variant
 * - Padding: Varies by configuration
 * - Typography: button (16px Montserrat Bold) for lg, button-sml (13px) for md
 * - Border: brand-accent-100 (#a68756)
 *
 * @example
 * // Primary button with text
 * <Button text="Button text" variant="primary" />
 *
 * @example
 * // Secondary button with left icon
 * <Button
 *   text="Button text"
 *   variant="secondary"
 *   iconPosition="left"
 *   iconName="ico-berth-round"
 *   onPress={() => console.log('pressed')}
 * />
 *
 * @example
 * // Icon-only button
 * <Button
 *   variant="primary"
 *   iconPosition="left"
 *   iconName="ico-berth-round"
 * />
 *
 * @example
 * // Compact md button
 * <Button
 *   text="Button text"
 *   variant="primary"
 *   size="md"
 * />
 */
const Button = ({
  text,
  variant = 'primary',
  radius = 'round',
  size = 'lg',
  iconPosition = 'none',
  iconName,
  iconType = 'input',
  onPress,
  disabled = false,
  className = '',
}: ButtonProps) => {
  const hasText = !!text;
  const hasIcon = iconPosition !== 'none' && iconName;
  const isMd = size === 'md';

  // Get colors based on variant
  const getColors = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'bg-brand-primary-100',
          text: 'text-material-surface-0',
          icon: 'text-material-surface-0',
          border: 'border-brand-accent-100',
        };
      case 'secondary':
        return {
          bg: 'bg-material-surface-light',
          text: 'text-brand-primary-100',
          icon: 'text-brand-primary-100',
          border: 'border-brand-accent-100',
        };
      case 'text':
      default:
        return {
          bg: '',
          text: 'text-brand-primary-100',
          icon: 'text-brand-primary-100',
          border: '',
        };
    }
  };

  const colors = getColors();

  // Get height and padding based on size and configuration
  const getSizing = () => {
    if (!hasText && hasIcon) {
      // Icon-only button
      return isMd ? 'w-9 h-9' : 'w-xl h-xl';
    }

    if (hasIcon && hasText) {
      // Button with icon and text
      if (isMd) {
        return iconPosition === 'left' ? 'h-9 pl-sm pr-lg' : 'h-9 pl-lg pr-sm';
      }
      return iconPosition === 'left' ? 'h-xl pl-sm pr-xl' : 'h-xl pl-xl pr-sm';
    }

    // Text-only button
    if (variant === 'text') {
      return isMd ? 'px-lg py-xs' : 'px-lg py-md';
    }

    return isMd ? 'h-lg px-xl' : 'h-xl px-xl';
  };

  const sizing = getSizing();
  const gap = isMd ? 'gap-sm' : 'gap-lg';
  const borderRadius = radius === 'round' ? 'rounded-2xl' : '';
  const border = variant !== 'text' ? 'border' : '';

  return (
    <PressableStyled
      onPress={onPress}
      disabled={disabled}
      className={`
        ${colors.bg}
        ${colors.border}
        ${border}
        ${borderRadius}
        ${sizing}
        ${gap}
        flex-row items-center justify-center
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `.trim()}>
      {/* Left Icon */}
      {hasIcon && iconPosition === 'left' && (
        <Icon iconName={iconName as any} iconSize={isMd ? 'md' : 'lg'} color={colors.icon as any} />
      )}

      {/* Text */}
      {hasText && (
        <TextStyled textStyle={isMd ? 'button-sml' : 'button'} className={colors.text}>
          {text}
        </TextStyled>
      )}

      {/* Right Icon */}
      {hasIcon && iconPosition === 'right' && (
        <Icon iconName={iconName as any} iconSize={isMd ? 'md' : 'lg'} color={colors.icon as any} />
      )}
    </PressableStyled>
  );
};

export default Button;
