import type { Meta, StoryObj } from '@storybook/react';
import ActivityShortAnswer from './index';

const meta: Meta<typeof ActivityShortAnswer> = {
  title: 'Molecules/ActivityShortAnswer',
  component: ActivityShortAnswer,
  parameters: { layout: 'padded' },
  args: {
    totalActivities: 2,
    questions: [
      {
        question: 'What is the proword used to announce a distress call?',
        acceptedAnswers: ['MAYDAY', 'Mayday'],
        maxLength: 500,
        feedback: 'The distress proword is MAYDAY, spoken three times.',
      },
    ],
    onComplete: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CaseSensitive: Story = {
  args: {
    questions: [
      { question: 'Type the callsign exactly:', acceptedAnswers: ['M0XYZ'], caseSensitive: true },
    ],
  },
};
export const NoValidation: Story = {
  args: { questions: [{ question: 'Describe the vessel\'s situation.' }] },
};
