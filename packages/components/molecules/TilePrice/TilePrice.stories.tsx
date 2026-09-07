import type { Meta, StoryObj } from '@storybook/react';
import TilePrice from './index';

const meta: Meta<typeof TilePrice> = {
  title: 'Molecules/TilePrice',
  component: TilePrice,
  parameters: { layout: 'padded' },
  args: { title: 'Monthly', price: '£5.99', subtitle: 'per month', isSelected: true },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {};
export const Unselected: Story = { args: { isSelected: false } };
