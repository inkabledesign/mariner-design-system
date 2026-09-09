import { sizeData } from './size.data';
import type { SizeScale } from './types';

export const size: SizeScale = sizeData;

export const mobileSize = size.mobile;
export const tabletSize = size.tablet;
export const desktopSmSize = size['desktop-sm'];
export const desktopLgSize = size['desktop-lg'];

export const sizeValues = size.mobile.size;

export default size;
