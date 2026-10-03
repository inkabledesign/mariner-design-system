import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
  title: 'Molecules/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
    },
    size: { control: { type: 'select' }, options: ['lg', 'sm'] },
    themeMode: { control: { type: 'select' }, options: ['light', 'dark'] },
    label: { control: { type: 'text' } },
    iconName: { control: { type: 'text' } },
  },
  args: {
    label: 'Available',
    variant: 'primary',
    size: 'lg',
    iconName: 'ico-tick-round',
    themeMode: 'light',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Danger: Story = { args: { variant: 'danger', label: 'Unavailable' } };
export const Success: Story = { args: { variant: 'success', label: 'Completed' } };
export const Warning: Story = { args: { variant: 'warning', label: 'Pending' } };
export const Small: Story = { args: { variant: 'secondary', size: 'sm', label: 'New' } };
export const TextOnly: Story = { args: { variant: 'primary', iconName: undefined } };
export const IconOnly: Story = { args: { variant: 'success', label: undefined } };
