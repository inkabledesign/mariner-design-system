import React from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { TileWeatherItemProps } from './index.types';

/**
 * TileWeatherItem Component (Molecule)
 *
 * A compact vertical weather metric: icon, value, and label.
 * Source: Mariner-Library / Molecules / Tiles/Weather/Elements/TileWeatherItem (Figma).
 *
 * @example
 * <TileWeatherItem iconName="ico-weather-clearday" value="33°C" label="Temp." />
 */
const TileWeatherItem = ({
  iconName,
  value,
  label,
  themeMode = 'light',
  className = '',
}: TileWeatherItemProps) => {
  const textColor = themeMode === 'dark' ? 'text-material-surface-0' : 'text-material-surface-100';

  return (
    <Column className={`items-center gap-xs rounded-md bg-material-surface-0 p-xs ${className}`.trim()}>
      <Icon iconName={iconName} color={textColor} className="w-7 h-7" />
      <TextStyled textStyle="heading6" className={textColor}>
        {value}
      </TextStyled>
      <TextStyled textStyle="label" className={textColor}>
        {label}
      </TextStyled>
    </Column>
  );
};

export default TileWeatherItem;
