import { IconName } from '@/types/icons.type';

export type CardInfoType = 'danger' | 'warning' | 'success' | 'info' | 'generic';

export interface CardInfoProps {
  /**
   * Card title (bold heading)
   */
  title?: string;

  /**
   * Card subtitle (medium weight, smaller text)
   */
  subtitle?: string;

  /**
   * Card body text (main content)
   */
  body?: string;
  children?: React.ReactNode;

  /**
   * Optional custom icon component
   * If not provided, default icon based on type will be used
   */
  iconName?: IconName;

  /**
   * Card type/variant
   * - danger: Red border and icon (errors, critical info)
   * - warning: Yellow/orange border and icon (warnings, cautions)
   * - success: Green border and icon (success messages)
   * - info: Blue border and icon (informational)
   * - generic: Gray border and icon (neutral info)
   * @default 'danger'
   */
  type?: CardInfoType;

  /**
   * Additional CSS classes
   */
  className?: string;
}
