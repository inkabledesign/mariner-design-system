export interface InputDateRangeValue {
  day?: string;
  month?: string;
  year?: string;
}

export interface InputDateRangeProps {
  /**
   * "From" date value.
   */
  from?: InputDateRangeValue;

  /**
   * "To" date value.
   */
  to?: InputDateRangeValue;

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
