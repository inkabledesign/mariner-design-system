import React, { useState } from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import Icon from '../../atoms/Icon';
// import type { IconName } from '../../types/icons.type';
import { theme } from '@mariner/theme';
import type { InputProps } from './index.types';


/**
 * Input component with label, error message, and optional icon
 *
 * @component
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   value={email}
 *   onChangeText={setEmail}
 *   iconName="ico-berth-round"
 *   iconPosition="left"
 * />
 * ```
 */
const Input: React.FC<InputProps> = ({
  label,
  error,
  iconName,
  iconPosition = 'left',
  className = '',
  value,
  onChangeText,
  themeMode = 'light',
  breakpoint = 'mobile',
  placeholder,
  ...textInputProps
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = React.useRef<TextInput>(null);

  // Determine border color based on state
  const getBorderColor = () => {
    if (error) return 'border-system-error-100';
    if (isFocused) return 'border-brand-primary-60';
    return 'border-brand-primary-20';
  };

  // Determine padding based on icon position
  const getInputPadding = () => {
    if (iconPosition === 'none') return 'px-lg';
    return 'px-md';
  };

  return (
    <Column className={`gap-xs w-full ${className}`}>
      {/* Label */}
      {label && (
        <ViewStyled className="px-sm">
          <TextStyled textStyle="label" className="text-footnote text-brand-primary-100">
            {label}
          </TextStyled>
        </ViewStyled>
      )}

      {/* Input Container */}
      <Row
        className={`
          h-[52px] 
          items-center 
          bg-material-surface-0 
          rounded-sm 
          border 
          ${getBorderColor()}
          ${getInputPadding()}
          gap-md
        `}>
        {/* Left Icon */}
        {iconPosition === 'left' && iconName && <Icon iconName={iconName} className="w-6 h-6" />}

        {/* Text Input */}
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.color[themeMode].material.surface['60']}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            fontFamily: theme.typography[breakpoint].text.input.fontFamily,
            fontSize: theme.typography[breakpoint].text.input.fontSize,
            lineHeight: theme.typography[breakpoint].text.input.lineHeight,
            letterSpacing: theme.typography[breakpoint].text.input.letterSpacing,
            flex: 1,
          }}
          {...textInputProps}
        />

        {/* Right Icon */}
        {iconPosition === 'right' && iconName && <Icon iconName={iconName} className="w-6 h-6" />}
      </Row>

      {/* Error Message */}
      {error && (
        <ViewStyled className="px-sm items-end">
          <TextStyled className="text-footnote text-system-error-100">{error}</TextStyled>
        </ViewStyled>
      )}
    </Column>
  );
};

export default Input;
