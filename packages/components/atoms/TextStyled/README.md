# TextStyled Component

A fully typed text component that uses the design token system for consistent typography and colors.

## Usage

### Basic Example

```tsx
import TextStyled from '@/components/atoms/TextStyled';

// Simple heading
<TextStyled
  breakpoint="mobile-sm"
  textStyle="heading1"
  themeMode="light"
  colorCategory="brand"
  colorName="primary"
  colorVariant="100"
  text="Welcome to the App"
/>
```

### With Children

```tsx
<TextStyled
  breakpoint="mobile-sm"
  textStyle="body"
  themeMode="light"
  colorCategory="material"
  colorName="surface"
  colorVariant="100">
  This is body text with children
</TextStyled>
```

### Using Solid Colors

```tsx
<TextStyled
  breakpoint="mobile-sm"
  textStyle="button"
  themeMode="light"
  colorCategory="solid"
  colorName="white"
  textAlign="center"
  text="Click Me"
/>
```

### Using System Colors

```tsx
<TextStyled
  breakpoint="mobile-sm"
  textStyle="caption"
  themeMode="light"
  colorCategory="system"
  colorName="error"
  colorVariant="100"
  text="Error message"
/>
```

### With Custom Styles

```tsx
<TextStyled
  breakpoint="mobile-sm"
  textStyle="heading2"
  themeMode="dark"
  colorCategory="brand"
  colorName="secondary"
  colorVariant="80"
  textAlign="center"
  style={{ marginBottom: 16 }}
  text="Centered Heading"
/>
```

### Responsive Example

```tsx
import { getCurrentBreakpoint } from '@/style/tokens.utils';

const MyComponent = () => {
  const breakpoint = getCurrentBreakpoint();
  
  return (
    <TextStyled
      breakpoint={breakpoint}
      textStyle="heading1"
      themeMode="light"
      colorCategory="brand"
      colorName="primary"
      colorVariant="100"
      text="Responsive Heading"
    />
  );
};
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `breakpoint` | `'mobile-sm' \| 'tablet-md' \| 'desktop-lg' \| 'desktop-xlg'` | Current responsive breakpoint |
| `textStyle` | `keyof TextStyles` | Typography style (heading1-6, body, button, etc.) |
| `themeMode` | `'light' \| 'dark'` | Theme mode |
| `colorCategory` | `'brand' \| 'material' \| 'solid' \| 'system'` | Color category |
| `colorName` | `string` | Color name (e.g., 'primary', 'white', 'error') |

### Optional Props

| Prop | Type | Description |
|------|------|-------------|
| `text` | `string` | Text content |
| `children` | `React.ReactNode` | Child elements |
| `colorVariant` | `'5' \| '10' \| '20' \| '40' \| '60' \| '80' \| '100'` | Color variant (if applicable) |
| `textAlign` | `'left' \| 'center' \| 'right' \| 'justify'` | Text alignment (default: 'left') |
| `style` | `TextStyle` | Additional React Native styles |

## Available Text Styles

- `heading1` - Largest heading (39.81px on mobile-sm)
- `heading2` - Second heading (33.18px on mobile-sm)
- `heading3` - Third heading (27.65px on mobile-sm)
- `heading4` - Fourth heading (23.04px on mobile-sm)
- `heading5` - Fifth heading (19.2px on mobile-sm)
- `heading6` - Smallest heading (16px on mobile-sm)
- `body` - Body text (16px)
- `button` - Button text (16px, bold)
- `input` - Input text (18px)
- `placeholder` - Placeholder text (15px, italic)
- `caption` - Caption text (13.33px)
- `label` - Label text (11.11px)
- `footnote` - Footnote text (13.33px)
- `link` - Link text (13px)

## Color Categories

### Brand Colors
- `primary` - Primary brand color (variants: 10, 20, 40, 60, 80, 100)
- `secondary` - Secondary brand color (variants: 5, 10, 20, 40, 60, 80, 100)
- `accent` - Accent color (variants: 5, 10, 20, 40, 60, 80, 100)

### Material Colors
- `surface` - Surface colors (variants: 0, 5, 10, 20, 40, 60, 80, 100)
- `alphaDark` - Alpha dark colors (variants: 5, 10, 20, 40, 60, 80)

### Solid Colors
- `white` - White color
- `black` - Black color
- `primary` - Solid primary
- `secondary` - Solid secondary
- `accent` - Solid accent

### System Colors
- `error` - Error color (variants: 5, 20, 40, 60, 80, 100)
- `success` - Success color (no variants)
- `warning` - Warning color (no variants)

## Notes

- All typography styles automatically scale based on the breakpoint
- Font weights and styles are applied from the design tokens
- Colors automatically adapt to light/dark theme mode
- TypeScript provides full autocomplete and type safety
