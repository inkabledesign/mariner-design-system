import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import Row from '../Row';
import type { HeaderBackgroundProps } from './index.types';

/**
 * HeaderBackground Component (Atom)
 *
 * Backdrop for transparent headers: brand texture images pinned to the left
 * and right edges, spread apart with justify-between. Texture images come via
 * props — the library does not bundle brand PNGs; the consumer picks the
 * light/dark variant for the current theme.
 * Source: mariner-tides atoms/HeaderBackground (textures → props).
 *
 * @example
 * <HeaderBackground
 *   textureLeftSource={brandTextureLightLeft}
 *   textureRightSource={brandTextureLightRight}
 * />
 */
const HeaderBackground = ({
  textureLeftSource,
  textureRightSource,
  size = 124,
  className = '',
}: HeaderBackgroundProps) => {
  return (
    <Row className={`absolute top-0 left-0 right-0 w-full justify-between ${className}`.trim()}>
      {textureLeftSource && (
        <ExpoImage
          source={textureLeftSource}
          style={{ width: size, aspectRatio: 1 }}
          contentFit="cover"
        />
      )}
      {textureRightSource && (
        <ExpoImage
          source={textureRightSource}
          style={{ width: size, aspectRatio: 1 }}
          contentFit="cover"
        />
      )}
    </Row>
  );
};

export default HeaderBackground;
