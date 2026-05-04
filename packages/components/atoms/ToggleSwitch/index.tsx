import React from 'react';
import PressableStyled from '../PressableStyled';
import ViewStyled from '../ViewStyled';
import type { ToggleSwitchProps } from './index.types';

/**
 * ToggleSwitch Component
 *
 * A cross-platform toggle switch following the Figma design system.
 * Uses NativeWind for styling to work on both React Native and web.
 *
 * @example
 * <ToggleSwitch
 *   checked={isEnabled}
 *   onToggle={(checked) => setIsEnabled(checked)}
 * />
 */
const ToggleSwitch = ({
  checked = false,
  onToggle,
  disabled = false,
  className = '',
}: ToggleSwitchProps) => {
  const handlePress = () => {
    if (!disabled && onToggle) {
      onToggle(!checked);
    }
  };

  return (
    <PressableStyled
      onPress={handlePress}
      disabled={disabled}
      className={`
        h-[31px] w-[52px] rounded-full overflow-hidden relative
        ${checked ? 'bg-brand-primary-100' : 'bg-material-surface-40'}
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `.trim()}>
      {/* Knob */}
      <ViewStyled
        className={`
          absolute top-1/2 -translate-y-1/2
          w-[27px] h-[27px] rounded-full
          bg-material-surface-0
          dark:bg-material-surface-100
          shadow-sm
          transition-all duration-200
          ${checked ? 'right-[2px]' : 'left-[2px]'}
        `.trim()}
      />
    </PressableStyled>
  );
};

export default ToggleSwitch;
