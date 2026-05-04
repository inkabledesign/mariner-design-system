import React from 'react';

import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Button from '../Button';
import ProgressBar from '../../atoms/ProgressBar';
import type { AudioPlayerSmlProps } from './index.types';

const formatTime = (millis: number) => {
  const totalSeconds = millis / 1000;
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor(totalSeconds / 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * AudioPlayerSml Component
 *
 * Small audio player component matching Figma design (Node ID: 627:57907)
 * Purely presentational - accepts playback state as props
 *
 * @example
 * <AudioPlayerSml
 *   title="Introduction"
 *   isPlaying={isPlaying}
 *   positionMillis={currentPosition}
 *   durationMillis={totalDuration}
 *   progress={playbackProgress}
 *   onPlayPause={() => togglePlayback()}
 * />
 */
const AudioPlayerSml: React.FC<AudioPlayerSmlProps> = ({
  title,
  isPlaying,
  positionMillis,
  durationMillis,
  progress,
  onPlayPause,
  className,
}) => {

  return (
    <Row
      className={`bg-material-surface-0 border border-brand-accent-100 rounded-full px-md py-sm items-center justify-between ${className}`}>
      <Column className="flex-1 px-md gap-xs ">
        <TextStyled
          textStyle="heading6"
          colorCategory="brand"
          colorName="primary"
          colorVariant="100">
          {title}
        </TextStyled>
        <Column className="gap-xxs">
          <ProgressBar progress={progress} style={'accent'} height={2} />
          <Row className="justify-between">
            <TextStyled
              textStyle="label"
              colorCategory="material"
              colorName="surface"
              colorVariant="100">
              {formatTime(positionMillis)}
            </TextStyled>
            <TextStyled
              textStyle="label"
              colorCategory="material"
              colorName="surface"
              colorVariant="100">
              {formatTime(durationMillis)}
            </TextStyled>
          </Row>
        </Column>
      </Column>
      <Button
        variant="secondary"
        onPress={onPlayPause}
        iconName={isPlaying ? 'ico-pause' : 'ico-play'}
        iconPosition="right"
      />
    </Row>
  );
};

export default AudioPlayerSml;
