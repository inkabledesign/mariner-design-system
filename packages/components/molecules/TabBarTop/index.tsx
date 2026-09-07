import React from 'react';
import Row from '../../atoms/Row';
import TabTop from '../TabTop';
import type { TabBarTopProps } from './index.types';

/**
 * TabBarTop Component (Molecule)
 *
 * A horizontal top tab bar composed of TabTop items.
 * Source: Mariner-Library / Molecules / Tabs/TabBarTop (Figma).
 *
 * @example
 * <TabBarTop tabs={['Map', 'List', 'Saved']} selectedIndex={0} onSelect={fn} />
 */
const TabBarTop = ({ tabs, selectedIndex = 0, onSelect, className = '' }: TabBarTopProps) => (
  <Row className={`bg-material-surface-0 ${className}`.trim()}>
    {tabs.map((tab, index) => (
      <TabTop
        key={tab}
        title={tab}
        isSelected={index === selectedIndex}
        onPress={() => onSelect?.(index)}
        className="flex-1"
      />
    ))}
  </Row>
);

export default TabBarTop;
