import React from 'react';
import PressableStyled from '../PressableStyled';
import ViewStyled from '../ViewStyled';
import Icon from '../Icon';
import type { PlayPauseProps } from './index.types';

/**
 * PlayPause Component (Atom)
 *
 * A 48px circular media play/pause button.
 * Source: Mariner-Learning / Atoms / PlayPause (Figma) — surface-0 circle, primary glyph.
 *
 * @example
 * <PlayPause isPlaying={playing} onPress={toggle} />
 */
const PlayPause = ({ isPlaying = false, onPress, className = '' }: PlayPauseProps) => (
  <PressableStyled onPress={onPress}>
    <ViewStyled
      className={`w-12 h-12 rounded-full bg-material-surface-0 items-center justify-center ${className}`.trim()}>
      <Icon
        iconName={isPlaying ? 'ico-pause' : 'ico-play'}
        color="text-brand-primary-100"
        className="w-6 h-6"
      />
    </ViewStyled>
  </PressableStyled>
);

export default PlayPause;
