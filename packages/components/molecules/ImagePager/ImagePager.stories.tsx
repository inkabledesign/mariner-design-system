import type { Meta, StoryObj } from '@storybook/react';
import ImagePager from './index';

const meta: Meta<typeof ImagePager> = {
  title: 'Molecules/ImagePager',
  component: ImagePager,
  parameters: { layout: 'padded' },
  args: {
    sources: [
      { uri: 'https://picsum.photos/seed/pager1/780/588' },
      { uri: 'https://picsum.photos/seed/pager2/780/588' },
      { uri: 'https://picsum.photos/seed/pager3/780/588' },
    ],
    currentIndex: 0,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {};
export const Third: Story = { args: { currentIndex: 2 } };
