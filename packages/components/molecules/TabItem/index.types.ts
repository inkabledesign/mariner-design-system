export interface TabItemProps {
  /**
   * Tab label.
   */
  label: string;

  /**
   * Active state — primary text with an underline indicator.
   */
  isActive?: boolean;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
