import React from 'react';
import { Switch } from 'react-native';
import ViewStyled from '../ViewStyled';
import { theme } from '@inkabledesign/mariner-theme';
import type { ToggleSwitchProps } from './index.types';

/**
 * ToggleSwitch Component
 *
 * A native iOS/Android toggle switch styled with design system colors.
 * Uses the platform Switch so the toggle behaviour and animation are
 * handled natively.
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
  themeMode = 'light',
  className = '',
}: ToggleSwitchProps) => {
  const palette = theme.color[themeMode];
  const trackOn = palette.brand.primary['100'];
  const trackOff = palette.material.surface['40'];
  const thumb =
    themeMode === 'dark'
      ? palette.material.surface['100']
      : palette.material.surface['0'];

  return (
    <ViewStyled className={`${disabled ? 'opacity-50' : ''} ${className}`.trim()}>
      <Switch
        value={checked}
        onValueChange={onToggle}
        disabled={disabled}
        trackColor={{ false: trackOff, true: trackOn }}
        thumbColor={thumb}
        ios_backgroundColor={trackOff}
      />
    </ViewStyled>
  );
};

export default ToggleSwitch;
