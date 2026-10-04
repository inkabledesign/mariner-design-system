import type { Meta, StoryObj } from '@storybook/react';
import Dot from './index';

const meta: Meta<typeof Dot> = {
  title: 'Atoms/Dot',
  component: Dot,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['quiz', 'quiz-outline', 'lesson', 'lesson-outline'],
    },
  },
  args: { variant: 'quiz' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Quiz: Story = { args: { variant: 'quiz' } };
export const QuizOutline: Story = { args: { variant: 'quiz-outline' } };
export const Lesson: Story = { args: { variant: 'lesson' } };
