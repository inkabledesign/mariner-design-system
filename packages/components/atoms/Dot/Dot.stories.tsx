import type { Meta, StoryObj } from '@storybook/react';
import Dot from './index';

const meta: Meta<typeof Dot> = {
  title: 'Atoms/Dot',
  component: Dot,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['quizz', 'quizz-outline', 'lesson', 'lesson-outline'],
    },
  },
  args: { variant: 'quizz' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Quizz: Story = { args: { variant: 'quizz' } };
export const QuizzOutline: Story = { args: { variant: 'quizz-outline' } };
export const Lesson: Story = { args: { variant: 'lesson' } };
