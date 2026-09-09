// Font exports for @mariner/assets package

// Font file paths for React Native and web usage
export const fonts = {
  "Montserrat-Light": "./Montserrat-Light.ttf",
  "Montserrat-Regular": "./Montserrat-Regular.ttf",
  "Montserrat-Medium": "./Montserrat-Medium.ttf",
  "Montserrat-SemiBold": "./Montserrat-SemiBold.ttf",
  "Montserrat-Bold": "./Montserrat-Bold.ttf",
  "Rajdhani-Light": "./Rajdhani-Light.ttf",
  "Rajdhani-Regular": "./Rajdhani-Regular.ttf",
  "Rajdhani-Medium": "./Rajdhani-Medium.ttf",
  "Rajdhani-SemiBold": "./Rajdhani-SemiBold.ttf",
  "Rajdhani-Bold": "./Rajdhani-Bold.ttf",
  "SpaceMono-Regular": "./SpaceMono-Regular.ttf",
  "SpaceMono-Bold": "./SpaceMono-Bold.ttf",
};

// Font weight mapping for easy access
export const fontWeights = {
  light: "Montserrat-Light",
  regular: "Montserrat-Regular",
  medium: "Montserrat-Medium",
  semibold: "Montserrat-SemiBold",
  bold: "Montserrat-Bold",
  rajdhaniLight: "Rajdhani-Light",
  rajdhaniRegular: "Rajdhani-Regular",
  rajdhaniMedium: "Rajdhani-Medium",
  rajdhaniSemibold: "Rajdhani-SemiBold",
  rajdhaniBold: "Rajdhani-Bold",
  spaceMonoRegular: "SpaceMono-Regular",
  spaceMonoBold: "SpaceMono-Bold",
};

// Font family names for CSS/Tailwind usage
export const fontFamilies = {
  "font-montserrat": ["Montserrat", "sans-serif"],
  "font-montserrat-light": ["Montserrat-Light", "sans-serif"],
  "font-montserrat-regular": ["Montserrat-Regular", "sans-serif"],
  "font-montserrat-medium": ["Montserrat-Medium", "sans-serif"],
  "font-montserrat-semibold": ["Montserrat-SemiBold", "sans-serif"],
  "font-montserrat-bold": ["Montserrat-Bold", "sans-serif"],
  "font-rajdhani": ["Rajdhani", "sans-serif"],
  "font-rajdhani-light": ["Rajdhani-Light", "sans-serif"],
  "font-rajdhani-regular": ["Rajdhani-Regular", "sans-serif"],
  "font-rajdhani-medium": ["Rajdhani-Medium", "sans-serif"],
  "font-rajdhani-semibold": ["Rajdhani-SemiBold", "sans-serif"],
  "font-rajdhani-bold": ["Rajdhani-Bold", "sans-serif"],
  "font-space-mono": ["SpaceMono-Regular", "monospace"],
  "font-space-mono-regular": ["SpaceMono-Regular", "monospace"],
  "font-space-mono-bold": ["SpaceMono-Bold", "monospace"],
};

/**
 * Metro-resolvable font assets for `expo-font`.
 *
 * Use with `Font.loadAsync(fontAssets)` in the consumer app before render.
 * `require()` is resolved relative to this file inside the package, so it
 * works regardless of where the consumer's project root is.
 */
export const fontAssets = {
  Montserrat: require("./Montserrat-Regular.ttf"),
  "Montserrat-Light": require("./Montserrat-Light.ttf"),
  "Montserrat-Regular": require("./Montserrat-Regular.ttf"),
  "Montserrat-Medium": require("./Montserrat-Medium.ttf"),
  "Montserrat-SemiBold": require("./Montserrat-SemiBold.ttf"),
  "Montserrat-Bold": require("./Montserrat-Bold.ttf"),
  Rajdhani: require("./Rajdhani-Regular.ttf"),
  "Rajdhani-Light": require("./Rajdhani-Light.ttf"),
  "Rajdhani-Regular": require("./Rajdhani-Regular.ttf"),
  "Rajdhani-Medium": require("./Rajdhani-Medium.ttf"),
  "Rajdhani-SemiBold": require("./Rajdhani-SemiBold.ttf"),
  "Rajdhani-Bold": require("./Rajdhani-Bold.ttf"),
  "SpaceMono-Regular": require("./SpaceMono-Regular.ttf"),
  "SpaceMono-Bold": require("./SpaceMono-Bold.ttf"),
};

export default fonts;
