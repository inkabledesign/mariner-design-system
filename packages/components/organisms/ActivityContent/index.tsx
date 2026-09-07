import React from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import PrimaryImage from '../../atoms/PrimaryImage';
import ImagePager from '../../molecules/ImagePager';
import type { ActivityContentProps } from './index.types';

/**
 * ActivityContent Component (Organism)
 *
 * Activity frame: an optional media asset (image or carousel) rendered above
 * the activity body supplied via `children`. Presentational — activity-type
 * routing and scoring live in the consumer.
 * Source: mariner-edu organisms/ActivityContent (simplified: Sanity type
 * routing → asset + children slots).
 *
 * @example
 * <ActivityContent asset={{ type: 'image', source, caption: 'Signals' }}>
 *   <QuizView ... />
 * </ActivityContent>
 */
const ActivityContent = ({ asset, children, emptyMessage, className = '' }: ActivityContentProps) => (
  <Column className={`gap-md ${className}`.trim()}>
    {asset?.type === 'image' && (
      <Column className="mb-md rounded-md overflow-hidden">
        <PrimaryImage source={asset.source} aspectRatio="4:3" />
        {asset.caption && (
          <TextStyled textStyle="caption" className="mt-xs text-center italic">
            {asset.caption}
          </TextStyled>
        )}
      </Column>
    )}
    {asset?.type === 'carousel' && (
      <Column className="mb-md rounded-md overflow-hidden">
        <ImagePager sources={asset.sources} currentIndex={asset.currentIndex ?? 0} />
      </Column>
    )}
    {children ?? (
      <TextStyled textStyle="body" className="text-system-error-100 p-md">
        {emptyMessage ?? 'No activity data available'}
      </TextStyled>
    )}
  </Column>
);

export default ActivityContent;
