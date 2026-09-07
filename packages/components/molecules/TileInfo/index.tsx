import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import type { TileInfoProps } from './index.types';

/**
 * TileInfo Component (Molecule)
 *
 * A horizontal info tile: a leading icon with a small label and a value.
 * Source: Mariner-Library / Molecules / Tiles/TileInfo (Figma).
 *
 * @example
 * <TileInfo iconName="ico-berth" label="VHF Channel" value="80 or 37" />
 */
const TileInfo = ({ iconName, label, value, className = '' }: TileInfoProps) => (
  <Row className={`items-center gap-md rounded-md bg-material-surface-0 px-md py-sm ${className}`.trim()}>
    <Icon iconName={iconName} color="text-material-surface-100" className="w-6 h-6" />
    <Column className="flex-1">
      <TextStyled textStyle="label" className="text-brand-primary-100">
        {label}
      </TextStyled>
      <TextStyled textStyle="input" className="text-material-surface-80">
        {value}
      </TextStyled>
    </Column>
  </Row>
);

export default TileInfo;
