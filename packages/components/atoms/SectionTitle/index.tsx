import React from 'react';
import Column from '../Column';
import TextStyled from '../TextStyled';
import type { SectionTitleProps } from './index.types';

/**
 * SectionTitle Component (Atom)
 *
 * A heading4 title for content sections with a bottom border.
 * Source: mariner-edu atoms/SectionTitle (presentational port).
 *
 * @example
 * <SectionTitle>Introduction to Marine VHF</SectionTitle>
 */
const SectionTitle = ({ children, className = '' }: SectionTitleProps) => (
  <Column
    className={`items-start pt-lg pb-sm px-sm border-b border-brand-primary-10 w-full ${className}`.trim()}
  >
    <TextStyled
      textStyle="heading4"
      textAlign="left"
      colorCategory="brand"
      colorName="primary"
      colorVariant="100"
    >
      {children}
    </TextStyled>
  </Column>
);

export default SectionTitle;
