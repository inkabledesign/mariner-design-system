import type { Meta, StoryObj } from '@storybook/react';
import TileActivityStats from './index';

const meta: Meta<typeof TileActivityStats> = {
  title: 'Molecules/TileActivityStats',
  component: TileActivityStats,
  parameters: { layout: 'padded' },
  args: {
    chapters: [
      {
        chapterTitle: 'Chapter 1 — Basics',
        lessons: [
          {
            lessonTitle: 'Sound signals',
            isCompleted: true,
            activities: [
              { title: 'Signal quiz', totalAttempts: 2, bestScore: 90, latestScore: 80 },
              { title: 'Match the signal', totalAttempts: 1, bestScore: 60, latestScore: 60 },
            ],
          },
          {
            lessonTitle: 'Distress calls',
            isCompleted: false,
            activities: [{ title: 'Mayday scenario', totalAttempts: 0 }],
          },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
