import type { ReactNode } from 'react';
import type { ActivityScenarioResult } from '../ActivityScenario/index.types';

export interface ActivityVHFScenarioProps {
  /**
   * Activity title.
   */
  title?: string;

  /**
   * Instructions shown above the sequence.
   */
  description?: string;

  /**
   * Steps in the **correct** order — validated against `emulatorSteps`.
   */
  steps: string[];

  /**
   * Explanation shown after submission.
   */
  explanation?: string;

  /**
   * Steps tracked by the external VHF emulator — the consumer owns the
   * emulator and feeds tracked steps back via this prop.
   */
  emulatorSteps?: string[];

  /**
   * Opens the external VHF emulator (e.g. router push).
   */
  onLaunchEmulator?: () => void;

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
