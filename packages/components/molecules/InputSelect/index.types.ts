export type InputSelectStatus = 'default' | 'error' | 'success';

export interface InputSelectProps {
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
   * Validation status — tints the row surface.
   * @default 'default'
   */
  status?: InputSelectStatus;

  /**
   * Press handler (selects the option).
   */
  onPress?: () => void;

  /**
   * Handler for the trailing affordance (close/tick icon).
   */
  onTrailingPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
