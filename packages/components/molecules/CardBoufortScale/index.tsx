import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PrimaryImage from '../../atoms/PrimaryImage';
import Icon from '../../atoms/Icon';
import type { CardBoufortScaleProps } from './index.types';

/**
 * CardBoufortScale Component (Molecule)
 *
 * A Beaufort wind-scale card: background image with overlay, description,
 * force number, wind speed (knots/km/h), wave height, and sea conditions.
 * Source: mariner-edu molecules/CardBoufortScale (ported — custom
 * LinearGradient replaced by PrimaryImage's built-in overlay).
 *
 * @example
 * <CardBoufortScale force={1} windSpeedKnots="1-3" windSpeedKmh="1-5" waveHeightM="0-0.1" description="Light Air" />
 */
const CardBoufortScale = ({
  force,
  windSpeedKnots,
  windSpeedKmh,
  waveHeightM,
  description,
  seaConditions,
  imageUrl,
  className = '',
}: CardBoufortScaleProps) => (
  <ViewStyled
    className={`bg-material-surface-0 border border-brand-primary-20 rounded-lg p-md gap-md h-[556px] w-[369px] ${className}`.trim()}
  >
    <ViewStyled className="flex-1 w-full rounded-md overflow-hidden relative">
      <PrimaryImage
        source={imageUrl}
        aspectRatio="9:16"
        className="absolute inset-0 rounded-md"
      />

      {/* Upload Icon — top right */}
      <ViewStyled className="absolute top-md right-md bg-material-surface-0 rounded-full items-center justify-center">
        <Icon
          iconName="ico-upload-image-round"
          color="text-brand-primary-100"
          className="w-[36px] h-[36px]"
        />
      </ViewStyled>

      {/* Content overlay — bottom */}
      <Column className="absolute bottom-0 left-0 right-0 gap-lg items-center justify-center pb-md px-md">
        <Column className="w-full items-center justify-end">
          <Column className="w-full gap-sm">
            {description && (
              <TextStyled textStyle="heading2" className="text-material-surface-0">
                {description}
              </TextStyled>
            )}
            <Row className="w-full gap-sm items-center">
              <TextStyled textStyle="heading1" className="text-material-surface-0">
                F{force}
              </TextStyled>
              <Column className="flex-1 gap-xxs border-l border-brand-secondary-10 pl-sm">
                <Row className="gap-md items-center">
                  {windSpeedKnots && (
                    <Row className="gap-xs items-end">
                      <TextStyled textStyle="heading5" className="text-material-surface-0">
                        {windSpeedKnots}
                      </TextStyled>
                      <TextStyled textStyle="footnote" className="text-material-surface-0">
                        knots
                      </TextStyled>
                    </Row>
                  )}
                  <ViewStyled className="w-px h-full bg-brand-secondary-10" />
                  {windSpeedKmh && (
                    <Row className="gap-xs items-end">
                      <TextStyled textStyle="heading5" className="text-material-surface-0">
                        {windSpeedKmh}
                      </TextStyled>
                      <TextStyled textStyle="footnote" className="text-material-surface-0">
                        km/h
                      </TextStyled>
                    </Row>
                  )}
                </Row>
                <ViewStyled className="h-px w-full bg-brand-secondary-10" />
                {waveHeightM && (
                  <Row className="gap-xxs items-center">
                    <TextStyled textStyle="footnote" className="text-material-surface-0">
                      Wave height:
                    </TextStyled>
                    <TextStyled textStyle="heading5" className="text-material-surface-0">
                      {waveHeightM}
                    </TextStyled>
                    <TextStyled textStyle="footnote" className="text-material-surface-0">
                      m
                    </TextStyled>
                  </Row>
                )}
              </Column>
            </Row>
            <ViewStyled className="h-px w-full bg-brand-secondary-10" />
            {seaConditions && (
              <TextStyled textStyle="body" className="text-material-surface-0">
                {seaConditions}
              </TextStyled>
            )}
          </Column>
        </Column>
      </Column>
    </ViewStyled>
  </ViewStyled>
);

export default CardBoufortScale;
