export interface VideoControlsProps {
  /**
   * Whether playback is currently active — selects the play/pause icon.
   */
  isPlaying: boolean;

  /**
   * Current playback position in milliseconds.
   */
  positionMillis: number;

  /**
   * Total duration in milliseconds.
   */
  durationMillis: number;

  /**
   * Playback progress (0–100).
   */
  progress: number;

  /**
   * Play/pause handler — the overlay and the centre button both call it.
   */
  onPlayPause: () => void;

  /**
   * Fullscreen/expand handler.
   */
  onFullscreen?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
