import { IconName } from '@/types/icons.type';

export type CardInfoType =
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'info-accent'
  | 'generic'
  | 'default';

export interface CardInfoProps {
  /**
   * Optional kicker — a short, uppercase monospace label shown above the title.
   * Rendered only when provided.
   */
  kicker?: string;

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
   * - info-accent: Gold/accent border and icon (informational, branded)
   * - generic / default: Gray border and icon (neutral info)
   * @default 'danger'
   */
  type?: CardInfoType;

  /**
   * Additional CSS classes
   */
  className?: string;
}
