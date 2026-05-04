import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';
import ViewStyled from '../../atoms/ViewStyled';
import Icon from '../../atoms/Icon';
import Divider from '../../atoms/Divider';
import { theme } from '@mariner/theme';
import type { SearchInputProps } from './index.types';

/**
 * SearchInput - A reusable search input component with icon and divider
 * 
 * Features:
 * - Search icon with divider
 * - Rounded border styling
 * - Italic placeholder text
 * - Forward ref support for TextInput access
 * - Customizable appearance
 * 
 * @example
 * // Basic usage
 * <SearchInput 
 *   value={query}
 *   onChangeText={setQuery}
 *   placeholder="Search for marina"
 * />
 * 
 * @example
 * // With ref
 * const inputRef = useRef<TextInput>(null);
 * 
 * <SearchInput 
 *   ref={inputRef}
 *   value={query}
 *   onChangeText={setQuery}
 * />
 * 
 * // Focus programmatically
 * inputRef.current?.focus();
 * 
 * @example
 * // Without icon/divider
 * <SearchInput 
 *   value={query}
 *   onChangeText={setQuery}
 *   showIcon={false}
 *   showDivider={false}
 * />
 */
const SearchInput = forwardRef<TextInput, SearchInputProps>(
  (
    {
      value = '',
      placeholder = 'Search for marina',
      onChangeText,
      showIcon = true,
      showDivider = true,
      containerStyle,
      className,
      themeMode = 'light',
      breakpoint = 'mobile',
      ...textInputProps
    },
    ref
  ) => {
    return (
      <ViewStyled 
        style={containerStyle}
        className={`flex-1 flex-row items-center bg-material-surface-0 border border-brand-primary-20 rounded-[36px] px-md py-xxs gap-xxs ${className || ''}`}
      >
        {/* Search Icon */}
        {showIcon && (
          <Icon
            iconName="ico-search"
            color="text-material-surface-40"
            className="w-[32px] h-[32px]"
          />
        )}

        {/* Divider */}
        {showDivider && (
          <Divider 
            type="vertical" 
            className="h-full bg-brand-primary-10"
          />
        )}

        {/* Input Field */}
        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.color[themeMode].material.surface['40']}
          style={{
            flex: 1,
            fontFamily: 'Montserrat-Italic',
            fontSize: theme.typography[breakpoint].text.placeholder.fontSize,
            lineHeight: theme.typography[breakpoint].text.placeholder.lineHeight,
            color: theme.color[themeMode].material.surface['100'],
            paddingHorizontal: theme.spacing[breakpoint].spacing.xs,
          }}
          {...textInputProps}
        />
      </ViewStyled>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
