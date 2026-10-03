import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { SectionAdvertsRailProps } from './index.types';

/**
 * SectionAdvertsRail Component (Molecule)
 *
 * A horizontal rail of advert image cards, optionally followed by a brand
 * "advertise with us" CTA card.
 * Source: Mariner-Library / Molecules / Rails/SectionAdvertsRail (Figma).
 *
 * @example
 * <SectionAdvertsRail adverts={[{ source }]} ctaTitle="Advertise with us!" ctaLabel="Contact us" />
 */
const SectionAdvertsRail = ({
  adverts,
  ctaTitle,
  ctaDescription,
  ctaLabel,
  onCtaPress,
  className = '',
}: SectionAdvertsRailProps) => (
  <Row className={`gap-sm bg-material-surface-0 ${className}`.trim()}>
    {adverts.map((advert, index) => (
      <PressableStyled key={index} onPress={advert.onPress}>
        <ViewStyled className="w-[280px] h-[172px] rounded-md overflow-hidden bg-material-surface-5">
          <ExpoImage
            source={advert.source}
            contentFit="cover"
            style={{ width: '100%', height: '100%' }}
          />
        </ViewStyled>
      </PressableStyled>
    ))}
    {ctaTitle && (
      <ViewStyled className="w-[280px] h-[172px] rounded-md bg-brand-primary-100 p-md justify-end">
        <Column className="gap-xs">
          <TextStyled textStyle="heading6" className="text-material-surface-0">
            {ctaTitle}
          </TextStyled>
          {ctaDescription && (
            <TextStyled textStyle="footnote" className="text-material-surface-0">
              {ctaDescription}
            </TextStyled>
          )}
          {ctaLabel && (
            <PressableStyled onPress={onCtaPress} accessibilityRole="button">
              <TextStyled
                textStyle="button"
                className="text-material-surface-0 border-b-2 border-brand-accent-100 self-start"
              >
                {ctaLabel}
              </TextStyled>
            </PressableStyled>
          )}
        </Column>
      </ViewStyled>
    )}
  </Row>
);

export default SectionAdvertsRail;
