---
trigger: always_on
---
# Mariner Design System Rules

> Consolidated from 12 documentation files. This is the single source of truth for design system conventions.

---

## 1. Package Structure

The monorepo has **three packages** (managed by Lerna + Yarn workspaces):

| Package | Purpose |
|---------|---------|
| `@mariner/theme` | Design tokens (JSON), Tailwind configs, token utility functions |
| `@mariner/components` | Cross-platform React Native UI components (Atomic Design) |
| `@mariner/assets` | Fonts (Montserrat), icons (200+ SVGs), images |

### Directory Layout

```
packages/
  theme/
    src/           # Token TS modules, JSON files, loadTokens.js, utils/
    src/hooks/     # useBreakpoint hook (BreakpointProvider, useBreakpoint)
    tailwind/      # native.js, web.js (platform-specific Tailwind configs)
  components/
    atoms/         # Basic building blocks (ViewStyled, TextStyled, Column, Row, etc.)
    molecules/     # Composed components (Button, Input, TabBar, Avatar, etc.)
    organisms/     # Complex sections (future)
    templates/     # Page-level layouts (future)
    hooks/         # UI-only hooks (no business logic)
    types/         # Shared TypeScript types (icons, etc.)
    data/          # Static data files
  assets/
    fonts/         # Montserrat font family
    icons/         # SVG icon files + generated icon map
    images/        # Static images
apps/
  storybook-mobile/  # Expo-based mobile Storybook
  storybook-web/     # Next.js-based web Storybook
```

---

## 2. Atomic Design Methodology

Components follow Brad Frost's Atomic Design:

- **Atoms** — Single-purpose UI primitives (Column, Row, ViewStyled, TextStyled, Icon, Divider, ProgressBar, etc.)
- **Molecules** — Simple groups of atoms (Button, Input, TabBar, Avatar, Badge, SearchInput, etc.)
- **Organisms** — Complex sections composed of molecules + atoms (future)
- **Templates** — Page-level layout templates (future)

### Export Pattern

All components use **default exports**. The barrel `index.ts` re-exports them grouped by atomic level:

```typescript
// Atoms
export { default as Column } from './atoms/Column';
// Molecules
export { default as Button } from './molecules/Button';
// Organisms — future
// Templates — future
```

---

## 3. Component Patterns

### Props-Only (Presentational)

Components are **pure presentational** — no internal state management, no business logic, no data fetching.

- **NO** Zustand, Redux, or any state management inside the library
- **NO** expo-audio, expo-video, or external service calls
- **YES** animation logic (react-native-reanimated) — animations are UI concerns
- **YES** layout hooks (useSafeAreaInsets) — layout is a UI concern
- Consumer passes all state and callbacks as props

### Forbidden Dependencies

- **NEVER** use `expo-av` — it is deprecated. Use `expo-audio` in consumer apps only.
- Component library must not bundle audio/video playback logic

### Theme Mode & Breakpoint Props

Components that directly access token values accept:
- `themeMode?: 'light' | 'dark'` (defaults to `'light'`) — selects color palette
- `breakpoint?: Breakpoint` (defaults to `'mobile'`) — selects responsive typography/spacing/radius

The consumer app owns theme state and passes it as props.

---

## 4. Import Patterns

### Barrel Exports Only

```typescript
// CORRECT — unified theme import (preferred)
import { theme } from '@mariner/theme';
import { useBreakpoint, BreakpointProvider } from '@mariner/theme';
import type { Theme, Breakpoint } from '@mariner/theme';

// CORRECT — individual imports (still supported)
import { color, typography, spacing, radius } from '@mariner/theme';
import { getColor, getSpacing } from '@mariner/theme';

// CORRECT — component imports
import { Column, Row, TextStyled, Input } from '@mariner/components';

// WRONG — never import from subfolders
import Column from '@mariner/components/atoms/Column';  // NO
import colors from '@mariner/theme/src/colors';          // NO
```

> **Note**: `colors` is deprecated — use `color` (singular) or `theme.color` instead.

### No Cross-Package Re-exports

`@mariner/components` does NOT re-export `@mariner/theme` or `@mariner/assets`. Consumers import from each package directly.

---

## 5. Dependency Rules

### @mariner/components

- `@mariner/assets` — direct dependency
- `@mariner/theme` — **peer dependency** (consumer controls version)
- `react`, `react-native`, `nativewind`, `tailwindcss` — peer dependencies
- `react-native-reanimated`, `react-native-gesture-handler`, `react-native-svg`, `react-native-safe-area-context` — peer dependencies
- `expo-image` — optional peer dependency

### @mariner/theme

- No runtime dependencies (pure tokens + utilities)
- `rollup`, `typescript` — dev dependencies only

---

## 6. Styling Rules

### No className on Raw React Native Elements

**NEVER** use `className` on elements imported directly from `react-native` (`View`, `Text`, `TextInput`, `TouchableOpacity`, `Pressable`, `ScrollView`, etc.). These do not accept `className` in their TypeScript types.

Instead:
- **For layout/containers**: Replace `View` with `ViewStyled`, `Row`, or `Column` (which accept `className`)
- **For pressable areas**: Use `Pressable` for the press handler only (no className), then wrap children in `ViewStyled`/`Row`/`Column` for layout styling
- **For text inputs**: Use the `style` prop with direct token access (e.g., `theme.typography[breakpoint]`)
- **For views that need `ref` or `onLayout`**: Keep the raw `View` but use `style` prop instead of `className`

