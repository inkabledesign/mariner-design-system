import React from 'react';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { TabBottomProps } from './index.types';

/**
 * TabBottom Component (Molecule)
 *
 * A bottom-bar tab (typically a time slot). Selected state shows a primary
 * indicator bar across the top of the tab and bold primary text.
 * Source: Mariner-Library / Molecules / Tabs/Elements/TabBottom (Figma).
 *
 * @example
 * <TabBottom label="12:20 am" isSelected onPress={fn} />
 */
const TabBottom = ({ label, isSelected = false, onPress, className = '' }: TabBottomProps) => (
  <PressableStyled onPress={onPress}>
    <Column className={`bg-material-surface-0 ${className}`.trim()}>
      <ViewStyled
        className={`h-1 self-stretch ${isSelected ? 'bg-brand-primary-100' : 'bg-transparent'}`}
      />
      <ViewStyled className="items-center justify-center py-md">
        <TextStyled
          textStyle={isSelected ? 'heading6' : 'body'}
          className={isSelected ? 'text-brand-primary-100' : 'text-material-surface-80'}
        >
          {label}
        </TextStyled>
      </ViewStyled>
    </Column>
  </PressableStyled>
);

export default TabBottom;
