import type { Meta, StoryObj } from '@storybook/react';
import ImageCarousel from './index';

const meta: Meta<typeof ImageCarousel> = {
  title: 'Molecules/ImageCarousel',
  component: ImageCarousel,
  parameters: { layout: 'padded' },
  args: {
    images: [
      { source: 'https://picsum.photos/seed/car1/640/480', alt: 'Image 1' },
      { source: 'https://picsum.photos/seed/car2/640/480', alt: 'Image 2' },
      { source: 'https://picsum.photos/seed/car3/640/480', alt: 'Image 3' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Single: Story = {
  args: { images: [{ source: 'https://picsum.photos/seed/one/640/480' }] },
};
export const WithOverlay: Story = { args: { showOverlay: true } };
