export interface TileActivityStat {
  /**
   * Activity title.
   */
  title: string;

  /**
   * Number of attempts.
   */
  totalAttempts: number;

  /**
   * Best score (0–100).
   */
  bestScore?: number;

  /**
   * Latest score (0–100).
   */
  latestScore?: number;
}

export interface TileActivityLesson {
  /**
   * Lesson title.
   */
  lessonTitle: string;

  /**
   * Whether the lesson is completed.
   */
  isCompleted?: boolean;

  /**
   * Activities in the lesson.
   */
  activities: TileActivityStat[];
}

export interface TileActivityChapter {
  /**
   * Chapter title.
   */
  chapterTitle: string;

  /**
   * Lessons in the chapter.
   */
  lessons: TileActivityLesson[];
}

export interface TileActivityStatsProps {
  /**
   * Per-chapter activity breakdown.
   */
  chapters: TileActivityChapter[];

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
