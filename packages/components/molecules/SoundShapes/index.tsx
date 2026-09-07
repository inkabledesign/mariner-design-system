import React from 'react';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import type { SoundShapeDuration, SoundShapesProps } from './index.types';

const durationMap: Record<SoundShapeDuration, string> = {
  short: 'w-3',
  long: 'w-12',
};

/**
 * SoundShapes Component (Molecule)
 *
 * A row of sound-signal bars (short/long) used to visualise sound signals.
 *
 * @example
 * <SoundShapes signal={{ name: 'sound1', signalSounds: ['short', 'long', 'short'] }} />
 */
const SoundShapes = ({ signal, className = '' }: SoundShapesProps) => (
  <Row className={`w-full px-md gap-sm justify-start items-center rounded-md ${className}`.trim()}>
    {signal?.signalSounds?.map((sound, index) => (
      <ViewStyled
        key={index}
        className={`bg-brand-primary-100 rounded-xs h-6 ${durationMap[sound]}`}
      />
    ))}
  </Row>
);

export default SoundShapes;
