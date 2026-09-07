import type { Meta, StoryObj } from '@storybook/react';
import TimeLineHour from './index';

const meta: Meta<typeof TimeLineHour> = {
  title: 'Molecules/TimeLineHour',
  component: TimeLineHour,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ThreeSubTicks: Story = { args: { subTicks: 3 } };
