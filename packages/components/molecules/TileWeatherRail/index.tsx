import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import TileWeatherItem from '../TileWeatherItem';
import type { TileWeatherRailProps } from './index.types';

/**
 * TileWeatherRail Component (Molecule)
 *
 * A horizontal rail of weather metrics (TileWeatherItem) with an optional date
 * label, on a subtle tinted surface.
 * Source: Mariner-Library / Molecules / Rails/TileWeatherRail (Figma).
 *
 * @example
 * <TileWeatherRail date="Friday 13th" items={[{ iconName: 'ico-weather-clearday', value: '33°C', label: 'Temp.' }]} />
 */
const TileWeatherRail = ({
  date,
  items,
  themeMode = 'light',
  className = '',
}: TileWeatherRailProps) => (
  <Column className={`gap-xs ${className}`.trim()}>
    {date && (
      <TextStyled textStyle="footnote" className="text-material-surface-100">
        {date}
      </TextStyled>
    )}
    <Row className="gap-xs rounded-md bg-material-alphaDark-5 p-xs">
      {items.map((item, index) => (
        <TileWeatherItem
          key={`${item.label}-${index}`}
          iconName={item.iconName}
          value={item.value}
          label={item.label}
          themeMode={themeMode}
          className="flex-1"
        />
      ))}
    </Row>
  </Column>
);

export default TileWeatherRail;
