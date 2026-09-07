export type DotVariant = 'quizz' | 'quizz-outline' | 'lesson' | 'lesson-outline';

export interface DotProps {
  /**
   * Dot variant.
   * - quizz: filled brand-primary
   * - quizz-outline: brand-primary outline
   * - lesson: filled surface-100
   * - lesson-outline: surface-100 outline
   * @default 'quizz'
   */
  variant?: DotVariant;

  /**
   * Additional Tailwind classes (e.g. sizing).
   */
  className?: string;
}
