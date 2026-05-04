/**
 * SearchInput Component Examples
 */

import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import SearchInput from './index';
import ViewStyled from '../../atoms/ViewStyled';
import Column from '../../atoms/Column';
import Row from '../../atoms/Row';
import TextStyled from '../../atoms/TextStyled';
import PressableStyled from '../../atoms/PressableStyled';

export const SearchInputExamples = () => {
  const [query1, setQuery1] = useState('');
  const [query2, setQuery2] = useState('');
  const [query3, setQuery3] = useState('');
  const [query4, setQuery4] = useState('');
  
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    inputRef.current?.blur();
  };

  const handleClear = () => {
    inputRef.current?.clear();
    setQuery2('');
  };

  return (
    <Column className="gap-6 p-4 bg-material-surface-0">
      <TextStyled 
        textStyle="heading5" 
        colorCategory="material" 
        colorName="surface" 
        colorVariant="100"
      >
        SearchInput Examples
      </TextStyled>

      {/* Example 1: Basic */}
      <Column className="gap-2">
        <TextStyled 
          textStyle="caption" 
          colorCategory="material" 
          colorName="surface" 
          colorVariant="60"
        >
          Basic Usage
        </TextStyled>
        <SearchInput 
          value={query1}
          onChangeText={setQuery1}
          placeholder="Search for marina"
        />
      </Column>

      {/* Example 2: With Ref Control */}
      <Column className="gap-2">
        <TextStyled 
          textStyle="caption" 
          colorCategory="material" 
          colorName="surface" 
          colorVariant="60"
        >
          With Ref (Programmatic Control)
        </TextStyled>
        <SearchInput 
          ref={inputRef}
          value={query2}
          onChangeText={setQuery2}
          placeholder="Controlled input"
        />
        <Row className="gap-2">
          <PressableStyled 
            onPress={handleFocus}
            className="bg-brand-primary-100 px-4 py-2 rounded-lg"
          >
            <TextStyled 
              text="Focus"
              textStyle="body"
              colorCategory="solid"
              colorName="white"
            />
          </PressableStyled>
          <PressableStyled 
            onPress={handleBlur}
            className="bg-brand-secondary-100 px-4 py-2 rounded-lg"
          >
            <TextStyled 
              text="Blur"
              textStyle="body"
              colorCategory="solid"
              colorName="white"
            />
          </PressableStyled>
          <PressableStyled 
            onPress={handleClear}
            className="bg-material-surface-40 px-4 py-2 rounded-lg"
          >
            <TextStyled 
              text="Clear"
              textStyle="body"
              colorCategory="solid"
              colorName="white"
            />
          </PressableStyled>
        </Row>
      </Column>

      {/* Example 3: Without Icon */}
      <Column className="gap-2">
        <TextStyled 
          textStyle="caption" 
          colorCategory="material" 
          colorName="surface" 
          colorVariant="60"
        >
          Without Icon
        </TextStyled>
        <SearchInput 
          value={query3}
          onChangeText={setQuery3}
          placeholder="Filter results..."
          showIcon={false}
        />
      </Column>

      {/* Example 4: Without Divider */}
      <Column className="gap-2">
        <TextStyled 
          textStyle="caption" 
          colorCategory="material" 
          colorName="surface" 
          colorVariant="60"
        >
          Without Divider
        </TextStyled>
        <SearchInput 
          value={query4}
          onChangeText={setQuery4}
          placeholder="Search..."
          showDivider={false}
        />
      </Column>

      {/* Example 5: Minimal (No Icon, No Divider) */}
      <Column className="gap-2">
        <TextStyled 
          textStyle="caption" 
          colorCategory="material" 
          colorName="surface" 
          colorVariant="60"
        >
          Minimal (No Icon/Divider)
        </TextStyled>
        <SearchInput 
          value={query1}
          onChangeText={setQuery1}
          placeholder="Type to search..."
          showIcon={false}
          showDivider={false}
        />
      </Column>

      {/* Example 6: Custom Placeholder */}
      <Column className="gap-2">
        <TextStyled 
          textStyle="caption" 
          colorCategory="material" 
          colorName="surface" 
          colorVariant="60"
        >
          Custom Placeholder
        </TextStyled>
        <SearchInput 
          value={query1}
          onChangeText={setQuery1}
          placeholder="Find your destination..."
        />
      </Column>

      {/* Example 7: With Additional Props */}
      <Column className="gap-2">
        <TextStyled 
          textStyle="caption" 
          colorCategory="material" 
          colorName="surface" 
          colorVariant="60"
        >
          With Additional TextInput Props
        </TextStyled>
        <SearchInput 
          value={query1}
          onChangeText={setQuery1}
          placeholder="Press return to search"
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => console.log('Search submitted:', query1)}
        />
      </Column>
    </Column>
  );
};

export default SearchInputExamples;
