import React from "react";
import { Image, type ViewStyle } from "react-native";
import Icon from "../../atoms/Icon";
import PressableStyled from "../../atoms/PressableStyled";
import ViewStyled from "../../atoms/ViewStyled";
import type { AvatarProps, AvatarType } from "./index.types";

const AVATAR_SIZE = 72;

const getAvatarType = (
  type: AvatarType | undefined,
  imageUrl: string | undefined,
  iconName: AvatarProps["iconName"],
): AvatarType => {
  if (type) return type;
  if (imageUrl) return "image";
  if (iconName) return "icon";
  return "default";
};

/**
 * Circular profile avatar with default, icon, and image variants.
 *
 * The layered rings and add badge follow the 72px Figma component and scale
 * proportionally when a custom size is supplied.
 */
const Avatar = ({
  type,
  size = AVATAR_SIZE,
  imageUrl,
  iconName,
  hasAddButton = true,
  onEditPress,
  addButtonAccessibilityLabel = "Add profile image",
  style,
  className = "",
}: AvatarProps) => {
  const scale = size / AVATAR_SIZE;
  const resolvedType = getAvatarType(type, imageUrl, iconName);
  const contentType =
    resolvedType === "image" && !imageUrl ? "default" : resolvedType;

  const accentRingInset = 1 * scale;
  const accentRingSize = size - accentRingInset * 2;
  const primaryRingInset = 3 * scale;
  const primaryRingSize = size - primaryRingInset * 2;
  const imageInset = 5 * scale;
  const imageSize = size - imageInset * 2;
  const defaultIconSize = 66 * scale;
  const customIconSize = 44 * scale;
  const addButtonSize = 24 * scale;
  const addButtonPadding = 2 * scale;

  const addButtonStyle: ViewStyle = {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: addButtonSize,
    height: addButtonSize,
    padding: addButtonPadding,
    borderRadius: addButtonSize / 2,
  };

  const addButtonContent = (
    <ViewStyled className="h-full w-full items-center justify-center rounded-full bg-brand-primary-100">
      <Icon
        iconName="ico-plus"
        color="text-material-surface-0"
        style={{ width: addButtonSize, height: addButtonSize }}
      />
    </ViewStyled>
  );

  return (
    <ViewStyled
      style={[{ width: size, height: size, borderRadius: size / 2 }, style]}
      className={`relative items-center justify-center bg-material-surface-0 ${className}`.trim()}
    >
      <ViewStyled
        className="absolute rounded-full border border-brand-accent-100"
        style={{
          top: accentRingInset,
          left: accentRingInset,
          width: accentRingSize,
          height: accentRingSize,
          borderRadius: accentRingSize / 2,
          borderWidth: 1 * scale,
        }}
      />

      <ViewStyled
        className="absolute rounded-full border-2 border-brand-primary-100"
        style={{
          top: primaryRingInset,
          left: primaryRingInset,
          width: primaryRingSize,
          height: primaryRingSize,
          borderRadius: primaryRingSize / 2,
          borderWidth: 2 * scale,
        }}
      />

      {contentType === "image" && imageUrl ? (
        <ViewStyled
          className="absolute overflow-hidden rounded-full"
          style={{
            top: imageInset,
            left: imageInset,
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
          }}
        >
          <Image
            source={{ uri: imageUrl }}
            style={{ width: imageSize, height: imageSize }}
            resizeMode="cover"
          />
        </ViewStyled>
      ) : (
        <Icon
          iconName={
            contentType === "default"
              ? "ico-user-round"
              : iconName || "ico-sailor"
          }
          color="text-brand-primary-100"
          style={{
            width: contentType === "default" ? defaultIconSize : customIconSize,
            height:
              contentType === "default" ? defaultIconSize : customIconSize,
          }}
        />
      )}

      {hasAddButton &&
        (onEditPress ? (
          <PressableStyled
            accessibilityLabel={addButtonAccessibilityLabel}
            accessibilityRole="button"
            hitSlop={10}
            onPress={onEditPress}
            className="absolute items-center justify-center overflow-hidden rounded-full border-0 bg-material-surface-0 p-0"
            style={addButtonStyle}
          >
            {addButtonContent}
          </PressableStyled>
        ) : (
          <ViewStyled
            className="absolute items-center justify-center overflow-hidden rounded-full bg-material-surface-0"
            style={addButtonStyle}
          >
            {addButtonContent}
          </ViewStyled>
        ))}
    </ViewStyled>
  );
};

export default Avatar;
