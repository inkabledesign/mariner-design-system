export interface TabTopProps {
  /**
   * Tab label.
   */
  title: string;

  /**
   * Selected state — bold primary text with an underline indicator.
   * @default false
   */
  isSelected?: boolean;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
