import type { StyleProp, ViewStyle } from "react-native";
import type { IconName } from "@/types/icons.type";

export type AvatarType = "default" | "icon" | "image";

export interface AvatarProps {
  /** Content displayed inside the avatar. Inferred from imageUrl/iconName when omitted. */
  type?: AvatarType;

  /** Avatar diameter. The Figma default is 72px. */
  size?: number;

  /** Remote image URL used by the image variant. */
  imageUrl?: string;

  /** Glyph used by the icon variant. Defaults to ico-sailor. */
  iconName?: IconName;

  /** Shows the add badge from the Figma component. */
  hasAddButton?: boolean;

  /** Makes the add badge interactive when supplied. */
  onEditPress?: () => void;

  /** Accessible name for the interactive add badge. */
  addButtonAccessibilityLabel?: string;

  style?: StyleProp<ViewStyle>;
  className?: string;
}
