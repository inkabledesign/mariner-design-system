import React, { useState } from 'react';
import { TextInput, type TextStyle } from 'react-native';
import Row from '../../../atoms/Row';
import Icon from '../../../atoms/Icon';
import { theme } from '@inkabledesign/mariner-theme';
import type { InputTextProps } from './index.types';

/**
 * InputText component (Molecule)
 *
 * Single-line text field. States (blur/focus/disabled) and the 'rounded'
 * variant follow the Figma `Input/InputText` spec. The placeholder renders in
 * the `placeholder` text style (Montserrat Italic, surface-40); the value uses
 * the `input` text style in brand-primary-dark.
 *
 * Wrap it in `FormItem` to add a label and error message.
 *
 * @component
 * @example
 * ```tsx
 * <InputText
 *   placeholder="Enter your email"
 *   value={email}
 *   onChangeText={setEmail}
 *   iconLeft="ico-berth-round"
 * />
 * ```
 */
const InputText: React.FC<InputTextProps> = ({
  variant = 'default',
  disabled = false,
  iconLeft,
  iconRight,
  themeMode = 'light',
  breakpoint = 'mobile',
  className = '',
  value,
  defaultValue,
  placeholder,
  editable = true,
  onChangeText,
  onFocus,
  onBlur,
  ...textInputProps
}: InputTextProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');

  const isDisabled = disabled || !editable;
  const isEmpty = (isControlled ? value : innerValue).length === 0;

  const textTokens = theme.typography[breakpoint].text;
  const textToken = isEmpty ? textTokens.placeholder : textTokens.input;

  const containerState = isDisabled
    ? 'bg-brand-primary-5 border-brand-primary-20'
    : isFocused
      ? 'bg-material-surface-light border-brand-primary-100'
      : 'bg-material-surface-light border-brand-primary-20';

  const iconColor = isDisabled ? 'text-brand-primary-40' : 'text-brand-primary-100';

  return (
    <Row
      className={`
        h-xl
        items-center
        border
        p-md
        gap-md
        ${variant === 'rounded' ? 'rounded-xxxl' : 'rounded-sm'}
        ${containerState}
        ${className}
      `.trim()}
    >
      {iconLeft && <Icon iconName={iconLeft} iconSize="md" color={iconColor} />}

      <TextInput
        value={value}
        defaultValue={defaultValue}
        onChangeText={(text) => {
          if (!isControlled) setInnerValue(text);
          onChangeText?.(text);
        }}
        placeholder={placeholder}
        placeholderTextColor={theme.color[themeMode].material.surface['40']}
        editable={!isDisabled}
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
          fontFamily: textToken.fontFamily,
          fontSize: textToken.fontSize,
          lineHeight: textToken.lineHeight,
          letterSpacing: textToken.letterSpacing,
          fontStyle: textToken.fontStyle as TextStyle['fontStyle'],
          color: theme.color[themeMode].brand.primary.dark,
        }}
        {...textInputProps}
      />

      {iconRight && <Icon iconName={iconRight} iconSize="md" color={iconColor} />}
    </Row>
  );
};

export default InputText;
