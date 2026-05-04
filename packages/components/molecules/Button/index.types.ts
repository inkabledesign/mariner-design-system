export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonRadius = 'round' | 'none';
export type ButtonIconPosition = 'left' | 'right' | 'none';

export interface ButtonProps {
  /**
   * Button text label
   */
  text?: string;
  
  /**
   * Button variant/type
   * - primary: Blue background with white text
   * - secondary: White background with blue text
   * - text: No background, just text
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Border radius style
   * - round: Fully rounded (radius-xxl)
   * - none: No border radius
   * @default 'round'
   */
  radius?: ButtonRadius;
  
  /**
   * Icon position relative to text
   * - left: Icon before text
   * - right: Icon after text
   * - none: No icon
   * @default 'none'
   */
  iconPosition?: ButtonIconPosition;
  
  /**
   * Icon name from iconMap
   * Required if iconPosition is 'left' or 'right'
   */
  iconName?: string;
  
  /**
   * Icon type/category
   * @default 'input'
   */
  iconType?: 'input' | 'nav' | 'ui' | 'system' | 'social' | 'marina' | 'weather' | 'media' | 'nav_marina';
  
  /**
   * Press handler
   */
  onPress?: () => void;
  
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
