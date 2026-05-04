# Brand Graphics Assets

## Required Assets

The following transparent PNG files need to be exported from Figma at **4x resolution**:

### 1. brand-graphic-device-l@4x.png
- **Figma Node**: `brand-grapjic-device-l` (node ID: 1178:101298)
- **Size**: 106x106px @ 1x (424x424px @ 4x)
- **Format**: Transparent PNG
- **Description**: Left-side decorative geometric pattern with triangles, squares, and grid lines

### 2. brand-graphic-device-r@4x.png
- **Figma Node**: `brand-grapjic-device-r` (node ID: 1178:103342)
- **Size**: 106x106px @ 1x (424x424px @ 4x)
- **Format**: Transparent PNG
- **Description**: Right-side decorative geometric pattern with triangles, squares, and grid lines

## Export Instructions

### From Figma:

1. Open the Figma file
2. Select the `brand-grapjic-device-l` layer
3. In the Export panel (right sidebar):
   - Set format to **PNG**
   - Set scale to **4x**
   - Enable **transparent background**
   - Click Export
4. Save as `brand-graphic-device-l@4x.png` in this directory
5. Repeat for `brand-grapjic-device-r` layer
6. Save as `brand-graphic-device-r@4x.png` in this directory

### Design Details:

The graphics consist of:
- **Grid lines** (vertical and horizontal, various opacities)
- **Triangles** (solid and outlined, rotated at different angles)
- **Squares** (filled with alpha values)
- **Horizontal lines** (decorative patterns)

**Color**: Material surface colors with various opacity levels (25%, 50%, 100%)

## Usage

These assets are used in the Header component as background decorations:

```tsx
import { Image } from 'expo-image';

<Image
  source={require('@/assets/images/brand/brand-graphic-device-l@4x.png')}
  style={{ width: 106, height: 106 }}
  contentFit="contain"
/>
```

## File Naming Convention

- Use `@4x` suffix for 4x resolution assets
- Use lowercase with hyphens for file names
- Always use transparent PNG format for brand graphics
