export interface TilePriceProps {
  /**
   * Plan title (e.g. "Monthly").
   */
  title: string;

  /**
   * Price string (e.g. "£5.99").
   */
  price: string;

  /**
   * Price suffix (e.g. "per month").
   */
  subtitle?: string;

  /**
   * Selected state.
   * @default false
   */
  isSelected?: boolean;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
