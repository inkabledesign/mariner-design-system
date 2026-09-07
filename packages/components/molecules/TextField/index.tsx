import React from 'react';
import { TextInput } from 'react-native';
import Column from '../../atoms/Column';
import ViewStyled from '../../atoms/ViewStyled';
import TextStyled from '../../atoms/TextStyled';
import { theme } from '@inkabledesign/mariner-theme';
import type { TextFieldProps, TextFieldStatus } from './index.types';

const statusStyles: Record<TextFieldStatus, string> = {
  default: 'bg-material-surface-0 border border-brand-primary-20',
  error: 'bg-system-error-5 border border-system-error-100',
  success: 'bg-system-success-10 border border-system-success-100',
  disabled: 'bg-material-surface-5 border border-material-surface-20',
};

/**
 * TextField Component (Molecule)
 *
 * A multiline text area with label, status tinting (error/success/disabled),
 * and an optional helper message.
 * Source: Mariner-Library / Molecules / Input/TextField (Figma).
 *
 * @example
 * <TextField label="Notes" placeholder="Enter text" multiline status="default" />
 */
const TextField = ({
  label,
  status = 'default',
  message,
  themeMode = 'light',
  breakpoint = 'mobile',
  className = '',
  placeholder,
  ...textInputProps
}: TextFieldProps) => {
  const isDisabled = status === 'disabled';
  const textColor = theme.color[themeMode].material.surface['100'];
  const placeholderColor = theme.color[themeMode].material.surface['60'];

  return (
    <Column className={`gap-xs w-full ${className}`.trim()}>
      {label && (
        <ViewStyled className="px-sm">
          <TextStyled textStyle="label" className="text-brand-primary-100">
            {label}
          </TextStyled>
        </ViewStyled>
      )}
      <ViewStyled className={`rounded-sm px-md py-sm min-h-32 ${statusStyles[status]}`}>
        <TextInput
          multiline
          editable={!isDisabled}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={{
            flex: 1,
            color: textColor,
            fontSize: theme.typography[breakpoint].text.input.fontSize,
            textAlignVertical: 'top',
          }}
          {...textInputProps}
        />
      </ViewStyled>
      {message && (
        <ViewStyled className="px-sm">
          <TextStyled
            textStyle="footnote"
            className={status === 'error' ? 'text-system-error-100' : 'text-material-surface-60'}
          >
            {message}
          </TextStyled>
        </ViewStyled>
      )}
    </Column>
  );
};

export default TextField;
