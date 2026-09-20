import React from 'react';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { SVGColor } from '../../atoms/Icon';
import type { BadgeProps, BadgeVariant } from './index.types';

interface VariantStyles {
  bg: string;
  border: string;
  text: string;
  icon: SVGColor;
}

// Aliases resolve to canonical variants ('error' is the legacy name for 'danger')
const normalizeVariant = (variant: BadgeVariant): Exclude<BadgeVariant, 'error'> =>
  variant === 'error' ? 'danger' : variant;

const dangerStyles: VariantStyles = {
  bg: 'bg-system-error-80',
  border: 'border-system-error-80',
  text: 'text-text-light-primary dark:text-text-dark-primary',
  icon: 'text-text-light-primary',
};

const variantStyles: Record<Exclude<BadgeVariant, 'error'>, VariantStyles> = {
  primary: {
    bg: 'bg-brand-primary-100 dark:bg-brand-primary-5',
    border: 'border-brand-accent-100',
    text: 'text-text-light-primary dark:text-text-dark-primary',
    icon: 'text-text-light-primary',
  },
  secondary: {
    bg: 'bg-material-surface-light dark:bg-material-surface-100',
    border: 'border-brand-accent-80',
    text: 'text-text-primary dark:text-text-light-secondary',
    icon: 'text-text-primary',
  },
  danger: dangerStyles,
  success: {
    bg: 'bg-system-success-60',
    border: 'border-system-success-80',
    text: 'text-text-dark-primary dark:text-text-light-primary',
    icon: 'text-text-dark-primary',
  },
  warning: {
    bg: 'bg-system-warning-80',
    border: 'border-system-warning-80',
    text: 'text-text-dark-primary dark:text-text-light-primary',
    icon: 'text-text-dark-primary',
  },
  default: {
    bg: 'bg-material-surface-80 dark:bg-material-surface-20',
    border: 'border-brand-accent-100',
    text: 'text-text-light-primary dark:text-text-dark-primary',
    icon: 'text-text-light-primary',
  },
};

/**
 * Badge Component
 *
 * A versatile badge component from Figma design system.
 * Displays status indicators with optional icons and text.
 *
 * Features:
 * - Five variants: primary, secondary, danger, success, warning
 * - Two sizes: lg (large), sm (small)
 * - Optional icon (rendered when `iconName` is provided) and text
 * - Rounded pill shape
 * - Cross-platform (React Native + Next.js web)
 *
 * Design Specs:
 * - Border radius: radius-lg (18px)
 * - Padding: Varies by configuration
 * - Typography: footnote (lg), caption (sm)
 * - Icon: 20px (lg), 16px (sm)
 * - Border: Variant-specific
 *
 * @example
 * <Badge label="Available" variant="primary" size="lg" iconName="ico-tick-round" />
 *
 * @example
 * <Badge label="Update" variant="danger" size="sm" />
 */
const Badge = ({
  label,
  variant = 'primary',
  size = 'lg',
  iconName,
  themeMode = 'light',
  className = '',
}: BadgeProps) => {
  const styles = variantStyles[normalizeVariant(variant)];

  // Determine padding based on configuration
  const getPadding = () => {
    if (!label && iconName) {
      // Icon only
      return 'p-xxs';
    }

    if (iconName && label) {
      // Icon + text
      return size === 'lg' ? 'pl-xs pr-md py-xxs' : 'pl-xxs pr-md py-xxs';
    }

    // Text only
    return 'px-md py-xxs';
  };

  const padding = getPadding();
  const iconSize = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  const textStyle = size === 'lg' ? 'footnote' : 'caption';

  return (
    <ViewStyled
      className={`
        ${styles.bg}
        ${styles.border}
        border
        rounded-lg
        self-start
        ${padding}
        ${className}
      `.trim()}>
      <Row className="gap-sm items-center">
        {/* Icon */}
        {iconName && (
          <Icon
            iconName={iconName}
            color={styles.icon}
            className={iconSize}
            themeMode={themeMode}
          />
        )}

        {/* Text */}
        {label && (
          <TextStyled
            textStyle={textStyle}
            numberOfLines={1}
            className={`whitespace-nowrap ${styles.text}`}>
            {label}
          </TextStyled>
        )}
      </Row>
    </ViewStyled>
  );
};

export default Badge;
