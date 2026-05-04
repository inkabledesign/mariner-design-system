import React from 'react';
import ViewStyled from '../ViewStyled';
import type { WaveDecorationProps } from './index.types';
import { wavesLong, wavesShortR, wavesShortL } from '@mariner/assets';
import { SvgProps } from 'react-native-svg';
import { Platform, useColorScheme } from 'react-native';
import { getColorFromClass } from '@mariner/theme';

const WaveDecoration: React.FC<WaveDecorationProps> = ({ style, color, variant, className, themeMode: themeModeOverride }) => {
  const colorScheme = Platform.OS !== 'web' ? useColorScheme() : null;
  const detectedTheme = Platform.OS !== 'web' && colorScheme === 'dark' ? 'dark' : 'light';
  const themeMode = themeModeOverride ?? detectedTheme;
  const WaveLongComponent = wavesLong as React.FC<SvgProps>;
  const WaveShortComponent =
    variant === 'shortL' ? wavesShortL : (wavesShortR as React.FC<SvgProps>);

  // Extract color from color prop or use default, respecting current theme
  const defaultColor = 'text-material-surface-100';
  const colorClass = color || defaultColor;
  const fillColor = getColorFromClass(colorClass, themeMode);
  const containerClassName = `inline-flex items-center justify-center flex-shrink-0  ${colorClass}`;

  // Merge styles properly for web compatibility
  const containerStyle = {
    color: fillColor,
    ...(style as any),
  };
  return (
    <ViewStyled style={containerStyle} className={containerClassName + ' ' + className}>
      {variant === 'shortL' || variant === 'shortR' ? (
        <WaveShortComponent color={fillColor} preserveAspectRatio="xMidYMid meet" />
      ) : (
        <WaveLongComponent color={fillColor} preserveAspectRatio="xMidYMid meet" />
      )}
    </ViewStyled>
  );
};

export default WaveDecoration;
