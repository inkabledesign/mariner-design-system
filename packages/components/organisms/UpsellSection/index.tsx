import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import Button from '../../molecules/Button';
import type { UpsellSectionProps, UpsellSectionVariant } from './index.types';

const variantBg: Record<UpsellSectionVariant, string> = {
  primary: 'bg-brand-primary-100',
  gradient: 'bg-brand-primary-80',
  'gradient-light': 'bg-brand-primary-20',
  dark: 'bg-material-surface-100',
  light: 'bg-material-surface-0',
};

/**
 * UpsellSection Component (Organism)
 *
 * A subscription upsell block: headline, sub-headline, a plan card with
 * checkmarked features and a price label, plus a CTA button.
 * Presentational — navigation/purchase logic lives in the consumer.
 * Source: mariner-edu organisms/UpsellSection (simplified).
 *
 * @example
 * <UpsellSection headline="All modules" planTitle="Pro" features={['All lessons']} ctaLabel="Unlock" onCtaPress={fn} />
 */
const UpsellSection = ({
  headline,
  subHeadline,
  planTitle,
  planSubtitle,
  priceLabel,
  features,
  ctaLabel,
  onCtaPress,
  variant = 'light',
  className = '',
}: UpsellSectionProps) => (
  <Column className={`px-md gap-lg ${className}`.trim()}>
    <Column className={`w-full rounded-lg p-md gap-md ${variantBg[variant]}`}>
      <TextStyled textStyle="heading4" className="text-material-surface-0">
        {headline}
      </TextStyled>
      {subHeadline && (
        <TextStyled textStyle="body" className="text-material-surface-0">
          {subHeadline}
        </TextStyled>
      )}
      {planTitle && (
        <Column className="w-full rounded-md bg-material-surface-0 p-md gap-sm">
          <TextStyled textStyle="heading6" className="text-brand-primary-100">
            {planTitle}
          </TextStyled>
          {planSubtitle && (
            <TextStyled textStyle="footnote" className="text-material-surface-80">
              {planSubtitle}
            </TextStyled>
          )}
          {priceLabel && (
            <TextStyled textStyle="button" className="text-material-surface-100">
              {priceLabel}
            </TextStyled>
          )}
          {features?.map(feature => (
            <Row key={feature} className="items-center gap-xs">
              <Icon iconName="ico-tick" color="text-system-success-100" className="w-4 h-4" />
              <TextStyled textStyle="footnote" className="text-material-surface-80">
                {feature}
              </TextStyled>
            </Row>
          ))}
        </Column>
      )}
      {ctaLabel && (
        <Button text={ctaLabel} variant="primary" onPress={onCtaPress} className="w-full" />
      )}
    </Column>
  </Column>
);

export default UpsellSection;
