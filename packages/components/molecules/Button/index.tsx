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
 * - Optional icons (left, right, or none)
 * - Rounded or sharp corners
 * - Icon-only mode (no text)
 * - Cross-platform (React Native + Next.js web)
 *
 * Design Specs:
 * - Border radius: radius-xxl (36px) for round variant
 * - Padding: Varies by configuration
 * - Typography: button (16px Montserrat Bold, line-height 28px)
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
 */
const Button = ({
  text,
  variant = 'primary',
  radius = 'round',
  iconPosition = 'none',
  iconName,
  iconType = 'input',
  onPress,
  disabled = false,
  className = '',
}: ButtonProps) => {
  const hasText = !!text;
  const hasIcon = iconPosition !== 'none' && iconName;

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
          bg: 'bg-material-surface-0',
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

  // Get padding based on configuration
  const getPadding = () => {
    if (!hasText && hasIcon) {
      // Icon-only button
      return 'p-md';
    }

    if (hasIcon && hasText) {
      // Button with icon and text
      if (iconPosition === 'left') {
        return 'pl-lg pr-xl py-md';
      } else if (iconPosition === 'right') {
        return 'pl-xl pr-lg py-md';
      }
    }

    // Text-only button
    if (variant === 'text') {
      return 'px-lg py-md';
    }

    return 'px-xl py-md';
  };

  const padding = getPadding();
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
        ${padding}
        flex-row items-center justify-center gap-md max-h-[56px]
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `.trim()}>
      {/* Left Icon */}
      {hasIcon && iconPosition === 'left' && (
        <Icon iconName={iconName as any} color={colors.icon as any} className="w-6 h-6" />
      )}

      {/* Text */}
      {hasText && (
        <TextStyled textStyle="button" className={colors.text}>
          {text}
        </TextStyled>
      )}

      {/* Right Icon */}
      {hasIcon && iconPosition === 'right' && (
        <Icon iconName={iconName as any} color={colors.icon as any} className="w-6 h-6" />
      )}
    </PressableStyled>
  );
};

export default Button;
