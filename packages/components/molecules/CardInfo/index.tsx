import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { CardInfoProps } from './index.types';

/**
 * CardInfo Component
 *
 * An informational card component from Figma design system.
 * Displays detailed messages with title, subtitle, and body text.
 *
 * Features:
 * - Five variants: danger, warning, success, info, generic
 * - Icon with matching color
 * - Title, subtitle, and body text support
 * - Bordered container with subtle background
 * - Cross-platform (React Native + Next.js web)
 *
 * Design Specs:
 * - Border radius: radius-md (12px)
 * - Padding: pl-sm pr-md py-sm (8px/12px/8px)
 * - Gap: gap-xs (10px)
 * - Typography: button (title), footnote (subtitle/body)
 *
 * @example
 * <CardInfo
 *   title="Offline access"
 *   subtitle="Download module for offline access"
 *   body="This module includes pictures, videos, and audio..."
 *   type="danger"
 * />
 */
const CardInfo = ({
  title = 'Offline access',
  subtitle = 'Download module for offline access',
  body = 'This module includes pictures, videos, and audio. To avoid using up your mobile data, we recommend downloading it over Wi-Fi.',
  iconName = 'ico-close-round',
  type = 'danger',
  className = '',
  children,
}: CardInfoProps) => {
  // Determine colors based on type
  const getColors = () => {
    switch (type) {
      case 'danger':
        return {
          bg: 'bg-system-error-5',
          border: 'border-system-error-40',
          icon: 'text-system-error-100',
        };
      case 'warning':
        return {
          bg: 'bg-system-warning-5',
          border: 'border-system-warning-40',
          icon: 'text-system-warning-100',
        };
      case 'success':
        return {
          bg: 'bg-system-success-5',
          border: 'border-system-success-40',
          icon: 'text-system-success-100',
          iconName: 'ico-tick-circle',
        };
      case 'info':
        return {
          bg: 'bg-brand-primary-alpha-5',
          border: 'border-brand-primary-alpha-40',
          icon: 'text-brand-primary-100',
        };
      case 'generic':
      default:
        return {
          bg: 'bg-material-alphaDark-5',
          border: 'border-material-alphaDark-40',
          icon: 'text-material-surface-100',
        };
    }
  };

  const colors = getColors();

  return (
    <ViewStyled
      className={`
        ${colors.bg}
        ${colors.border}
        border
        rounded-md
        pl-sm pr-md pt-sm pb-lg
        w-full
        ${className}
      `.trim()}>
      <Column className="gap-xs">
        <Row className="gap-xs items-start">
          {/* Icon */}
          <ViewStyled className="w-6 h-6 flex-shrink-0">
            <Icon iconName={iconName} color={colors.icon as any} className="w-6 h-6" />
          </ViewStyled>
          {/* Content Column */}
          <Column className="flex-1 gap-xs">
            {/* Title and Subtitle Row */}
            <Column className="gap-xs">
              <Row className="items-center justify-between">
                <TextStyled textStyle="heading6" className="text-material-surface-80 flex-1">
                  {title}
                </TextStyled>
              </Row>

              {subtitle && (
                <Row className="gap-xs items-center">
                  <TextStyled textStyle="footnote" className="text-material-surface-80 flex-1">
                    {subtitle}
                  </TextStyled>
                </Row>
              )}
              {/* Body Text */}
              {body && (
                <Row className="gap-xs items-center justify-center">
                  <TextStyled textStyle="footnote" className="text-material-surface-60 flex-1">
                    {body}
                    {children}
                  </TextStyled>
                </Row>
              )}
            </Column>
          </Column>
        </Row>
      </Column>
    </ViewStyled>
  );
};

export default CardInfo;
