import type { ReactNode } from 'react';

export interface AnimatedCircleProgressProps {
  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';
  /** Progress value (0-100) */
  progress?: number;
  /** Size of the circle in pixels */
  size?: number;
  /** Width of the stroke in pixels */
  strokeWidth?: number;
  /** Color of the progress bar (hex string) */
  progressColor?: string;
  /** Color of the rail/background (hex string) */
  railColor?: string;
  /** Animation duration in milliseconds */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
  /** Content to display in the center of the circle */
  children?: ReactNode;
}
