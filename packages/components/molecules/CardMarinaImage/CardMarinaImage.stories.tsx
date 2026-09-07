import type { Meta, StoryObj } from '@storybook/react';
import CardMarinaImage from './index';

const meta: Meta<typeof CardMarinaImage> = {
  title: 'Molecules/CardMarinaImage',
  component: CardMarinaImage,
  parameters: { layout: 'centered' },
  args: {
    title: 'Port Hamble Marina',
    subtitle: 'Hamble',
    coordinates: "50 51' 12''N, 1 18' 30''W",
    distance: '12 miles',
    source: { uri: 'https://picsum.photos/seed/marina-img/624/376' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Minimal: Story = {
  args: { source: undefined, subtitle: undefined, coordinates: undefined, distance: undefined },
};
