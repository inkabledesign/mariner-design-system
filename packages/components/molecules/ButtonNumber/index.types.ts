export type ButtonNumberState = 'default' | 'active' | 'completed' | 'success' | 'error';

export interface ButtonNumberProps {
  /**
   * Number displayed in the button.
   */
  number: number | string;

  /**
   * Visual state.
   * @default 'default'
   */
  state?: ButtonNumberState;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
