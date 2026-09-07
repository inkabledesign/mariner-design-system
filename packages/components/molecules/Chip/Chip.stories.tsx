import type { Meta, StoryObj } from '@storybook/react';
import Chip from './index';

const meta: Meta<typeof Chip> = {
  title: 'Molecules/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  argTypes: {
    type: { control: { type: 'select' }, options: ['text', 'icon', 'filter'] },
    selected: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
  },
  args: { label: 'Find nearest', type: 'icon', selected: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = { args: { type: 'text', label: 'Marinas' } };
export const Icon: Story = { args: { type: 'icon', iconName: 'ico-mylocation', label: 'Find nearest' } };
export const Filter: Story = { args: { type: 'filter', label: 'Filter' } };
export const Selected: Story = { args: { type: 'icon', label: 'Find nearest', selected: true } };
