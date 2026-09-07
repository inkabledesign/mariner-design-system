import React from 'react';
import Row from '../../atoms/Row';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import TimeLineHour from '../TimeLineHour';
import type { TimelineProps } from './index.types';

/**
 * Timeline Component (Molecule)
 *
 * A horizontal time rail: a row of hour tick groups with time labels beneath.
 * Purely presentational — the consumer owns the scrubbing gesture/state.
 * Source: Mariner-Library / Molecules / TimeScrubber/Timeline (Figma).
 *
 * @example
 * <Timeline hours={['12:00', '13:00', '14:00']} />
 */
const Timeline = ({ hours, subTicks = 5, className = '' }: TimelineProps) => (
  <Column className={`gap-xxs ${className}`.trim()}>
    <Row className="items-end justify-between">
      {hours.map(hour => (
        <TimeLineHour key={hour} subTicks={subTicks} />
      ))}
    </Row>
    <Row className="justify-between">
      {hours.map(hour => (
        <Column key={hour} className="items-center">
          <TextStyled textStyle="body" className="text-material-surface-80">
            {hour}
          </TextStyled>
          <ViewStyled className="w-px h-1 bg-material-surface-80" />
        </Column>
      ))}
    </Row>
  </Column>
);

export default Timeline;
