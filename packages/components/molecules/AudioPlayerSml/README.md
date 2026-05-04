# AudioPlayerSml Component

Small audio player component extracted from Figma design system (Node ID: 627:57907).

## Overview

A compact audio player with play/pause controls, progress bar, and time display. Uses the reusable `useAudio` hook for audio playback management.

## Design Specs

- **Border radius**: radius-xxl (36px)
- **Padding**: spacing-md (12px)
- **Background**: material-surface-0 (#f4f4f4)
- **Border**: brand-accent-100 (#a68756)
- **Typography**: 
  - Title: heading6 (16px Montserrat SemiBold)
  - Time: label (11.11px Montserrat Medium)
- **Progress Bar**:
  - Rail: brand-accent-40
  - Fill: brand-accent-100
  - Height: 4px
  - Border radius: radius-lg (18px)

## Features

- ✅ Play/pause audio playback
- ✅ Visual progress bar
- ✅ Current time / total duration display
- ✅ Auto-replay when finished
- ✅ Proper cleanup on unmount
- ✅ Cross-platform (React Native + Next.js)

## Usage

```tsx
import AudioPlayerSml from '@/components/organisms/AudioPlayerSml';

// Basic usage
<AudioPlayerSml
  title="Introduction to Marine VHF"
  audioSource="https://example.com/audio.mp3"
/>

// With custom className
<AudioPlayerSml
  title="Safety Procedures"
  audioSource="https://cdn.sanity.io/files/..."
  className="my-4"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | The title of the audio track |
| `audioSource` | `string` | Yes | The URL of the audio file to play |
| `className` | `string` | No | Additional Tailwind classes for styling |

## Integration with Sanity CMS

The component is automatically used by the `SectionContent` organism to render `contentAudio` blocks:

```tsx
// In SectionContent component
if (isContentAudio(block)) {
  return (
    <AudioPlayerSml
      title={block.title || 'Audio'}
      audioSource={audioUrl}
      className="mb-md"
    />
  );
}
```

## Audio Hook

Uses the `useAudio` hook (`src/hooks/useAudio.ts`) which provides:

- `isPlaying`: Current playback state
- `positionMillis`: Current playback position in milliseconds
- `durationMillis`: Total audio duration in milliseconds
- `progress`: Playback progress as percentage (0-100)
- `handlePlayPause`: Function to toggle play/pause
- `handleSeek`: Function to seek to a specific position

This hook is reusable and will be shared with `AudioPlayerLrg` and `VideoPlayer` components.

## Dependencies

- `expo-audio`: Audio playback library (modern Expo audio API)
- `@/hooks/useAudio`: Custom audio management hook
- `@/components/atoms/Row`, `Column`, `TextStyled`, `ViewStyled`, `PressableStyled`: UI components

## File Structure

```
AudioPlayerSml/
├── index.tsx           # Main component
├── index.types.ts      # TypeScript types
└── README.md          # This file
```

## Related Components

- **AudioPlayerLrg** (planned): Larger audio player with additional controls
- **VideoPlayer** (planned): Video player using similar playback logic
- **SectionContent**: Parent organism that renders this component

## Notes

- The component uses Unicode symbols (▶ and ❚❚) for play/pause buttons temporarily
- Audio files must be publicly accessible URLs
- Supports both Sanity CDN URLs and external URLs
- Automatically handles audio cleanup on component unmount
