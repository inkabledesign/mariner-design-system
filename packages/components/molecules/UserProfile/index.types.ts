export interface UserProfileProps {
  /**
   * User's display name. Hidden when omitted.
   */
  name?: string;

  /**
   * Avatar image URL. Falls back to an icon tile when omitted.
   */
  imageUrl?: string;

  /**
   * User rating (e.g. "4.2"). Hidden when omitted.
   */
  rating?: string;

  /**
   * Qualification/role label (e.g. "Skipper").
   */
  qualification?: string;

  /**
   * Edit affordance handler — shows the badge on the avatar.
   */
  onEditPress?: () => void;

  /**
   * Theme mode for color resolution @default 'light'
   */
  themeMode?: 'light' | 'dark';

  /**
   * Additional Tailwind classes for the container.
   */
  className?: string;
}
