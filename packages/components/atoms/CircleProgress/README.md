# CircleProgress Component

A circular progress indicator with a rail (background) and progress bar that fills from 0 to 100%.

## Features

- **Cross-platform**: Works on React Native (iOS/Android) and Next.js web
- **SVG-based**: Smooth rendering with react-native-svg
- **Configurable**: Size, stroke width, and colors
- **Progress animation**: Fills clockwise from top (12 o'clock position)
- **Center content**: Supports children (e.g., icons) in the center
- **Design tokens**: Uses Figma design tokens

## Usage

### Basic Progress Circle

```tsx
import CircleProgress from '@/components/atoms/CircleProgress';

<CircleProgress progress={75} size={28} strokeWidth={2} />
```

### With Icon in Center

```tsx
import CircleProgress from '@/components/atoms/CircleProgress';
import Icon from '@/components/atoms/Icon';

<CircleProgress 
  progress={50} 
  size={32}
  strokeWidth={2}
  progressColor="text-brand-primary-100"
  railColor="text-brand-primary-20"
>
  <Icon 
    iconType="ui" 
    iconName="ico-success" 
    className="w-6 h-6"
  />
</CircleProgress>
```

### Different Colors

```tsx
// Success state
<CircleProgress 
  progress={100} 
  progressColor="text-system-success"
  railColor="text-material-surface-20"
/>

// Error state
<CircleProgress 
  progress={25} 
  progressColor="text-system-error-100"
  railColor="text-system-error-20"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress` | `number` | `0` | Progress value from 0 to 100 |
| `size` | `number` | `28` | Size of the circle in pixels |
| `strokeWidth` | `number` | `2` | Stroke width in pixels |
| `progressColor` | `string` | `'text-brand-primary-100'` | Tailwind color class for progress bar |
| `railColor` | `string` | `'text-brand-primary-20'` | Tailwind color class for rail/background |
| `className` | `string` | `''` | Additional Tailwind classes for container |
| `children` | `React.ReactNode` | - | Content to render in the center |

## Design Tokens

- **Default Progress Color**: `text-brand-primary-100` (#262EBC)
- **Default Rail Color**: `text-brand-primary-20` (lighter blue)
- **Size**: Configurable (default 28px)
- **Stroke Width**: Configurable (default 2px)

## Technical Details

- Uses `react-native-svg` for cross-platform SVG rendering
- Progress fills clockwise starting from the top (12 o'clock)
- Progress is clamped between 0 and 100
- SVG is rotated -90° to start from top instead of right
- Uses `strokeDasharray` and `strokeDashoffset` for progress animation
- `strokeLinecap="round"` for smooth rounded ends

## Notes

- The component automatically clamps progress values to 0-100 range
- Colors are extracted from Tailwind classes using `getColorFromClass` utility
- Children are centered using absolute positioning
- Works seamlessly with Icon component and other content
