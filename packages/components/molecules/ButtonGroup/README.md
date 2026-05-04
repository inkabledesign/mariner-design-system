# ButtonGroup Component - iOS 16+ Style

A modern segmented control component inspired by iOS 16+ design with smooth animations and interactive feedback.

## Components Used

- `ViewStyled` - Container wrapper
- `Animated.View` - Sliding background indicator (react-native-reanimated)
- `Pressable` - Native pressable component with press states
- `TextStyled` - Styled text component

## Features

- **Drag Gesture**: Drag between options to switch (iOS-style swipe)
- **Sliding Animation**: Smooth spring animation when switching between options
- **Press Feedback**: Scale and opacity changes on press (iOS-style)
- **Snap to Position**: Automatically snaps to nearest option when released
- **Multiple Options**: Support for 2+ button options
- **Active State**: Animated sliding background with border and shadow
- **Typography**: Bold text for active, regular for inactive
- **Flexible Width**: Automatically adjusts to number of options (102px per button)
- **Cross-platform**: Works on React Native and Next.js

## Design Specs

- **Border radius**: rounded-full (56px)
- **Container border**: brand-accent-20 (#e4dbcc)
- **Active border**: brand-accent-100 (#a68756)
- **Active shadow**: 0px 0px 7px 5px rgba(166,135,86,0.1)
- **Typography**: 
  - Active: button (16px Montserrat Bold, line-height 28px)
  - Inactive: body (16px Montserrat Regular, line-height 21px)
- **Height**: 56px
- **Button width**: 102px each

## Usage

```tsx
import ButtonGroup from '@/components/molecules/ButtonGroup';

// Basic usage (Day/Night toggle with dynamic background)
<ButtonGroup
  options={[
    { id: 'day', label: 'Day' },
    { id: 'night', label: 'Night' }
  ]}
  selectedId={theme}
  onChange={(id) => setTheme(id)}
  variant={theme === 'day' ? 'light' : 'dark'}
/>

// Multiple options
<ButtonGroup
  options={[
    { id: 'metric', label: 'Metric' },
    { id: 'imperial', label: 'Imperial' },
    { id: 'nautical', label: 'Nautical' }
  ]}
  selectedId={unit}
  onChange={(id) => setUnit(id)}
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `options` | `ButtonGroupOption[]` | Yes | - | Array of button options |
| `selectedId` | `string` | Yes | - | Currently selected option ID |
| `onChange` | `(id: string) => void` | Yes | - | Callback when selection changes |
| `variant` | `'light' \| 'dark'` | No | `'light'` | Background theme variant |
| `className` | `string` | No | `''` | Additional CSS classes |

## Types

```typescript
interface ButtonGroupOption {
  id: string;
  label: string;
}
```

## Use Cases

- **Theme Toggle**: Day/Night mode switching
- **Unit Selection**: Metric/Imperial/Nautical units
- **View Mode**: List/Grid view toggle
- **Filter Options**: Active/Inactive/All filters

## Figma Reference

- **Node ID**: 1049:47520 (Tabs/ButtonGroup)
- **Design File**: Mariner Learning
