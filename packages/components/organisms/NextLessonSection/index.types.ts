export interface NextLessonData {
  /**
   * Lesson title.
   */
  lessonTitle: string;

  /**
   * Chapter title.
   */
  chapterTitle?: string;

  /**
   * Module title.
   */
  moduleTitle?: string;

  /**
   * Lesson progress (0–100).
   */
  progress: number;

  /**
   * Total lessons in the module.
   */
  totalLessons?: number;

  /**
   * Lesson image URL.
   */
  imageUrl?: string;

  /**
   * Show an "updated" badge.
   */
  hasUpdate?: boolean;

  /**
   * Lesson is fully completed.
   */
  isCompleted?: boolean;
}

export interface NextLessonSectionProps {
  /**
   * Section title.
   * @default 'Your next lesson'
   */
  title?: string;

  /**
   * Next lesson data. When omitted, an empty-state promo is shown.
   */
  nextLesson?: NextLessonData;

  /**
   * Loading state — shows a spinner.
   */
  isLoading?: boolean;

  /**
   * Empty-state headline (when no next lesson).
   */
  emptyHeadline?: string;

  /**
   * Empty-state sub-headline.
   */
  emptySubHeadline?: string;

  /**
   * Callback when the lesson card is pressed.
   */
  onLessonPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
