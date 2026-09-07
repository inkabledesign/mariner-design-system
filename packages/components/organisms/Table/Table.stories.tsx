import type { Meta, StoryObj } from '@storybook/react';
import Table from './index';

const meta: Meta<typeof Table> = {
  title: 'Organisms/Table',
  component: Table,
  parameters: { layout: 'padded' },
  args: {
    columns: [
      { key: 'name', label: 'Marina', flex: 2 },
      { key: 'distance', label: 'Distance', align: 'center' },
      { key: 'price', label: 'Price', align: 'right' },
    ],
    data: [
      { id: '1', name: 'Port Hamble', distance: '12 mi', price: '£3.20' },
      { id: '2', name: 'Ocean Village', distance: '20 mi', price: '£4.10' },
      { id: '3', name: 'Lymington', distance: '35 mi', price: '£3.80' },
    ],
    striped: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoHeader: Story = { args: { showHeader: false } };
export const NoStripes: Story = { args: { striped: false } };
