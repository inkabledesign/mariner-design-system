import type { ReactNode } from 'react';

export interface FormItemProps {
  /**
   * Field label shown above the input (label text style, brand-primary-100).
   * Rendered only when provided.
   */
  label?: string;

  /**
   * The input element — InputText, InputTextField, InputSelect, InputRadio,
   * InputDate, or any compatible field component.
   */
  children?: ReactNode;

  /**
   * Error message shown right-aligned below the input (label text style,
   * system-error-100). Rendered only when provided.
   */
  error?: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
