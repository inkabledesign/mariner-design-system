import React from 'react';
import PressableStyled from '../PressableStyled';
import ViewStyled from '../ViewStyled';
import type { RadioButtonProps } from './index.types';

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
  className = '' 
}: RadioButtonProps) => {
  return (
    <PressableStyled
      onPress={onPress}
      disabled={disabled}
      className={`
        w-9 h-9 rounded-full
        border-2
        ${checked ? 'border-brand-primary-100' : 'border-material-surface-40'}
        ${disabled ? 'opacity-50' : ''}
        items-center justify-center
        ${className}
      `.trim()}
    >
      {/* Inner circle - only visible when checked */}
      {checked && (
        <ViewStyled className="w-5 h-5 rounded-full bg-brand-primary-100" />
      )}
    </PressableStyled>
  );
};

export default RadioButton;
