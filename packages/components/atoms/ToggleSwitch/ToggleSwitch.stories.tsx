import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ToggleSwitch from './index';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Atoms/ToggleSwitch',
  component: ToggleSwitch,
  parameters: { layout: 'centered' },
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: { checked: false, disabled: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = { args: { checked: false } };
export const On: Story = { args: { checked: true } };
export const Disabled: Story = { args: { checked: true, disabled: true } };

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <ToggleSwitch checked={checked} onToggle={setChecked} />;
  },
};
