import type { Meta, StoryObj } from '@storybook/react';
import ProgressDataItem from './index';

const meta: Meta<typeof ProgressDataItem> = {
  title: 'Atoms/ProgressDataItem',
  component: ProgressDataItem,
  parameters: { layout: 'centered' },
  argTypes: { value: { control: { type: 'text' } }, label: { control: { type: 'text' } } },
  args: { value: 51, label: 'Total' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Percentage: Story = { args: { value: '72%', label: 'Complete' } };
