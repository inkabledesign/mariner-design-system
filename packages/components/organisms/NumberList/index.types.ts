export interface NumberListProps {
  /**
   * Total number of section steps.
   */
  count: number;

  /**
   * Zero-based index of the current section.
   * @default 0
   */
  currentIndex?: number;

  /**
   * Callback when a section number is pressed.
   */
  onSectionPress?: (index: number) => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
