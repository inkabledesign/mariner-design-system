import type { Meta, StoryObj } from '@storybook/react';
import ActivityReview from './index';

const meta: Meta<typeof ActivityReview> = {
  title: 'Organisms/ActivityReview',
  component: ActivityReview,
  parameters: { layout: 'padded' },
  args: {
    activityTitle: 'ColRegs Quiz',
    isCompleted: true,
    bestScore: 90,
    latestScore: 80,
    attempts: [
      { attemptNumber: 1, score: 60, isCorrect: false, completedAt: '12 Jan 2025', timeSpentSeconds: 140, answersCount: 10 },
      { attemptNumber: 2, score: 80, isCorrect: true, completedAt: '14 Jan 2025', timeSpentSeconds: 95, answersCount: 10 },
    ],
    selectedAttemptIndex: 1,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoAttempts: Story = { args: { attempts: [], isCompleted: false } };
export const SingleAttempt: Story = {
  args: {
    attempts: [
      { attemptNumber: 1, score: 45, isCorrect: false, completedAt: '12 Jan 2025', answersCount: 10 },
    ],
    isCompleted: false,
  },
};
