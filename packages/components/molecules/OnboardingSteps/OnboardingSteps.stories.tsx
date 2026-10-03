import type { Meta, StoryObj } from '@storybook/react';
import OnboardingSteps from './index';

const meta: Meta<typeof OnboardingSteps> = {
  title: 'Molecules/OnboardingSteps',
  component: OnboardingSteps,
  parameters: { layout: 'padded' },
  args: { totalSteps: 3, currentStep: 1 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StepOne: Story = {};
export const StepTwo: Story = { args: { currentStep: 2 } };
export const FiveSteps: Story = { args: { totalSteps: 5, currentStep: 3 } };
