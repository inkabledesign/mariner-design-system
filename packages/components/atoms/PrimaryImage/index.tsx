import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import type { PrimaryImageProps } from './index.types';
import ViewStyled from '../ViewStyled';

const aspectRatioClasses: Record<NonNullable<PrimaryImageProps['aspectRatio']>, string> = {
  '1:1': 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-[16/9]',
  '9:16': 'aspect-[9/16]',
  '5:3': 'aspect-[5/3]',
};

const PrimaryImage: React.FC<PrimaryImageProps> = ({
  source,
  aspectRatio = '16:9',
  showOverlay = false,
  className = '',
  ...props
}) => {
  const aspectRatioClass = aspectRatioClasses[aspectRatio];

  return (
    <ViewStyled
      className={`relative overflow-hidden rounded-xs w-full ${aspectRatioClass} ${className}`}>
      <ExpoImage
        source={source}
        contentFit="cover"
        transition={300}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
        {...props}
      />
      {showOverlay && (
        <ViewStyled className="absolute inset-0 bg-gradient-to-t from-brand-primary-90/80 to-transparent" />
      )}
    </ViewStyled>
  );
};

export default PrimaryImage;
