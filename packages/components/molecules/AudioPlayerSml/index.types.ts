export interface AudioPlayerSmlProps {
  /**
   * The title of the audio track.
   */
  title: string;

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
}
