import React from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import type { TileWeatherHeaderProps } from './index.types';

/**
 * TileWeatherHeader Component (Molecule)
 *
 * A weather section header: title, day/time line, and a short description.
 * Rendered on a dark/brand surface — text defaults to the dark-mode (light) palette.
 * Source: Mariner-Library / Molecules / Tiles/Weather/TileWatherHeader (Figma).
 *
 * @example
 * <TileWeatherHeader title="Tides" day="Friday 13th | 12:20am" description="Warm with a chance of rain" />
 */
const TileWeatherHeader = ({
  title,
  day,
  description,
  themeMode = 'dark',
  className = '',
}: TileWeatherHeaderProps) => {
  const textColor = themeMode === 'dark' ? 'text-material-surface-0' : 'text-material-surface-100';

  return (
    <Column className={`gap-xs ${className}`.trim()}>
      <TextStyled textStyle="heading6" className={textColor}>
        {title}
      </TextStyled>
      <TextStyled textStyle="heading4" className={textColor}>
        {day}
      </TextStyled>
      {description && (
        <TextStyled textStyle="footnote" className={textColor}>
          {description}
        </TextStyled>
      )}
    </Column>
  );
};

export default TileWeatherHeader;
