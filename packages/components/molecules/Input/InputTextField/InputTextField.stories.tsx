import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import InputTextField from './index';
import ViewStyled from '../../../atoms/ViewStyled';

const meta: Meta<typeof InputTextField> = {
  title: 'Molecules/Input/InputTextField',
  component: InputTextField,
  parameters: { layout: 'padded' },
  argTypes: {
    status: { control: { type: 'select' }, options: ['default', 'error', 'success', 'disabled'] },
  },
  args: { placeholder: 'Input placeholder' },
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
    return <InputTextField {...args} value={value} onChangeText={setValue} />;
  },
};

export const Error: Story = {
  args: { status: 'error' },
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputTextField {...args} value={value} onChangeText={setValue} />;
  },
};

export const Success: Story = {
  args: { status: 'success' },
  render: (args) => {
    const [value, setValue] = useState('Looking good');
    return <InputTextField {...args} value={value} onChangeText={setValue} />;
  },
};

export const Disabled: Story = {
  args: { status: 'disabled' },
  render: (args) => {
    const [value, setValue] = useState('Read-only value');
    return <InputTextField {...args} value={value} onChangeText={setValue} />;
  },
};
