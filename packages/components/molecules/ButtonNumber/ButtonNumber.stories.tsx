import type { Meta, StoryObj } from '@storybook/react';
import ButtonNumber from './index';

const meta: Meta<typeof ButtonNumber> = {
  title: 'Molecules/ButtonNumber',
  component: ButtonNumber,
  parameters: { layout: 'centered' },
  args: { number: 1, state: 'default' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { state: 'active' } };
export const Success: Story = { args: { state: 'success' } };
export const Error: Story = { args: { state: 'error' } };
