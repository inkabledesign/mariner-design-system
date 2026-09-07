// Font exports for @mariner/assets package

// Font file paths for React Native and web usage
export const fonts = {
  'Montserrat-Light': './Montserrat-Light.ttf',
  'Montserrat-Regular': './Montserrat-Regular.ttf',
  'Montserrat-Medium': './Montserrat-Medium.ttf',
  'Montserrat-SemiBold': './Montserrat-SemiBold.ttf',
  'Montserrat-Bold': './Montserrat-Bold.ttf',
  'Rajdhani-Light': './Rajdhani-Light.ttf',
  'Rajdhani-Regular': './Rajdhani-Regular.ttf',
  'Rajdhani-Medium': './Rajdhani-Medium.ttf',
  'Rajdhani-SemiBold': './Rajdhani-SemiBold.ttf',
  'Rajdhani-Bold': './Rajdhani-Bold.ttf',
  'SpaceMono-Regular': './SpaceMono-Regular.ttf',
};

// Font weight mapping for easy access
export const fontWeights = {
  light: 'Montserrat-Light',
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  semibold: 'Montserrat-SemiBold',
  bold: 'Montserrat-Bold',
};

// Font family names for CSS/Tailwind usage
export const fontFamilies = {
  'font-montserrat-light': ['Montserrat-Light', 'sans-serif'],
  'font-montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
  'font-montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
  'font-montserrat-semibold': ['Montserrat-SemiBold', 'sans-serif'],
  'font-montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
};

/**
 * Metro-resolvable font assets for `expo-font`.
 *
 * Use with `Font.loadAsync(fontAssets)` in the consumer app before render.
 * `require()` is resolved relative to this file inside the package, so it
 * works regardless of where the consumer's project root is.
 */
export const fontAssets = {
  'Montserrat-Light': require('./Montserrat-Light.ttf'),
  'Montserrat-Regular': require('./Montserrat-Regular.ttf'),
  'Montserrat-Medium': require('./Montserrat-Medium.ttf'),
  'Montserrat-SemiBold': require('./Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('./Montserrat-Bold.ttf'),
};

export default fonts;
