import type { Meta, StoryObj } from '@storybook/react';
import UpsellSection from './index';

const meta: Meta<typeof UpsellSection> = {
  title: 'Organisms/UpsellSection',
  component: UpsellSection,
  parameters: { layout: 'padded' },
  args: {
    headline: 'All modules',
    subHeadline: 'Subscribe to Mariner Academy Pro for all lessons and quizzes.',
    planTitle: 'Mariner Academy Pro',
    planSubtitle: 'Unlimited learning and maximum flexibility.',
    priceLabel: '£5.99 Monthly subscription',
    features: ['All modules', 'All lessons', 'All quizzes'],
    ctaLabel: 'Unlock all modules',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Dark: Story = { args: { variant: 'dark' } };
