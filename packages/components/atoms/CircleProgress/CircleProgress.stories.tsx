import type { Meta, StoryObj } from '@storybook/react';
import CircleProgress from './index';

const meta: Meta<typeof CircleProgress> = {
  title: 'Atoms/CircleProgress',
  component: CircleProgress,
  parameters: { layout: 'centered' },
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: { type: 'number' } },
    strokeWidth: { control: { type: 'number' } },
  },
  args: { progress: 60, size: 80, strokeWidth: 8 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { progress: 60 } };
export const Full: Story = { args: { progress: 100 } };
export const Low: Story = { args: { progress: 15 } };
