export interface PlayPauseProps {
  /**
   * Whether media is currently playing (shows the pause glyph when true,
   * the play glyph when false).
   * @default false
   */
  isPlaying?: boolean;

  /**
   * Press handler (toggle play/pause).
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the button.
   */
  className?: string;
}
