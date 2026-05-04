/**
 * Button Component Examples
 * 
 * This file demonstrates all variants of the Button component.
 * Use this as a reference for implementation.
 */

import React from 'react';
import Column from '../../atoms/Column';
import Button from './index';

export default function ButtonExamples() {
  return (
    <Column className="gap-md p-md">
      {/* Primary Variants */}
      <Button 
        text="Primary Button" 
        variant="primary" 
        onPress={() => console.log('Primary pressed')}
      />

      <Button 
        text="Primary with Left Icon" 
        variant="primary"
        iconPosition="left"
        iconName="ico-berth-round"
        iconType="input"
        onPress={() => console.log('Primary with icon pressed')}
      />

      <Button 
        text="Primary with Right Icon" 
        variant="primary"
        iconPosition="right"
        iconName="ico-berth-round"
        iconType="input"
      />

      <Button 
        variant="primary"
        iconPosition="left"
        iconName="ico-berth-round"
        iconType="input"
      />

      {/* Secondary Variants */}
      <Button 
        text="Secondary Button" 
        variant="secondary"
      />

      <Button 
        text="Secondary with Left Icon" 
        variant="secondary"
        iconPosition="left"
        iconName="ico-berth-round"
        iconType="input"
      />

      <Button 
        text="Secondary with Right Icon" 
        variant="secondary"
        iconPosition="right"
        iconName="ico-berth-round"
        iconType="input"
      />

      <Button 
        variant="secondary"
        iconPosition="left"
        iconName="ico-berth-round"
        iconType="input"
      />

      {/* Text Variant */}
      <Button 
        text="Text Button" 
        variant="text"
      />

      {/* Disabled State */}
      <Button 
        text="Disabled Button" 
        variant="primary"
        disabled={true}
      />

      {/* Sharp Corners */}
      <Button 
        text="Sharp Button" 
        variant="primary"
        radius="none"
      />
    </Column>
  );
}
