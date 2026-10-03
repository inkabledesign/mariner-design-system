import type { Meta, StoryObj } from '@storybook/react';
import ButtonProgress from './index';

const meta: Meta<typeof ButtonProgress> = {
  title: 'Molecules/ButtonProgress',
  component: ButtonProgress,
  parameters: { layout: 'padded' },
  args: { percentage: 42, totalFiles: 20, downloadedFiles: 8 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {};
export const Primary: Story = { args: { variant: 'primary' } };
