import React from 'react';
import Column from '../Column';
import Row from '../Row';
import ProgressBar from '../ProgressBar';
import TextStyled from '../TextStyled';
import type { MediaProgressProps } from './index.types';

/**
 * MediaProgress Component (Atom)
 *
 * A media scrubber track with elapsed / total time labels.
 * Source: Mariner-Learning / Atoms / MediaProgress (Figma) — accent progress bar.
 *
 * @example
 * <MediaProgress progress={60} currentTime="00:16" totalTime="03:42" />
 */
const MediaProgress = ({
  progress,
  currentTime,
  totalTime,
  labelClassName = 'text-material-surface-0',
  className = '',
}: MediaProgressProps) => (
  <Column className={`w-full gap-xs ${className}`.trim()}>
    <ProgressBar progress={progress} style="accent" height={4} />
    <Row className="justify-between">
      <TextStyled textStyle="footnote" className={labelClassName}>
        {currentTime}
      </TextStyled>
      <TextStyled textStyle="footnote" className={labelClassName}>
        {totalTime}
      </TextStyled>
    </Row>
  </Column>
);

export default MediaProgress;
