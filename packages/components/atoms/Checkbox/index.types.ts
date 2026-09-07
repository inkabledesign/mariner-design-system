export interface CheckboxProps {
  /**
   * Checked state (shows the tick).
   * @default false
   */
  checked?: boolean;

  /**
   * Press handler (toggle).
   */
  onPress?: () => void;

  /**
   * Disabled state.
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional Tailwind classes for the box.
   */
  className?: string;
}
