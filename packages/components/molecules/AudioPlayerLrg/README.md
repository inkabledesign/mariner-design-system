# AudioPlayerLrg

Large audio player component matching Figma design (Node ID: 495-32930). Features a prominent play button, title display, and full-width progress bar for enhanced audio playback experience.

## Features

- **Large Play Button**: 80x80px circular play/pause button with shadow
- **Title & Subtitle**: Prominent heading with optional subtitle
- **Progress Bar**: Full-width progress indicator with accent styling
- **Time Display**: Current time and total duration
- **Auto-restart**: Automatically restarts audio from beginning when playback ends
- **Restart on Play**: Restarts from beginning if play is pressed after audio has ended

## Usage

```tsx
import AudioPlayerLrg from '@/components/organisms/AudioPlayerLrg';

// Basic usage
<AudioPlayerLrg 
  title="Marine VHF Radio Basics" 
  audioSource="https://example.com/audio.mp3" 
/>

// With subtitle
<AudioPlayerLrg 
  title="Marine VHF Radio Basics" 
  subtitle="Chapter 1: Introduction"
  audioSource="https://example.com/audio.mp3" 
/>

// With custom styling
<AudioPlayerLrg 
  title="Navigation Rules" 
  subtitle="COLREGS Overview"
  audioSource="https://example.com/audio.mp3"
  className="mb-lg"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | The title of the audio track |
| `subtitle` | `string` | No | Optional subtitle or description |
| `audioSource` | `string` | Yes | URL of the audio file to play |
| `className` | `string` | No | Additional CSS classes |

## Design Specs

- **Container**: Rounded corners (12px), border with brand-accent-100, padding-lg
- **Play Button**: 80x80px, brand-primary-100 background, rounded-full, shadow
- **Title**: heading4 typography, brand-primary-100 color, centered
- **Subtitle**: body typography, material-surface-80 color, centered
- **Progress Bar**: 6px height, accent style, full width
- **Time Labels**: label typography, material-surface-100 color

## Audio Behavior

- **Play/Pause**: Toggle playback with large circular button
- **Auto-restart**: When audio reaches the end, it automatically resets to beginning
- **Manual Restart**: If play is pressed after audio has ended, it restarts from beginning
- **Progress Tracking**: Real-time progress updates every 100ms

## Integration

Used in lesson content and activity screens for audio narration:

```tsx
// In SectionContent component
{block._type === 'contentAudio' && (
  <AudioPlayerLrg
    title={block.title || 'Audio Content'}
    subtitle={block.description}
    audioSource={audioUrl}
  />
)}
```

## Related Components

- **AudioPlayerSml**: Compact horizontal audio player
- **VideoPlayer**: Video playback with similar controls
- **useAudio Hook**: Shared audio playback logic

## Cross-platform

Works on both React Native and Next.js web using NativeWind styling and expo-audio for playback.
