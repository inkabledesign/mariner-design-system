import React from 'react';
import { View as RNView } from 'react-native';
import type { ViewStyledProps } from './index.types';

/**
 * ViewStyled - Cross-platform View component
 *
 * A wrapper around React Native's View that works consistently across
 * web and native platforms with NativeWind support.
 *
 * Usage:
 * - For flex layouts, prefer using Row or Column components
 * - Use ViewStyled for non-flex containers or when you need explicit control
 *
 * @example
 * <ViewStyled className="p-4 bg-white">
 *   <Text>Content</Text>
 * </ViewStyled>
 */
const ViewStyled = ({ children, style, className }: ViewStyledProps) => {
  return (
    <RNView style={style} className={className}>
      {children}
    </RNView>
  );
};

export default ViewStyled;
