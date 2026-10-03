import type { Meta, StoryObj } from '@storybook/react';
import SegmentControlItem from './index';

const meta: Meta<typeof SegmentControlItem> = {
  title: 'Molecules/SegmentControlItem',
  component: SegmentControlItem,
  parameters: { layout: 'centered' },
  args: { label: '12:20 am' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = { args: { isActive: true } };
export const Inactive: Story = { args: { isActive: false } };
export const ActivePrimary: Story = { args: { isActive: true, variant: 'primary' } };
export const Rounded: Story = { args: { isActive: true, shape: 'rounded' } };
export const Small: Story = { args: { isActive: true, size: 'sm' } };
