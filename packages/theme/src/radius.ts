import { radiusData } from './radius.data';
import type { RadiusScale } from './types';

export const radius: RadiusScale = radiusData;

// Export individual scales for easier access
export const mobileRadius = radius['mobile'];
export const tabletRadius = radius['tablet'];
export const desktopSmRadius = radius['desktop-sm'];
export const desktopLgRadius = radius['desktop-lg'];

// Export common radius values from mobile as defaults
export const radiusValues = radius['mobile'].radius;

export default radius;
