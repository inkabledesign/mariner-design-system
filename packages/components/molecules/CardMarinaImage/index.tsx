import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import Tag from '../../atoms/Tag';
import PrimaryImage from '../../atoms/PrimaryImage';
import PressableStyled from '../../atoms/PressableStyled';
import type { CardMarinaImageProps } from './index.types';

/**
 * CardMarinaImage Component (Molecule)
 *
 * An image-first marina card: 4:3 hero image, a title block (title + subtitle
 * + circular marker badge), and a footer row of coordinate/distance tags.
 * Source: Mariner-Library / Molecules / Cards/CardMarinaImage (Figma).
 *
 * @example
 * <CardMarinaImage title="Marina" source={{ uri }} coordinates="51 30' 40''N" />
 */
const CardMarinaImage = ({
  title,
  subtitle,
  markerIconName = 'ico-pin',
  source,
  coordinates,
  distance,
  onPress,
  className = '',
}: CardMarinaImageProps) => (
  <PressableStyled onPress={onPress}>
    <Column className={`w-[312px] rounded-md bg-material-surface-0 overflow-hidden ${className}`.trim()}>
      {source && <PrimaryImage source={source} aspectRatio="4:3" className="rounded-none" />}
      <Row className="items-center gap-sm p-sm">
        <Column className="flex-1">
          <TextStyled textStyle="heading5" className="text-brand-primary-100" numberOfLines={1}>
            {title}
          </TextStyled>
          {subtitle && (
            <TextStyled textStyle="body" className="text-brand-primary-100" numberOfLines={1}>
              {subtitle}
            </TextStyled>
          )}
        </Column>
        <ViewStyled className="w-px h-9 bg-brand-primary-10" />
        <ViewStyled className="w-9 h-9 rounded-full bg-brand-primary-100 items-center justify-center">
          <Icon iconName={markerIconName} color="text-material-surface-0" className="w-5 h-5" />
        </ViewStyled>
      </Row>
      {(coordinates || distance) && (
        <Row className="gap-xs px-sm pb-sm">
          {coordinates && <Tag label={coordinates} variant="secondary" iconName="ico-pin" />}
          {distance && <Tag label={distance} variant="secondary" iconName="ico-distance" />}
        </Row>
      )}
    </Column>
  </PressableStyled>
);

export default CardMarinaImage;
