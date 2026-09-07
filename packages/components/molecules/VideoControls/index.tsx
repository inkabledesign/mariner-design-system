import React from 'react';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import PressableStyled from '../../atoms/PressableStyled';
import TextStyled from '../../atoms/TextStyled';
import ProgressBar from '../../atoms/ProgressBar';
import Icon from '../../atoms/Icon';
import type { VideoControlsProps } from './index.types';

const formatTime = (millis: number) => {
  const totalSeconds = millis / 1000;
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor(totalSeconds / 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * VideoControls Component (Molecule)
 *
 * An absolutely-positioned overlay for a video surface: tap-to-toggle
 * play/pause, a centred play/pause button, an optional fullscreen button,
 * progress bar, and elapsed/total times. No playback logic lives here — the
 * consumer owns the player and passes state/handlers via props.
 * Source: mariner-edu molecules/VideoControls (simplified: expo-router and
 * dead props removed → onFullscreen callback).
 *
 * @example
 * <VideoControls isPlaying={playing} positionMillis={12000} durationMillis={60000} progress={20} onPlayPause={toggle} />
 */
const VideoControls = ({
  isPlaying,
  positionMillis,
  durationMillis,
  progress,
  onPlayPause,
  onFullscreen,
  className = '',
}: VideoControlsProps) => (
  <ViewStyled className={`absolute inset-0 ${className}`.trim()}>
    <PressableStyled onPress={onPlayPause} className="absolute w-full h-full top-0 right-0 p-md" />
    {onFullscreen && (
      <Row className="absolute top-0 right-0 p-md">
        <PressableStyled
          className="p-sm border border-brand-accent-100 rounded-full bg-solid-white/60 items-center justify-center"
          onPress={onFullscreen}
          accessibilityLabel="Toggle fullscreen"
        >
          <Icon iconName="ico-screen-up" color="text-brand-primary-100" />
        </PressableStyled>
      </Row>
    )}
    <ViewStyled className="flex-1 items-center justify-center">
      <PressableStyled
        onPress={onPlayPause}
        className="size-16 bg-material-surface-0/80 border border-brand-accent-100 rounded-full items-center justify-center"
      >
        <Icon
          iconName={isPlaying ? 'ico-pause' : 'ico-play'}
          color="text-brand-primary-100"
          className="w-8 h-8"
        />
      </PressableStyled>
    </ViewStyled>
    <ViewStyled className="bg-solid-black/60 px-md py-sm">
      <Column className="gap-xs">
        <ProgressBar progress={progress} style="accent" height={4} />
        <Row className="justify-between">
          <TextStyled textStyle="label" className="text-solid-white">
            {formatTime(positionMillis)}
          </TextStyled>
          <TextStyled textStyle="label" className="text-solid-white">
            {formatTime(durationMillis)}
          </TextStyled>
        </Row>
      </Column>
    </ViewStyled>
  </ViewStyled>
);

export default VideoControls;
