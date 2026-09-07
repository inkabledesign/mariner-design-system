import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import SearchInput from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof SearchInput> = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  parameters: { layout: 'padded' },
  argTypes: {
    placeholder: { control: { type: 'text' } },
    showIcon: { control: { type: 'boolean' } },
    showDivider: { control: { type: 'boolean' } },
  },
  args: { placeholder: 'Search for marina', showIcon: true, showDivider: true },
  decorators: [
    (Story) => (
      <ViewStyled className="w-80">
        <Story />
      </ViewStyled>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <SearchInput {...args} value={value} onChangeText={setValue} />;
  },
};
