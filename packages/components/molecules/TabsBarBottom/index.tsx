import React from 'react';
import Row from '../../atoms/Row';
import TabBottom from '../TabBottom';
import type { TabsBarBottomProps } from './index.types';

/**
 * TabsBarBottom Component (Molecule)
 *
 * A bottom tab bar of TabBottom items (typically a time-slot selector).
 * Each tab carries its own top indicator bar for the selected state.
 * Source: Mariner-Library / Molecules / Tabs/TabsBarBottom (Figma).
 *
 * @example
 * <TabsBarBottom tabs={['12:20 am', '1:20 am', '2:20 am']} selectedIndex={0} onSelect={fn} />
 */
const TabsBarBottom = ({
  tabs,
  selectedIndex = 0,
  onSelect,
  className = '',
}: TabsBarBottomProps) => (
  <Row className={`bg-material-surface-0 ${className}`.trim()}>
    {tabs.map((tab, index) => (
      <TabBottom
        key={tab}
        label={tab}
        isSelected={index === selectedIndex}
        onPress={() => onSelect?.(index)}
        className="flex-1"
      />
    ))}
  </Row>
);

export default TabsBarBottom;
