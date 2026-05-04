# ToggleSwitch Component

A cross-platform toggle switch component following the Figma design system.

## Features

- **Cross-platform**: Works on React Native (iOS/Android) and Next.js web
- **Animated**: Smooth transition between on/off states
- **Accessible**: Supports disabled state
- **Design tokens**: Uses Figma design tokens via NativeWind

## Usage

```tsx
import ToggleSwitch from '@/components/atoms/ToggleSwitch';
import { useState } from 'react';

function Example() {
  const [isEnabled, setIsEnabled] = useState(false);
  
  return (
    <ToggleSwitch 
      checked={isEnabled} 
      onToggle={(checked) => setIsEnabled(checked)} 
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the switch is on or off |
| `onToggle` | `(checked: boolean) => void` | - | Callback when switch is toggled |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `className` | `string` | `''` | Additional Tailwind classes |

## Design Tokens

- **Colors**: 
  - Active: `bg-brand-primary-100`
  - Inactive: `bg-material-surface-40`
  - Knob: `bg-material-surface-0`
- **Dimensions**: 
  - Width: `52px`
  - Height: `31px`
  - Knob: `27px`
- **Border Radius**: `rounded-full`

## Notes

- The knob automatically animates between left and right positions
- Disabled state reduces opacity to 50%
- Uses PressableStyled for cross-platform touch handling
