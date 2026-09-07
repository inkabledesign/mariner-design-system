export interface ButtonGroupItemProps {
  /**
   * Item label (e.g. "12:20 am").
   */
  label: string;

  /**
   * Selected state — bold primary text.
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
