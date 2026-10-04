export type DotVariant = 'quiz' | 'quiz-outline' | 'lesson' | 'lesson-outline';

export interface DotProps {
  /**
   * Dot variant.
   * - quiz: filled brand-primary
   * - quiz-outline: brand-primary outline
   * - lesson: filled surface-100
   * - lesson-outline: surface-100 outline
   * @default 'quiz'
   */
  variant?: DotVariant;

  /**
   * Additional Tailwind classes (e.g. sizing).
   */
  className?: string;
}
