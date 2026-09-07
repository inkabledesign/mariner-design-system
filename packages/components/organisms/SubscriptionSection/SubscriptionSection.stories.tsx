import type { Meta, StoryObj } from '@storybook/react';
import SubscriptionSection from './index';

const meta: Meta<typeof SubscriptionSection> = {
  title: 'Organisms/SubscriptionSection',
  component: SubscriptionSection,
  parameters: { layout: 'padded' },
  args: {
    plans: [
      {
        id: 'module',
        title: 'Module',
        price: '£9.99',
        priceSuffix: 'per module',
        features: ['Single module access', 'All lessons', 'All quizzes'],
        label: 'What you get:',
        description: 'Learners who want one specific module.',
      },
      {
        id: 'pro',
        title: 'Pro',
        price: '£5.99',
        priceSuffix: 'per month',
        features: ['All modules', 'All lessons', 'All quizzes'],
        label: 'Everything included:',
        description: 'Learners who want full access.',
        hasBillingToggle: true,
      },
    ],
    selectedPlanId: 'pro',
    billingPeriod: 'monthly',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProSelected: Story = {};
export const ModuleSelected: Story = { args: { selectedPlanId: 'module' } };
export const Yearly: Story = { args: { billingPeriod: 'yearly' } };
