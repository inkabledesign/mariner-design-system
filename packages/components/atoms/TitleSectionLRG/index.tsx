import React from 'react';
import Column from '../Column';
import TextStyled from '../TextStyled';
import WaveDecoration from '../WaveDecoration';
import type { TitleSectionLRGProps } from './index.types';

/**
 * TitleSectionLRG Component (Atom)
 *
 * A large section title (heading3) with an accent wave underline.
 * Source: Mariner-Library / Atoms / TextBlock/TitleSectionLRG (Figma).
 *
 * @example
 * <TitleSectionLRG title="Amenities" />
 */
const TitleSectionLRG = ({
  title,
  color = 'text-brand-accent-100',
  className = '',
}: TitleSectionLRGProps) => (
  <Column className={`items-start gap-sm ${className}`.trim()}>
    <TextStyled textStyle="heading3" className={color}>
      {title}
    </TextStyled>
    <WaveDecoration variant="shortR" color={color} className="w-16 h-2" />
  </Column>
);

export default TitleSectionLRG;
