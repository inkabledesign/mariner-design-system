import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import ViewStyled from '../ViewStyled';
import TextStyled from '../TextStyled';
import Column from '../Column';
import type { PromoWrapperProps, PromoWrapperVariant } from './index.types';

const variantClasses: Record<PromoWrapperVariant, { text: string; bg: string }> = {
  primary: { text: 'text-material-surface-0', bg: 'bg-material-surface-0' },
  gradient: { text: 'text-material-surface-0', bg: 'bg-material-surface-0' },
  'gradient-light': { text: 'text-brand-primary-100', bg: 'bg-brand-primary-10' },
  dark: { text: 'text-material-surface-0', bg: 'bg-brand-primary-10' },
  light: { text: 'text-brand-primary-100', bg: 'bg-brand-primary-10' },
};

/**
 * PromoWrapper Component (Atom)
 *
 * A promotional card with a hero background image, headline, sub-headline,
 * and a content slot. The background image comes via props — the library does
 * not bundle brand PNGs.
 * Source: mariner-edu atoms/PromoWrapper (simplified: bundled PNG map →
 * imageSource prop).
 */
const PromoWrapper = ({
  children,
  headline,
  subHeadline,
  variant = 'primary',
  imageSource,
  className = '',
}: PromoWrapperProps) => {
  const classes = variantClasses[variant];

  return (
    <ViewStyled
      className={`w-full flex-1 bg-material-surface-100 border border-brand-material-20 rounded-xl overflow-hidden ${classes.bg} ${className}`.trim()}
    >
      {imageSource && (
        <ExpoImage
          source={imageSource}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', aspectRatio: 1 }}
          contentFit="cover"
        />
      )}
      <Column className="relative pb-xxl">
        <ViewStyled className="relative z-20 px-lg py-xl gap-md flex-col items-start justify-start">
          {headline && (
            <TextStyled textStyle="heading3" className={classes.text}>
              {headline}
            </TextStyled>
          )}
          {subHeadline && (
            <TextStyled textStyle="heading5" fontWeight="300" className={classes.text}>
              {subHeadline}
            </TextStyled>
          )}
        </ViewStyled>
        <ViewStyled className="w-full">{children}</ViewStyled>
      </Column>
    </ViewStyled>
  );
};

export default PromoWrapper;
