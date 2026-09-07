import type { Meta, StoryObj } from '@storybook/react';
import ActivityVHFScenario from './index';

const meta: Meta<typeof ActivityVHFScenario> = {
  title: 'Molecules/ActivityVHFScenario',
  component: ActivityVHFScenario,
  parameters: { layout: 'padded' },
  args: {
    description: 'Perform the distress call procedure on the VHF emulator.',
    steps: [
      'Select Channel 16',
      'Press the DISTRESS button',
      'Transmit MAYDAY message',
    ],
    explanation: 'Channel 16, alert, then the voice MAYDAY.',
    totalActivities: 4,
    onLaunchEmulator: () => {},
    onComplete: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
export const WithTrackedSteps: Story = {
  args: {
    emulatorSteps: ['Select Channel 16', 'Press the DISTRESS button', 'Transmit MAYDAY message'],
  },
};
