import React from 'react';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import type { TimeLineHourProps } from './index.types';

/**
 * TimeLineHour Component (Molecule)
 *
 * A group of vertical tick marks for one hour segment of the time scrubber:
 * shorter hour ticks with a taller minute tick at the segment boundary.
 * Source: Mariner-Library / Molecules / TimeScrubber/TimeLineHour (Figma).
 */
const TimeLineHour = ({ subTicks = 5, className = '' }: TimeLineHourProps) => (
  <Row className={`items-end gap-xxs ${className}`.trim()}>
    {Array.from({ length: subTicks }).map((_, index) => (
      <ViewStyled key={index} className="w-0.5 h-8 bg-material-surface-60" />
    ))}
    <ViewStyled className="w-1 h-10 bg-material-surface-60" />
  </Row>
);

export default TimeLineHour;
