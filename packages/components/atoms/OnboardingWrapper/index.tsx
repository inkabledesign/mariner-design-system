import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import ViewStyled from '../ViewStyled';
import type { OnboardingWrapperProps } from './index.types';

/**
 * OnboardingWrapper Component (Atom)
 *
 * A full-screen primary background with brand texture graphics pinned to all
 * four corners. Texture images come via props — the library does not bundle
 * brand PNGs.
 * Source: mariner-edu atoms/OnbordingWrapper (renamed: typo fix; textures →
 * props).
 */
const OnboardingWrapper = ({
  children,
  textureRightSource,
  textureLeftSource,
}: OnboardingWrapperProps) => {
  const { width } = useWindowDimensions();
  const textureStyle = {
    width: width * 0.5,
    aspectRatio: 1,
    position: 'absolute' as const,
    zIndex: -1,
  };

  return (
    <ViewStyled className="flex-1 relative bg-brand-primary-100 z-0">
      {textureRightSource && (
        <ExpoImage
          source={textureRightSource}
          style={{ ...textureStyle, top: 0, right: 0 }}
          transition={100}
          contentFit="contain"
          contentPosition="center"
          placeholder="blur"
        />
      )}
      {textureLeftSource && (
        <ExpoImage
          source={textureLeftSource}
          style={{ ...textureStyle, top: 0, left: 0 }}
          transition={100}
          contentFit="contain"
          contentPosition="center"
          placeholder="blur"
        />
      )}
      {children}
      {textureRightSource && (
        <ExpoImage
          source={textureRightSource}
          style={{ ...textureStyle, bottom: 0, left: 0, transform: [{ rotate: '180deg' }] }}
          transition={100}
          contentFit="contain"
          contentPosition="center"
          placeholder="blur"
        />
      )}
      {textureLeftSource && (
        <ExpoImage
          source={textureLeftSource}
          style={{ ...textureStyle, bottom: 0, right: 0, transform: [{ rotate: '180deg' }] }}
          transition={100}
          contentFit="contain"
          contentPosition="center"
          placeholder="blur"
        />
      )}
    </ViewStyled>
  );
};

export default OnboardingWrapper;
