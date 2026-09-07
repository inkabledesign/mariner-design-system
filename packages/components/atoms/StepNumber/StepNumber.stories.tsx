import type { Meta, StoryObj } from '@storybook/react';
import StepNumber from './index';

const meta: Meta<typeof StepNumber> = {
  title: 'Atoms/StepNumber',
  component: StepNumber,
  parameters: { layout: 'centered' },
  argTypes: { active: { control: { type: 'boolean' } }, number: { control: { type: 'number' } } },
  args: { number: 1, active: false },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { active: false } };
export const Active: Story = { args: { active: true } };
