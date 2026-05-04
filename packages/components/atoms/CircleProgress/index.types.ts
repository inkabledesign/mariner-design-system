export interface CircleProgressProps {
  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';
  /** Progress value from 0 to 100 */
  progress?: number;
  /** Size of the circle in pixels */
  size?: number;
  /** Stroke width in pixels */
  strokeWidth?: number;
  /** Color for the progress bar (Tailwind color class) */
  progressColor?: string;
  /** Color for the rail/background (Tailwind color class) */
  railColor?: string;
  /** Additional className for the container */
  className?: string;
  /** Child content to render in the center */
  children?: React.ReactNode;
}
