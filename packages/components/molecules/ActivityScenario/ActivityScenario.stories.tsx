import type { Meta, StoryObj } from '@storybook/react';
import ActivityScenario from './index';

const meta: Meta<typeof ActivityScenario> = {
  title: 'Molecules/ActivityScenario',
  component: ActivityScenario,
  parameters: { layout: 'padded' },
  args: {
    description: 'Arrange the steps for a MAYDAY call in the correct order.',
    steps: [
      'Ensure radio is switched on and set to Channel 16',
      'Open the cover over the RED distress button',
      'Press and hold DISTRESS for 5 seconds',
      'Transmit the MAYDAY voice message',
    ],
    explanation: 'Distress alerting first, then the voice MAYDAY message.',
    totalActivities: 4,
    onComplete: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
