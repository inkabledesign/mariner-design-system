# ⚠️ IMPORTANT: Brand Graphics Export Issue

## Current Status

The brand graphic PNG files (`brand-graphic-device-l.png` and `brand-graphic-device-r.png`) are currently showing as **solid green blocks** in the app.

This indicates that the exported PNG files contain green test/placeholder graphics instead of the actual decorative geometric patterns from Figma.

## What Should Be Exported

The brand graphics should contain:
- **Geometric patterns**: Triangles, squares, grid lines
- **Various opacities**: 25%, 50%, 100%
- **Material surface colors**: Grays with alpha values
- **NOT solid green blocks**

## How to Export Correctly from Figma

### Step 1: Locate the Correct Layers

In Figma, find these specific layers:
1. **Left graphic**: `brand-grapjic-device-l` (node ID: 1178:101298)
2. **Right graphic**: `brand-grapjic-device-r` (node ID: 1178:103342)

**Important**: Make sure you're selecting the actual graphic layer, NOT a test/placeholder layer.

### Step 2: Export Settings

1. Select the layer in Figma
2. In the right sidebar, scroll to **Export** section
3. Click **+** to add export settings
4. Configure:
   - **Format**: PNG
   - **Scale**: 1x (or 4x if you want higher resolution)
   - **Background**: Transparent (CRITICAL!)
5. Click **Export [layer name]**

### Step 3: Verify the Export

Before replacing the files in the project:

1. Open the exported PNG in Preview or any image viewer
2. **Verify it shows geometric patterns**, NOT solid green
3. Check that the background is transparent
4. File size should be around 20-25KB (not 70 bytes)

### Step 4: Replace Files

Once you have the correct exports:

```bash
# Navigate to the brand assets directory
cd /Users/DTM03/Personal/Dev/mariner-learning-v2/src/assets/images/brand/

# Replace the files (backup first if needed)
# Copy your exported files here with these exact names:
# - brand-graphic-device-l.png
# - brand-graphic-device-r.png
```

## Alternative: Use Figma MCP Server

You can also export directly using the Figma MCP server:

```typescript
// Get screenshot of the specific node
mcp1_get_screenshot({
  nodeId: "1178:101298", // Left graphic
  clientLanguages: "typescript",
  clientFrameworks: "react"
});
```

## Troubleshooting

### Issue: Still showing green blocks after export

**Possible causes**:
1. You exported a test/placeholder layer instead of the actual graphic
2. The layer in Figma actually contains green color (check Figma design)
3. The export didn't include all sublayers (make sure to export the parent frame)

### Issue: Images not loading at all

**Possible causes**:
1. File names don't match exactly (case-sensitive)
2. Files are in wrong directory
3. Metro bundler needs restart: `yarn start --reset-cache`

## Current File Status

```
brand-graphic-device-l.png: 22KB (contains green test graphic)
brand-graphic-device-r.png: 23KB (contains green test graphic)
```

These files ARE loading correctly in expo-image, but they contain the wrong content.

## Expected Result

Once you export the correct graphics, you should see:
- Decorative geometric patterns in the top-left and top-right corners
- Subtle gray colors with various opacities
- Triangles, squares, and grid line patterns
- **NOT solid green blocks**

## Need Help?

If you're still seeing green blocks after following these instructions:
1. Check the Figma design - verify the layers contain the correct graphics
2. Try exporting at different scales (1x, 2x, 4x)
3. Verify the layer IDs match the ones specified above
4. Check if there's a "test" or "debug" variant selected in Figma
