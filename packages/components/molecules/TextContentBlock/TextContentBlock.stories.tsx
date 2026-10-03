import type { Meta, StoryObj } from '@storybook/react';
import TextContentBlock from './index';

const meta: Meta<typeof TextContentBlock> = {
  title: 'Molecules/TextContentBlock',
  component: TextContentBlock,
  parameters: { layout: 'padded' },
  args: {
    warningText: 'ONLY TO BE USED IN EMERGENCY',
    steps: [
      'Ensure the radio is switched on and set to Channel 16.',
      'Open the cover over the RED distress button.',
      'Press and hold the DISTRESS button for 5 seconds.',
    ],
    scriptText: 'MAYDAY, MAYDAY, MAYDAY\n<p>This is VESSEL NAME, VESSEL NAME, VESSEL NAME</p>',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Mayday: Story = { args: { variant: 'mayday' } };
export const Panpan: Story = { args: { variant: 'panpan', warningText: 'URGENCY MESSAGE' } };
export const Securite: Story = { args: { variant: 'securite', warningText: 'SAFETY MESSAGE' } };
