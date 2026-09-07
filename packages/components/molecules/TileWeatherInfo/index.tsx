import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { TileWeatherInfoProps } from './index.types';

/**
 * TileWeatherInfo Component (Molecule)
 *
 * A large weather summary: condition icon with temperature and description.
 * Source: Mariner-Library / Molecules / Tiles/TileWeatherInfo (Figma).
 *
 * @example
 * <TileWeatherInfo iconName="ico-weather-cloudy" temperature="27°C" condition="Partly cloudy" />
 */
const TileWeatherInfo = ({
  iconName = 'ico-weather-cloudy',
  temperature,
  condition,
  className = '',
}: TileWeatherInfoProps) => (
  <Row className={`items-center gap-md px-xl ${className}`.trim()}>
    <Icon iconName={iconName} color="text-material-surface-100" className="w-20 h-20" />
    <Column className="gap-xs">
      <TextStyled textStyle="heading1" className="text-material-surface-100">
        {temperature}
      </TextStyled>
      <TextStyled textStyle="heading6" className="text-material-surface-100">
        {condition}
      </TextStyled>
    </Column>
  </Row>
);

export default TileWeatherInfo;
