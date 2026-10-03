import type { Meta, StoryObj } from '@storybook/react';
import TabTop from './index';

const meta: Meta<typeof TabTop> = {
  title: 'Molecules/TabTop',
  component: TabTop,
  parameters: { layout: 'centered' },
  args: { title: 'Tab Title' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = { args: { isSelected: true } };
export const Unselected: Story = { args: { isSelected: false } };
