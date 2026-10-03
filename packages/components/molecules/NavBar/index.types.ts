import type { IconName } from '../../types/icons.type';

export interface NavBarItem {
  /**
   * Item icon.
   */
  iconName: IconName;

  /**
   * Item label (e.g. "Marina", "Tides").
   */
  title: string;
}

export interface NavBarProps {
  /**
   * Navigation items displayed in the bar.
   */
  items: NavBarItem[];

  /**
   * Index of the active item.
   * @default 0
   */
  selectedIndex?: number;

  /**
   * Selection handler — receives the tapped item index.
   */
  onSelect?: (index: number) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
