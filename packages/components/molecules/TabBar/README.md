# TabBar

An animated tab bar component with a sliding indicator that smoothly follows the active tab.

## Component Type
**Molecule** - Combines TouchableOpacity and TextStyled atoms with animated indicator.

## Features
- Animated sliding indicator
- Smooth transitions between tabs
- Scroll-based interpolation support
- Auto-measuring tab widths
- Touch-optimized interactions
- Cross-platform support (React Native + Next.js)

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | `TabItem[]` | Yes | Array of tab objects with id and label |
| `selectedIndex` | `number` | Yes | Currently active tab index (0-based) |
| `onChange` | `(index: number) => void` | Yes | Callback when a tab is selected |
| `scrollX` | `number` | No | Scroll position for indicator interpolation |
| `maxScrollX` | `number` | No | Maximum scroll value for interpolation |
| `className` | `string` | No | Additional CSS classes |

### TabItem Interface
```typescript
interface TabItem {
  id: string;      // Unique identifier
  label: string;   // Display label
}
```

## Usage

### Basic Usage
```tsx
import TabBar from '@/components/molecules/TabBar';

const [activeTab, setActiveTab] = useState(0);

<TabBar
  tabs={[
    { id: 'tab1', label: 'First' },
    { id: 'tab2', label: 'Second' },
    { id: 'tab3', label: 'Third' }
  ]}
  selectedIndex={activeTab}
  onChange={setActiveTab}
/>
```

### With Horizontal Paging ScrollView
```tsx
import TabBar from '@/components/molecules/TabBar';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const [activeTabIndex, setActiveTabIndex] = useState(0);
const horizontalScrollViewRef = useRef<Animated.ScrollView | null>(null);
const scrollX = useSharedValue(0);

// Animated scroll handler
const scrollHandler = useAnimatedScrollHandler({
  onScroll: (event) => {
    scrollX.value = event.contentOffset.x;
  },
});

// Handle tab change from TabBar
const handleTabChange = (index: number) => {
  setActiveTabIndex(index);
  if (horizontalScrollViewRef.current) {
    horizontalScrollViewRef.current.scrollTo({
      x: index * deviceWidth,
      animated: true,
    });
  }
};

// Handle swipe to update tab
const handleMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
  const newIndex = Math.round(e.nativeEvent.contentOffset.x / deviceWidth);
  if (newIndex !== activeTabIndex) {
    setActiveTabIndex(newIndex);
  }
};

<TabBar
  tabs={tabs}
  selectedIndex={activeTabIndex}
  onChange={handleTabChange}
  scrollX={scrollX.value}
  maxScrollX={deviceWidth * (tabs.length - 1)}
/>

<Animated.ScrollView
  ref={horizontalScrollViewRef}
  horizontal
  pagingEnabled
  onScroll={scrollHandler}
  scrollEventThrottle={16}
  onMomentumScrollEnd={handleMomentumScrollEnd}
  bounces={false}
>
  {tabs.map((tab) => (
    <ScrollView key={tab.id} style={{ width: deviceWidth }}>
      {/* Tab content */}
    </ScrollView>
  ))}
</Animated.ScrollView>
```

### In Distress Procedures
```tsx
import TabBar from '@/components/molecules/TabBar';
import distressData from '@/data/distress-procedures.json';

const [activeTabIndex, setActiveTabIndex] = useState(0);

const tabs = distressData.tabs.map(tab => ({
  id: tab.id,
  label: tab.label
}));

<TabBar
  tabs={tabs}
  selectedIndex={activeTabIndex}
  onChange={setActiveTabIndex}
/>
```

## Design Specs

### Layout
- **Width**: Full width (w-full)
- **Border**: Bottom border with brand-primary-20
- **Background**: material-surface-0 (#f4f4f4)
- **Shadow**: 0px 2px 10px rgba(38,46,188,0.1)

### Tab Buttons
- **Flex**: Equal width distribution (flex-1)
- **Padding**: pt-sm (8px), pb-xs (4px)
- **Active Opacity**: 0.7

### Typography
- **Font**: body (16px Regular)
- **Active Color**: brand-primary-100 (#262ebc)
- **Inactive Color**: material-surface-80 (#333)

### Animated Indicator
- **Height**: 2px
- **Color**: brand-primary-100 (#262ebc)
- **Position**: Absolute, bottom
- **Animation**: Bezier easing (0.33, 1, 0.68, 1), 250ms duration

## Animation Details

### Tab Selection Animation
- **Duration**: 250ms
- **Easing**: Cubic Bezier (0.33, 1, 0.68, 1)
- **Properties**: Position (translateX) and width

### Scroll Interpolation
- Calculates progress based on scroll position
- Interpolates indicator position and width
- Smooth tracking without discrete animations
- Updates on every scroll event

## How It Works

1. **Measurement Phase**:
   - Measures container position on layout
   - Measures each tab's position and width
   - Stores measurements for animation calculations

2. **Tab Selection**:
   - User taps a tab
   - Indicator animates to new position
   - Width animates to match new tab
   - onChange callback fires

3. **Scroll Tracking** (optional):
   - Receives scroll position from parent
   - Calculates interpolation progress
   - Updates indicator position smoothly
   - No discrete animations during scroll

## Components Used
- `View` - Container and tab buttons
- `TouchableOpacity` - Pressable tabs
- `TextStyled` - Tab labels
- `Animated.View` - Sliding indicator
- `react-native-reanimated` - Smooth animations

## Performance Considerations
- Uses `useSharedValue` for animation values
- `useDerivedValue` for scroll interpolation
- Measurements cached after initial layout
- Minimal re-renders with proper state management

## Accessibility
- Touch-optimized with activeOpacity
- Clear visual indication of active tab
- Smooth animations for better UX

## Cross-Platform Support
- ✅ React Native (iOS/Android)
- ✅ Next.js (Web)
- Uses NativeWind for consistent styling
- Reanimated works on all platforms

## Related Components
- `TabItem` - Individual tab (deprecated, now integrated)
- `TabNavigation` - Old implementation (deprecated)
- `DistressScreen` - Uses TabBar for procedure switching

## Differences from TabNavigation

### Old (TabNavigation)
- Separate TabItem components
- ID-based selection
- No scroll interpolation
- Static underline

### New (TabBar)
- Integrated tab rendering
- Index-based selection
- Scroll interpolation support
- Animated sliding indicator
- Auto-measuring widths
- Smoother animations

## Use Cases
- Tabbed content navigation
- Multi-section screens
- Procedure switching (Distress calls)
- Settings pages
- Category filters

## Notes
- Tabs automatically distribute width equally
- Indicator width matches active tab width
- Measurements happen after layout
- Scroll interpolation is optional
- Works with any number of tabs
- Component is controlled (parent manages state)
