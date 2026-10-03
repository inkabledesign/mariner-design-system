import type { ImageSource } from 'expo-image';

export interface AdvertItem {
  /**
   * Advert image source.
   */
  source: ImageSource | string;

  /**
   * Optional press handler for the advert.
   */
  onPress?: () => void;
}

export interface SectionAdvertsRailProps {
  /**
   * Advert cards rendered in the rail.
   */
  adverts: AdvertItem[];

  /**
   * CTA card title (e.g. "Advertise with us!"). Hidden when omitted.
   */
  ctaTitle?: string;

  /**
   * CTA card description.
   */
  ctaDescription?: string;

  /**
   * CTA action label (e.g. "Contact us").
   */
  ctaLabel?: string;

  /**
   * CTA press handler.
   */
  onCtaPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
