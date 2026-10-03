import type { IconName } from '../../types/icons.type';

export interface TileInfoProps {
  /**
   * Leading icon.
   */
  iconName: IconName;

  /**
   * Small label above the value (brand-primary).
   */
  label: string;

  /**
   * Primary value text.
   */
  value: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
