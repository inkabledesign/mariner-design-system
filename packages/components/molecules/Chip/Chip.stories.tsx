import type { Meta, StoryObj } from '@storybook/react';
import Chip from './index';

const meta: Meta<typeof Chip> = {
  title: 'Molecules/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary'] },
    size: { control: { type: 'select' }, options: ['sm', 'md'] },
    radius: {
      control: { type: 'select' },
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'full'],
    },
    selected: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
  },
  args: { label: 'Find nearest', variant: 'primary', size: 'md', radius: 'full', selected: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = { args: { label: 'Marinas' } };
export const WithLeadingIcon: Story = {
  args: { label: 'Find nearest', iconName: 'ico-my-location' },
};
export const IconOnly: Story = { args: { label: '', iconName: 'ico-my-location' } };
export const Filter: Story = { args: { label: 'Filter', trailingIconName: 'ico-chevron-down' } };
export const Selected: Story = {
  args: { label: 'Find nearest', iconName: 'ico-my-location', selected: true },
};
export const SelectedIconOnly: Story = {
  args: { label: '', iconName: 'ico-my-location', selected: true },
};
export const Removable: Story = {
  args: { label: 'Marinas', selected: true, trailingIconName: 'ico-close' },
};
export const Secondary: Story = { args: { variant: 'secondary', label: 'Tides' } };
export const SecondarySelected: Story = {
  args: { variant: 'secondary', label: 'Tides', selected: true },
};
export const Small: Story = { args: { size: 'sm', label: 'Marinas' } };
export const SquaredDefault: Story = { args: { radius: 'xs', label: 'Find nearest' } };
