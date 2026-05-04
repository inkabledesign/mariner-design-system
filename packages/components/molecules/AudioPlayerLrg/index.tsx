import React from 'react';

import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import Button from '../Button';
import SoundShapes from '../SoundShapes';
import { AudioPlayerLrgProps } from './index.types';
import Divider from '../../atoms/Divider';

const formatTime = (millis: number) => {
  const totalSeconds = millis / 1000;
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor(totalSeconds / 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * AudioPlayerLrg Component
 *
 * Large audio player component with signal visualization
 * Purely presentational - accepts playback state as props
 *
 * @example
 * <AudioPlayerLrg
 *   title="Distress Signal"
 *   subtitle="Emergency communication"
 *   isPlaying={isPlaying}
 *   positionMillis={currentPosition}
 *   durationMillis={totalDuration}
 *   progress={playbackProgress}
 *   onPlayPause={() => togglePlayback()}
 *   signal={{ name: 'Distress', signalSounds: ['long', 'short', 'short'] }}
 * />
 */
const AudioPlayer: React.FC<AudioPlayerLrgProps> = ({
  title,
  subtitle,
  isPlaying,
  positionMillis,
  durationMillis,
  progress,
  onPlayPause,
  className,
  signal,
}) => {

  // const playAuthenticMaritimeSequence = async (sequenceStrings: string[]) => {
  //   const sequence = sequenceStrings.map(Number);
  //   let startTime = audioCtx.currentTime + 0.1;

  //   sequence.forEach(duration => {
  //     // Maritime foghorn: low-frequency sine wave for maximum penetration
  //     const oscillator = audioCtx.createOscillator();
  //     const gainNode = audioCtx.createGain();

  //     // Standard maritime foghorn frequency (75-200Hz range)
  //     // Using 130Hz - slightly higher for better audibility while staying deep
  //     oscillator.type = 'sine';
  //     oscillator.frequency.value = 130; // Within maritime standard range

  //     // Connect oscillator to gain to output
  //     oscillator.connect(gainNode);
  //     gainNode.connect(audioCtx.destination);

  //     // Maritime envelope: gradual attack, steady sustain, gradual release
  //     gainNode.gain.setValueAtTime(0, startTime);
  //     gainNode.gain.linearRampToValueAtTime(0.7, startTime + 0.2); // Gradual attack
  //     gainNode.gain.setValueAtTime(0.7, startTime + duration - 0.2); // Steady sustain
  //     gainNode.gain.linearRampToValueAtTime(0, startTime + duration); // Gradual release

  //     // Start and stop the oscillator
  //     oscillator.start(startTime);
  //     oscillator.stop(startTime + duration);

  //     // Standard maritime timing: 1.0 second silence between blasts
  //     startTime += duration + 1.0;
  //   });
  // };

  // Usage:
  // playFoghornSequence(["short", "long", "short"]);

  return (
    <Column
      className={`bg-material-surface-0 border border-brand-accent-100 gap-md px-md py-lg items-center justify-between ${signal ? 'rounded-md' : 'roundedfull'}`}>
      <Row className="items-center justify-between">
        <Column className="flex-1 px-md gap-xs ">
          <TextStyled
            textStyle="heading6"
            colorCategory="brand"
            colorName="primary"
            colorVariant="100">
            {title}
          </TextStyled>
          <TextStyled
            textStyle="body"
            colorCategory="material"
            colorName="background"
            colorVariant="100">
            {subtitle}
          </TextStyled>
        </Column>
        <Button
          variant="secondary"
          onPress={onPlayPause}
          iconName={isPlaying ? 'ico-pause' : 'ico-play'}
          iconPosition="right"
        />
      </Row>
      <Divider type="horizontal" />
      {signal && <SoundShapes signal={signal} />}
    </Column>
  );
};

export default AudioPlayer;
