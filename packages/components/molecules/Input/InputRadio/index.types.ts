export type InputRadioStatus = 'default' | 'error' | 'success';

export interface InputRadioProps {
  /**
   * Option label text.
   */
  label: string;

  /**
   * Selected state — radio checked and label in brand primary.
   * @default false
   */
  isSelected?: boolean;

  /**
   * Validation status — tints the row surface, radio and trailing icon.
   * @default 'default'
   */
  status?: InputRadioStatus;

  /**
   * Press handler (selects the option).
   */
  onPress?: () => void;

  /**
   * Handler for the trailing status affordance (close/tick icon).
   * When omitted the icon is rendered as a passive indicator.
   */
  onTrailingPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
