export interface ButtonGroupOption {
  /**
   * Unique identifier for the option
   */
  id: string;

  /**
   * Display label for the option
   */
  label: string;
}

export interface ButtonGroupProps {
  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';
  /**
   * Array of button options
   */
  options: ButtonGroupOption[];
  size?: 'sm' | 'md' | 'lg';
  /**
   * Currently selected option ID
   */
  selectedId: string;

  /**
   * Callback when selection changes
   */
  onChange: (id: string) => void;

  /**
   * Background theme variant
   * - 'light': bg-material-surface-0 (default)
   * - 'dark': bg-material-surface-100
   * @default 'light'
   */
  variant?: 'light' | 'dark';

  /**
   * Additional CSS classes
   */
  className?: string;
}
