export type RadioButtonStatus = 'default' | 'error' | 'success';

export type RadioButtonSize = 'sm' | 'md';

export interface RadioButtonProps {
  checked?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  /**
   * Validation status — tints the ring and inner dot.
   * @default 'default'
   */
  status?: RadioButtonStatus;
  /**
   * 'sm' renders the 24px indicator used inside InputRadio rows;
   * 'md' is the original 36px touch target.
   * @default 'md'
   */
  size?: RadioButtonSize;
  className?: string;
}
