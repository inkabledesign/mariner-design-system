import type { ReactNode } from 'react';

export interface ActivityScenarioResult {
  /**
   * The user's submitted step order.
   */
  answers: string[];

  /**
   * Score 0–100 (all-or-nothing ordering).
   */
  score: number;

  /**
   * Whether the submitted order matches `steps`.
   */
  isCorrect: boolean;
}

export interface ActivityScenarioProps {
  /**
   * Activity title.
   */
  title?: string;

  /**
   * Instructions for the ordering task.
   */
  description?: string;

  /**
   * Steps in the **correct** order — the component shuffles them for display.
   */
  steps: string[];

  /**
   * Explanation shown after submission.
   */
  explanation?: string;

  /**
   * Optional media slot.
   */
  asset?: ReactNode;

  /**
   * Called with the result on submission.
   */
  onComplete?: (result: ActivityScenarioResult) => void;

  /**
   * Total activities in the flow (for the "Question x of y" counter).
   * @default 1
   */
  totalActivities?: number;

  /**
   * Current index in the parent flow (0-based).
   * @default 0
   */
  currentQuestionIndex?: number;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
