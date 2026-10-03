import type { ReactNode } from 'react';
import type { BadgeVariant } from '../Badge/index.types';

export interface ProgressDonutCardProps {
  /**
   * Card title (e.g. "Lessons", "Activities").
   */
  title: string;

  /**
   * Completion percentage (0–100).
   */
  percentage: number;

  /**
   * Items completed/passed.
   */
  completed: number;

  /**
   * Total items.
   */
  total: number;

  /**
   * Helper text under the title.
   */
  subtitle?: string;

  /**
   * Card type — selects the icon and the completed-column label.
   * @default 'lessons'
   */
  type?: 'lessons' | 'activities';

  /**
   * Total attempts — shows an attempts row when > 0.
   */
  totalAttempts?: number;

  /**
   * Average score percentage — shows the avg-score column when set.
   */
  avgScorePercent?: number;

  /**
   * Score badge label (e.g. "Excellent"). Consumer resolves the label from
   * the score so thresholds stay out of the library.
   */
  scoreLabel?: string;

  /**
   * Score badge variant.
   */
  scoreVariant?: BadgeVariant;

  /**
   * Optional detail content (e.g. ProgressDetailCard).
   */
  children?: ReactNode;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
