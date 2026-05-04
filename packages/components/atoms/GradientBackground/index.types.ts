export interface LinearGradientConfig {
  /** Direction angle in degrees (0-360) */
  angle: number;
  /** Gradient stops */
  stops: Array<{
    offset: string;
    color: string;
    opacity: number;
  }>;
}

export interface RadialGradientConfig {
  /** Center X position (percentage or absolute) */
  cx: string;
  /** Center Y position (percentage or absolute) */
  cy: string;
  /** Radius X (percentage or absolute) */
  rx: string;
  /** Radius Y (percentage or absolute) */
  ry: string;
  /** Gradient stops */
  stops: Array<{
    offset: string;
    color: string;
    opacity: number;
  }>;
}

export interface GradientConfig {
  /** Linear gradient configuration */
  linear?: LinearGradientConfig;
  /** First radial gradient configuration */
  radial1?: RadialGradientConfig;
  /** Second radial gradient configuration */
  radial2?: RadialGradientConfig;
}

export interface GradientBackgroundProps {
  /**
   * Width of the gradient (default: '100%')
   */
  width?: string | number;
  
  /**
   * Height of the gradient (default: '100%')
   */
  height?: string | number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Gradient configuration (colors, positions, stops)
   */
  config?: GradientConfig;
  
  /**
   * Enable animation
   */
  animated?: boolean;
  
  /**
   * Animation duration in milliseconds (default: 3000)
   */
  animationDuration?: number;
}
