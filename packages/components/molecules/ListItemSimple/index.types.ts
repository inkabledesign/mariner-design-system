import type { IconName } from '../../types/icons.type';

export type ListItemTrailing = 'chevron' | 'switch' | 'radio' | 'none';

export interface ListItemSimpleProps {
  /**
   * Small label above the title (brand-primary).
   */
  label?: string;

  /**
   * Main title text.
   */
  title: string;

  /**
   * Optional leading icon.
   */
  leadingIconName?: IconName;

  /**
   * Trailing affordance.
   * @default 'chevron'
   */
  trailing?: ListItemTrailing;

  /**
   * Checked state for switch/radio trailing.
   */
  checked?: boolean;

  /**
   * Toggle handler for switch/radio trailing.
   */
  onToggle?: (value: boolean) => void;

  /**
   * Row press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
