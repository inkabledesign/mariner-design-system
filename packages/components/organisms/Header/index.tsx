import React from 'react';
import { Image as ExpoImage } from 'expo-image';
import ViewStyled from '../../atoms/ViewStyled';
import Row from '../../atoms/Row';
import HeaderTopBar from '../../molecules/HeaderTopBar';
import type { HeaderProps } from './index.types';

/**
 * Header Component (Organism)
 *
 * A screen header with decorative brand graphics behind a HeaderTopBar.
 * StatusBar area is intentionally omitted — handled by the app layout.
 * Source: mariner-edu organisms/Header (simplified to presentational).
 *
 * @example
 * <Header variant="default" title="Screen Title" onLeftPress={goBack} />
 */
const Header = ({
  variant = 'default',
  background = 'default',
  orientation = 'portrait',
  graphicSize = 124,
  graphicLeftSource,
  graphicRightSource,
  style,
  ...headerTopBarProps
}: HeaderProps) => {
  const isLandscape = orientation === 'landscape';
  const headerHeight = isLandscape ? 80 : 120;

  return (
    <ViewStyled
      style={[style, { height: headerHeight }]}
      className={`relative w-full ${background === 'default' ? 'bg-material-surface-0' : 'bg-transparent'}`}
    >
      {/* Brand Graphics */}
      <Row className="absolute top-0 left-0 right-0 justify-between w-full opacity-80">
        {graphicLeftSource && (
          <ExpoImage
            source={graphicLeftSource}
            style={{ width: graphicSize, aspectRatio: 1 }}
            contentFit="cover"
          />
        )}
        <ViewStyled className="flex-1" />
        {graphicRightSource && (
          <ExpoImage
            source={graphicRightSource}
            style={{ width: graphicSize, aspectRatio: 1 }}
            contentFit="cover"
          />
        )}
      </Row>

      {/* Header Top Bar */}
      <ViewStyled className="absolute top-0 left-0 right-0">
        <HeaderTopBar variant={variant === 'search' ? 'search' : 'default'} {...headerTopBarProps} />
      </ViewStyled>
    </ViewStyled>
  );
};

export default Header;
