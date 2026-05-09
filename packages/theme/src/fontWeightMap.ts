/**
 * Maps font weight values to their corresponding Montserrat font family names.
 * Since Montserrat ships as separate font files for each weight, we need to
 * use the correct font family name instead of relying on CSS font-weight.
 */

// Tailwind class names (deprecated - use fontWeightToFontFamily instead)
export const fontWeightToFamily: Record<string, string> = {
  '300': 'font-montserrat-light',
  '400': 'font-montserrat-regular',
  '500': 'font-montserrat-medium',
  '600': 'font-montserrat-semibold',
  '700': 'font-montserrat-bold',
};

// Actual font family names for inline styles
export const fontWeightToFontFamily: Record<string, string> = {
  '300': 'Montserrat-Light',
  '400': 'Montserrat-Regular',
  '500': 'Montserrat-Medium',
  '600': 'Montserrat-SemiBold',
  '700': 'Montserrat-Bold',
};

/**
 * Get the appropriate font family class for a given font weight.
 * Falls back to regular weight if the weight is not found.
 * @deprecated Use getFontFamilyNameForWeight instead for inline styles
 */
export function getFontFamilyForWeight(weight: string | number): string {
  const weightStr = String(weight);
  return fontWeightToFamily[weightStr] || 'font-montserrat-regular';
}

/**
 * Get the actual font family name for a given font weight (for inline styles).
 * Falls back to regular weight if the weight is not found.
 */
export function getFontFamilyNameForWeight(weight: string | number): string {
  const weightStr = String(weight);
  return fontWeightToFontFamily[weightStr] || 'Montserrat-Regular';
}
