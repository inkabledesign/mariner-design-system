import type { Meta, StoryObj } from '@storybook/react';
import TimelineScrubber from './index';

const meta: Meta<typeof TimelineScrubber> = {
  title: 'Molecules/TimelineScrubber',
  component: TimelineScrubber,
  parameters: { layout: 'padded' },
  args: { hours: ['12:00', '13:00', '14:00', '15:00', '16:00'], position: 0.4 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AtStart: Story = { args: { position: 0 } };
export const AtEnd: Story = { args: { position: 1 } };
