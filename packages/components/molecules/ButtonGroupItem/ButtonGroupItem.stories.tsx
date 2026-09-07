import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroupItem from './index';

const meta: Meta<typeof ButtonGroupItem> = {
  title: 'Molecules/ButtonGroupItem',
  component: ButtonGroupItem,
  parameters: { layout: 'centered' },
  args: { label: '12:20 am' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = { args: { isSelected: true } };
export const Unselected: Story = { args: { isSelected: false } };
