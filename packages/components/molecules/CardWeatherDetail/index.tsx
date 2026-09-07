import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import TileWeatherItem from '../TileWeatherItem';
import type { CardWeatherDetailProps } from './index.types';

/**
 * CardWeatherDetail Component (Molecule)
 *
 * A dark-surface weather detail card: date heading, a row of weather metrics
 * (TileWeatherItem), and an optional summary line.
 * Source: Mariner-Library / Molecules / Card/CardWeatherDetail (Figma).
 *
 * @example
 * <CardWeatherDetail date="Friday 13th" items={[...]} summary="Warm with a chance of rain" />
 */
const CardWeatherDetail = ({ date, items, summary, className = '' }: CardWeatherDetailProps) => (
  <Column className={`gap-sm rounded-md bg-material-alphaDark-10 p-md ${className}`.trim()}>
    <TextStyled textStyle="heading6" className="text-material-surface-0">
      {date}
    </TextStyled>
    <Row className="gap-xs rounded-md bg-material-alphaDark-5 p-xs">
      {items.map((item, index) => (
        <TileWeatherItem
          key={`${item.label}-${index}`}
          iconName={item.iconName}
          value={item.value}
          label={item.label}
          themeMode="dark"
          className="flex-1 bg-transparent"
        />
      ))}
    </Row>
    {summary && (
      <TextStyled textStyle="footnote" className="text-material-surface-0">
        {summary}
      </TextStyled>
    )}
  </Column>
);

export default CardWeatherDetail;
