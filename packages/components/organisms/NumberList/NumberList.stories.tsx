import type { Meta, StoryObj } from '@storybook/react';
import NumberList from './index';

const meta: Meta<typeof NumberList> = {
  title: 'Organisms/NumberList',
  component: NumberList,
  parameters: { layout: 'padded' },
  args: { count: 5, currentIndex: 0 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Midway: Story = { args: { currentIndex: 2 } };
export const ManySections: Story = { args: { count: 10, currentIndex: 4 } };
