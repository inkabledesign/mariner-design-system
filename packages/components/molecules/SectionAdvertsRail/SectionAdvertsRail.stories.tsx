import type { Meta, StoryObj } from '@storybook/react';
import SectionAdvertsRail from './index';

const meta: Meta<typeof SectionAdvertsRail> = {
  title: 'Molecules/SectionAdvertsRail',
  component: SectionAdvertsRail,
  parameters: { layout: 'padded' },
  args: {
    adverts: [
      { source: { uri: 'https://picsum.photos/seed/ad1/560/344' } },
      { source: { uri: 'https://picsum.photos/seed/ad2/560/344' } },
    ],
    ctaTitle: 'Advertise with us!',
    ctaDescription: 'Reach thousands of sailors via Mariner.',
    ctaLabel: 'Contact us',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoCta: Story = { args: { ctaTitle: undefined, ctaLabel: undefined } };
