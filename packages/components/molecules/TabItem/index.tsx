import React from 'react';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';
import type { TabItemProps } from './index.types';

/**
 * TabItem Component (Molecule)
 *
 * An individual underline tab — active state shows primary text with a
 * primary underline indicator.
 * Source: mariner-edu molecules/TabItem (presentational port).
 *
 * @example
 * <TabItem label="Mayday" isActive onPress={fn} />
 */
const TabItem = ({ label, isActive = false, onPress, className = '' }: TabItemProps) => (
  <PressableStyled onPress={onPress} className={className} accessibilityState={{ selected: isActive }}>
    <Column className="gap-sm h-9 items-center">
      <TextStyled
        textStyle="body"
        className={`text-center ${isActive ? 'text-brand-primary-100' : 'text-material-surface-80'}`}
      >
        {label}
      </TextStyled>
      {isActive && <ViewStyled className="h-[2px] w-9 bg-brand-primary-100" />}
    </Column>
  </PressableStyled>
);

export default TabItem;
