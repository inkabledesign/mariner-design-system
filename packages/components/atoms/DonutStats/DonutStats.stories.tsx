import type { Meta, StoryObj } from '@storybook/react';
import DonutStats from './index';

const meta: Meta<typeof DonutStats> = {
  title: 'Atoms/DonutStats',
  component: DonutStats,
  parameters: { layout: 'centered' },
  argTypes: {
    percentage: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: { type: 'number' } },
    strokeWidth: { control: { type: 'number' } },
    showPercentage: { control: { type: 'boolean' } },
  },
  args: { percentage: 72, size: 120, strokeWidth: 12, showPercentage: true, label: 'Complete' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Full: Story = { args: { percentage: 100 } };
