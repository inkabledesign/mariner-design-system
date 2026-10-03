import React from 'react';
import Icon from '../Icon';
import type { StarProps } from './index.types';

/**
 * Star Component (Atom)
 *
 * A single star icon with an active (filled) and default (outline) state.
 * Source: Mariner-Library / Atoms / Atoms/Star (Figma) — 16x16, brand-primary.
 *
 * @example
 * <Star active />
 */
const Star = ({ active = false, color = 'text-brand-primary-100', className = 'w-4 h-4' }: StarProps) => (
  <Icon iconName={active ? 'ico-star' : 'ico-star-outline'} color={color} className={className} />
);

export default Star;
