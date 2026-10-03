import React from 'react';
import Row from '../../../atoms/Row';
import TextStyled from '../../../atoms/TextStyled';
import Icon from '../../../atoms/Icon';
import PressableStyled from '../../../atoms/PressableStyled';
import { theme } from '@inkabledesign/mariner-theme';
import type { InputSelectProps } from './index.types';

/**
 * InputSelect Component (Molecule)
 *
 * A pressable select field: looks like InputText but opens an option picker
 * instead of the keyboard. Shows the selected value in the `input` text style,
 * or the placeholder in the italic `placeholder` style when empty.
 * Source: Mariner-Library / Molecules / Input/InputSelect (Figma).
 *
 * Wrap it in `FormItem` to add a label and error message.
 *
 * @example
 * <InputSelect placeholder="Vessel type" value={type} onPress={openPicker} />
 */
const InputSelect = ({
  value,
  placeholder,
  iconLeft,
  disabled = false,
  onPress,
  themeMode = 'light',
  breakpoint = 'mobile',
  className = '',
}: InputSelectProps) => {
  const containerState = disabled
    ? 'bg-brand-primary-5 border-brand-primary-20'
    : 'bg-material-surface-light border-brand-primary-20';

  const iconColor = disabled ? 'text-brand-primary-40' : 'text-brand-primary-100';
  const placeholderToken = theme.typography[breakpoint].text.placeholder;

  return (
    <PressableStyled
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <Row
        className={`h-xl items-center gap-md border p-md rounded-sm ${containerState} ${className}`.trim()}
      >
        {iconLeft && <Icon iconName={iconLeft} iconSize="md" color={iconColor} />}

        <TextStyled
          textStyle={value ? 'input' : 'placeholder'}
          breakpoint={breakpoint}
          className={`flex-1 ${value ? 'text-brand-primary-dark' : 'text-material-surface-40'}`}
          style={
            value
              ? undefined
              : {
                  fontFamily: placeholderToken.fontFamily,
                  fontStyle: placeholderToken.fontStyle as 'italic',
                }
          }
        >
          {value ?? placeholder ?? ''}
        </TextStyled>

        <Icon iconName="ico-chevron-down" iconSize="md" color={iconColor} />
      </Row>
    </PressableStyled>
  );
};

export default InputSelect;
