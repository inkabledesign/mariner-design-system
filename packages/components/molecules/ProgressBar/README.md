# ProgressBar Component

A horizontal progress bar component for displaying completion progress.

## Features

- **Two style variants**: accent (gold) and primary (blue)
- **Percentage-based progress**: 0-100 range with automatic clamping
- **Smooth visual fill**: Animated width transition
- **Rounded corners**: Consistent with design system

## Design Specs

- **Height**: 4px
- **Border radius**: radius-lg (18px)
- **Accent style**:
  - Rail: brand-accent-40 (#dbcfbb)
  - Fill: brand-accent-100 (#a68756)
- **Primary style**:
  - Rail: brand-primary-20 (#d4d5f2)
  - Fill: brand-primary-100 (#262ebc)

## Usage

```tsx
import ProgressBar from '@/components/molecules/ProgressBar';

// Accent style (default)
<ProgressBar progress={60} />

// Primary style
<ProgressBar progress={30} style="primary" />

// With custom className
<ProgressBar progress={90} style="accent" className="mt-md" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress` | `number` | - | Progress value (0-100) |
| `style` | `'accent' \| 'primary'` | `'accent'` | Visual style variant |
| `className` | `string` | `''` | Additional CSS classes |

## Use Cases

- Module completion progress
- Lesson progress tracking
- Quiz/activity completion
- Download/upload progress
