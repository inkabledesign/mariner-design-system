import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: { checked: false, disabled: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = { args: { checked: false } };
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { checked: true, disabled: true } };

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onPress={() => setChecked((v) => !v)} />;
  },
};
