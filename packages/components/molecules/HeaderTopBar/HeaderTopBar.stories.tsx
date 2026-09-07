import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import HeaderTopBar from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof HeaderTopBar> = {
  title: 'Molecules/HeaderTopBar',
  component: HeaderTopBar,
  parameters: { layout: 'padded' },
  argTypes: { variant: { control: { type: 'select' }, options: ['default', 'search'] } },
  decorators: [
    (Story) => (
      <ViewStyled className="w-96">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Marinas',
    iconLeft: { iconName: 'ico-chevron-left' },
    iconRight: { iconName: 'ico-filter-round' },
  },
};

export const Search: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <HeaderTopBar
        variant="search"
        searchPlaceholder="Search for marina"
        searchValue={value}
        onSearchChange={setValue}
        iconLeft={{ iconName: 'ico-chevron-left' }}
      />
    );
  },
};
