import type { Meta, StoryObj } from '@storybook/react';
import NextLessonSection from './index';

const meta: Meta<typeof NextLessonSection> = {
  title: 'Organisms/NextLessonSection',
  component: NextLessonSection,
  parameters: { layout: 'padded' },
  args: {
    nextLesson: {
      lessonTitle: 'Phonetic alphabet and numbers',
      chapterTitle: 'Chapter 2',
      moduleTitle: 'VHF Radio',
      progress: 60,
      totalLessons: 24,
      imageUrl: 'https://picsum.photos/seed/lesson/640/360',
      hasUpdate: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Empty: Story = { args: { nextLesson: undefined } };
