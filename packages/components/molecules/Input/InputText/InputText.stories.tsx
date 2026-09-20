import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import InputText from './index';
import ViewStyled from '../../../atoms/ViewStyled';

const meta: Meta<typeof InputText> = {
  title: 'Molecules/Input/InputText',
  component: InputText,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['default', 'rounded'] },
    disabled: { control: { type: 'boolean' } },
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
    return <InputText {...args} value={value} onChangeText={setValue} />;
  },
};

export const WithValue: Story = {
  render: (args) => {
    const [value, setValue] = useState('marina@example.com');
    return <InputText {...args} value={value} onChangeText={setValue} />;
  },
};

export const WithIcons: Story = {
  args: { iconLeft: 'ico-berth-round', iconRight: 'ico-close-round' },
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputText {...args} value={value} onChangeText={setValue} />;
  },
};

export const Rounded: Story = {
  args: { variant: 'rounded', iconLeft: 'ico-berth-round' },
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputText {...args} value={value} onChangeText={setValue} />;
  },
};

export const Disabled: Story = {
  args: { disabled: true, iconLeft: 'ico-berth-round' },
  render: (args) => {
    const [value, setValue] = useState('');
    return <InputText {...args} value={value} onChangeText={setValue} />;
  },
};
