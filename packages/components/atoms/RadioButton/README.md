# RadioButton Component

A cross-platform radio button component following the Figma design system.

## Features

- **Cross-platform**: Works on React Native (iOS/Android) and Next.js web
- **Visual feedback**: Shows inner circle when checked
- **Accessible**: Supports disabled state
- **Design tokens**: Uses Figma design tokens via NativeWind

## Usage

```tsx
import RadioButton from '@/components/atoms/RadioButton';
import { useState } from 'react';

function Example() {
  const [selectedOption, setSelectedOption] = useState('option1');
  
  return (
    <>
      <RadioButton 
        checked={selectedOption === 'option1'} 
        onPress={() => setSelectedOption('option1')} 
      />
      <RadioButton 
        checked={selectedOption === 'option2'} 
        onPress={() => setSelectedOption('option2')} 
      />
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the radio button is selected |
| `onPress` | `() => void` | - | Callback when radio button is pressed |
| `disabled` | `boolean` | `false` | Whether the radio button is disabled |
| `className` | `string` | `''` | Additional Tailwind classes |

## Design Tokens

- **Colors**: 
  - Checked border: `border-brand-primary-100`
  - Unchecked border: `border-material-surface-40`
  - Inner circle: `bg-brand-primary-100`
- **Dimensions**: 
  - Outer circle: `36px`
  - Inner circle: `20px`
  - Border width: `2px`
- **Border Radius**: `rounded-full`

## Notes

- The inner circle only appears when checked
- Disabled state reduces opacity to 50%
- Uses PressableStyled for cross-platform touch handling
- Typically used in radio button groups where only one option can be selected
