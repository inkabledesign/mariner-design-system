# Mariner Design System

A comprehensive cross-platform design system for Mariner applications, built with Tailwind CSS and NativeWind, supporting both React Native (Expo) and Next.js web platforms.

## 📦 Packages

All packages are published to GitHub Packages under the `@inkabledesign` scope:

### Core Packages
- **[@inkabledesign/mariner-theme](./packages/theme)** - Design tokens (colors, typography, spacing, radius) and Tailwind configurations
- **[@inkabledesign/mariner-assets](./packages/assets)** - Icons (200+), fonts (Montserrat), and images
- **[@inkabledesign/mariner-components](./packages/components)** - Cross-platform React Native components (Atomic Design)

### Storybook Applications
- **[storybook-mobile](./apps/storybook-mobile)** - Expo React Native Storybook for mobile testing
- **[storybook-web](./apps/storybook-web)** - Next.js web Storybook for browser testing

---

## 🚀 Quick Start

### Installation from GitHub Packages

1. **Configure npm/yarn for GitHub Packages:**

```bash
# Add to ~/.npmrc or project .npmrc
@inkabledesign:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

2. **Install packages:**

```bash
yarn add @inkabledesign/mariner-theme
yarn add @inkabledesign/mariner-assets
yarn add @inkabledesign/mariner-components
```

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/inkabledesign/mariner-design-system.git
cd mariner-design-system

# Install dependencies
yarn install

# Build all packages
npx lerna run build --scope '@inkabledesign/mariner-*'

# Run mobile Storybook
cd apps/storybook-mobile && yarn storybook

# Run web Storybook
cd apps/storybook-web && yarn storybook
```

---

## 📱 Platform Support

### React Native (Expo SDK 55+)
- **NativeWind 4.x** for Tailwind CSS support
- **Expo Router** for file-based routing
- Optimized for mobile and tablet breakpoints
- Hot reload with Metro bundler

### Next.js Web (v16+)
- **Turbopack** bundler (Next.js 16+ default)
- **React Native Web** for component compatibility
- Standard Tailwind CSS configuration
- Responsive design with desktop breakpoints

### Supported Platforms
- ✅ iOS (React Native)
- ✅ Android (React Native)
- ✅ Web (Next.js)

---

## 🎨 Design Tokens

Design tokens are the foundation of the design system, providing consistent values across all platforms.

### Token Categories

| Category | Breakpoints | Description |
|----------|-------------|-------------|
| **Colors** | All | Brand, material, solid, system colors with light/dark mode |
| **Typography** | `mobile-sm`, `tablet-md`, `desktop-lg`, `desktop-xlg` | Font sizes, weights, line heights |
| **Spacing** | `mobile-sm`, `tablet-md`, `desktop-lg`, `desktop-xlg` | Padding, margin, gap values |
| **Radius** | `mobile-sm`, `tablet-md`, `desktop-lg`, `desktop-xlg` | Border radius values |
| **Size** | `mobile-sm`, `tablet-md`, `desktop-lg`, `desktop-xlg` | Component dimensions |

### Breakpoints

| Breakpoint | Width | Typical Use |
|------------|-------|-------------|
| `mobile-sm` | < 768px | Mobile phones |
| `tablet-md` | 768px - 1024px | Tablets |
| `desktop-lg` | 1024px - 1440px | Desktop screens |
| `desktop-xlg` | ≥ 1440px | Large desktop screens |

### Usage with Tailwind

```typescript
// tailwind.config.js
const { buildTheme } = require('@inkabledesign/mariner-theme/src/loadTokens');

const { theme } = buildTheme({
  radius: 'mobile-sm',
  spacing: 'mobile-sm',
  size: 'mobile-sm',
  typography: 'mobile-sm',
});

module.exports = {
  theme,
  // ... other config
};
```

### Programmatic Access

