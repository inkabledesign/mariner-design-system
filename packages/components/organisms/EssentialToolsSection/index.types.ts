import type { IconName } from '../../types/icons.type';

export interface EssentialTool {
  /**
   * Unique identifier for the tool.
   */
  id: string;

  /**
   * Tool icon.
   */
  iconName: IconName;

  /**
   * Tool title.
   */
  title: string;

  /**
   * Optional description.
   */
  description?: string;

  /**
   * Press handler.
   */
  onPress?: () => void;
}

export interface EssentialToolsSectionProps {
  /**
   * Tools displayed in the 2-column grid.
   */
  tools: EssentialTool[];

  /**
   * Section title.
   * @default 'Essential tools'
   */
  title?: string;

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
