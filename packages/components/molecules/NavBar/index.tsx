import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { NavBarProps } from './index.types';

/**
 * NavBar Component (Molecule)
 *
 * A bottom navigation bar: icon tile + caption per item. The active item is
 * tinted with the brand primary palette.
 * Source: Mariner-Library / Molecules / Tabs/Navigation/NavBar (Figma).
 *
 * @example
 * <NavBar items={[{ iconName: 'ico-marina', title: 'Marina' }]} selectedIndex={0} onSelect={fn} />
 */
const NavBar = ({ items, selectedIndex = 0, onSelect, className = '' }: NavBarProps) => (
  <Row className={`bg-material-surface-0 px-md py-sm ${className}`.trim()}>
    {items.map((item, index) => {
      const isSelected = index === selectedIndex;
      const color = isSelected ? 'text-brand-primary-100' : 'text-material-surface-80';

      return (
        <PressableStyled key={item.title} onPress={() => onSelect?.(index)}>
          <Column className="items-center gap-xxs w-20 py-xs">
            <ViewStyled
              className={`w-8 h-8 rounded-md items-center justify-center ${
                isSelected ? 'bg-brand-primary-10' : 'bg-transparent'
              }`}
            >
              <Icon iconName={item.iconName} color={color} className="w-5 h-5" />
            </ViewStyled>
            <TextStyled textStyle="caption" className={color}>
              {item.title}
            </TextStyled>
          </Column>
        </PressableStyled>
      );
    })}
  </Row>
);

export default NavBar;
