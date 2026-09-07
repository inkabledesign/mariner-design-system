import type { Meta, StoryObj } from '@storybook/react';
import ActivityQuiz from './index';

const meta: Meta<typeof ActivityQuiz> = {
  title: 'Molecules/ActivityQuiz',
  component: ActivityQuiz,
  parameters: { layout: 'padded' },
  args: {
    totalActivities: 3,
    currentQuestionIndex: 0,
    questions: [
      {
        question: 'Which channel is the international distress and calling frequency?',
        options: ['Channel 16', 'Channel 9', 'Channel 68', 'Channel 72'],
        answerIndex: 0,
        feedback: 'Channel 16 is the international distress, safety and calling channel.',
      },
    ],
    onComplete: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleChoice: Story = { args: { type: 'single-choice' } };
export const TrueFalse: Story = {
  args: {
    type: 'true-false',
    questions: [
      {
        question: 'A MAYDAY call takes priority over all other transmissions.',
        options: ['True', 'False'],
        answerIndex: 0,
        feedback: 'MAYDAY has absolute priority.',
      },
    ],
  },
};
export const MultipleChoice: Story = {
  args: {
    type: 'multiple-choice',
    questions: [
      {
        question: 'Which items must a MAYDAY message include? (Select all that apply)',
        options: ['Vessel name', 'Position', 'Weather forecast', 'Nature of distress'],
        answerIndices: [0, 1, 3],
        feedback: 'Name, position, and nature of distress are required.',
      },
    ],
  },
};
