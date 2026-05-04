export interface AudioPlayerLrgProps {
  /**
   * The title of the audio track.
   */
  title: string;

  /**
   * Optional subtitle for additional context.
   */
  subtitle?: string;

  /**
   * Whether the audio is currently playing.
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
   * Playback progress percentage (0-100).
   */
  progress: number;

  /**
   * Callback when play/pause button is pressed.
   */
  onPlayPause: () => void;

  /**
   * Optional class name for custom styling.
   */
  className?: string;

  /**
   * Signal data to display
   */
  signal?: {
    name: string;
    signalSounds: ('short' | 'long')[];
  };
}
