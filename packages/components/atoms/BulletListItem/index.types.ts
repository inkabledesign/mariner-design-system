import type { IconName } from '../../types/icons.type';

export interface BulletListItemProps {
  /**
   * Item text.
   */
  text: string;

  /**
   * Leading bullet icon.
   * @default 'ico-tick-round-fill'
   */
  iconName?: IconName;

  /**
   * Additional Tailwind classes for the row.
   */
  className?: string;
}