```typescript
import { theme, color, typography, spacing, radius } from '@inkabledesign/mariner-theme';

// Access tokens directly
const primaryColor = theme.color.light.brand.primary['100']; // #262ebc
const headingSize = theme.typography['mobile-sm'].text.heading1.fontSize; // 32
const mediumSpacing = theme.spacing['mobile-sm'].spacing.md; // 16
const borderRadius = theme.radius['mobile-sm'].radius.md; // 12

// Or use individual exports
const textColor = color.light.brand.primary['100'];
const bodyFont = typography['mobile-sm'].text.body;
```

### Utility Functions

```typescript
import { getColor, getSpacing, getFontFamilyNameForWeight } from '@inkabledesign/mariner-theme';

// Get color with theme mode
const bgColor = getColor('brand', 'primary', '100', 'light'); // #262ebc

// Get spacing value
const padding = getSpacing('md', 'mobile-sm'); // 16

// Get font family for weight
const fontFamily = getFontFamilyNameForWeight(700); // 'Montserrat-Bold'
```

---

## 🔧 Components

### Atomic Design Structure

Components follow Brad Frost's Atomic Design methodology:

#### Atoms (16 components)
Basic building blocks:
- **Layout**: `Column`, `Row`, `ViewStyled`, `PressableStyled`
- **Typography**: `TextStyled`
- **Interactive**: `Icon`, `Divider`, `ToggleSwitch`, `RadioButton`
- **Visual**: `GradientBackground`, `ProgressBar`, `WaveDecoration`, `AnimatedCircleProgress`, `CircleProgress`, `DonutStats`
- **Data**: `TableCell`

#### Molecules (12 components)
Simple component groups:
- **Form**: `Button`, `Input`, `SearchInput`, `ButtonGroup`
- **UI**: `Badge`, `CardInfo`, `HeaderTopBar`, `TabBar`, `Avatar`
- **Media**: `AudioPlayerLrg`, `AudioPlayerSml`

#### Organisms (Future)
Complex sections composed of molecules + atoms

#### Templates (Future)
Page-level layout templates

### Component Usage

```typescript
import { Button, TextStyled, Icon, Column, Row } from '@inkabledesign/mariner-components';

function MyScreen() {
  return (
    <Column className="p-4 gap-4">
      <TextStyled 
        textStyle="heading1" 
        className="text-brand-primary-100"
      >
        Welcome
      </TextStyled>
      
      <Row className="gap-2">
        <Button
          text="Primary Action"
          variant="primary"
          onPress={() => console.log('Pressed')}
          iconLeft={{
            iconType: 'system',
            iconName: 'ico-plus'
          }}
        />
        
        <Icon 
          iconName="ico-heart" 
          className="w-6 h-6 text-brand-primary-100"
        />
      </Row>
    </Column>
  );
}
```

### Styling with NativeWind

All components support Tailwind utility classes via the `className` prop:

```typescript
<Column className="flex-1 p-md bg-white dark:bg-black rounded-md">
  <TextStyled className="text-heading1 text-brand-primary-100 mb-sm">
    Styled with Tailwind
  </TextStyled>
</Column>
```

**Available Utility Classes:**
- **Spacing**: `p-xs`, `m-md`, `gap-lg` (from spacing tokens)
- **Radius**: `rounded-sm`, `rounded-md`, `rounded-lg` (from radius tokens)
- **Typography**: `text-heading1`, `text-body`, `text-button` (from typography tokens)
- **Colors**: `text-brand-primary-100`, `bg-material-surface-0`, `border-system-error-100`
- **Dark Mode**: `dark:bg-black`, `dark:text-white` (automatic with `dark:` prefix)

---

## 🎭 Icons

The icon system includes 200+ SVG icons across 12 categories, automatically generated with type safety.

### Categories
- **Input**: Form and input-related icons
- **Marina**: Maritime-specific icons
- **Media**: Playback and media controls
- **Nav**: Navigation icons
- **NavMarina**: Maritime navigation
- **Social**: Social media icons
- **Weather**: Weather conditions
- **Map**: Map and location icons
- **Moon_Phase**: Lunar phase icons
- **Radio**: Radio button states
- **System**: System UI icons
- **UI**: General UI elements

### Usage

