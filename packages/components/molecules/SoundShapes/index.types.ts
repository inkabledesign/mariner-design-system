export type SoundShapeDuration = 'short' | 'long';

export interface SoundSignal {
  /**
   * Signal name.
   */
  name?: string;

  /**
   * Ordered sound bars — 'short' renders a narrow bar, 'long' a wide bar.
   */
  signalSounds?: SoundShapeDuration[];
}

export interface SoundShapesProps {
  /**
   * Sound signal to visualise.
   */
  signal?: SoundSignal;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
