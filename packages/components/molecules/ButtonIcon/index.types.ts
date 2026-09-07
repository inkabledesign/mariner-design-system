import type { IconName } from '../../types/icons.type';

export interface ButtonIconProps {
  /**
   * Button icon.
   */
  iconName: IconName;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Active state — icon in brand primary; otherwise muted.
   * @default false
   */
  isActive?: boolean;

  /**
   * Accessibility label for the button.
   */
  accessibilityLabel?: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
