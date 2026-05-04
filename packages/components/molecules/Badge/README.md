# Badge Component

A versatile badge component extracted from Figma design system. Displays status indicators with optional icons and text across multiple variants and sizes.

## Figma Source

- **Component**: Badge/Badge
- **Node ID**: 1440:81661
- **Location**: Design System → Components → Molecules

## Features

- ✅ Five variants: `primary`, `secondary`, `danger`, `success`, `warning`
- ✅ Two sizes: `lg` (large), `sm` (small)
- ✅ Optional icon and text
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
- **Large**: heading6 style (16px Montserrat SemiBold, line-height 21px)
- **Small**: footnote style (13.33px Montserrat Medium, line-height 16px)

### Color Variants

#### Primary (Blue)
- Background: `brand-primary-100` (#262ebc)
- Text: `brand-primary-5` (#f4f5fc)
- Icon: `brand-primary-5` (#f4f5fc)
- Border: `brand-accent-100` (#a68756)
- Default Icon: `ico-tick-round`
- **Use Case**: Active status, selected items, primary indicators

#### Secondary (Light Blue)
- Background: `brand-primary-5` (#f4f5fc)
- Text: `brand-primary-100` (#262ebc)
- Icon: `brand-primary-100` (#262ebc)
- Border: `brand-accent-80` (#b89f78)
- Default Icon: `ico-tick-round`
- **Use Case**: Inactive status, secondary indicators, outlined badges

#### Danger (Red)
- Background: `system-error-100` (#f82b2b)
- Text: `material-surface-0` (#f4f4f4)
- Icon: `material-surface-0` (#f4f4f4)
- Border: `system-error-20` (rgba(248, 43, 43, 0.2))
- Default Icon: `ico-close-round`
- **Use Case**: Errors, critical alerts, unavailable status

#### Success (Green)
- Background: `system-success-100` (#83ae27)
- Text: `material-surface-0` (#f4f4f4)
- Icon: `material-surface-0` (#f4f4f4)
- Border: `system-success-20` (rgba(131, 174, 39, 0.2))
- Default Icon: `ico-tick-round`
- **Use Case**: Success status, completed items, available status

#### Warning (Yellow)
- Background: `system-warning-100` (#ffba42)
- Text: `material-surface-80` (#333333)
- Icon: `material-surface-80` (#333333)
- Border: `system-warning-20` (rgba(255, 186, 66, 0.2))
- Default Icon: `ico-info-round`
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

```tsx
// Icon + Text (default)
<Badge label="Available" variant="primary" hasIcon={true} hasText={true} />

// Text only
<Badge label="Available" variant="primary" hasIcon={false} hasText={true} />

// Icon only
<Badge variant="primary" hasIcon={true} hasText={false} />
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
<Badge label="Locked" variant="danger" iconName="ico-lock" />
```

### Real-World Examples

```tsx
// Module status badges
<Badge label="Available" variant="success" size="sm" />
<Badge label="Coming Soon" variant="warning" size="sm" />
<Badge label="Locked" variant="danger" size="sm" hasIcon={false} />

// Update indicator
<Badge label="Update" variant="danger" size="sm" />

// Completion status
<Badge label="Complete" variant="success" size="lg" />
<Badge label="In Progress" variant="warning" size="lg" />

// Icon-only indicators
<Badge variant="success" size="sm" hasText={false} />
<Badge variant="danger" size="sm" hasText={false} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Available'` | Badge label text |
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'warning'` | `'primary'` | Badge variant/type |
| `size` | `'lg' \| 'sm'` | `'lg'` | Badge size |
| `hasIcon` | `boolean` | `true` | Show icon |
| `hasText` | `boolean` | `true` | Show text |
| `iconName` | `IconName` | `undefined` | Optional custom icon name |
| `className` | `string` | `''` | Additional CSS classes |

## Implementation Notes

### Current Implementation
- ✅ Uses Row atom for layout
- ✅ Uses ViewStyled for container
- ✅ Uses TextStyled for typography
- ✅ Uses Icon atom with proper color variants
- ✅ Default icons per variant
- ✅ Supports custom icons via iconName prop
- ✅ Fully responsive
- ✅ Uses NativeWind for cross-platform styling

### Default Icons by Variant
- **Primary**: `ico-tick-round` (checkmark)
- **Secondary**: `ico-tick-round` (checkmark)
- **Danger**: `ico-close-round` (X/close)
- **Success**: `ico-tick-round` (checkmark)
- **Warning**: `ico-info-round` (info/alert)

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
<Badge label="Update" variant="danger" size="sm" hasIcon={false} />
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
<Badge variant="success" size="sm" hasText={false} />
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
- `brand-primary-5`, `brand-primary-100`
- `brand-accent-80`, `brand-accent-100`
- `system-error-20`, `system-error-100`
- `system-success-20`, `system-success-100`
- `system-warning-20`, `system-warning-100`
- `material-surface-0`, `material-surface-80`

### Typography
- `heading6` (16px Montserrat SemiBold)
- `footnote` (13.33px Montserrat Medium)

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
