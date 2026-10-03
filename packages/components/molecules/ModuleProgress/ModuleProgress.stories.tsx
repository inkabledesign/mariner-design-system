import type { Meta, StoryObj } from '@storybook/react';
import ModuleProgress from './index';

const meta: Meta<typeof ModuleProgress> = {
  title: 'Molecules/ModuleProgress',
  component: ModuleProgress,
  parameters: { layout: 'padded' },
  args: { progress: 60 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {};
export const Primary: Story = { args: { variant: 'primary' } };
export const Empty: Story = { args: { progress: 0 } };
