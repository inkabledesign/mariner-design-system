export interface ModuleStat {
  /**
   * Stat title (e.g. "Lessons", "Activities").
   */
  title: string;

  /**
   * Helper text under the title.
   */
  subtitle?: string;

  /**
   * Completion percentage (0–100).
   */
  percentage: number;

  /**
   * Items completed.
   */
  completed: number;

  /**
   * Total items.
   */
  total: number;
}

export interface ModuleStatsSectionProps {
  /**
   * Module title.
   */
  title: string;

  /**
   * Module graphic image URL.
   */
  imageUrl?: string;

  /**
   * Stat cards rendered in the section (e.g. Lessons, Activities).
   */
  stats: ModuleStat[];

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
