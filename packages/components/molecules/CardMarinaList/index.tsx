import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import Tag from '../../atoms/Tag';
import PressableStyled from '../../atoms/PressableStyled';
import Badge from '../Badge';
import type { CardMarinaListProps } from './index.types';

/**
 * CardMarinaList Component (Molecule)
 *
 * A horizontal list card for marinas/crew: circular thumbnail (image or icon
 * fallback), title + subtitle, an optional status badge, and a row of tags.
 * Source: Mariner-Library / Molecules / Cards/CardMarinaList (Figma).
 *
 * @example
 * <CardMarinaList title="Lyle King" subtitle="Skipper" badgeLabel="Available" tags={['Certified']} />
 */
const CardMarinaList = ({
  title,
  subtitle,
  source,
  iconName = 'ico-marina',
  badgeLabel,
  tags,
  onPress,
  className = '',
}: CardMarinaListProps) => (
  <PressableStyled onPress={onPress}>
    <Row className={`items-center gap-md rounded-md bg-material-surface-0 p-md ${className}`.trim()}>
      <ViewStyled className="w-14 h-14 rounded-full bg-material-surface-5 items-center justify-center overflow-hidden">
        {source ? (
          <ExpoImage
            source={source}
            contentFit="cover"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <Icon iconName={iconName} color="text-brand-primary-100" className="w-8 h-8" />
        )}
      </ViewStyled>
      <Column className="flex-1 gap-xxs">
        <TextStyled textStyle="heading6" className="text-brand-primary-100">
          {title}
        </TextStyled>
        {subtitle && (
          <TextStyled textStyle="body" className="text-brand-primary-100">
            {subtitle}
          </TextStyled>
        )}
        {badgeLabel && <Badge label={badgeLabel} variant="primary" size="sm" iconName="ico-pin" />}
        {tags && tags.length > 0 && (
          <Row className="gap-xs flex-wrap">
            {tags.map(tag => (
              <Tag key={tag} label={tag} variant="secondary" hasIcon={false} />
            ))}
          </Row>
        )}
      </Column>
    </Row>
  </PressableStyled>
);

export default CardMarinaList;