```typescript
import { Icon } from '@inkabledesign/mariner-components';

<Icon
  iconType="system"
  iconName="ico-close"
  className="w-6 h-6 text-brand-primary-100"
  themeMode="light"
/>
```

### Icon Generation

Icons are automatically generated from SVG files:

```bash
# In packages/assets directory
yarn generate:icons

# This creates:
# - icons/iconMap.ts (icon registry)
# - icons/index.ts (exports)
# - types/icons.ts (TypeScript types)
```

---

## 🎨 Theme Integration

The design system provides tokens and components but **does not manage theme state**. Your app is responsible for:

1. **Storing theme preference** (localStorage, AsyncStorage, Zustand, Redux, etc.)
2. **Detecting system theme changes**
3. **Passing `themeMode` to components**

### Example Theme Setup

```typescript
// src/store/themeStore.ts
import { create } from 'zustand';

interface ThemeState {
  themeMode: 'light' | 'dark';
  setTheme: (mode: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  themeMode: 'light',
  setTheme: (mode) => set({ themeMode: mode }),
}));

// src/app/_layout.tsx
import { useThemeStore } from '@/store/themeStore';
import { Icon } from '@inkabledesign/mariner-components';

export default function RootLayout() {
  const themeMode = useThemeStore((state) => state.themeMode);
  
  return (
    <Icon 
      iconName="ico-sun" 
      themeMode={themeMode}
    />
  );
}
```

### Responsive Breakpoints

Use the `useBreakpoint` hook for responsive layouts:

```typescript
import { BreakpointProvider, useBreakpoint } from '@inkabledesign/mariner-theme';

// Wrap your app
<BreakpointProvider>
  <App />
</BreakpointProvider>

// Use in components
function MyComponent() {
  const { breakpoint, width, height } = useBreakpoint();
  
  return (
    <TextStyled breakpoint={breakpoint}>
      Current: {breakpoint} ({width}x{height})
    </TextStyled>
  );
}
```

---

## 📚 Storybook

### Mobile Storybook (Expo)
- Runs as Expo app on device/simulator
- On-device controls for real-time prop editing
- Native performance testing
- Hot reload with Metro

```bash
cd apps/storybook-mobile
yarn storybook
```

### Web Storybook (Next.js)
- Full Storybook UI with comprehensive addons
- Responsive testing with viewport addon
- Accessibility testing capabilities
- Turbopack for fast builds

```bash
cd apps/storybook-web
yarn storybook
```

---

## 🛠 Development Scripts

### Package Management

```bash
# Install dependencies
yarn install

# Build all packages
npx lerna run build --scope '@inkabledesign/mariner-*'

# Build specific package
cd packages/theme && yarn build

# Clean build artifacts
npx lerna clean
```

### Publishing

Packages are automatically published via GitHub Actions on push to `main`:

```bash
# Manual publish (if needed)
npx lerna publish --yes

# Version bump
npx lerna version
```

### Testing

```bash
# Run tests (when configured)
yarn test

# Lint code
yarn lint
```

---

## 📦 Publishing to GitHub Packages

Packages are automatically published via GitHub Actions when you push to `main`. The workflow:

1. **Builds** all packages
2. **Versions** using conventional commits
3. **Creates** git tags
4. **Publishes** to GitHub Packages
5. **Pushes** version commits back to main

### Manual Publishing

If you need to publish manually:

```bash
# Ensure you're authenticated
npm login --registry=https://npm.pkg.github.com

# Publish all changed packages
npx lerna publish --yes
```

---

## 🏗 Architecture

### Monorepo Structure

