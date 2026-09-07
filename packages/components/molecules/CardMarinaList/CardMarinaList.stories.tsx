import type { Meta, StoryObj } from '@storybook/react';
import CardMarinaList from './index';

const meta: Meta<typeof CardMarinaList> = {
  title: 'Molecules/CardMarinaList',
  component: CardMarinaList,
  parameters: { layout: 'padded' },
  args: {
    title: 'Lyle King',
    subtitle: 'Skipper',
    badgeLabel: 'Available',
    tags: ['Certified', '200 miles'],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithImage: Story = {
  args: { source: { uri: 'https://picsum.photos/seed/skipper/112/112' } },
};
export const Minimal: Story = {
  args: { subtitle: undefined, badgeLabel: undefined, tags: undefined },
};
