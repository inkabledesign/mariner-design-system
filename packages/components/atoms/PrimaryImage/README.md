# PrimaryImage

A responsive image component with multiple aspect ratio variants, built with `expo-image`.

## Usage

```tsx
import PrimaryImage from '@/components/atoms/PrimaryImage';

<PrimaryImage
  source={{ uri: 'https://example.com/image.jpg' }}
  aspectRatio="16:9"
  showOverlay
/>
```

## Props

| Prop          | Type                               | Default | Description                                      |
|---------------|------------------------------------|---------|--------------------------------------------------|
| `source`      | `ImageProps['source']`             | -       | The remote image URL or local asset.             |
| `aspectRatio` | `'1:1'` `'4:3'` `'16:9'` `'9:16'` `'5:3'` | `'4:3'` | The aspect ratio of the image.                   |
| `showOverlay` | `boolean`                          | `false` | Whether to show the gradient overlay.            |
| `className`   | `string`                           | `''`    | Additional classes for the container.            |
| `...props`    | `Omit<ImageProps, 'source'>`       | -       | Additional props passed to the `expo-image` component. |

## Variants

The `aspectRatio` prop controls the aspect ratio of the image. The following values are supported:

- `'1:1'` (Square)
- `'4:3'` (Landscape)
- `'16:9'` (Widescreen)
- `'9:16'` (Portrait)
- `'5:3'` (Custom)

## Overlay

The `showOverlay` prop adds a gradient overlay to the image, which can be useful for displaying text over the image.
