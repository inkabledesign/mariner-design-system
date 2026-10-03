import type { Meta, StoryObj } from '@storybook/react';
import ProgressDonutCard from './index';

const meta: Meta<typeof ProgressDonutCard> = {
  title: 'Molecules/ProgressDonutCard',
  component: ProgressDonutCard,
  parameters: { layout: 'padded' },
  args: {
    title: 'Lessons',
    subtitle: 'Good start. Continue to build your skills.',
    percentage: 60,
    completed: 6,
    total: 10,
    type: 'lessons',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Lessons: Story = {};
export const Activities: Story = {
  args: {
    title: 'Activities',
    type: 'activities',
    completed: 4,
    total: 10,
    percentage: 40,
    totalAttempts: 7,
    avgScorePercent: 92,
    scoreLabel: 'Excellent',
    scoreVariant: 'success',
  },
};
