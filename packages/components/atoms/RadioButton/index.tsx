import React from 'react';
import PressableStyled from '../PressableStyled';
import ViewStyled from '../ViewStyled';
import type { RadioButtonProps, RadioButtonStatus, RadioButtonSize } from './index.types';

const ringStyles: Record<RadioButtonStatus, { checked: string; unchecked: string }> = {
  default: {
    checked: 'border-brand-primary-100',
    unchecked: 'border-material-surface-40',
  },
  error: {
    checked: 'border-system-error-100',
    unchecked: 'border-system-error-100',
  },
  success: {
    checked: 'border-system-success-100',
    unchecked: 'border-system-success-100',
  },
};

const dotStyles: Record<RadioButtonStatus, string> = {
  default: 'bg-brand-primary-100',
  error: 'bg-system-error-100',
  success: 'bg-system-success-100',
};

const sizeStyles: Record<RadioButtonSize, { ring: string; dot: string }> = {
  sm: { ring: 'w-6 h-6 border-2', dot: 'w-3 h-3' },
  md: { ring: 'w-9 h-9 border-2', dot: 'w-5 h-5' },
};

/**
 * RadioButton Component
 *
 * A cross-platform radio button following the Figma design system.
 * Uses NativeWind for styling to work on both React Native and web.
 *
 * @example
 * <RadioButton
 *   checked={selectedOption === 'option1'}
 *   onPress={() => setSelectedOption('option1')}
 * />
 */
const RadioButton = ({
  checked = false,
  onPress,
  disabled = false,
  status = 'default',
  size = 'md',
  className = ''
}: RadioButtonProps) => {
  const ringColor = checked ? ringStyles[status].checked : ringStyles[status].unchecked;
  const sizes = sizeStyles[size];

  return (
    <PressableStyled
      onPress={onPress}
      disabled={disabled}
      className={`
        ${sizes.ring} rounded-full
        ${ringColor}
        ${disabled ? 'opacity-50' : ''}
        items-center justify-center
        ${className}
      `.trim()}
    >
      {/* Inner circle - only visible when checked */}
      {checked && (
        <ViewStyled className={`${sizes.dot} rounded-full ${dotStyles[status]}`} />
      )}
    </PressableStyled>
  );
};

export default RadioButton;
