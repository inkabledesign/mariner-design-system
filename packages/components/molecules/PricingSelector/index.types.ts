export interface PricingOption {
  /**
   * Unique option identifier.
   */
  id: string;

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
}

export interface PricingSelectorProps {
  /**
   * Pricing options rendered as tiles.
   */
  pricingData: PricingOption[];

  /**
   * Currently selected option id (controlled).
   */
  selectedOption?: string;

  /**
   * Selection handler.
   */
  onSelectOption?: (optionId: string, index: number) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
