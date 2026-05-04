import React, { useState } from 'react';
import Column from '../../atoms/Column';
import TextStyled from '../../atoms/TextStyled';
import ButtonGroup from './index';

/**
 * ButtonGroup Component Examples
 *
 * Demonstrates various use cases for the ButtonGroup component.
 */
export default function ButtonGroupExamples() {
  const [theme, setTheme] = useState('day');
  const [unit, setUnit] = useState('metric');
  const [view, setView] = useState('list');

  return (
    <Column className="gap-xl p-md">
      {/* Example 1: Theme Toggle (Day/Night) */}
      <Column className="gap-sm">
        <TextStyled textStyle="heading6">Theme Toggle</TextStyled>
        <ButtonGroup
          options={[
            { id: 'day', label: 'Day' },
            { id: 'night', label: 'Night' },
          ]}
          selectedId={theme}
          onChange={setTheme}
        />
        <TextStyled textStyle="body" className="text-brand-primary-60">
          Selected: {theme}
        </TextStyled>
      </Column>

      {/* Example 2: Unit Selection (3 options) */}
      <Column className="gap-sm">
        <TextStyled textStyle="heading6">Unit Selection</TextStyled>
        <ButtonGroup
          options={[
            { id: 'metric', label: 'Metric' },
            { id: 'imperial', label: 'Imperial' },
            { id: 'nautical', label: 'Nautical' },
          ]}
          selectedId={unit}
          onChange={setUnit}
        />
        <TextStyled textStyle="body" className="text-brand-primary-60">
          Selected: {unit}
        </TextStyled>
      </Column>

      {/* Example 3: View Mode Toggle */}
      <Column className="gap-sm">
        <TextStyled textStyle="heading6">View Mode</TextStyled>
        <ButtonGroup
          options={[
            { id: 'list', label: 'List' },
            { id: 'grid', label: 'Grid' },
          ]}
          selectedId={view}
          onChange={setView}
        />
        <TextStyled textStyle="body" className="text-brand-primary-60">
          Selected: {view}
        </TextStyled>
      </Column>
    </Column>
  );
}
