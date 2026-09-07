import React from 'react';
import ViewStyled from '../../atoms/ViewStyled';
import Timeline from '../Timeline';
import type { TimelineScrubberProps } from './index.types';

/**
 * TimelineScrubber Component (Molecule)
 *
 * A timeline with a vertical scrubber indicator. Purely presentational —
 * the consumer owns gesture handling and passes `position` (0–1).
 * Source: Mariner-Library / Molecules / TimeScrubber/TimelineScrubber (Figma).
 *
 * @example
 * <TimelineScrubber hours={['12:00', '13:00', '14:00']} position={0.5} />
 */
const TimelineScrubber = ({
  hours,
  position = 0,
  subTicks = 5,
  className = '',
}: TimelineScrubberProps) => (
  <ViewStyled className={`bg-material-surface-0 ${className}`.trim()}>
    <Timeline hours={hours} subTicks={subTicks} />
    <ViewStyled
      className="absolute top-0 bottom-0 w-1 bg-material-surface-100"
      style={{ left: `${Math.min(Math.max(position, 0), 1) * 100}%` }}
    />
  </ViewStyled>
);

export default TimelineScrubber;
