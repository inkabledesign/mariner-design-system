import React from 'react';
import Column from '@/components/atoms/Column';
import TextStyled from './index';

/**
 * Example: Font Weight Override
 * 
 * Demonstrates how to use the fontWeight prop to override
 * the default weight from textStyle.
 */
const FontWeightExample = () => {
  return (
    <Column className="gap-md p-md">
      {/* Using textStyle's default weight */}
      <TextStyled textStyle="heading1">
        Heading 1 (Default weight from textStyle)
      </TextStyled>

      {/* Override with Light (300) */}
      <TextStyled textStyle="heading1" fontWeight="300">
        Heading 1 - Light (300)
      </TextStyled>

      {/* Override with Regular (400) */}
      <TextStyled textStyle="heading1" fontWeight="400">
        Heading 1 - Regular (400)
      </TextStyled>

      {/* Override with Medium (500) */}
      <TextStyled textStyle="heading1" fontWeight="500">
        Heading 1 - Medium (500)
      </TextStyled>

      {/* Override with SemiBold (600) */}
      <TextStyled textStyle="heading1" fontWeight="600">
        Heading 1 - SemiBold (600)
      </TextStyled>

      {/* Override with Bold (700) */}
      <TextStyled textStyle="heading1" fontWeight="700">
        Heading 1 - Bold (700)
      </TextStyled>

      {/* Body text examples */}
      <TextStyled textStyle="body" fontWeight="300">
        Body text - Light
      </TextStyled>

      <TextStyled textStyle="body" fontWeight="400">
        Body text - Regular (default)
      </TextStyled>

      <TextStyled textStyle="body" fontWeight="700">
        Body text - Bold
      </TextStyled>
    </Column>
  );
};

export default FontWeightExample;
