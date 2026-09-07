export interface DateRangeValue {
  day?: string;
  month?: string;
  year?: string;
}

export interface DateRangeProps {
  /**
   * "From" date value.
   */
  from?: DateRangeValue;

  /**
   * "To" date value.
   */
  to?: DateRangeValue;

  /**
   * Label for the "from" segment.
   * @default 'From'
   */
  fromLabel?: string;

  /**
   * Label for the "to" segment.
   * @default 'To'
   */
  toLabel?: string;

  /**
   * Press handler for the "from" segment.
   */
  onFromPress?: () => void;

  /**
   * Press handler for the "to" segment.
   */
  onToPress?: () => void;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
