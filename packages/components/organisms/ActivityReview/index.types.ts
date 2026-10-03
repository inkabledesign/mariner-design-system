export interface ActivityAttempt {
  /**
   * Attempt number (1-based).
   */
  attemptNumber: number;

  /**
   * Score percentage (0–100).
   */
  score: number;

  /**
   * Whether the attempt passed.
   */
  isCorrect: boolean;

  /**
   * Completion date (ISO string or formatted).
   */
  completedAt?: string;

  /**
   * Time spent in seconds.
   */
  timeSpentSeconds?: number;

  /**
   * Number of answers submitted.
   */
  answersCount?: number;
}

export interface ActivityReviewProps {
  /**
   * Activity title.
   */
  activityTitle: string;

  /**
   * Activity is completed.
   */
  isCompleted?: boolean;

  /**
   * Best score across attempts (0–100).
   */
  bestScore?: number;

  /**
   * Latest score (0–100).
   */
  latestScore?: number;

  /**
   * Attempt history.
   */
  attempts: ActivityAttempt[];

  /**
   * Index of the attempt being reviewed (controlled).
   */
  selectedAttemptIndex?: number;

  /**
   * Attempt selection handler.
   */
  onSelectAttempt?: (index: number) => void;

  /**
   * Retry/start handler.
   */
  onRetry?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
