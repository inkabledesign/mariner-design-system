import type { IconName } from '../../types/icons.type';

export interface OfflineBannerProps {
  /**
   * Whether offline mode is active — hides the banner when false.
   */
  isOffline?: boolean;

  /**
   * Banner message.
   * @default 'Offline mode is on. No internet connection'
   */
  text?: string;

  /**
   * Leading icon.
   * @default 'ico-wifi-off-outline'
   */
  iconName?: IconName;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
