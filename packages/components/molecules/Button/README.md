# Button Component

A versatile button component extracted from Figma design system. Supports multiple variants, icon positions, and styles.

## Figma Source

- **Component**: Buttons/ButtonLRG
- **Node ID**: 445:60033
- **Location**: Design System → Components → Molecules

## Features

- ✅ Three variants: `primary`, `secondary`, `text`
- ✅ Optional icons (left, right, or none)
- ✅ Rounded or sharp corners
- ✅ Icon-only mode (no text)
- ✅ Disabled state support
- ✅ Cross-platform (React Native + Next.js web)

## Design Specifications

### Layout
- **Border Radius**: `radius-xxl` (36px) for round variant
- **Padding**: 
  - Text only: `px-xl py-md` (24px horizontal, 12px vertical)
  - Icon left: `pl-lg pr-xl py-md` (16px left, 24px right, 12px vertical)
  - Icon right: `pl-xl pr-lg py-md` (24px left, 16px right, 12px vertical)
  - Icon only: `p-md` (12px all sides)
  - Text variant: `px-lg py-md` (16px horizontal, 12px vertical)
- **Gap**: `spacing-md` (16px) between icon and text
- **Border**: `brand-accent-100` (#a68756) for primary and secondary variants

### Typography
- **Font**: Montserrat Bold
- **Size**: 16px (button style)
- **Line Height**: 28px
- **Weight**: 700

### Color Variants

#### Primary (Blue)
- Background: `brand-primary-100` (#262ebc)
- Text: `material-surface-0` (#f4f4f4)
- Icon: `material-surface-0` (#f4f4f4)
- Border: `brand-accent-100` (#a68756)

#### Secondary (White)
- Background: `material-surface-0` (#f4f4f4)
- Text: `brand-primary-100` (#262ebc)
- Icon: `brand-primary-100` (#262ebc)
- Border: `brand-accent-100` (#a68756)

#### Text (No Background)
- Background: None
- Text: `brand-primary-100` (#262ebc)
- Icon: `brand-primary-100` (#262ebc)
- Border: None

## Usage

### Basic Examples

```tsx
import Button from '@/components/molecules/Button';

// Primary button with text
<Button text="Button text" variant="primary" />

// Secondary button with text
<Button text="Button text" variant="secondary" />

// Text-only button
<Button text="Button text" variant="text" />
```

### With Icons

```tsx
// Primary button with left icon
<Button
  text="Button text"
  variant="primary"
  iconPosition="left"
  iconName="ico-berth-round"
  iconType="input"
/>

// Secondary button with right icon
<Button
  text="Button text"
  variant="secondary"
  iconPosition="right"
  iconName="ico-berth-round"
  iconType="input"
/>

// Icon-only button
<Button
  variant="primary"
  iconPosition="left"
  iconName="ico-berth-round"
  iconType="input"
/>
```

### With Press Handler

```tsx
<Button
  text="Submit"
  variant="primary"
  onPress={() => console.log('Button pressed')}
/>
```

### Disabled State

```tsx
<Button
  text="Disabled"
  variant="primary"
  disabled={true}
/>
```

### Sharp Corners

```tsx
<Button
  text="Sharp Button"
  variant="primary"
  radius="none"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `undefined` | Button text label |
| `variant` | `'primary' \| 'secondary' \| 'text'` | `'primary'` | Button variant/style |
| `radius` | `'round' \| 'none'` | `'round'` | Border radius style |
| `iconPosition` | `'left' \| 'right' \| 'none'` | `'none'` | Icon position relative to text |
| `iconName` | `string` | `undefined` | Icon name from iconMap (required if iconPosition is not 'none') |
| `iconType` | `IconCategoryType` | `'input'` | Icon type/category |
| `onPress` | `() => void` | `undefined` | Press handler function |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Additional CSS classes |

## Implementation Notes

### Current Implementation
- ✅ Uses PressableStyled for cross-platform press handling
- ✅ Uses TextStyled with button typography
- ✅ Uses Icon atom for icon rendering
- ✅ Supports all Figma variants
- ✅ Proper spacing and padding for all configurations

### Accessibility
- Uses PressableStyled which handles accessibility automatically
- Disabled state reduces opacity to 50%
- Text is properly styled for readability

## Related Components

- `PressableStyled` - Cross-platform pressable wrapper
- `TextStyled` - Typography component
- `Icon` - Icon component
- `Row` - Flex row layout

## Design Tokens Used

- **Spacing**: `spacing-md`, `spacing-lg`, `spacing-xl`
- **Radius**: `radius-xxl` (36px for rounded buttons)
- **Colors**: 
  - `brand-primary-100`
  - `brand-accent-100`
  - `material-surface-0`
- **Typography**: `button` (16px Montserrat Bold, line-height 28px)

## Examples in Use

### Navigation Button
```tsx
<Button
  text="Next"
  variant="primary"
  iconPosition="right"
  iconName="ico-chevron-right"
  iconType="nav"
  onPress={() => navigation.navigate('NextScreen')}
/>
```

### Form Submit Button
```tsx
<Button
  text="Submit"
  variant="primary"
  onPress={handleSubmit}
  disabled={!isValid}
/>
```

### Cancel Button
```tsx
<Button
  text="Cancel"
  variant="secondary"
  onPress={handleCancel}
/>
```

### Link-style Button
```tsx
<Button
  text="Learn more"
  variant="text"
  radius="none"
  onPress={() => navigation.navigate('Details')}
/>
```
