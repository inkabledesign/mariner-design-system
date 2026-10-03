import type { Meta, StoryObj } from '@storybook/react';
import Timeline from './index';

const meta: Meta<typeof Timeline> = {
  title: 'Molecules/Timeline',
  component: Timeline,
  parameters: { layout: 'padded' },
  args: { hours: ['12:00', '13:00', '14:00', '15:00', '16:00'] },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FewerHours: Story = { args: { hours: ['09:00', '12:00', '18:00'] } };
