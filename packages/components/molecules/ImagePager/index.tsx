import React from 'react';
import ViewStyled from '../../atoms/ViewStyled';
import PrimaryImage from '../../atoms/PrimaryImage';
import PageControl from '../../atoms/PageControl';
import type { ImagePagerProps } from './index.types';

/**
 * ImagePager Component (Molecule)
 *
 * An image pager: a PrimaryImage with a PageControl dot platter overlaid at
 * the bottom. Purely presentational — the consumer owns paging state.
 * Source: Mariner-Library / Molecules / Images/PagerView (Figma).
 *
 * @example
 * <ImagePager sources={[a, b, c]} currentIndex={1} />
 */
const ImagePager = ({
  sources,
  currentIndex = 0,
  aspectRatio = '4:3',
  className = '',
}: ImagePagerProps) => {
  const source = sources[currentIndex];

  return (
    <ViewStyled className={`relative ${className}`.trim()}>
      {source && <PrimaryImage source={source} aspectRatio={aspectRatio} />}
      <ViewStyled className="absolute bottom-sm left-0 right-0 items-center">
        <PageControl count={sources.length} selected={currentIndex} platter />
      </ViewStyled>
    </ViewStyled>
  );
};

export default ImagePager;
