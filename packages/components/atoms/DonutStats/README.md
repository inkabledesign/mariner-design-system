# DonutStats Component

An animated donut chart component built with React Native Reanimated and React Native SVG.

## Features

- ✅ Smooth animations using `react-native-reanimated`
- ✅ SVG-based rendering with `react-native-svg`
- ✅ Customizable size, colors, and stroke width
- ✅ Theme-aware (uses design tokens by default)
- ✅ Optional percentage display in center
- ✅ Optional label below chart

## Usage

### Basic Usage

```tsx
import DonutStats from '@/components/atoms/DonutStats';

<DonutStats percentage={75} />
```

### With Custom Size and Colors

```tsx
<DonutStats
  percentage={85}
  size={160}
  strokeWidth={16}
  barColor="#10B981"
  railColor="#E5E7EB"
/>
```

### With Label

```tsx
<DonutStats
  percentage={92}
  label="Completion Rate"
  showPercentage={true}
/>
```

### Without Percentage Display

```tsx
<DonutStats
  percentage={60}
  showPercentage={false}
  label="Progress"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `percentage` | `number` | **Required** | The percentage value (0-100) |
| `size` | `number` | `120` | Diameter of the donut chart in pixels |
| `strokeWidth` | `number` | `12` | Width of the donut stroke |
| `label` | `string` | `undefined` | Optional label displayed below the chart |
| `showPercentage` | `boolean` | `true` | Whether to show percentage in the center |
| `duration` | `number` | `1000` | Animation duration in milliseconds |
| `railColor` | `string` | Theme color | Color of the background circle |
| `barColor` | `string` | Theme color | Color of the progress circle |

## Animation

The component uses `react-native-reanimated` with a bezier easing curve for smooth animations:

- **Easing**: `bezier(0.25, 0.1, 0.25, 1)`
- **Duration**: Customizable (default 1000ms)
- **Trigger**: Animates whenever the `percentage` prop changes

## Theme Integration

By default, the component uses theme colors:
- **Rail Color**: `theme.color.light.material.surface['20']`
- **Bar Color**: `theme.color.light.brand.accent['100']`

You can override these by passing custom `railColor` and `barColor` props.

## Examples

### Progress Card

See `ProgressDonutCard` component for a complete example of using `DonutStats` in a card layout with additional statistics.

### Multiple Donuts

```tsx
<Row className="gap-md">
  <DonutStats percentage={75} label="Lessons" />
  <DonutStats percentage={60} label="Sections" />
  <DonutStats percentage={90} label="Activities" />
</Row>
```

## Technical Details

- Uses `Animated.createAnimatedComponent(Circle)` for smooth SVG animations
- Circle is rotated -90° to start progress from top
- `strokeLinecap="round"` for rounded ends
- Progress calculated using `strokeDashoffset` and `strokeDasharray`
