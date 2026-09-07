import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ListItemSimple from './index';
import ViewStyled from '../../atoms/ViewStyled';

const meta: Meta<typeof ListItemSimple> = {
  title: 'Molecules/ListItemSimple',
  component: ListItemSimple,
  parameters: { layout: 'padded' },
  argTypes: {
    trailing: { control: { type: 'select' }, options: ['chevron', 'switch', 'radio', 'none'] },
  },
  args: { label: 'Setting', title: 'Notifications', leadingIconName: 'ico-berth-round', trailing: 'chevron' },
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

export const Chevron: Story = { args: { trailing: 'chevron' } };

export const Switch: Story = {
  args: { trailing: 'switch' },
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return (
      <ListItemSimple
        title={args.title ?? 'Notifications'}
        label={args.label}
        leadingIconName={args.leadingIconName}
        trailing="switch"
        checked={checked}
        onToggle={setChecked}
      />
    );
  },
};

export const Radio: Story = {
  args: { trailing: 'radio' },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <ListItemSimple
        title={args.title ?? 'Notifications'}
        label={args.label}
        leadingIconName={args.leadingIconName}
        trailing="radio"
        checked={checked}
        onToggle={setChecked}
      />
    );
  },
};
