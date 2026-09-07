import type { Meta, StoryObj } from '@storybook/react';
import PromoWrapper from './index';

const meta: Meta<typeof PromoWrapper> = {
  title: 'Atoms/PromoWrapper',
  component: PromoWrapper,
  parameters: { layout: 'padded' },
  args: {
    headline: 'Learn anything, anywhere.',
    subHeadline: 'The #1 sailing learning app.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const GradientLight: Story = { args: { variant: 'gradient-light' } };
export const WithImage: Story = {
  args: { imageSource: { uri: 'https://picsum.photos/seed/promo/640/640' } },
};
