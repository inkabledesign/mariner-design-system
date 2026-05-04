# SoundShapes

Sound wave visualization component from Figma design (Node ID: 102-5441). Displays animated sound bars with configurable visibility for audio playback indicators.

## Features

- **5 Individual Sound Bars**: Different heights and widths for wave visualization
- **Configurable Visibility**: Show/hide individual bars as needed
- **Brand Styling**: Uses brand-accent-100 color from design system
- **Responsive Design**: Adapts to different screen sizes
- **Cross-platform**: Works on React Native and Next.js

## Usage

```tsx
import SoundShapes from '@/components/molecules/SoundShapes';

// All bars visible (default)
<SoundShapes />

// Custom bar visibility
<SoundShapes 
  showSound1={true}
  showSound2={false}
  showSound3={true}
  showSound4={false}
  showSound5={true}
/>

// With custom styling
<SoundShapes className="mb-lg" />
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | No | `''` | Additional CSS classes |
| `showSound1` | `boolean` | No | `true` | Show/hide first sound bar |
| `showSound2` | `boolean` | No | `true` | Show/hide second sound bar |
| `showSound3` | `boolean` | No | `true` | Show/hide third sound bar |
| `showSound4` | `boolean` | No | `true` | Show/hide fourth sound bar |
| `showSound5` | `boolean` | No | `true` | Show/hide fifth sound bar |

## Design Specs

- **Container**: Horizontal row with 8px gap between bars
- **Sound Bars**: Various widths (24px, 50px) and 24px height
- **Color**: brand-accent-100 (#a68756)
- **Border Radius**: radius-xs (4px) for individual bars, radius-md (12px) for container
- **Layout**: Centered alignment with flexible spacing

## Component Structure

```
SoundShapes (Row)
├── SoundShape 1 (50px width)
├── SoundShape 2 (50px width) 
├── SoundShape 3 (24px width - shorter)
├── SoundShape 4 (50px width)
└── SoundShape 5 (50px width)
```

## Use Cases

- **Audio Player Indicators**: Show active audio playback
- **Sound Visualization**: Represent audio levels or frequency
- **Loading States**: Animated sound wave loading indicators
- **Media Controls**: Visual feedback for audio interactions

## Integration

Can be used with audio components:

```tsx
// In AudioPlayer components
<Row className="items-center gap-md">
  <SoundShapes showSound1={isPlaying} showSound2={isPlaying} />
  <TextStyled>Now Playing</TextStyled>
</Row>

// Dynamic visualization based on audio levels
<SoundShapes 
  showSound1={level > 0.2}
  showSound2={level > 0.4}
  showSound3={level > 0.6}
  showSound4={level > 0.8}
  showSound5={level > 1.0}
/>
```

## Related Components

- **AudioPlayerSml**: Small audio player with controls
- **AudioPlayerLrg**: Large audio player with controls
- **Button**: Interactive controls for audio playback

## Cross-platform

Works on both React Native and Next.js web using NativeWind styling and cross-platform ViewStyled components.
