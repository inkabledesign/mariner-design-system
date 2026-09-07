import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import ViewStyled from '../../atoms/ViewStyled';
import Icon from '../../atoms/Icon';
import PressableStyled from '../../atoms/PressableStyled';
import type { CardImageSelectProps } from './index.types';

/**
 * CardImageSelect Component (Molecule)
 *
 * A square selectable image thumbnail with a rounded remove (close) badge in
 * the top-right corner.
 * Source: Mariner-Library / Molecules / Cards/CardImageSelect (Figma).
 *
 * @example
 * <CardImageSelect source={{ uri }} onRemove={fn} />
 */
const CardImageSelect = ({
  source,
  onRemove,
  accessibilityLabel = 'Selected image',
  className = '',
}: CardImageSelectProps) => (
  <ViewStyled className={`w-24 h-24 rounded-md overflow-hidden bg-material-surface-0 ${className}`.trim()}>
    <ExpoImage
      source={source}
      contentFit="cover"
      accessibilityLabel={accessibilityLabel}
      style={{ width: '100%', height: '100%' }}
    />
    {onRemove && (
      <ViewStyled className="absolute top-xxs right-xxs">
        <PressableStyled onPress={onRemove} accessibilityLabel="Remove image">
          <ViewStyled className="w-6 h-6 rounded-full bg-material-surface-0 items-center justify-center">
            <Icon iconName="ico-close" color="text-system-error-100" className="w-3 h-3" />
          </ViewStyled>
        </PressableStyled>
      </ViewStyled>
    )}
  </ViewStyled>
);

export default CardImageSelect;
