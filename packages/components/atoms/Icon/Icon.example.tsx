import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from './index';
import TextStyled from '../TextStyled';
import Column from '../Column';
import Row from '../Row';
import PressableStyled from '../PressableStyled';

/**
 * Example: Basic Icon Usage
 */
export function BasicIconExample() {
  return (
    <Row className="gap-md">
      <Icon iconName="ico-heart" />
      <Icon iconName="ico-star" />
      <Icon iconName="ico-close" />
    </Row>
  );
}

/**
 * Example: Icon with Custom Size and Color
 */
export function CustomIconExample() {
  return (
    <Row className="gap-md">
      <Icon 
        iconName="ico-heart" 
        color="text-brand-primary-100"
        className="w-8 h-8"
      />
      <Icon 
        iconName="ico-star" 
        color="text-brand-accent-100"
        className="w-12 h-12"
      />
      <Icon 
        iconName="ico-close" 
        color="text-system-error-100"
        className="w-6 h-6"
      />
    </Row>
  );
}

/**
 * Example: Icon with Theme Mode
 * This demonstrates how to use the themeMode prop for light/dark mode support
 */
export function ThemeAwareIconExample() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <Column className="gap-lg">
      <Row className="gap-md">
        <PressableStyled 
          onPress={() => setTheme('light')}
          className="px-md py-sm bg-material-surface-0 rounded-md"
        >
          <TextStyled textStyle="button">
            Light {theme === 'light' && '✓'}
          </TextStyled>
        </PressableStyled>
        
        <PressableStyled 
          onPress={() => setTheme('dark')}
          className="px-md py-sm bg-material-surface-100 rounded-md"
        >
          <TextStyled textStyle="button" colorCategory="solid" colorName="white">
            Dark {theme === 'dark' && '✓'}
          </TextStyled>
        </PressableStyled>
      </Row>
      
      <Row className="gap-md p-md bg-material-surface-0 rounded-md">
        <Icon 
          iconName="ico-heart" 
          themeMode={theme}
          color="text-brand-primary-100"
          className="w-8 h-8"
        />
        <Icon 
          iconName="ico-star" 
          themeMode={theme}
          color="text-brand-accent-100"
          className="w-8 h-8"
        />
        <Icon 
          iconName="ico-close" 
          themeMode={theme}
          color="text-material-surface-100"
          className="w-8 h-8"
        />
      </Row>
      
      <TextStyled textStyle="caption" colorCategory="material" colorName="surface" colorVariant="60">
        Current theme: {theme}
      </TextStyled>
    </Column>
  );
}

/**
 * Example: Icon Categories
 * Shows icons from different categories
 */
export function IconCategoriesExample() {
  return (
    <Column className="gap-md">
      <View>
        <TextStyled textStyle="heading6" className="mb-sm">Navigation</TextStyled>
        <Row className="gap-md">
          <Icon iconName="ico-chevron-left" />
          <Icon iconName="ico-chevron-right" />
          <Icon iconName="ico-chevron-up" />
          <Icon iconName="ico-chevron-down" />
        </Row>
      </View>
      
      <View>
        <TextStyled textStyle="heading6" className="mb-sm">System</TextStyled>
        <Row className="gap-md">
          <Icon iconName="ico-close" />
          <Icon iconName="ico-check" />
          <Icon iconName="ico-plus" />
          <Icon iconName="ico-minus" />
        </Row>
      </View>
      
      <View>
        <TextStyled textStyle="heading6" className="mb-sm">UI</TextStyled>
        <Row className="gap-md">
          <Icon iconName="ico-heart" />
          <Icon iconName="ico-star" />
          <Icon iconName="ico-bell" />
          <Icon iconName="ico-settings" />
        </Row>
      </View>
    </Column>
  );
}

/**
 * Example: All Icon Examples
 * Combines all examples for Storybook
 */
export default function IconExamples() {
  return (
    <Column className="gap-xl p-lg">
      <View>
        <TextStyled textStyle="heading3" className="mb-md">Basic Usage</TextStyled>
        <BasicIconExample />
      </View>
      
      <View>
        <TextStyled textStyle="heading3" className="mb-md">Custom Size & Color</TextStyled>
        <CustomIconExample />
      </View>
      
      <View>
        <TextStyled textStyle="heading3" className="mb-md">Theme Mode Support</TextStyled>
        <ThemeAwareIconExample />
      </View>
      
      <View>
        <TextStyled textStyle="heading3" className="mb-md">Icon Categories</TextStyled>
        <IconCategoriesExample />
      </View>
    </Column>
  );
}
