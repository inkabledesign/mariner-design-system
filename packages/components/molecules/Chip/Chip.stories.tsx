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
export const Icon: Story = { args: { type: 'icon', label: 'Find nearest' } };
export const IconOnly: Story = { args: { type: 'icon', label: '' } };
export const Filter: Story = { args: { type: 'filter', label: 'Filter' } };
export const FilterWithLeadingIcon: Story = {
  args: { type: 'filter', label: 'Find nearest', iconName: 'ico-mylocation' },
};
export const Selected: Story = { args: { type: 'icon', label: 'Find nearest', selected: true } };
export const SelectedIconOnly: Story = { args: { type: 'icon', label: '', selected: true } };
export const Removable: Story = {
  args: { type: 'text', label: 'Marinas', selected: true, trailingIconName: 'ico-close' },
};
