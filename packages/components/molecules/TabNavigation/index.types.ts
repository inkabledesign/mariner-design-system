export interface TabNavigationItem {
  /**
   * Unique tab identifier.
   */
  id: string;

  /**
   * Tab label.
   */
  label: string;
}

export interface TabNavigationProps {
  /**
   * Tabs to render.
   */
  tabs: TabNavigationItem[];

  /**
   * Currently active tab id.
   */
  activeTabId: string;

  /**
   * Tab change handler.
   */
  onTabChange: (id: string) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
