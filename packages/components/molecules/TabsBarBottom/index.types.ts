export interface TabsBarBottomProps {
  /**
   * Tab labels (typically times, e.g. "12:20 am").
   */
  tabs: string[];

  /**
   * Index of the selected tab.
   * @default 0
   */
  selectedIndex?: number;

  /**
   * Selection handler — receives the tapped tab index.
   */
  onSelect?: (index: number) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
