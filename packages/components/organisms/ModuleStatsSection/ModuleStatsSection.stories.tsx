import type { Meta, StoryObj } from '@storybook/react';
import ModuleStatsSection from './index';

const meta: Meta<typeof ModuleStatsSection> = {
  title: 'Organisms/ModuleStatsSection',
  component: ModuleStatsSection,
  parameters: { layout: 'padded' },
  args: {
    title: 'ColRegs — Rules of the Road',
    imageUrl: 'https://picsum.photos/seed/module/640/360',
    stats: [
      { title: 'Lessons', subtitle: 'Good start. Keep going.', percentage: 60, completed: 6, total: 10 },
      { title: 'Activities', subtitle: 'Quiz performance', percentage: 40, completed: 4, total: 10 },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoImage: Story = { args: { imageUrl: undefined } };
