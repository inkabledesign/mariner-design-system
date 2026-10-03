export type SubscriptionBillingPeriod = 'monthly' | 'yearly';

export interface SubscriptionPlan {
  /**
   * Unique plan identifier.
   */
  id: string;

  /**
   * Plan title (e.g. "Pro", "Module", "Pro+").
   */
  title: string;

  /**
   * Price string (e.g. "£5.99").
   */
  price?: string;

  /**
   * Price suffix (e.g. "per month", "per year", "lifetime").
   */
  priceSuffix?: string;

  /**
   * Feature list shown with tick icons.
   */
  features: string[];

  /**
   * "What you get" label.
   */
  label?: string;

  /**
   * "Ideal for" description.
   */
  description?: string;

  /**
   * Whether this plan shows the monthly/yearly billing toggle.
   */
  hasBillingToggle?: boolean;
}

export interface SubscriptionSectionProps {
  /**
   * Available plans.
   */
  plans: SubscriptionPlan[];

  /**
   * Currently selected plan id.
   */
  selectedPlanId?: string;

  /**
   * Plan selection handler.
   */
  onSelectPlan?: (planId: string) => void;

  /**
   * Current billing period (for plans with a billing toggle).
   * @default 'monthly'
   */
  billingPeriod?: SubscriptionBillingPeriod;

  /**
   * Billing period change handler.
   */
  onBillingPeriodChange?: (period: SubscriptionBillingPeriod) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
