import type { Meta, StoryObj } from '@storybook/react';
import PricingSelector from './index';

const meta: Meta<typeof PricingSelector> = {
  title: 'Molecules/PricingSelector',
  component: PricingSelector,
  parameters: { layout: 'padded' },
  args: {
    pricingData: [
      { id: 'module', title: 'Module', price: '£9.99', subtitle: 'per module' },
      { id: 'pro', title: 'Pro', price: '£5.99', subtitle: 'per month' },
      { id: 'pro-plus', title: 'Pro+', price: '£199', subtitle: 'lifetime' },
    ],
    selectedOption: 'pro',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FirstSelected: Story = { args: { selectedOption: 'module' } };
