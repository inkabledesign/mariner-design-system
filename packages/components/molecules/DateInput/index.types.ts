export interface DateInputProps {
  /**
   * Field label shown above the input (e.g. "Date of birth").
   */
  label?: string;

  /**
   * Day value (e.g. "12").
   */
  day?: string;

  /**
   * Month value (e.g. "02").
   */
  month?: string;

  /**
   * Year value (e.g. "1990").
   */
  year?: string;

  /**
   * Press handler — opens the date picker in the consumer app.
   */
  onPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
