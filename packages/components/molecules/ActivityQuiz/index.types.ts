import type { ReactNode } from 'react';

export type QuizType = 'single-choice' | 'multiple-choice' | 'true-false';

export interface QuizQuestion {
  /**
   * Question text.
   */
  question: string;

  /**
   * Option labels.
   */
  options: string[];

  /**
   * Correct option index (single-choice / true-false).
   */
  answerIndex?: number;

  /**
   * Correct option indices (multiple-choice).
   */
  answerIndices?: number[];

  /**
   * Feedback text shown after submission.
   */
  feedback?: string;
}

export interface QuizResult {
  /**
   * Per-question selected option indices.
   */
  answers: number[][];

  /**
   * Score 0–100.
   */
  score: number;

  /**
   * Whether all questions were answered correctly.
   */
  isCorrect: boolean;
}

export interface ActivityQuizProps {
  /**
   * Activity title.
   */
  title?: string;

  /**
   * Questions — the component steps through them one at a time.
   */
  questions: QuizQuestion[];

  /**
   * Quiz interaction type.
   */
  type: QuizType;

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
  onComplete?: (result: QuizResult) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: number[];
  allAnswers: number[][];
  isSubmitted: boolean;
  showExplanation: boolean;
}
