import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import type { CardSubscriptionProps } from './index.types';

/**
 * CardSubscription Component (Molecule)
 *
 * A subscription plan card. `module` variant renders a plain primary card;
 * `pro`/`pro-plus` render a gradient card with an optional background image,
 * logo mark, and purchase label.
 * Source: mariner-edu molecules/CardSubscription (simplified: bundled brand
 * PNGs → imageSource/logoSource props).
 *
 * @example
 * <CardSubscription data={{ variant: 'pro', title: 'Pro', subtitle: 'Unlimited' }} />
 */
const CardSubscription = ({ data, imageSource, logoSource, className = '' }: CardSubscriptionProps) => {
  const isProVariant = data.variant === 'pro' || data.variant === 'pro-plus';
  const colorBG = data.variant === 'pro' ? 'bg-material-surface-0' : 'bg-brand-primary-100';
  const textColor = data.variant === 'pro' ? 'text-material-surface-100' : 'text-material-surface-0';

  return (
    <Column
      className={`relative border border-brand-accent-100 rounded-lg overflow-hidden ${colorBG} ${className}`.trim()}
    >
      {isProVariant && imageSource && (
        <ViewStyled className="absolute z-10 w-full h-full">
          <ExpoImage source={imageSource} contentFit="cover" style={{ width: '100%', aspectRatio: 16 / 9 }} />
        </ViewStyled>
      )}
      {data.variant === 'module' ? (
        <Column className="w-full aspect-[16/9] p-lg justify-between bg-brand-primary-100">
          <Column className="flex-1">
            <TextStyled textStyle="heading5" className="mb-xs text-material-surface-0">
              {data.title}
            </TextStyled>
            {data.subtitle && (
              <TextStyled textStyle="footnote" className="text-material-surface-0">
                {data.subtitle}
              </TextStyled>
            )}
          </Column>
          {data.purchaseType && (
            <ViewStyled className="mt-md w-full items-end">
              <TextStyled textStyle="footnote" className="text-material-surface-0">
                {data.purchaseType}
              </TextStyled>
            </ViewStyled>
          )}
        </Column>
      ) : (
        <ViewStyled className="p-lg w-full aspect-[16/9] relative z-20 justify-between">
          <Row className="items-start justify-between">
            <Column className="flex-1">
              <TextStyled textStyle="heading5" className={`mb-xs ${textColor}`}>
                {data.title}
              </TextStyled>
              {data.subtitle && (
                <TextStyled textStyle="footnote" className={textColor}>
                  {data.subtitle}
                </TextStyled>
              )}
            </Column>
            {logoSource && (
              <ViewStyled className="w-12 h-12 rounded-full items-center justify-center">
                <ExpoImage source={logoSource} contentFit="cover" style={{ width: 48, aspectRatio: 1 }} />
              </ViewStyled>
            )}
          </Row>
          {data.purchaseType && (
            <ViewStyled className="mt-md w-full items-end">
              <TextStyled textStyle="footnote" className={textColor}>
                {data.purchaseType}
              </TextStyled>
            </ViewStyled>
          )}
        </ViewStyled>
      )}
    </Column>
  );
};

export default CardSubscription;
