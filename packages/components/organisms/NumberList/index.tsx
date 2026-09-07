import React from 'react';
import { ScrollView } from 'react-native';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import StepNumber from '../../atoms/StepNumber';
import PressableStyled from '../../atoms/PressableStyled';
import type { NumberListProps } from './index.types';

/**
 * NumberList Component (Organism)
 *
 * A horizontal scrollable rail of numbered section steps inside a rounded
 * bordered container. Presentational — the consumer owns the active index.
 * Source: mariner-edu organisms/NumberList (simplified: sections → count).
 *
 * @example
 * <NumberList count={5} currentIndex={0} onSectionPress={fn} />
 */
const NumberList = ({ count, currentIndex = 0, onSectionPress, className = '' }: NumberListProps) => (
  <ViewStyled className={`w-full pt-xl ${className}`.trim()}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ width: '100%' }}
    >
      <Row className="gap-sm w-full">
        {Array.from({ length: count }).map((_, index) => (
          <PressableStyled key={index} onPress={() => onSectionPress?.(index)}>
            <StepNumber number={index + 1} active={index === currentIndex} />
          </PressableStyled>
        ))}
      </Row>
    </ScrollView>
  </ViewStyled>
);

export default NumberList;
