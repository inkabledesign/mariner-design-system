# ProgressBar Component

A reusable progress bar atom component for displaying progress indicators throughout the application.

## Overview

The `ProgressBar` component provides a consistent way to display progress with customizable styles and heights. It's used in module progress tracking, audio playback, and other progress-related UI elements.

## Design Specs

- **Height**: Customizable (default: 2px)
- **Border radius**: radius-lg (18px)
- **Styles**:
  - **Accent** (default): Gold colors
    - Rail: brand-accent-40 (#dbcfbb)
    - Progress: brand-accent-100 (#a68756)
  - **Primary**: Blue colors
    - Rail: brand-primary-20
    - Progress: brand-primary-100 (#262ebc)

## Features

- ✅ Two style variants (primary, accent)
- ✅ Customizable height
- ✅ Automatic progress clamping (0-100)
- ✅ Rounded corners
- ✅ Cross-platform (React Native + Next.js)
- ✅ Responsive width

## Usage

### Basic Usage

```tsx
import ProgressBar from '@/components/atoms/ProgressBar';

// Default accent style with 2px height
<ProgressBar progress={60} />
```

### Style Variants

```tsx
// Accent style (gold - default)
<ProgressBar progress={75} style="accent" />

// Primary style (blue)
<ProgressBar progress={50} style="primary" />
```

### Custom Height

```tsx
// 4px height for audio player
<ProgressBar progress={progress} height={4} />

// 2px height for module progress (default)
<ProgressBar progress={moduleProgress} height={2} />
```

### With Custom Styling

```tsx
<ProgressBar 
  progress={80} 
  style="accent" 
  height={4}
  className="my-2"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress` | `number` | Required | Progress value between 0 and 100 |
| `style` | `'primary' \| 'accent'` | `'accent'` | Style variant for colors |
| `height` | `number` | `2` | Height of the progress bar in pixels |
| `className` | `string` | `''` | Additional Tailwind classes |

## Use Cases

### Module Progress
```tsx
<ProgressBar 
  progress={moduleProgress} 
  style="accent" 
  height={2}
/>
```

### Audio Player Progress
```tsx
<ProgressBar 
  progress={audioProgress} 
  style="accent" 
  height={4}
  className="my-spacing-xxs"
/>
```

### Video Player Progress
```tsx
<ProgressBar 
  progress={videoProgress} 
  style="primary" 
  height={4}
/>
```

## Implementation Notes

- Progress values are automatically clamped between 0 and 100
- Uses `ViewStyled` for cross-platform compatibility
- Width is calculated as percentage: `${progress}%`
- Rail (background) is always visible at full width
- Progress fill overlays the rail from left to right

## Related Components

- **ModuleProgress**: Uses ProgressBar for module completion tracking
- **AudioPlayerSml**: Can use ProgressBar for playback progress
- **AudioPlayerLrg**: Will use ProgressBar for playback progress
- **VideoPlayer**: Will use ProgressBar for playback progress

## File Structure

```
ProgressBar/
├── index.tsx           # Main component
├── index.types.ts      # TypeScript types
└── README.md          # This file
```
