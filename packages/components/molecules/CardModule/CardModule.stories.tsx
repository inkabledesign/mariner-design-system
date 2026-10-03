import type { Meta, StoryObj } from '@storybook/react';
import CardModule from './index';

const meta: Meta<typeof CardModule> = {
  title: 'Molecules/CardModule',
  component: CardModule,
  parameters: { layout: 'padded' },
  args: {
    title: 'VHF Radio',
    caption: '',
    footnote: '20 min',
    footnoteIcon: 'ico-clock',
    type: 'lesson',
    progress: 40,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Lesson: Story = {};
export const Quiz: Story = { args: { type: 'quiz', title: 'ColRegs Quiz' } };
export const Completed: Story = { args: { state: 'completed', caption: 'Completed' } };
export const Retake: Story = { args: { state: 'retake' } };
export const WithUpdate: Story = { args: { hasUpdate: true } };
export const WithImage: Story = {
  args: { imageUrl: 'https://picsum.photos/seed/module-card/144/144' },
};
