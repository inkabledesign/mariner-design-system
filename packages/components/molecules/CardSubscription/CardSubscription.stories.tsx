import type { Meta, StoryObj } from '@storybook/react';
import CardSubscription from './index';

const meta: Meta<typeof CardSubscription> = {
  title: 'Molecules/CardSubscription',
  component: CardSubscription,
  parameters: { layout: 'padded' },
  args: {
    data: {
      variant: 'pro',
      title: 'Mariner Academy Pro',
      subtitle: 'Unlimited learning and maximum flexibility.',
      purchaseType: '£5.99 Monthly subscription',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Pro: Story = {};
export const Module: Story = {
  args: {
    data: {
      variant: 'module',
      title: 'VHF Radio Module',
      subtitle: 'Single module purchase',
      purchaseType: '£9.99 One-off',
    },
  },
};
export const ProPlus: Story = {
  args: {
    data: { variant: 'pro-plus', title: 'Pro+', subtitle: 'Lifetime access', purchaseType: '£199 once' },
  },
};
