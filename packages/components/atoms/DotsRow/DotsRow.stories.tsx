import type { Meta, StoryObj } from '@storybook/react';
import DotsRow from './index';

const meta: Meta<typeof DotsRow> = {
  title: 'Atoms/DotsRow',
  component: DotsRow,
  parameters: { layout: 'centered' },
  argTypes: { count: { control: { type: 'number', min: 1, max: 8, step: 1 } } },
  args: { count: 4 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
