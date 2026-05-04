import { SharedValue } from 'react-native-reanimated';

export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  id: string;

  /**
   * Display label for the tab
   */
  label: string;
}

export interface TabBarProps {
  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';
  /**
   * Array of tabs to display
   */
  tabs: TabItem[];

  /**
   * Currently active tab index
   */
  selectedIndex: number;

  /**
   * Callback when a tab is selected
   */
  onChange: (index: number) => void;

  /**
   * Optional scroll position for animated indicator (SharedValue or number)
   */
  scrollX?: SharedValue<number> | number;

  /**
   * Maximum scroll value for indicator interpolation
   */
  maxScrollX?: number;

  /**
   * Optional additional CSS classes
   */
  className?: string;
}
