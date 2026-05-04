# CardInfo Component

An informational card component extracted from Figma design system. Displays detailed messages with title, subtitle, and body text across multiple variants.

## Figma Source

- **Component**: CardInfo
- **Node ID**: 856:56121
- **Location**: Design System → Components → Molecules

## Features

- ✅ Five variants: `danger`, `warning`, `success`, `info`, `generic`
- ✅ Icon with matching color scheme
- ✅ Title, subtitle, and body text support
- ✅ Bordered container with subtle background
- ✅ Optional custom icon
- ✅ Cross-platform (React Native + Next.js web)

## Design Specifications

### Layout
- **Border Radius**: `radius-md` (12px)
- **Padding**: 
  - Left: `spacing-sm` (8px)
  - Right: `spacing-md` (12px)
  - Vertical: `spacing-sm` (8px)
- **Gap**: `spacing-xs` (10px) between elements
- **Width**: Full width (335px in Figma, flexible in implementation)

### Typography
- **Title**: button style (16px Montserrat Bold, line-height 28px)
- **Subtitle**: footnote style (13.33px Montserrat Medium, line-height 16px)
- **Body**: footnote style (13.33px Montserrat Medium, line-height 16px)
- **Title/Subtitle Color**: `material-surface-80` (#333333)
- **Body Color**: `material-surface-60` (#666666)

### Color Variants

#### Danger (Red) - Default
- Background: `system-error-5` (rgba(248, 43, 43, 0.05))
- Border: `system-error-40` (rgba(248, 43, 43, 0.4))
- Icon: `system-error-100` (#f82b2b)
- **Use Case**: Errors, critical warnings, destructive actions

#### Warning (Yellow)
- Background: `system-warning-5` (rgba(255, 186, 66, 0.05))
- Border: `system-warning-40` (rgba(255, 186, 66, 0.4))
- Icon: `system-warning-100` (#ffba42)
- **Use Case**: Cautions, important notices, data usage warnings

#### Success (Green)
- Background: `system-success-5` (rgba(131, 174, 39, 0.05))
- Border: `system-success-40` (rgba(131, 174, 39, 0.4))
- Icon: `system-success-100` (#83ae27)
- **Use Case**: Success messages, confirmations, completed actions

#### Info (Blue)
- Background: `brand-primary-alpha-5` (rgba(38, 46, 188, 0.05))
- Border: `brand-primary-alpha-40` (rgba(38, 46, 188, 0.4))
- Icon: `brand-primary-100` (#262ebc)
- **Use Case**: Informational messages, tips, general notices

#### Generic (Gray)
- Background: `material-alphaDark-5` (rgba(22, 22, 22, 0.05))
- Border: `material-alphaDark-40` (rgba(22, 22, 22, 0.4))
- Icon: `material-surface-100` (#161616)
- **Use Case**: Neutral information, general content

## Usage

### Basic Example

```tsx
import CardInfo from '@/components/molecules/CardInfo';

<CardInfo
  title="Offline access"
  subtitle="Download module for offline access"
  body="This module includes pictures, videos, and audio. To avoid using up your mobile data, we recommend downloading it over Wi-Fi."
  type="danger"
/>
```

### All Variants

```tsx
// Danger (default)
<CardInfo
  title="Offline access"
  subtitle="Download module for offline access"
  body="This module includes pictures, videos, and audio..."
  type="danger"
/>

// Warning
<CardInfo
  title="Data usage warning"
  subtitle="Large download ahead"
  body="This will use significant mobile data. Connect to Wi-Fi to proceed."
  type="warning"
/>

// Success
<CardInfo
  title="Download complete"
  subtitle="Module ready for offline use"
  body="You can now access this module without an internet connection."
  type="success"
/>

// Info
<CardInfo
  title="New feature available"
  subtitle="Check out offline mode"
  body="Download modules to access them without internet connection."
  type="info"
/>

// Generic
<CardInfo
  title="Module information"
  subtitle="About this content"
  body="This module contains 12 lessons covering marine safety basics."
  type="generic"
/>
```

### With Custom Icon

```tsx
import Icon from '@/components/atoms/Icon';

<CardInfo
  title="Custom icon example"
  subtitle="Using a custom icon"
  body="You can provide your own icon component."
  type="info"
  icon={
    <Icon 
      iconName="ico-download" 
      iconType="ui" 
      color="text-brand-primary-100" 
      className="w-6 h-6" 
    />
  }
/>
```

### Minimal Content

```tsx
// Title only
<CardInfo
  title="Simple message"
  type="info"
/>

// Title and subtitle
<CardInfo
  title="Quick notice"
  subtitle="Brief description"
  type="warning"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Offline access'` | Card title (bold heading) |
| `subtitle` | `string` | `'Download module for offline access'` | Card subtitle (medium weight) |
| `body` | `string` | `'This module includes...'` | Card body text (main content) |
| `icon` | `ReactNode` | `undefined` | Optional custom icon component |
| `type` | `'danger' \| 'warning' \| 'success' \| 'info' \| 'generic'` | `'danger'` | Card variant/type |
| `className` | `string` | `''` | Additional CSS classes |

## Implementation Notes

### Current Implementation
- ✅ Uses Column and Row atoms for layout
- ✅ Uses TextStyled for typography
- ✅ Uses Icon atom with proper color variants
- ✅ Default icon: `ico-close-round` from nav icons
- ✅ Fully responsive with text wrapping
- ✅ Uses NativeWind for cross-platform styling

### Differences from TileInfo
- **CardInfo**: More detailed with title, subtitle, and body text
- **TileInfo**: Simpler with just a single text message
- **Use CardInfo** for: Detailed notifications, warnings, feature announcements
- **Use TileInfo** for: Quick alerts, inline messages, simple notifications

## Related Components

- `TileInfo` - Simpler alert tile with single text
- `TextStyled` - Typography component
- `Row` / `Column` - Flex layout components
- `ViewStyled` - Container component
- `Icon` - Icon component

## Design Tokens Used

- **Spacing**: `spacing-xs`, `spacing-sm`, `spacing-md`
- **Radius**: `radius-md`
- **Colors**: 
  - `brand-primary-100`, `brand-primary-alpha-5`, `brand-primary-alpha-40`
  - `system-error-5`, `system-error-40`, `system-error-100`
  - `system-warning-5`, `system-warning-40`, `system-warning-100`
  - `system-success-5`, `system-success-40`, `system-success-100`
  - `material-surface-60`, `material-surface-80`, `material-surface-100`
  - `material-alphaDark-5`, `material-alphaDark-40`
- **Typography**: `button`, `footnote`
