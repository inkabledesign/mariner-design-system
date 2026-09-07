import React from 'react';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { TabTopProps } from './index.types';

/**
 * TabTop Component (Molecule)
 *
 * A single top-bar tab. Selected state shows bold primary text with a
 * primary underline indicator.
 * Source: Mariner-Library / Molecules / Tabs/Elements/TabTop (Figma).
 *
 * @example
 * <TabTop title="Overview" isSelected onPress={fn} />
 */
const TabTop = ({ title, isSelected = false, onPress, className = '' }: TabTopProps) => (
  <PressableStyled onPress={onPress}>
    <Column className={`items-center gap-xxs ${className}`.trim()}>
      <TextStyled
        textStyle={isSelected ? 'heading6' : 'body'}
        className={isSelected ? 'text-brand-primary-100' : 'text-material-surface-80'}
      >
        {title}
      </TextStyled>
      <ViewStyled
        className={`w-9 h-0.5 rounded-full ${isSelected ? 'bg-brand-primary-100' : 'bg-transparent'}`}
      />
    </Column>
  </PressableStyled>
);

export default TabTop;
