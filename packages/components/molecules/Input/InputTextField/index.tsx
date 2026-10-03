import React, { useState } from 'react';
import { TextInput, type TextStyle } from 'react-native';
import ViewStyled from '../../../atoms/ViewStyled';
import { theme } from '@inkabledesign/mariner-theme';
import type { InputTextFieldProps, InputTextFieldStatus } from './index.types';

/**
 * InputTextField Component (Molecule)
 *
 * Multiline text field with status tinting (error/success/disabled).
 * The placeholder renders in the `placeholder` text style (Montserrat Italic,
 * surface-40); the value uses the `input` text style in brand-primary-dark.
 * Source: Mariner-Library / Molecules / Input/InputTextField (Figma).
 *
 * Wrap it in `FormItem` to add a label and error message.
 *
 * @example
 * <InputTextField placeholder="Enter text" status="default" />
 */
const InputTextField = ({
  status = 'default',
  themeMode = 'light',
  breakpoint = 'mobile',
  className = '',
  value,
  defaultValue,
  placeholder,
  onChangeText,
  onFocus,
  onBlur,
  ...textInputProps
}: InputTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');

  const isDisabled = status === 'disabled';
  const isEmpty = (isControlled ? value : innerValue).length === 0;

  const textTokens = theme.typography[breakpoint].text;
  const textToken = isEmpty ? textTokens.placeholder : textTokens.input;

  const statusStyles: Record<InputTextFieldStatus, string> = {
    default: isFocused
      ? 'bg-material-surface-light border-brand-primary-100'
      : 'bg-material-surface-light border-brand-primary-20',
    error: 'bg-system-error-5 border-system-error-100',
    success: 'bg-system-success-5 border-system-success-100',
    disabled: 'bg-brand-primary-5 border-brand-secondary-20',
  };

  return (
    <ViewStyled
      className={`rounded-sm border p-md min-h-[130px] ${statusStyles[status]} ${className}`.trim()}
    >
      <TextInput
        multiline
        editable={!isDisabled}
        value={value}
        defaultValue={defaultValue}
        onChangeText={(text) => {
          if (!isControlled) setInnerValue(text);
          onChangeText?.(text);
        }}
        placeholder={placeholder}
        placeholderTextColor={theme.color[themeMode].material.surface['40']}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        style={{
          flex: 1,
          textAlignVertical: 'top',
          fontFamily: textToken.fontFamily,
          fontSize: textToken.fontSize,
          lineHeight: textToken.lineHeight,
          letterSpacing: textToken.letterSpacing,
          fontStyle: textToken.fontStyle as TextStyle['fontStyle'],
          color: theme.color[themeMode].brand.primary.dark,
        }}
        {...textInputProps}
      />
    </ViewStyled>
  );
};

export default InputTextField;
