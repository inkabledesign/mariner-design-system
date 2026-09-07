import React from 'react';
import ViewStyled from '../ViewStyled';
import type { GrabberProps } from './index.types';

/**
 * Grabber Component (Atom)
 *
 * The drag handle shown at the top of bottom sheets / top sheets.
 * Source: Mariner-Library / Atoms / Grabber (Figma) — 36x5, fully rounded.
 *
 * @example
 * <Grabber mode="light" />
 */
const Grabber = ({ mode = 'light', className = '' }: GrabberProps) => {
  const fill =
    mode === 'light'
      ? 'bg-material-surface-80/50'
      : 'bg-material-surface-20/50';

  return (
    <ViewStyled
      className={`w-9 h-[5px] rounded-full self-center ${fill} ${className}`.trim()}
    />
  );
};

export default Grabber;
