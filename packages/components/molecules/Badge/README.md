# Badge Component

A versatile badge component extracted from Figma design system. Displays status indicators with optional icons and text across multiple variants and sizes.

## Figma Source

- **Component**: Badge/Badge
- **Node ID**: 1440:81661
- **Location**: Design System → Components → Molecules

## Features

- ✅ Five variants: `primary`, `secondary`, `danger`, `success`, `warning`
- ✅ Two sizes: `lg` (large), `sm` (small)
- ✅ Optional icon and text — render conditionally via `iconName` / `label`
- ✅ Icon-only, text-only, or combined modes
- ✅ Rounded pill shape
- ✅ Custom icon support
- ✅ Cross-platform (React Native + Next.js web)

## Design Specifications

### Layout
- **Border Radius**: `radius-lg` (18px) - pill shape
- **Padding**: 
  - Icon + Text (lg): `pl-xs pr-md py-xxs` (6px left, 12px right, 4px vertical)
  - Icon + Text (sm): `pl-xxs pr-md py-xxs` (4px left, 12px right, 4px vertical)
  - Text only: `px-md py-xxs` (12px horizontal, 4px vertical)
  - Icon only: `p-xxs` (4px all sides)
- **Gap**: `spacing-sm` (8px) between icon and text
- **Icon Size**: 
  - Large: 20x20px (w-5 h-5)
  - Small: 16x16px (w-4 h-4)

### Typography
- **Large**: footnote style (13px Montserrat SemiBold, line-height 22px)
- **Small**: caption style (11px Montserrat SemiBold, line-height 17px)

### Color Variants

