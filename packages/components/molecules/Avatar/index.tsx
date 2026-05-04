import React from 'react';
import { Image } from 'react-native';
import ViewStyled from '../../atoms/ViewStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { AvatarProps } from './index.types';

const Avatar: React.FC<AvatarProps> = ({
  size = 72,
  imageUrl,
  onEditPress,
  style,
  className,
  iconName = 'ico-sailor', // Default to sailor icon
}) => {
  // Calculate inner dimensions (accounting for border)
  const borderWidth = 1;
  const innerSize = size * 0.889; // 88.9% of total size (matches Figma inset of 5.556%)
  const iconSize = size * 0.611; // 61.1% for the sailor icon
  const editButtonSize = size * 0.333; // 33.3% for edit button
  const editButtonRadius = editButtonSize / 2;

  return (
    <ViewStyled
      style={[{ width: size, height: size }, style]}
      className={`relative,${className || ''}`}>
      {/* Border container */}
      <ViewStyled className="px-[2px] py-[2px] flex-1 rounded-full border-[1px] border-accent-100">
        {/* Inner wrapper with image/icon */}
        <ViewStyled className="items-center justify-center flex-1 rounded-full border-[2px] border-primary-100 bg-material-surface-0">
          {imageUrl ? (
            <Image
              source={{ uri: imageUrl }}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          ) : (
            <ViewStyled className="items-center justify-center w-full h-full flex-1">
              <Icon
                iconName={iconName}
                color="text-brand-primary-100"
                style={{ width: iconSize, height: iconSize }}
              />
            </ViewStyled>
          )}
        </ViewStyled>
      </ViewStyled>

      {/* Edit button */}
      {onEditPress && (
        <PressableStyled
          onPress={onEditPress}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: editButtonSize,
            height: editButtonSize,
          }}
          className="bg-brand-primary-100 border-[1px] radius-full border-material-surface-0 items-center justify-center overflow-hidden">
          <Icon
            iconName="ico-plus"
            color="text-material-surface-0"
            style={{ width: editButtonSize * 0.444, height: editButtonSize * 0.444 }}
          />
        </PressableStyled>
      )}
    </ViewStyled>
  );
};

export default Avatar;
