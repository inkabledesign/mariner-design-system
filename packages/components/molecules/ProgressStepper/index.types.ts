export interface ProgressStepperProps {
  /**
   * Total number of steps (segments) to render.
   */
  total: number;

  /**
   * Number of completed / active steps. Segments with an index below this
   * value render in the active (filled) colour; the rest render inactive.
   * Clamped to the range [0, total].
   * @default 0
   */
  current?: number;

  /**
   * Leading label text (left-aligned above the track). Rendered when provided
   * — e.g. "STEP 1 of 5 - Tidal Diamond".
   */
  labelLeading?: string;

  /**
   * Trailing label text (right-aligned above the track). Rendered when
   * provided — e.g. "1/2".
   */
  labelTrailing?: string;

  /**
   * Theme palette for the track and labels.
   * @default 'light'
   */
  themeMode?: 'light' | 'dark';

  /**
   * Additional Tailwind classes for the outer container.
   */
  className?: string;
}
