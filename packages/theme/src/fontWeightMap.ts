/**
 * Maps font weight values to their corresponding Montserrat font family names.
 * Since Montserrat ships as separate font files for each weight, we need to
 * use the correct font family name instead of relying on CSS font-weight.
 */

export const fontWeightToFamily: Record<string, string> = {
  '300': 'font-montserrat-light',
  '400': 'font-montserrat-regular',
  '500': 'font-montserrat-medium',
  '600': 'font-montserrat-semibold',
  '700': 'font-montserrat-bold',
};

/**
 * Get the appropriate font family class for a given font weight.
 * Falls back to regular weight if the weight is not found.
 */
export function getFontFamilyForWeight(weight: string | number): string {
  const weightStr = String(weight);
  return fontWeightToFamily[weightStr] || 'font-montserrat-regular';
}
