# Design System Hot Reload Guide

## Current Status

✅ **Colors** - Full hot reload (accessed via `theme.color` at runtime)  
❌ **Spacing** - Requires Metro restart (Tailwind classes like `p-md`)  
❌ **Radius** - Requires Metro restart (Tailwind classes like `rounded-lg`)  
❌ **Typography** - Requires Metro restart (Tailwind classes like `text-heading1`)

## Why Some Tokens Don't Hot Reload

**Tailwind CSS generates utility classes at build time**, not runtime. When you use:
- `className="p-md"` → Tailwind converts this to `padding: 12px` at build time
- `className="rounded-lg"` → Tailwind converts this to `borderRadius: 18px` at build time
- `className="text-heading1"` → Tailwind converts this to `fontSize: 39.81px` at build time

**Changes to the source tokens require Tailwind to regenerate these classes**, which only happens when Metro restarts.

## Solution Options

### Option 1: Accept Metro Restarts (Current Setup)

**Pros:**
- Clean, semantic class names
- Standard Tailwind workflow
- Smaller bundle size

**Cons:**
- No hot reload for spacing/radius/typography
- Must restart Metro to see changes

**When to use:** Production apps where design tokens are stable

---

### Option 2: Direct Token Access (Full Hot Reload)

Replace Tailwind classes with direct token access:

```typescript
// ❌ Before (no hot reload)
<ViewStyled className="p-md rounded-lg">
  <TextStyled className="text-heading1">Title</TextStyled>
</ViewStyled>

// ✅ After (instant hot reload)
import { theme, useBreakpoint } from '@mariner/theme';

const { breakpoint } = useBreakpoint();

<View style={{
  padding: theme.spacing[breakpoint].spacing.md,
  borderRadius: theme.radius[breakpoint].radius.lg,
}}>
  <Text style={{
    fontSize: theme.typography[breakpoint].text.heading1.fontSize,
    lineHeight: theme.typography[breakpoint].text.heading1.lineHeight,
    fontFamily: theme.typography[breakpoint].text.heading1.fontFamily,
  }}>
    Title
  </Text>
</View>
```

**Pros:**
- ✅ Instant hot reload for ALL tokens
- ✅ Full type safety
- ✅ Direct access to all token properties

**Cons:**
- More verbose code
- Larger bundle size
- No Tailwind autocomplete

**When to use:** Active design system development

---

### Option 3: Hybrid Approach (RECOMMENDED)

Keep Tailwind for layout, use direct access for design tokens:

```typescript
import { theme, useBreakpoint } from '@mariner/theme';

const { breakpoint } = useBreakpoint();

// ✅ Tailwind for layout (doesn't change often)
<ViewStyled className="flex-1 items-center justify-center">
  {/* Direct token access for spacing/radius (hot reload) */}
  <View style={{
    padding: theme.spacing[breakpoint].spacing.md,
    borderRadius: theme.radius[breakpoint].radius.lg,
    backgroundColor: theme.color.light.brand.primary['100'], // Also hot reloads!
  }}>
    {/* Direct token access for typography (hot reload) */}
    <Text style={{
      ...theme.typography[breakpoint].text.heading1,
      color: theme.color.light.brand.primary['100'],
    }}>
      Title
    </Text>
  </View>
</ViewStyled>
```

**Pros:**
- ✅ Hot reload for design tokens
- ✅ Clean Tailwind for layout
- ✅ Best of both worlds

**Cons:**
- Mixed styling approaches

**When to use:** Design system development with some stability

---

## Font Family Issue

The `fontFamily` values in typography tokens (e.g., `"Montserrat-Bold"`) are **metadata only**. They don't automatically apply fonts.

### How Fonts Actually Work

1. **Load fonts** in your app (usually in `app/_layout.tsx`):
```typescript
import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
  'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
  // ... other weights
});
```

2. **Apply via style** (not className):
```typescript
<Text style={{
  fontFamily: theme.typography[breakpoint].text.heading1.fontFamily,
  fontSize: theme.typography[breakpoint].text.heading1.fontSize,
}}>
  Title
</Text>
```

3. **Or use Tailwind font classes** (requires Metro restart):
```typescript
<Text className="font-montserrat-bold text-heading1">
  Title
</Text>
```

---

## Recommended Workflow

### During Active Design System Development:

1. **Use direct token access** for tokens you're actively tweaking
2. **Keep Metro running** - changes hot reload instantly
3. **Test on device/simulator** in real-time

### When Design Tokens Are Stable:

1. **Use Tailwind classes** for cleaner code
2. **Restart Metro** when you change tokens (rare)
3. **Enjoy smaller bundle size** and autocomplete

---

## Helper Hook for Easy Access

Create a custom hook for convenient token access:

```typescript
// src/hooks/useDesignTokens.ts
import { theme, useBreakpoint } from '@mariner/theme';

export function useDesignTokens() {
  const { breakpoint } = useBreakpoint();
  
  return {
    spacing: theme.spacing[breakpoint].spacing,
    radius: theme.radius[breakpoint].radius,
    typography: theme.typography[breakpoint].text,
    color: theme.color,
    breakpoint,
  };
}

// Usage:
const { spacing, radius, typography, color } = useDesignTokens();

<View style={{
  padding: spacing.md,
  borderRadius: radius.lg,
  backgroundColor: color.light.brand.primary['100'],
}}>
  <Text style={{
    ...typography.heading1,
    color: color.light.brand.primary['100'],
  }}>
    Title
  </Text>
</View>
```

---

## Summary

- **Colors**: ✅ Always hot reload (accessed at runtime)
- **Spacing/Radius/Typography**: 
  - ❌ Tailwind classes = No hot reload
  - ✅ Direct token access = Hot reload
  
**Choose based on your current needs:**
- **Developing design system?** → Use direct token access
- **Building features?** → Use Tailwind classes
- **Want both?** → Use hybrid approach
