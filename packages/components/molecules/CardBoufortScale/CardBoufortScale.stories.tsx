import type { Meta, StoryObj } from '@storybook/react';
import CardBoufortScale from './index';

const meta: Meta<typeof CardBoufortScale> = {
  title: 'Molecules/CardBoufortScale',
  component: CardBoufortScale,
  parameters: { layout: 'centered' },
  args: {
    force: 3,
    windSpeedKnots: '7-10',
    windSpeedKmh: '12-19',
    waveHeightM: '0.5-1.25',
    description: 'Gentle Breeze',
    seaConditions: 'Large wavelets, crests begin to break, scattered white horses.',
    imageUrl: { uri: 'https://picsum.photos/seed/beaufort/540/960' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoImage: Story = { args: { imageUrl: undefined } };
