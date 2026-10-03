export interface TabBottomProps {
  /**
   * Tab label (typically a time, e.g. "12:20 am").
   */
  label: string;

  /**
   * Selected state — bold primary text with a top indicator bar.
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
