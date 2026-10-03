import type { Meta, StoryObj } from '@storybook/react';
import ProgressDecorative from './index';

const meta: Meta<typeof ProgressDecorative> = {
  title: 'Molecules/ProgressDecorative',
  component: ProgressDecorative,
  parameters: { layout: 'centered' },
  argTypes: { progress: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
  args: { progress: 30 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ThirtyPercent: Story = { args: { progress: 30 } };
export const SixtyPercent: Story = { args: { progress: 60 } };
export const Complete: Story = { args: { progress: 100 } };
