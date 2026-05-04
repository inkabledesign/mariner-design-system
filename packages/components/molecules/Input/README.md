# Input Component

A text input field component with label, error message, and optional icon support.

## Figma Design

- **Node ID**: 445:60442
- **Component**: Input/TextInput
- **Design URL**: [Figma Link](https://www.figma.com/design/PIV5EPzuNOLhcXxu9VtuXE/Mariner?node-id=445-60442&m=dev)

## Features

- Label text above input
- Error message below input
- Optional icon (left, right, or none)
- Focus/blur state management
- Automatic border color changes based on state
- Cross-platform (React Native + Next.js)

## Design Specifications

### States

1. **Blurred (Default)**
   - Border: `brand-primary-20` (#d4d5f2)
   - Background: `material-surface-0` (#f4f4f4)

2. **Focused**
   - Border: `brand-primary-60` (#7d82d7)
   - Background: `material-surface-0` (#f4f4f4)

3. **Error**
   - Border: `system-error-100` (#f82b2b)
   - Error text displayed below input

### Typography

- **Label**: `footnote` (11.11px Montserrat Medium, line-height 16px)
- **Placeholder**: 15px Montserrat Italic, line-height 21px, color: `material-surface-60` (#666666)
- **Input Value**: 18px Montserrat Regular, line-height 21px, letter-spacing -0.3px, color: `brand-primary-100` (#262ebc)
- **Error**: `footnote` (11.11px Montserrat Medium, line-height 16px, color: `system-error-100`)

### Layout

- **Height**: 52px
- **Border Radius**: `radius-sm` (6px)
- **Padding**: 
  - With icon: `px-md` (12px)
  - Without icon: `px-lg` (16px)
- **Gap**: `gap-md` (12px between icon and text)
- **Container Gap**: `gap-xs` (6px between label, input, and error)

### Icon

- **Size**: 24x24px (w-6 h-6)
- **Position**: left, right, or none
- **Auto-detection**: Icon type is automatically detected by Icon component

## Usage

### Basic Input (No Icon)

```tsx
import Input from '@/components/molecules/Input';

<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
/>
```

### Input with Left Icon

```tsx
<Input
  label="Username"
  placeholder="Enter username"
  value={username}
  onChangeText={setUsername}
  iconName="ico-berth-round"
  iconPosition="left"
/>
```

### Input with Right Icon

```tsx
<Input
  label="Password"
  placeholder="Enter password"
  value={password}
  onChangeText={setPassword}
  iconName="ico-eye"
  iconPosition="right"
  secureTextEntry
/>
```

### Input with Error

```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  error="Invalid email address"
/>
```

### Full Example with Validation

```tsx
import React, { useState } from 'react';
import Input from '@/components/molecules/Input';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (text: string) => {
    setEmail(text);
    if (!text.includes('@')) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      value={email}
      onChangeText={validateEmail}
      error={emailError}
      iconName="ico-mail"
      iconPosition="left"
      keyboardType="email-address"
      autoCapitalize="none"
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above the input |
| `error` | `string` | - | Error message displayed below the input |
| `iconName` | `IconName` | - | Icon name from icon library |
| `iconPosition` | `'left' \| 'right' \| 'none'` | `'none'` | Position of the icon |
| `className` | `string` | `''` | Additional CSS classes |
| `value` | `string` | - | Controlled input value |
| `onChangeText` | `(text: string) => void` | - | Change handler |
| `placeholder` | `string` | - | Placeholder text |
| `...textInputProps` | `TextInputProps` | - | All other React Native TextInput props |

## Component Structure

```
Input (Column)
├── Label (ViewStyled + TextStyled) [optional]
├── Input Container (Row)
│   ├── Left Icon (Icon) [optional]
│   ├── TextInput
│   └── Right Icon (Icon) [optional]
└── Error Message (ViewStyled + TextStyled) [optional]
```

## State Management

The component internally manages focus state to update border colors:
- Blurred: `border-brand-primary-20`
- Focused: `border-brand-primary-60`
- Error: `border-system-error-100` (overrides focus state)

## Accessibility

- Label provides context for screen readers
- Error messages are announced to assistive technologies
- Supports all standard TextInput accessibility props

## Cross-Platform Notes

- Uses React Native `TextInput` component
- Works on both mobile (React Native) and web (Next.js via React Native Web)
- NativeWind/Tailwind classes for consistent styling
- Font family uses Montserrat (ensure fonts are loaded)

## Related Components

- **Icon**: Used for left/right icons
- **TextStyled**: Used for label and error text
- **Column/Row**: Layout components
- **ViewStyled**: Container component
