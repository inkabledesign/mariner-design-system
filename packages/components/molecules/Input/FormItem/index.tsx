import React from 'react';
import Column from '../../../atoms/Column';
import ViewStyled from '../../../atoms/ViewStyled';
import TextStyled from '../../../atoms/TextStyled';
import type { FormItemProps } from './index.types';

/**
 * FormItem Component (Molecule)
 *
 * Form field wrapper: an optional label above, the input itself as children,
 * and an optional right-aligned error message below. Accepts any input type
 * (InputText, InputTextField, InputSelect, InputRadio, InputDate, …) so all
 * form rows share the same label/error layout.
 * Source: Mariner-Library / Molecules / Input/FormItem (Figma).
 *
 * @example
 * <FormItem label="Email" error={errors.email}>
 *   <InputText placeholder="Enter your email" value={email} onChangeText={setEmail} />
 * </FormItem>
 */
const FormItem = ({ label, error, children, className = '' }: FormItemProps) => (
  <Column className={`gap-xs rounded-md ${className}`.trim()}>
    {label && (
      <ViewStyled className="px-sm">
        <TextStyled textStyle="label" className="text-brand-primary-100">
          {label}
        </TextStyled>
      </ViewStyled>
    )}

    {children}

    {error && (
      <ViewStyled className="px-sm items-end">
        <TextStyled textStyle="label" className="text-system-error-100">
          {error}
        </TextStyled>
      </ViewStyled>
    )}
  </Column>
);

export default FormItem;