```typescript
// ❌ WRONG — className on raw RN element
<TouchableOpacity className="items-center justify-center" onPress={onPress}>
  <Icon iconName="search" />
</TouchableOpacity>

// ✅ CORRECT — Pressable for press, ViewStyled for layout
<Pressable onPress={onPress}>
  <ViewStyled className="items-center justify-center">
    <Icon iconName="search" />
  </ViewStyled>
</Pressable>

// ❌ WRONG — className on TextInput
<TextInput className="flex-1 text-body px-xs" />

// ✅ CORRECT — style with theme tokens
<TextInput style={{ flex: 1, fontSize: theme.typography[breakpoint].text.body.fontSize }} />

// ❌ WRONG — className on View with ref
<View ref={myRef} className="flex-row w-full" />

// ✅ CORRECT — style on View with ref
<View ref={myRef} style={{ flexDirection: 'row', width: '100%' }} />
```

### className First, Tokens as Fallback

1. **Use NativeWind/Tailwind `className`** for all styling where supported (via `ViewStyled`, `Row`, `Column`, `TextStyled`, and other library wrappers)
2. **When `className` is not supported** (expo-image `Image`, SVG props, `Animated.View` animated styles), use **direct token access** via the unified `theme` object:
   - `theme.color[themeMode].brand.primary['100']` — color hex string
   - `theme.spacing[breakpoint].spacing.md` — spacing number
   - `theme.typography[breakpoint].text.heading1.fontSize` — typography value
   - `theme.radius[breakpoint].radius.md` — radius number
3. Getter functions (`getColor`, `getSpacing`, etc.) are available as convenience utilities for **dynamic** lookups only
4. **NEVER** hardcode hex values (`#262ebc`) or magic numbers (`fontSize: 15`) in components

### Design Token Architecture

- **Source**: Figma-exported JSON files (`colors.json`, `typography.json`, `spacing.json`, `radius.json`, `size.json`)
- **Build-time**: `buildTheme()` in `loadTokens.js` generates Tailwind config extensions
- **Runtime**: Unified `theme` object provides JS access to all tokens; utility functions available for dynamic lookups
- **Dark mode**: Tailwind `dark:` prefix for className styling; `themeMode` prop for direct token access

### Available Token Scales

Breakpoints: `mobile`, `tablet`, `desktop-sm`, `desktop-lg` (Tailwind defaults: 640, 768, 1024, 1280px)

| Token Type | Scales |
|-----------|--------|
| Spacing | xxs, xs, sm, md, lg, xl, xxl, xxxl |
| Radius | xs, sm, md, lg, xl, xxl |
| Typography | heading1–6, body, button, input, placeholder, caption, label, footnote, link |
| Colors | brand (primary, secondary, accent), material (surface, alphaDark), solid, system (error, success, warning) |

---

## 7. SDK & Version Compatibility

| Dependency | Version |
|-----------|---------|
| Expo SDK | 55 |
| React | 19.x |
| React Native | 0.83.x |
| NativeWind | 4.x |
| Tailwind CSS | 3.4.x |
| react-native-reanimated | 4.x |
| react-native-svg | 15.x |
| TypeScript | 5.x |

---

## 8. Storybook

- **Mobile**: Expo-based (`apps/storybook-mobile/`), uses `@storybook/react-native` 7.x
- **Web**: Next.js-based (`apps/storybook-web/`), uses `@storybook/react-webpack5` 8.x
- Both apps depend on `@mariner/theme`, `@mariner/components`, `@mariner/assets`
- NativeWind className warnings during build are expected and non-breaking

---

## 9. Build & Publishing

- **Build tool**: Rollup (per-package `rollup.config.js`)
- **Output**: CJS (`dist/index.js`) + ESM (`dist/index.esm.js`) + types (`dist/index.d.ts`)
- **Publishing**: GitHub Packages (`npm.pkg.github.com`)
- **Monorepo**: Lerna with conventional commits for versioning

---

## 10. Theme Integration (Consumer Guide)

The library provides tokens and tools. Consumer apps manage theme state using any pattern:

- **React Context** (recommended)
- **Zustand** (if already using it)
- **Redux** (if already using it)
- **Simple useState** (minimal apps)

### Unified Theme Object

```typescript
import { theme } from '@mariner/theme';

// Access tokens
theme.color.light.brand.primary['100']  // color hex
theme.color.dark.material.surface['60'] // dark mode color
theme.typography.mobile.text.input.fontSize // typography value
theme.spacing.mobile.spacing.md              // spacing number
theme.radius.mobile.radius.md                // radius number
```

### useBreakpoint Hook

The library ships a `useBreakpoint` hook and `BreakpointProvider` for auto-detecting the current breakpoint:

```typescript
import { BreakpointProvider, useBreakpoint } from '@mariner/theme';

// Wrap app root
<BreakpointProvider>
  <App />
</BreakpointProvider>

// In components
const { breakpoint, width, height } = useBreakpoint();
```

### Passing Props

Consumer passes `themeMode` and `breakpoint` props to theme-aware components:

```typescript
<Input themeMode="light" breakpoint="mobile" />
<Icon themeMode={appTheme} />
<TextStyled breakpoint={breakpoint} textStyle="heading1" />
```

Tailwind dark mode is handled via the `dark:` class prefix, controlled by the consumer's Tailwind config.
