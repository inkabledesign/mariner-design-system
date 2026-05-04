import React from 'react';
import ViewStyled from '../../atoms/ViewStyled';
import Row from '../../atoms/Row';
import type { SoundShapeProps, SoundShapesProps } from './index.types';

/**
 * SoundShape Component
 *
 * Individual sound wave bar with different duration variants
 */
const SoundShape: React.FC<SoundShapeProps> = ({ duration = 'short' }) => {
  const durationMap = {
    short: 'w-3',
    long: 'w-12',
  };

  return (
    <ViewStyled
      className={`${'bg-brand-primary-100 flex-col items-start justify-start'} flex relative rounded-xs`}>
      <ViewStyled className={`bg-brand-primary-100 rounded-xs h-6 ${durationMap[duration]}`} />
    </ViewStyled>
  );
};

/**
 * SoundShapes Component
 *
 * Sound wave visualization component from Figma design (Node ID: 102-5441)
 * Displays animated sound bars with configurable visibility
 *
 * Features:
 * - 5 individual sound bars with different heights
 * - Configurable visibility for each bar
 * - Brand accent color styling
 * - Rounded corners with design system tokens
 *
 * @example
 * // All bars visible (default)
 * <SoundShapes />
 *
 * @example
 * // Custom bar visibility
 * <SoundShapes
 *   signal={{
 *     name: 'sound1',
 *     signalSounds: ['short', 'short', 'long', 'short', 'long']
 *   }}
 * />
 */
const SoundShapes: React.FC<SoundShapesProps> = ({ signal }) => {
  return (
    <Row
      className={`${'flex-1 w-full px-md gap-sm  justify-start items-center rounded-md'}`.trim()}>
      {signal?.signalSounds?.map((sound, index) => (
        <SoundShape key={index} duration={sound} />
      ))}
    </Row>
  );
};

export default SoundShapes;
