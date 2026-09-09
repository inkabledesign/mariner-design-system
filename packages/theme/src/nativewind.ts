import { colorScheme } from "nativewind";

export type NativeWindThemeMode = "light" | "dark" | "system";

/** Keep NativeWind variants aligned with an app's persisted theme preference. */
export const syncNativeWindColorScheme = (mode: NativeWindThemeMode): void => {
  colorScheme.set(mode);
};
