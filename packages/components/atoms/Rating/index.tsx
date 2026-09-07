import React from 'react';
import Row from '../Row';
import Star from '../Star';
import type { RatingProps } from './index.types';

/**
 * Rating Component (Atom)
 *
 * A horizontal row of stars representing a rating value.
 * Source: Mariner-Library / Atoms / Rating (Figma) — row of star icons.
 *
 * @example
 * <Rating value={3} max={5} />
 */
const Rating = ({
  value,
  max = 5,
  color = 'text-brand-primary-100',
  starClassName = 'w-4 h-4',
  className = '',
}: RatingProps) => {
  const filled = Math.max(0, Math.min(max, Math.round(value)));

  return (
    <Row className={`items-center gap-sm ${className}`.trim()}>
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} active={i < filled} color={color} className={starClassName} />
      ))}
    </Row>
  );
};

export default Rating;
