export type UpsellSectionVariant = 'primary' | 'gradient' | 'gradient-light' | 'dark' | 'light';

export interface UpsellSectionProps {
  /**
   * Promo headline (e.g. "All modules").
   */
  headline: string;

  /**
   * Promo sub-headline.
   */
  subHeadline?: string;

  /**
   * Plan card title (e.g. "Mariner Academy Pro").
   */
  planTitle?: string;

  /**
   * Plan card subtitle.
   */
  planSubtitle?: string;

  /**
   * Price/purchase label (e.g. "£5.99 Monthly subscription").
   */
  priceLabel?: string;

  /**
   * Feature list rendered as checkmarked rows.
   */
  features?: string[];

  /**
   * CTA button label.
   */
  ctaLabel?: string;

  /**
   * CTA press handler.
   */
  onCtaPress?: () => void;

  /**
   * Background variant.
   * @default 'light'
   */
  variant?: UpsellSectionVariant;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
