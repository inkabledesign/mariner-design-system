import type { Meta, StoryObj } from '@storybook/react';
import CardMarinaRail from './index';

const meta: Meta<typeof CardMarinaRail> = {
  title: 'Molecules/CardMarinaRail',
  component: CardMarinaRail,
  parameters: { layout: 'centered' },
  args: {
    title: 'Port Hamble Marina',
    subtitle: 'Hamble',
    coordinates: "50 51' 12''N, 1 18' 30''W",
    distance: '12 miles',
    source: { uri: 'https://picsum.photos/seed/marina-rail/624/376' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoImage: Story = { args: { source: undefined } };
