import React from 'react';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TabItem from '../TabItem';
import type { TabNavigationProps } from './index.types';

/**
 * TabNavigation Component (Molecule)
 *
 * A horizontal row of underline tabs for switching between content sections.
 * Source: mariner-edu molecules/TabNavigation (presentational port).
 *
 * @example
 * <TabNavigation tabs={[{ id: 'mayday', label: 'Mayday' }]} activeTabId="mayday" onTabChange={fn} />
 */
const TabNavigation = ({ tabs, activeTabId, onTabChange, className = '' }: TabNavigationProps) => (
  <ViewStyled
    className={`bg-material-surface-0 border-b border-brand-primary-20 ${className}`.trim()}
  >
    <Row className="items-start justify-between px-md pt-sm">
      {tabs.map(tab => (
        <TabItem
          key={tab.id}
          label={tab.label}
          isActive={activeTabId === tab.id}
          onPress={() => onTabChange(tab.id)}
          className="w-[82px]"
        />
      ))}
    </Row>
  </ViewStyled>
);

export default TabNavigation;
