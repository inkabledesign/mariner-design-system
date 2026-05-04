import React from 'react';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { BadgeProps } from './index.types';

/**
 * Badge Component
 *
 * A versatile badge component from Figma design system.
 * Displays status indicators with optional icons and text.
 *
 * Features:
 * - Five variants: primary, secondary, danger, success, warning
 * - Two sizes: lg (large), sm (small)
 * - Optional icon and text
 * - Rounded pill shape
 * - Cross-platform (React Native + Next.js web)
 *
 * Design Specs:
 * - Border radius: radius-lg (18px)
 * - Padding: Varies by configuration
 * - Typography: heading6 (lg), footnote (sm)
 * - Border: Variant-specific
 *
 * @example
 * <Badge label="Available" variant="primary" size="lg" />
 *
 * @example
 * <Badge label="Update" variant="danger" size="sm" hasIcon={false} />
 */
const Badge = ({
  label,
  variant = 'primary',
  size = 'lg',
  iconName,
  className = '',
}: BadgeProps) => {
  // Determine colors and styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'bg-brand-primary-100 dark:bg-brand-primary-80',
          text: 'text-brand-primary-5 dark:text-brand-primary-10',
          icon: 'text-brand-primary-5 dark:text-brand-primary-10',
          border: 'border-brand-accent-100 dark:border-brand-accent-80',
          iconName: iconName || 'ico-tick-round',
        };
      case 'secondary':
        return {
          bg: 'bg-brand-primary-5 dark:bg-brand-primary-80',
          text: 'text-brand-primary-100 dark:text-brand-primary-10',
          icon: 'text-brand-primary-100 dark:text-brand-primary-10',
          border: 'border-brand-accent-80 dark:border-brand-accent-100',
          iconName: iconName || 'ico-tick-round',
        };
      case 'error':
        return {
          bg: 'bg-system-error-100 dark:bg-system-error-80',
          text: 'text-material-surface-0 dark:text-material-surface-100',
          icon: 'text-material-surface-0 dark:text-material-surface-100',
          border: 'border-system-error-20 dark:border-system-error-40',
          iconName: iconName || 'ico-close-round',
        };
      case 'success':
        return {
          bg: 'bg-system-success-100 dark:bg-system-success-80',
          text: 'text-material-surface-0 dark:text-material-surface-100',
          icon: 'text-material-surface-0 dark:text-material-surface-100',
          border: 'border-system-success-20 dark:border-system-success-40',
          iconName: iconName || 'ico-tick-round',
        };
      case 'warning':
        return {
          bg: 'bg-system-warning-100 dark:bg-system-warning-80',
          text: 'text-material-surface-80 dark:text-material-surface-20',
          icon: 'text-material-surface-80 dark:text-material-surface-20',
          border: 'border-system-warning-20 dark:border-system-warning-40',
          iconName: iconName || 'ico-info-round',
        };
      default:
        return {
          bg: 'bg-material-surface-80',
          text: 'text-brand-primary-5',
          icon: 'text-brand-primary-5',
          border: 'border-brand-accent-100',
          iconName: iconName || 'ico-tick-round',
        };
    }
  };

  const styles = getVariantStyles();

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
  const iconSize = size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
  const textStyle = size === 'lg' ? 'heading6' : 'footnote';

  return (
    <ViewStyled
      className={`
        ${styles.bg}
        ${styles.border}
        border
        rounded-lg
        ${padding}
        ${className}
      `.trim()}>
      <Row className="gap-sm items-center">
        {/* Icon */}
        {iconName && (
          <ViewStyled className={`${iconSize} flex-shrink-0`}>
            <Icon
              iconName={styles.iconName as any}
              color={styles.icon as any}
              className={iconSize}
            />
          </ViewStyled>
        )}

        {/* Text */}
        {label && (
          <TextStyled textStyle={textStyle} className={styles.text}>
            {label}
          </TextStyled>
        )}
      </Row>
    </ViewStyled>
  );
};

export default Badge;
