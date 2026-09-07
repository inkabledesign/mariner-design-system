import type { Meta, StoryObj } from '@storybook/react';
import InputSelect from './index';

const meta: Meta<typeof InputSelect> = {
  title: 'Molecules/InputSelect',
  component: InputSelect,
  parameters: { layout: 'padded' },
  args: { label: 'A power-driven vessel', onTrailingPress: () => {} },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { isSelected: true } };
export const Error: Story = { args: { status: 'error' } };
export const Success: Story = { args: { status: 'success', onTrailingPress: undefined } };
