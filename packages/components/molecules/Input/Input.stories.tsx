import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Input from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof Input> = {
  title: 'Molecules/Input',
  component: Input,
  parameters: { layout: 'padded' },
  argTypes: {
    label: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
    iconPosition: { control: { type: 'select' }, options: ['none', 'left', 'right'] },
  },
  args: { label: 'Email', placeholder: 'you@example.com', iconPosition: 'none' },
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
    return <Input {...args} value={value} onChangeText={setValue} />;
  },
};

export const WithIcon: Story = {
  args: { iconPosition: 'left', iconName: 'ico-email-round' },
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChangeText={setValue} />;
  },
};

export const WithError: Story = {
  args: { error: 'This field is required' },
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChangeText={setValue} />;
  },
};
