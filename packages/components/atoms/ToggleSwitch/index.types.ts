export interface ToggleSwitchProps {
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
  disabled?: boolean;
  /** Theme mode for color resolution @default 'light' */
  themeMode?: 'light' | 'dark';
  className?: string;
}
