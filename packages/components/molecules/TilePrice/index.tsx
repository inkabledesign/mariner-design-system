import React from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { TilePriceProps } from './index.types';

/**
 * TilePrice Component (Molecule)
 *
 * A pricing tile: title, price, and subtitle. Selected state switches text to
 * brand primary.
 * Source: mariner-edu molecules/TilePrice (simplified: shared-value colour
 * animation → static selected state via token classes).
 *
 * @example
 * <TilePrice title="Monthly" price="£5.99" subtitle="per month" isSelected onPress={fn} />
 */
const TilePrice = ({
  title,
  price,
  subtitle,
  isSelected = false,
  onPress,
  className = '',
}: TilePriceProps) => {
  const color = isSelected ? 'text-brand-primary-100' : 'text-material-surface-60';

  return (
    <PressableStyled onPress={onPress} accessibilityState={{ selected: isSelected }}>
      <Column
        className={`flex-1 bg-material-surface-0 pb-md pt-lg px-md items-center justify-center gap-xs ${className}`.trim()}
      >
        <TextStyled textStyle="heading6" className={`${color} text-center`}>
          {title}
        </TextStyled>
        <TextStyled textStyle="heading6" className={`${color} text-center`}>
          {price}
        </TextStyled>
        {subtitle && (
          <TextStyled textStyle="footnote" className={`${color} text-center`}>
            {subtitle}
          </TextStyled>
        )}
      </Column>
    </PressableStyled>
  );
};

export default TilePrice;
