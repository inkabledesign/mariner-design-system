export type TextContentBlockVariant = 'mayday' | 'panpan' | 'securite' | 'default';

export interface TextContentBlockProps {
  /**
   * Highlighted warning banner text (e.g. "ONLY TO BE USED IN EMERGENCY").
   */
  warningText?: string;

  /**
   * Numbered procedure steps.
   */
  steps: string[];

  /**
   * Script/call text — lines wrapped in <p> tags render as body text,
   * other lines render as headings.
   */
  scriptText?: string;

  /**
   * Colour variant for the warning/state styling.
   * @default 'default'
   */
  variant?: TextContentBlockVariant;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