#### Primary (Blue)
- Background: `brand-primary-100` (#262ebc)
- Text: `text-light-primary` (#f8f9fd)
- Icon: `text-light-primary` (#f8f9fd)
- Border: `brand-accent-100` (#a68756)
- **Use Case**: Active status, selected items, primary indicators

#### Secondary (White)
- Background: `material-surface-light` (#ffffff)
- Text: `text-primary` (#262ebc)
- Icon: `text-primary` (#262ebc)
- Border: `brand-accent-80` (#b89f78)
- **Use Case**: Inactive status, secondary indicators, outlined badges

#### Danger (Red)
- Background: `system-error-80` (rgba(248, 43, 43, 0.8))
- Text: `text-light-primary` (#f8f9fd)
- Icon: `text-light-primary` (#f8f9fd)
- Border: `system-error-80` (rgba(248, 43, 43, 0.8))
- **Use Case**: Errors, critical alerts, unavailable status

#### Success (Green)
- Background: `system-success-60` (rgba(131, 174, 39, 0.6))
- Text: `text-dark-primary` (#000023)
- Icon: `text-dark-primary` (#000023)
- Border: `system-success-80` (rgba(131, 174, 39, 0.8))
- **Use Case**: Success status, completed items, available status

#### Warning (Yellow)
- Background: `system-warning-80` (rgba(255, 186, 66, 0.8))
- Text: `text-dark-primary` (#000023)
- Icon: `text-dark-primary` (#000023)
- Border: `system-warning-80` (rgba(255, 186, 66, 0.8))
- **Use Case**: Warnings, pending status, attention needed

## Usage

### Basic Examples

```tsx
import Badge from '@/components/molecules/Badge';

// Primary badge (default)
<Badge label="Available" variant="primary" size="lg" />

// Secondary badge
<Badge label="Available" variant="secondary" size="lg" />

// Danger badge
<Badge label="Unavailable" variant="danger" size="sm" />

// Success badge
<Badge label="Complete" variant="success" size="lg" />

// Warning badge
<Badge label="Pending" variant="warning" size="sm" />
```

### Size Variants

```tsx
// Large badge
<Badge label="Available" variant="primary" size="lg" />

// Small badge
<Badge label="Available" variant="primary" size="sm" />
```

### Icon and Text Combinations

Icon and label render conditionally based on the props provided:

```tsx
// Icon + Text
<Badge label="Available" variant="primary" iconName="ico-tick-round" />

// Text only — omit iconName
<Badge label="Available" variant="primary" />

// Icon only — omit label
<Badge variant="primary" iconName="ico-tick-round" />
```

### Custom Icons

```tsx
// Custom icon
<Badge 
  label="Update" 
  variant="danger" 
  iconName="ico-download" 
/>

// Different icons per variant
<Badge label="Pinned" variant="primary" iconName="ico-pin" />
<Badge label="Locked" variant="danger" iconName="ico-locked-round" />
```

### Dark Mode

Text and container colors adapt via `dark:` classes. The icon color is resolved
from tokens at runtime — pass `themeMode` so it matches the active theme:

```tsx
<Badge label="Available" variant="primary" themeMode={appTheme} />
```

### Real-World Examples

```tsx
// Module status badges
<Badge label="Available" variant="success" size="sm" />
<Badge label="Coming Soon" variant="warning" size="sm" />
<Badge label="Locked" variant="danger" size="sm" />

// Update indicator
<Badge label="Update" variant="danger" size="sm" iconName="ico-download-round-fill" />

// Completion status
<Badge label="Complete" variant="success" size="lg" iconName="ico-tick-round" />
<Badge label="In Progress" variant="warning" size="lg" iconName="ico-info-round" />

// Icon-only indicators
<Badge variant="success" size="sm" iconName="ico-tick-round" />
<Badge variant="danger" size="sm" iconName="ico-close-round" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Badge label text (renders when provided) |
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'warning'` | `'primary'` | Badge variant/type (`'error'` and `'default'` are deprecated aliases) |
| `size` | `'lg' \| 'sm'` | `'lg'` | Badge size |
| `iconName` | `IconName` | `undefined` | Icon to render (renders when provided) |
| `themeMode` | `'light' \| 'dark'` | `'light'` | Theme mode for icon color resolution |
| `className` | `string` | `''` | Additional CSS classes |

## Implementation Notes

### Current Implementation
- ✅ Uses Row atom for layout
- ✅ Uses ViewStyled for container
- ✅ Uses TextStyled for typography
- ✅ Uses Icon atom with semantic text color tokens
- ✅ Icon renders when `iconName` is provided (no `hasIcon`/`hasText` flags)
- ✅ Fully responsive
- ✅ Uses NativeWind for cross-platform styling

### Padding Logic
The component automatically adjusts padding based on content:
- **Icon + Text**: Asymmetric padding (more on right)
- **Text only**: Symmetric horizontal padding
- **Icon only**: Equal padding all sides

## Use Cases

### Module Cards
```tsx
// Status indicator on module cards
<Badge label="Available" variant="success" size="sm" />
<Badge label="Update" variant="danger" size="sm" />
```

### List Items
```tsx
// Status badges in lists
<Badge label="Complete" variant="success" size="sm" />
<Badge label="Locked" variant="danger" size="sm" />
```

### Headers
```tsx
// Large badges in headers
<Badge label="Premium" variant="primary" size="lg" />
<Badge label="Beta" variant="warning" size="lg" />
```

### Inline Indicators
```tsx
// Small icon-only badges
<Badge variant="success" size="sm" iconName="ico-tick-round" />
```

## Related Components

- `Button` - Action buttons
- `ButtonNumber` - Numbered step indicators
- `Icon` - Icon component
- `TextStyled` - Typography component
- `Row` - Flex row layout

## Design Tokens Used

### Spacing
- `spacing-xxs` (4px)
- `spacing-xs` (6px)
- `spacing-sm` (8px)
- `spacing-md` (12px)

### Radius
- `radius-lg` (18px)

### Colors
- `brand-primary-100`, `brand-accent-80`, `brand-accent-100`
- `material-surface-light`
- `system-error-80`, `system-error-100`
- `system-success-60`, `system-success-80`
- `system-warning-80`
- `text-primary`, `text-light-primary`, `text-dark-primary`

### Typography
- `footnote` (13px Montserrat SemiBold)
- `caption` (11px Montserrat SemiBold)

## Accessibility Notes

- High contrast text/background combinations
- Clear visual distinction between variants
- Icon provides visual reinforcement
- Text is readable at both sizes
- Color is not the only indicator (icon + text)

## Performance Considerations

- Lightweight component with minimal re-renders
- No external dependencies beyond project atoms
- Efficient style switching via object lookup
- No animations (can be added if needed)
