# Mariner Design System

A comprehensive cross-platform design system for Mariner applications, built with Tailwind CSS and supporting both React Native (Expo) and Next.js web platforms.

## 📦 Packages

### Core Packages
- **@mariner/tokens** - Design tokens (colors, typography, spacing, radius)
- **@mariner/icons** - Merged icon system with 200+ icons from both mariner apps
- **@mariner/fonts** - Montserrat font family assets
- **@mariner/tailwind-config** - Platform-specific Tailwind configurations
- **@mariner/components** - Cross-platform React components

### Storybook Applications
- **apps/storybook-mobile** - Expo React Native Storybook app
- **apps/storybook-web** - Next.js web Storybook app

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/inkabledesign/mariner-design-system.git
cd mariner-design-system

# Install dependencies
npm install

# Bootstrap the monorepo
npm run bootstrap

# Generate icons
npm run generate:icons

# Build all packages
npm run build
```

### Development

```bash
# Run mobile Storybook (opens Expo app)
npm run storybook:mobile

# Run web Storybook (opens browser at localhost:6006)
npm run storybook:web

# Build all packages in watch mode
npm run dev
```

## 📱 Platform Support

### React Native (Expo)
- Uses NativeWind for Tailwind CSS support
- Platform-specific components with `.native.tsx` extensions
- Optimized for mobile breakpoints

### Next.js Web
- Standard Tailwind CSS configuration
- Platform-specific components with `.web.tsx` extensions
- Responsive design with desktop breakpoints

## 🎨 Design Tokens

All design tokens are sourced from mariner-tailwind-edu and include:

- **Colors**: Brand, material, solid, and system colors with light/dark mode support
- **Typography**: Responsive text styles with Montserrat font family
- **Spacing**: Consistent spacing scale across all platforms
- **Radius**: Border radius tokens for consistent rounded corners

### Usage

```typescript
import { buildTheme } from '@mariner/tokens';

const { theme } = buildTheme({
  radius: 'mobile-sm',
  spacing: 'mobile-sm',
  typography: 'mobile-sm',
});
```

## 🔧 Components

### Atomic Components (12)
- Layout: Column, Row, ViewStyled, PressableStyled
- Typography: TextStyled
- Interactive: Icon, Divider, ToggleSwitch, RadioButton
- Visual: GradientBackground, ProgressBar, WaveDecoration
- Data: AnimatedCircleProgress, CircleProgress, DonutStats, TableCell

### Molecule Components (12)
- Form: Button, Input, SearchInput, ButtonGroup
- UI: Badge, CardInfo, HeaderTopBar, TabBar, Avatar
- Media: AudioPlayerLrg, AudioPlayerSml
- Progress: ProgressBar (molecule version)

### Usage

```typescript
import { Button, TextStyled, Icon } from '@mariner/components';

<Button
  text="Click me"
  variant="primary"
  iconLeft={{
    iconType: 'system',
    iconName: 'ico-plus'
  }}
/>
```

### Theme Mode Support

Components that support theming (like `Icon`) accept an optional `themeMode` prop:

```typescript
import { Icon } from '@mariner/components';
import { useState } from 'react';

function MyApp() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <Icon 
      iconName="ico-heart" 
      themeMode={theme}
      color="text-brand-primary-100"
    />
  );
}
```

**Note:** The component library does NOT manage theme state. Your app is responsible for:
- Storing theme preference (localStorage, AsyncStorage, Zustand, Redux, etc.)
- Detecting system theme changes
- Passing `themeMode` to components that need it

📖 **See [THEME_INTEGRATION.md](./THEME_INTEGRATION.md) for complete theme setup guide**  
📖 **Upgrading from v1.x? See [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)**

## 🎭 Icons

The icon system merges icons from both mariner applications:

- **200+ icons** across 12 categories
- **Automatic generation** with `icons-gen.js` script
- **Type-safe** with generated TypeScript definitions

### Categories
- Input, Marina, Media, Nav, NavMarina, Social, Weather
- Map, Moon_Phase (from mariner app)
- Radio, System, UI (from mariner-tailwind-edu)

### Usage

```typescript
import { Icon } from '@mariner/components';

<Icon
  iconType="system"
  iconName="ico-close"
  className="w-6 h-6 text-brand-primary-100"
/>
```

## 📚 Storybook

### Mobile Storybook
- Runs as Expo app on device/simulator
- On-device controls for real-time prop editing
- Native performance testing

### Web Storybook
- Full Storybook UI with comprehensive addons
- Responsive testing with viewport addon
- Accessibility testing capabilities

## 🛠 Development Scripts

```bash
# Package management
npm run build              # Build all packages
npm run dev               # Build packages in watch mode
npm run clean             # Clean all node_modules
npm run bootstrap         # Bootstrap monorepo dependencies

# Storybook
npm run storybook:mobile  # Start mobile Storybook
npm run storybook:web     # Start web Storybook
npm run build:storybook:mobile  # Build mobile Storybook
npm run build:storybook:web     # Build web Storybook

# Icons
npm run generate:icons    # Regenerate icon map and types

# Publishing
npm run version          # Version packages
npm run publish          # Publish to GitHub Packages
```

## 📦 Publishing

Packages are published to GitHub Packages registry:

```bash
# Configure npm for GitHub Packages
npm config set @mariner:registry https://npm.pkg.github.com

# Install in your project
npm install @mariner/components @mariner/tokens @mariner/icons
```

## 🏗 Architecture

### Monorepo Structure
```
mariner-design-system/
├── packages/
│   ├── tokens/           # Design tokens
│   ├── icons/            # Icon system
│   ├── fonts/            # Font assets
│   ├── tailwind-config/  # Platform configs
│   └── components/       # React components
├── apps/
│   ├── storybook-mobile/ # Expo Storybook
│   └── storybook-web/    # Next.js Storybook
├── lerna.json           # Lerna configuration
└── package.json         # Root workspace
```

### Cross-Platform Strategy
- **Universal components** where possible using React Native primitives
- **Platform-specific variants** with `.web.tsx` and `.native.tsx` extensions
- **Tailwind CSS** with NativeWind for React Native and standard Tailwind for web
- **Shared design tokens** across all platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update stories in Storybook
5. Test on both mobile and web platforms
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/inkabledesign/mariner-design-system)
- [GitHub Packages](https://github.com/orgs/inkabledesign/packages)
- [Mariner App](https://github.com/inkabledesign/mariner)
- [Mariner Learning App](https://github.com/inkabledesign/mariner-learning)
