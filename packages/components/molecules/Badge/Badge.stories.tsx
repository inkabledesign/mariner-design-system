import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
  title: 'Molecules/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'default'],
    },
    size: { control: { type: 'select' }, options: ['lg', 'sm'] },
    label: { control: { type: 'text' } },
  },
  args: { label: 'Available', variant: 'primary', size: 'lg' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Success: Story = { args: { variant: 'success', label: 'Completed' } };
export const Error: Story = { args: { variant: 'error', label: 'Failed' } };
export const Warning: Story = { args: { variant: 'warning', label: 'Pending' } };
export const Small: Story = { args: { variant: 'secondary', size: 'sm', label: 'New' } };
