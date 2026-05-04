# SearchInput Component

A reusable search input component with icon, divider, and forward ref support.

## Features

- **Search icon** with customizable visibility
- **Vertical divider** between icon and input
- **Rounded border** styling (36px radius)
- **Italic placeholder** text (Montserrat-Italic)
- **Forward ref** support for programmatic control
- **Fully customizable** appearance

## Usage

### Basic Usage

```tsx
import SearchInput from '@/components/molecules/SearchInput';

const [query, setQuery] = useState('');

<SearchInput 
  value={query}
  onChangeText={setQuery}
  placeholder="Search for marina"
/>
```

### With Ref (Programmatic Control)

```tsx
import { useRef } from 'react';
import { TextInput } from 'react-native';

const inputRef = useRef<TextInput>(null);

<SearchInput 
  ref={inputRef}
  value={query}
  onChangeText={setQuery}
/>

// Focus programmatically
const handleFocus = () => {
  inputRef.current?.focus();
};

// Blur programmatically
const handleBlur = () => {
  inputRef.current?.blur();
};
```

### Without Icon/Divider

```tsx
<SearchInput 
  value={query}
  onChangeText={setQuery}
  showIcon={false}
  showDivider={false}
/>
```

### Custom Styling

```tsx
<SearchInput 
  value={query}
  onChangeText={setQuery}
  className="shadow-md"
  containerStyle={{ marginHorizontal: 20 }}
/>
```

### With Additional TextInput Props

```tsx
<SearchInput 
  value={query}
  onChangeText={setQuery}
  autoFocus
  returnKeyType="search"
  onSubmitEditing={handleSearch}
  clearButtonMode="while-editing"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Search input value |
| `placeholder` | `string` | `'Search for marina'` | Placeholder text |
| `onChangeText` | `(text: string) => void` | - | Change handler |
| `showIcon` | `boolean` | `true` | Whether to show search icon |
| `showDivider` | `boolean` | `true` | Whether to show divider |
| `containerStyle` | `ViewStyle` | - | Additional container styles |
| `className` | `string` | - | Additional Tailwind classes |
| `ref` | `React.Ref<TextInput>` | - | Forward ref to TextInput |
| `...textInputProps` | `TextInputProps` | - | All TextInput props supported |

## Design Tokens Used

### Colors
- `material-surface-0` - Input background
- `brand-primary-20` - Border color
- `brand-primary-10` - Divider color
- `material-surface-40` - Search icon color
- `material-surface-100` - Text color
- `#999999` - Placeholder color

### Spacing
- `px-md` (12px) - Horizontal padding
- `py-xxs` (4px) - Vertical padding
- `gap-xxs` (4px) - Gap between elements
- `px-xs` (6px) - Input padding

### Icons
- `ico-search` (input type) - Search icon

### Typography
- Font: Montserrat-Italic
- Size: 15px
- Line height: 21px

## Component Structure

```
SearchInput (Container)
├── Search Icon (32×32, optional)
├── Divider (vertical, optional)
└── TextInput (flex-1)
```

## Ref Methods

When using a ref, you have access to all TextInput methods:

```tsx
const inputRef = useRef<TextInput>(null);

// Focus
inputRef.current?.focus();

// Blur
inputRef.current?.blur();

// Clear
inputRef.current?.clear();

// Check if focused
inputRef.current?.isFocused();
```

## Examples

### Search Screen

```tsx
const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    // Auto-focus on mount
    inputRef.current?.focus();
  }, []);

  return (
    <View>
      <SearchInput 
        ref={inputRef}
        value={query}
        onChangeText={setQuery}
        placeholder="Search destinations..."
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};
```

### Filter Input

```tsx
<SearchInput 
  value={filter}
  onChangeText={setFilter}
  placeholder="Filter results..."
  showIcon={false}
/>
```

### Minimal Search

```tsx
<SearchInput 
  value={query}
  onChangeText={setQuery}
  showDivider={false}
  className="border-0 bg-transparent"
/>
```

## Accessibility

- Placeholder text provides context for screen readers
- TextInput has proper keyboard type
- All touch targets meet minimum size requirements

## Notes

- The component uses `forwardRef` to expose the TextInput ref
- All standard TextInput props are supported via spread operator
- Icon and divider can be hidden independently
- Placeholder uses italic Montserrat font as per design spec
- Container has flex-1 to fill available space
