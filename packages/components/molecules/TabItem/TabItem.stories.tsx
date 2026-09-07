import type { Meta, StoryObj } from '@storybook/react';
import TabItem from './index';

const meta: Meta<typeof TabItem> = {
  title: 'Molecules/TabItem',
  component: TabItem,
  parameters: { layout: 'centered' },
  args: { label: 'Mayday', isActive: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { isActive: true } };
