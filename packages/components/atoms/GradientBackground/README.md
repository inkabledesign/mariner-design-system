# GradientBackground Component

A complex multi-layer SVG gradient background component that replicates the CSS gradient:

```css
background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 69.1%, rgba(255, 255, 255, 0.05) 100%),
            radial-gradient(126.25% 128.12% at 98.14% 0%, rgba(38, 46, 188, 0.05) 11.54%, rgba(38, 46, 188, 0.00) 94.23%),
            radial-gradient(139.67% 141.42% at 0% 0%, rgba(166, 135, 86, 0.05) 30.77%, rgba(17, 21, 86, 0.00) 61.06%);
```

## Features

- **Three-layer gradient system**:
  1. Linear gradient (180deg) - White fade from bottom
  2. Radial gradient (top-right) - Blue tint (#262ebc / brand-primary-100)
  3. Radial gradient (top-left) - Gold tint (#a68756 / brand-accent-100)
- Absolute positioned to fill parent container
- SVG-based for cross-platform compatibility
- Fully responsive with `preserveAspectRatio="none"`

## Usage

### Basic Usage

```tsx
import GradientBackground from '@/components/atoms/GradientBackground';

<View className="relative w-full h-64">
  <GradientBackground />
  <View className="relative z-10">
    {/* Your content here */}
  </View>
</View>
```

### With Custom Classes

```tsx
<View className="relative w-full h-full">
  <GradientBackground className="opacity-50" />
  <View className="relative z-10">
    {/* Content */}
  </View>
</View>
```

### In a Card

```tsx
<ViewStyled className="relative rounded-lg overflow-hidden">
  <GradientBackground />
  <Column className="relative z-10 p-lg">
    <TextStyled>Content with gradient background</TextStyled>
  </Column>
</ViewStyled>
```

## Props

```typescript
interface GradientBackgroundProps {
  width?: string | number;      // Default: '100%'
  height?: string | number;     // Default: '100%'
  className?: string;           // Additional Tailwind classes
}
```

## Gradient Layers

### Layer 1: Linear Gradient (Top Layer)
- **Direction**: 180deg (top to bottom)
- **Colors**: 
  - 0% - 69.1%: Transparent
  - 100%: White 5% opacity
- **Effect**: Subtle white fade at bottom

### Layer 2: Radial Gradient 1 (Middle Layer)
- **Position**: Top-right (98.14%, 0%)
- **Size**: 126.25% × 128.12%
- **Colors**:
  - 11.54%: Blue (#262ebc) 5% opacity
  - 94.23%: Transparent
- **Effect**: Blue glow from top-right corner

### Layer 3: Radial Gradient 2 (Bottom Layer)
- **Position**: Top-left (0%, 0%)
- **Size**: 139.67% × 141.42%
- **Colors**:
  - 30.77%: Gold (#a68756) 5% opacity
  - 61.06%: Dark blue (#111556) transparent
- **Effect**: Gold glow from top-left corner

## Design Specs

- **Position**: Absolute (fills parent)
- **Z-index**: Behind content (use `z-10` or higher on content)
- **Colors**: 
  - Blue: rgba(38, 46, 188, 0.05) - brand-primary-100
  - Gold: rgba(166, 135, 86, 0.05) - brand-accent-100
  - White: rgba(255, 255, 255, 0.05)

## Use Cases

- Card backgrounds
- Hero section backgrounds
- Modal/dialog backgrounds
- Subscription card backgrounds
- Feature section backgrounds
- Any container needing subtle gradient overlay

## Important Notes

1. **Parent Container**: Must have `position: relative` or `position: absolute`
2. **Content Z-Index**: Content should have `relative z-10` or higher
3. **Overflow**: Parent should have `overflow-hidden` if using rounded corners
4. **Performance**: SVG gradients are performant and work on all platforms

## Example: Subscription Card

```tsx
<ViewStyled className="relative rounded-lg overflow-hidden">
  <GradientBackground />
  
  <Column className="relative z-10 p-lg">
    <TextStyled className="text-heading4">Premium Plan</TextStyled>
    <TextStyled className="text-body">$9.99/month</TextStyled>
  </Column>
</ViewStyled>
```

## Cross-Platform

Works on:
- ✅ React Native (iOS/Android)
- ✅ Next.js (Web)
- ✅ Expo

Uses `react-native-svg` which is supported across all platforms.
