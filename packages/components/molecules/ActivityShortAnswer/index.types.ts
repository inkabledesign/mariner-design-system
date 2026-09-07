import type { ReactNode } from 'react';

export interface ShortAnswerQuestion {
  /**
   * Question text.
   */
  question: string;

  /**
   * Accepted answers — if empty/undefined, the answer is recorded without
   * automatic validation.
   */
  acceptedAnswers?: string[];

  /**
   * Require case-sensitive matching.
   */
  caseSensitive?: boolean;

  /**
   * Maximum answer length.
   * @default 500
   */
  maxLength?: number;

  /**
   * Input placeholder.
   */
  placeholder?: string;

  /**
   * Feedback text shown after submission.
   */
  feedback?: string;
}

export interface ShortAnswerResult {
  /**
   * Per-question submitted answers.
   */
  answers: string[];

  /**
   * Score 0–100.
   */
  score: number;

  /**
   * Whether all questions were answered correctly.
   */
  isCorrect: boolean;
}

export interface ActivityShortAnswerProps {
  /**
   * Questions — the component steps through them one at a time.
   */
  questions: ShortAnswerQuestion[];

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
   * Optional media slot rendered above the question.
   */
  asset?: ReactNode;

  /**
   * Called with the aggregate result whenever a submission is recorded.
   */
  onComplete?: (result: ShortAnswerResult) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
