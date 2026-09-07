import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import Tag from '../../atoms/Tag';
import Divider from '../../atoms/Divider';
import PrimaryImage from '../../atoms/PrimaryImage';
import PressableStyled from '../../atoms/PressableStyled';
import type { CardMarinaRailProps } from './index.types';

/**
 * CardMarinaRail Component (Molecule)
 *
 * A rail card: header row (title + subtitle + circular marker badge), a
 * divider, a 4:3 image, and a footer row of coordinate/distance tags.
 * Source: Mariner-Library / Molecules / Cards/CardMarinaRail (Figma).
 *
 * @example
 * <CardMarinaRail title="Marina" coordinates="51 30' 40''N" distance="200 miles" />
 */
const CardMarinaRail = ({
  title,
  subtitle,
  markerIconName = 'ico-berth-round',
  source,
  coordinates,
  distance,
  onPress,
  className = '',
}: CardMarinaRailProps) => (
  <PressableStyled onPress={onPress}>
    <Column className={`w-[312px] rounded-md bg-material-surface-0 overflow-hidden ${className}`.trim()}>
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
      <Divider className="bg-brand-primary-10" />
      {source && <PrimaryImage source={source} aspectRatio="4:3" className="rounded-none" />}
      {(coordinates || distance) && (
        <Row className="gap-xs p-sm">
          {coordinates && <Tag label={coordinates} variant="secondary" iconName="ico-pin" />}
          {distance && <Tag label={distance} variant="secondary" iconName="ico-distance" />}
        </Row>
      )}
    </Column>
  </PressableStyled>
);

export default CardMarinaRail;
