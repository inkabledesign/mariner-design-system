import type { IconName } from '../../types/icons.type';

export type ModuleStateType = 'failed' | 'retake' | 'completed';
export type ModuleType = 'quiz' | 'lesson' | 'bundle';

export interface CardModuleProps {
  /**
   * Card title.
   */
  title: string;

  /**
   * Optional subtitle.
   */
  subtitle?: string;

  /**
   * Caption text (e.g. "Completed").
   */
  caption?: string;

  /**
   * Caption icon.
   */
  captionIcon?: IconName;

  /**
   * Footnote text (e.g. "30 min").
   */
  footnote?: string;

  /**
   * Footnote icon.
   */
  footnoteIcon?: IconName;

  /**
   * Progress percentage (0–100). Forced to 100 when state is 'completed'.
   */
  progress?: number;

  /**
   * Card type — drives the graphic band colour.
   */
  type?: ModuleType;

  /**
   * Card state — takes colour priority over type.
   */
  state?: ModuleStateType;

  /**
   * Decorative image shown inside the graphic band.
   */
  imageUrl?: string;

  /**
   * Show an "Update" badge (top-left).
   */
  hasUpdate?: boolean;

  /**
   * Show a "Downloaded" badge (top-left) when no update is pending.
   */
  isDownloaded?: boolean;

  /**
   * Press handler.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
