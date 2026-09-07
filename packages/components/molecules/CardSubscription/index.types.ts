import type { ImageSource } from 'expo-image';

export type CardSubscriptionVariant = 'module' | 'pro' | 'pro-plus';

export interface CardSubscriptionData {
  /**
   * Card variant — controls background and text colours.
   */
  variant: CardSubscriptionVariant;

  /**
   * Plan title.
   */
  title: string;

  /**
   * Plan subtitle.
   */
  subtitle?: string;

  /**
   * Purchase label (e.g. "£5.99 Monthly subscription").
   */
  purchaseType?: string;
}

export interface CardSubscriptionProps {
  /**
   * Plan card data.
   */
  data: CardSubscriptionData;

  /**
   * Optional background image (e.g. brand hero graphic). The component library
   * does not bundle brand PNGs — the consumer supplies them.
   */
  imageSource?: ImageSource | string;

  /**
   * Optional brand logo/mark shown top-right on pro variants.
   */
  logoSource?: ImageSource | string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
