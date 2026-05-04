import React from 'react';
import { Text } from 'react-native';
import type { StyledTextProps } from './index.types';
import { theme, getFontFamilyForWeight } from '@mariner/theme';
// Removed useTheme import to prevent render-time state updates

const TextStyled: React.FC<StyledTextProps> = ({
  breakpoint = 'mobile',
  text,
  children,
  textStyle,
  fontWeight,
  colorCategory,
  colorName,
  colorVariant,
  textAlign,
  numberOfLines,
  style,
  className,
}) => {
  // Build Tailwind className from props - NativeWind handles dark mode automatically
  const buildClassName = (): string => {
    const classes: string[] = [];

    // Typography (font size, line height, weight)
    if (textStyle) {
      classes.push(`text-${textStyle}`);
    }

    // Font weight - manual override takes priority, otherwise use textStyle's weight
    if (fontWeight) {
      // Manual font weight override
      const fontFamilyClass = getFontFamilyForWeight(fontWeight);
      classes.push(fontFamilyClass);
    } else if (textStyle) {
      // Get the font weight from textStyle and map to the correct font family
      // Use breakpoint to select the correct typography scale
      const typography = theme.typography[breakpoint].text;
      const textStyleConfig = typography[textStyle as keyof typeof typography];

      if (textStyleConfig && 'fontWeight' in textStyleConfig) {
        const fontFamilyClass = getFontFamilyForWeight(textStyleConfig.fontWeight);
        classes.push(fontFamilyClass);
      } else {
        // Fallback to regular weight
        classes.push('font-montserrat-regular');
      }
    }

    // Color classes with static dark mode variants
    if (colorCategory && colorName) {
      let baseColorClass = '';

      if (colorCategory === 'brand') {
        baseColorClass = colorVariant
          ? `text-brand-${colorName}-${colorVariant}`
          : `text-brand-${colorName}`;
      } else if (colorCategory === 'material') {
        baseColorClass = colorVariant
          ? `text-material-${colorName}-${colorVariant}`
          : `text-material-${colorName}`;
      } else if (colorCategory === 'solid') {
        baseColorClass = `text-solid-${colorName}`;
      } else if (colorCategory === 'system') {
        baseColorClass = colorVariant
          ? `text-system-${colorName}-${colorVariant}`
          : `text-system-${colorName}`;
      }

      if (baseColorClass) {
        // Apply base class and appropriate dark mode variant
        classes.push(baseColorClass);

        // Add static dark mode variants based on color patterns
        if (colorCategory === 'brand') {
          if (colorName === 'primary') {
            if (colorVariant === '100') classes.push('dark:text-brand-primary-80');
            else if (colorVariant === '5') classes.push('dark:text-brand-primary-10');
            else classes.push(`dark:text-brand-${colorName}-${colorVariant}`);
          } else {
            classes.push(`dark:text-brand-${colorName}-${colorVariant || '100'}`);
          }
        } else if (colorCategory === 'material') {
          if (colorName === 'surface') {
            if (colorVariant === '0') classes.push('dark:text-material-surface-100');
            else if (colorVariant === '100') classes.push('dark:text-material-surface-0');
            else if (colorVariant === '80') classes.push('dark:text-material-surface-20');
            else if (colorVariant === '60') classes.push('dark:text-material-surface-40');
            else classes.push(`dark:text-material-${colorName}-${colorVariant}`);
          } else {
            classes.push(`dark:text-material-${colorName}-${colorVariant || '100'}`);
          }
        } else if (colorCategory === 'solid') {
          if (colorName === 'white') classes.push('dark:text-solid-black');
          else if (colorName === 'black') classes.push('dark:text-solid-white');
          else classes.push(`dark:text-solid-${colorName}`);
        } else if (colorCategory === 'system') {
          classes.push(`dark:text-system-${colorName}-${colorVariant || '100'}`);
        }
      }
    }

    // Text alignment
    if (textAlign) {
      classes.push(`text-${textAlign}`);
    }

    // Add custom className if provided
    if (className) {
      classes.push(className);
    }

    return classes.filter(Boolean).join(' ');
  };

  const combinedClassName = buildClassName();

  // Use text prop if provided, otherwise use children
  const content = text !== undefined ? text : children;

  return (
    <Text style={style} className={combinedClassName} numberOfLines={numberOfLines}>
      {content}
    </Text>
  );
};

export default TextStyled;
