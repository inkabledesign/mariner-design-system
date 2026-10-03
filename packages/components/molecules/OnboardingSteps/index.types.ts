export interface OnboardingStepsProps {
  /**
   * Total number of steps.
   */
  totalSteps: number;

  /**
   * Current step (1-based) — rendered in the active accent style.
   * @default 1
   */
  currentStep?: number;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
