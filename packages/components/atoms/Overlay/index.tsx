import React from 'react';
import ViewStyled from '../ViewStyled';
import type { OverlayProps } from './index.types';

/**
 * Overlay Component (Atom)
 *
 * A full-bleed scrim used behind dialogs and modals.
 * Source: Mariner-Library / Atoms / Overlay (Figma) — 50% black, optional blur.
 *
 * Note: the Figma 'blur' variant uses a background blur. The design system does
 * not bundle a blur view; consumers should place a blur view behind this scrim
 * when using the 'blur' variant.
 *
 * @example
 * <Overlay variant="50%" />
 */
const Overlay = ({ variant = '50%', children, className = '' }: OverlayProps) => (
  <ViewStyled
    className={`absolute inset-0 items-center justify-center bg-solid-black/50 ${className}`.trim()}>
    {children}
  </ViewStyled>
);

export default Overlay;
