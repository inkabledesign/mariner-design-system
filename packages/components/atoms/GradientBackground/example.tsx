import React from 'react';
import { View } from 'react-native';
import GradientBackground from './index';
import { GRADIENT_PRESETS } from './presets';
import Column from '../Column';
import TextStyled from '../TextStyled';
import ViewStyled from '../ViewStyled';

/**
 * Example usage of GradientBackground component
 */

// Example 1: Basic Card with Default Gradient
export const BasicCardExample = () => (
  <ViewStyled className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
    <GradientBackground />
    <Column className="relative z-10 p-lg justify-center items-center h-full">
      <TextStyled className="text-heading3 text-brand-primary-100">
        Premium Plan
      </TextStyled>
      <TextStyled className="text-body text-brand-primary-60 mt-sm">
        $9.99/month
      </TextStyled>
    </Column>
  </ViewStyled>
);

// Example 1b: Animated Gradient
export const AnimatedGradientExample = () => (
  <ViewStyled className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
    <GradientBackground animated animationDuration={2000} />
    <Column className="relative z-10 p-lg justify-center items-center h-full">
      <TextStyled className="text-heading3 text-brand-primary-100">
        Animated Gradient
      </TextStyled>
      <TextStyled className="text-body text-brand-primary-60 mt-sm">
        Smooth pulsing effect
      </TextStyled>
    </Column>
  </ViewStyled>
);

// Example 2: Hero Section with Gradient
export const HeroSectionExample = () => (
  <ViewStyled className="relative w-full h-96 bg-white">
    <GradientBackground />
    <Column className="relative z-10 p-xl justify-center items-center h-full">
      <TextStyled className="text-heading1 text-brand-primary-100 text-center">
        Welcome to Mariner Academy
      </TextStyled>
      <TextStyled className="text-body text-brand-primary-60 text-center mt-md">
        Learn marine navigation with confidence
      </TextStyled>
    </Column>
  </ViewStyled>
);

// Example 3: Subscription Card with Gradient
export const SubscriptionCardExample = () => (
  <ViewStyled className="relative w-full rounded-radius-lg overflow-hidden bg-white border border-brand-accent-100">
    <GradientBackground />
    
    {/* Header */}
    <Column className="relative z-10 p-lg border-b border-material-surface-10">
      <TextStyled className="text-heading4 text-brand-primary-100">
        Mariner Academy Pro
      </TextStyled>
      <TextStyled className="text-footnote text-brand-primary-60 mt-xs">
        Unlimited learning, maximum flexibility
      </TextStyled>
    </Column>
    
    {/* Body */}
    <Column className="relative z-10 p-lg gap-sm">
      <TextStyled className="text-heading6 text-brand-primary-100">
        Features:
      </TextStyled>
      <TextStyled className="text-body text-brand-primary-80">
        • All modules unlocked
      </TextStyled>
      <TextStyled className="text-body text-brand-primary-80">
        • Realistic VHF radio simulator
      </TextStyled>
      <TextStyled className="text-body text-brand-primary-80">
        • Audio narration
      </TextStyled>
    </Column>
  </ViewStyled>
);

// Example 4: With Custom Opacity
export const CustomOpacityExample = () => (
  <ViewStyled className="relative w-full h-48 rounded-lg overflow-hidden bg-white">
    <GradientBackground className="opacity-30" />
    <Column className="relative z-10 p-lg justify-center items-center h-full">
      <TextStyled className="text-heading4 text-brand-primary-100">
        Subtle Gradient
      </TextStyled>
      <TextStyled className="text-caption text-brand-primary-60 mt-xs">
        With reduced opacity
      </TextStyled>
    </Column>
  </ViewStyled>
);

// Example 5: Full Screen Background
export const FullScreenExample = () => (
  <View className="relative w-full h-screen bg-white">
    <GradientBackground />
    <Column className="relative z-10 p-xl justify-center items-center h-full">
      <TextStyled className="text-heading2 text-brand-primary-100">
        Full Screen Gradient
      </TextStyled>
    </Column>
  </View>
);

// Example 6: Blue Gradient Preset
export const BlueGradientExample = () => (
  <ViewStyled className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
    <GradientBackground config={GRADIENT_PRESETS.blue} />
    <Column className="relative z-10 p-lg justify-center items-center h-full">
      <TextStyled className="text-heading3 text-brand-primary-100">
        Blue Theme
      </TextStyled>
      <TextStyled className="text-body text-brand-primary-60 mt-sm">
        Using blue preset
      </TextStyled>
    </Column>
  </ViewStyled>
);

// Example 7: Gold Gradient Preset
export const GoldGradientExample = () => (
  <ViewStyled className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
    <GradientBackground config={GRADIENT_PRESETS.gold} />
    <Column className="relative z-10 p-lg justify-center items-center h-full">
      <TextStyled className="text-heading3 text-brand-accent-100">
        Gold Theme
      </TextStyled>
      <TextStyled className="text-body text-brand-accent-80 mt-sm">
        Using gold preset
      </TextStyled>
    </Column>
  </ViewStyled>
);

// Example 8: Purple Gradient Preset with Animation
export const PurpleAnimatedExample = () => (
  <ViewStyled className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
    <GradientBackground config={GRADIENT_PRESETS.purple} animated animationDuration={3000} />
    <Column className="relative z-10 p-lg justify-center items-center h-full">
      <TextStyled className="text-heading3" style={{ color: '#9333ea' }}>
        Purple Theme
      </TextStyled>
      <TextStyled className="text-body mt-sm" style={{ color: '#a855f7' }}>
        Animated purple gradient
      </TextStyled>
    </Column>
  </ViewStyled>
);

// Example 9: Green Gradient Preset
export const GreenGradientExample = () => (
  <ViewStyled className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
    <GradientBackground config={GRADIENT_PRESETS.green} />
    <Column className="relative z-10 p-lg justify-center items-center h-full">
      <TextStyled className="text-heading3" style={{ color: '#22c55e' }}>
        Green Theme
      </TextStyled>
      <TextStyled className="text-body mt-sm" style={{ color: '#4ade80' }}>
        Using green preset
      </TextStyled>
    </Column>
  </ViewStyled>
);
