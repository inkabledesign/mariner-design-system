export type GrabberMode = 'light' | 'dark' | 'darkElevated';

export interface GrabberProps {
  /**
   * Visual mode, matching Figma's Light / Dark / Dark Elevated variants.
   * @default 'light'
   */
  mode?: GrabberMode;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