```
mariner-design-system/
├── packages/
│   ├── theme/              # Design tokens, Tailwind configs, utilities
│   │   ├── src/
│   │   │   ├── colors.json
│   │   │   ├── typography.json
│   │   │   ├── spacing.json
│   │   │   ├── radius.json
│   │   │   ├── size.json
│   │   │   ├── loadTokens.js
│   │   │   └── index.ts
│   │   ├── tailwind/
│   │   │   ├── native.js    # NativeWind config
│   │   │   └── web.js       # Standard Tailwind config
│   │   └── package.json
│   │
│   ├── assets/             # Icons, fonts, images
│   │   ├── icons/          # 200+ SVG icons
│   │   ├── fonts/          # Montserrat font family
│   │   ├── images/         # Static images
│   │   └── package.json
│   │
│   └── components/         # React Native components
│       ├── atoms/          # Basic building blocks
│       ├── molecules/      # Simple component groups
│       ├── organisms/      # Complex sections (future)
│       ├── templates/      # Page layouts (future)
│       ├── hooks/          # UI-only hooks
│       ├── types/          # TypeScript types
│       └── package.json
│
├── apps/
│   ├── storybook-mobile/   # Expo Storybook
│   └── storybook-web/      # Next.js Storybook
│
├── .github/
│   └── workflows/
│       ├── ci.yml          # Build and test
│       └── publish.yml     # Publish to GitHub Packages
│
├── lerna.json              # Lerna configuration
├── package.json            # Root workspace
└── README.md               # This file
```

### Cross-Platform Strategy

- **Universal components** using React Native primitives where possible
- **Platform-specific variants** with `.web.tsx` and `.native.tsx` extensions (rarely needed)
- **Tailwind CSS** with NativeWind for React Native and standard Tailwind for web
- **Shared design tokens** across all platforms via JSON files
- **File protocol** for local development, GitHub Packages for production

### Key Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI framework |
| React Native | 0.83.x | Mobile platform |
| Expo SDK | 55 | React Native tooling |
| Next.js | 16.x | Web platform |
| NativeWind | 4.x | Tailwind for React Native |
| Tailwind CSS | 3.4.x | Utility-first CSS |
| Lerna | 8.x | Monorepo management |
| TypeScript | 5.x | Type safety |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add/update Storybook stories
5. Test on both mobile and web platforms
6. Commit using conventional commits (`feat:`, `fix:`, `docs:`, etc.)
7. Push to your branch
8. Open a Pull Request

### Conventional Commits

We use conventional commits for automatic versioning:

- `feat:` - New feature (minor version bump)
- `fix:` - Bug fix (patch version bump)
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

---

## 📖 Documentation

- **[PACKAGE_RENAME_SUMMARY.md](./PACKAGE_RENAME_SUMMARY.md)** - Package renaming details and migration guide
- **[GROUND_RULES.md](./.windsurf/rules/GROUND_RULES.md)** - Development conventions and best practices
- **[DESIGN_SYSTEM_RULES.md](./.windsurf/rules/DESIGN_SYSTEM_RULES.md)** - Design system architecture and rules

---

## 🔗 Links

- **GitHub Repository**: [inkabledesign/mariner-design-system](https://github.com/inkabledesign/mariner-design-system)
- **GitHub Packages**: [View Packages](https://github.com/orgs/inkabledesign/packages)
- **Mariner App**: [inkabledesign/mariner](https://github.com/inkabledesign/mariner)
- **Mariner Learning App**: [inkabledesign/mariner-edu](https://github.com/inkabledesign/mariner-edu)

---

## 📄 License

MIT License - see LICENSE file for details.

---

## 🆘 Troubleshooting

### "Cannot find module '@inkabledesign/mariner-*'"

**Solution:**
- For production: Ensure `.npmrc` is configured with GitHub Packages authentication
- For local dev: Ensure `mariner-design-system` is cloned as a sibling directory and use `file:` protocol in `package.json`

### "401 Unauthorized" when installing

**Solution:**
- Generate a new GitHub Personal Access Token with `read:packages` scope
- Update `.npmrc` with the new token

### Metro bundler not finding packages

**Solution:**
- Clear Metro cache: `yarn start --reset-cache`
- Verify `metro.config.js` has correct paths to local packages

### Tailwind classes not working

**Solution:**
- Ensure NativeWind is properly configured in `metro.config.js`
- Check that `tailwind.config.js` uses the correct breakpoint names (`mobile-sm`, not `mobile`)
- Verify `global.css` is imported in your app entry point

---

**Built with ❤️ by the Inkable Design team**
